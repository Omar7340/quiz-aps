// student.js - Student participant logic

// State variables
let sessionCode = null;
let participantId = null;
let participantName = null;
let sessionRef = null;
let quizConfig = null;
let currentQuestionIndex = -1;
let hasAnsweredCurrent = false;
let myAnswers = {};
let isConnected = true;

// State names
const STATES = ['state-waiting', 'state-question', 'state-answered', 'state-ended', 'state-disconnected', 'state-error'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', initStudent);

async function initStudent() {
    // Get session info from sessionStorage
    sessionCode = sessionStorage.getItem('sessionCode');
    participantId = sessionStorage.getItem('participantId');
    participantName = sessionStorage.getItem('participantName');

    // Validate we have session info
    if (!sessionCode || !participantId || !participantName) {
        window.location.href = 'join.html';
        return;
    }

    // Check Firebase
    if (!isFirebaseConfigured()) {
        showError('Configuration erreur', 'Impossible de se connecter au serveur');
        return;
    }

    // Update UI with participant info
    document.getElementById('my-name').textContent = participantName;
    document.getElementById('waiting-session-code').textContent = sessionCode;

    try {
        // Validate session still exists
        const result = await validateSession(sessionCode);
        if (!result.valid) {
            sessionStorage.clear();
            showError('Session introuvable', result.error);
            return;
        }

        // Load quiz data
        const session = result.session;
        quizConfig = await loadQuizData(session.quizId);
        document.getElementById('quiz-title').textContent = session.quizTitle;

        // Setup Firebase reference
        sessionRef = database.ref(`sessions/${sessionCode}`);

        // Register participant
        await registerParticipant();

        // Setup connection tracking
        setupConnectionTracking();

        // Setup session listener
        setupSessionListener();

        // If session already active, sync to current state
        if (session.status === 'active') {
            currentQuestionIndex = session.currentQuestionIndex;
            onQuestionChange(session.currentQuestionIndex, session.showResults);
        }

    } catch (error) {
        console.error('Error initializing student:', error);
        showError('Erreur', 'Impossible de rejoindre la session');
    }
}

// Register participant in Firebase
async function registerParticipant() {
    const participantRef = sessionRef.child(`participants/${participantId}`);

    await participantRef.set({
        id: participantId,
        name: participantName,
        joinedAt: firebase.database.ServerValue.TIMESTAMP,
        lastSeen: firebase.database.ServerValue.TIMESTAMP,
        isConnected: true
    });

    // Setup onDisconnect to mark as offline
    participantRef.onDisconnect().update({
        isConnected: false,
        lastSeen: firebase.database.ServerValue.TIMESTAMP
    });

    // Periodic heartbeat
    setInterval(() => {
        if (isConnected) {
            participantRef.update({
                lastSeen: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }, 30000); // Every 30 seconds
}

// Setup connection tracking
function setupConnectionTracking() {
    const connectedRef = database.ref('.info/connected');

    connectedRef.on('value', (snapshot) => {
        if (snapshot.val() === true) {
            isConnected = true;
            // Re-mark as connected
            sessionRef.child(`participants/${participantId}`).update({
                isConnected: true
            });

            // If we were showing disconnected state, restore previous state
            const disconnectedEl = document.getElementById('state-disconnected');
            if (!disconnectedEl.classList.contains('hidden')) {
                // Try to sync back to current state
                syncToCurrentState();
            }
        } else {
            isConnected = false;
            switchState('state-disconnected');
        }
    });

    // Reconnect button
    document.getElementById('reconnect-btn').addEventListener('click', () => {
        window.location.reload();
    });
}

// Sync to current session state
async function syncToCurrentState() {
    try {
        const session = await getSession(sessionCode);
        if (!session) {
            showError('Session terminee', 'La session n\'existe plus');
            return;
        }

        if (session.status === 'ended') {
            onSessionEnd();
            return;
        }

        if (session.status === 'active') {
            onQuestionChange(session.currentQuestionIndex, session.showResults);
        } else {
            switchState('state-waiting');
        }
    } catch (error) {
        console.error('Error syncing state:', error);
    }
}

// Setup session listener
function setupSessionListener() {
    // Listen for session changes
    sessionRef.on('value', (snapshot) => {
        const session = snapshot.val();

        if (!session) {
            showError('Session terminee', 'La session a ete supprimee');
            return;
        }

        // Handle status changes
        if (session.status === 'ended') {
            onSessionEnd();
            return;
        }

        if (session.status === 'waiting') {
            switchState('state-waiting');
            return;
        }

        if (session.status === 'active') {
            // Check if question changed
            if (session.currentQuestionIndex !== currentQuestionIndex) {
                onQuestionChange(session.currentQuestionIndex, session.showResults);
            } else if (session.showResults && hasAnsweredCurrent) {
                // Results revealed for current question
                showAnswerFeedback();
            }
        }
    });
}

// Handle question change
function onQuestionChange(newIndex, showResults) {
    currentQuestionIndex = newIndex;
    hasAnsweredCurrent = false;

    // Check if we already answered this question (page refresh case)
    const questionId = quizConfig.questions[newIndex].id;
    if (myAnswers[questionId] !== undefined) {
        hasAnsweredCurrent = true;
        if (showResults) {
            showAnswerFeedback();
        }
        switchState('state-answered');
        return;
    }

    displayQuestion(newIndex);
    switchState('state-question');
}

// Display question
function displayQuestion(index) {
    const question = quizConfig.questions[index];
    const totalQuestions = quizConfig.questions.length;

    // Update progress
    document.getElementById('question-number').textContent =
        `Question ${index + 1}/${totalQuestions}`;

    // Display question text
    document.getElementById('question-text').textContent = question.question;

    // Display answer buttons
    const buttonsContainer = document.getElementById('answer-buttons');
    buttonsContainer.innerHTML = question.answers.map((answer, idx) => `
        <button class="answer-btn" data-answer="${idx}">
            <span class="answer-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="answer-text">${answer}</span>
        </button>
    `).join('');

    // Add click listeners
    buttonsContainer.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => submitAnswer(parseInt(btn.dataset.answer)));
    });
}

// Submit answer
async function submitAnswer(answerIndex) {
    if (hasAnsweredCurrent) return;

    const question = quizConfig.questions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;

    hasAnsweredCurrent = true;
    myAnswers[question.id] = {
        answer: answerIndex,
        isCorrect: isCorrect
    };

    // Highlight selected answer
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === answerIndex) {
            btn.classList.add('selected');
        }
    });

    try {
        // Store answer in Firebase
        await sessionRef.child(`answers/${participantId}/${question.id}`).set({
            answer: answerIndex,
            isCorrect: isCorrect,
            answeredAt: firebase.database.ServerValue.TIMESTAMP
        });

        // Switch to answered state
        setTimeout(() => {
            switchState('state-answered');
        }, 500);

    } catch (error) {
        console.error('Error submitting answer:', error);
        // Still show answered state even if Firebase fails
        switchState('state-answered');
    }
}

// Show answer feedback when teacher reveals results
function showAnswerFeedback() {
    const question = quizConfig.questions[currentQuestionIndex];
    const myAnswer = myAnswers[question.id];

    if (!myAnswer) return;

    const feedbackContainer = document.getElementById('answer-feedback');
    const resultEl = document.getElementById('feedback-result');
    const explanationEl = document.getElementById('feedback-explanation');

    if (myAnswer.isCorrect) {
        resultEl.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Bonne reponse !</span>
        `;
        resultEl.className = 'feedback-result correct';
    } else {
        resultEl.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <span>Mauvaise reponse</span>
            <p class="correct-answer">Bonne reponse: ${String.fromCharCode(65 + question.correct)} - ${question.answers[question.correct]}</p>
        `;
        resultEl.className = 'feedback-result incorrect';
    }

    explanationEl.textContent = question.explanation;
    feedbackContainer.classList.remove('hidden');
}

// Handle session end
function onSessionEnd() {
    // Calculate personal score
    let correct = 0;
    let total = 0;

    Object.values(myAnswers).forEach(answer => {
        total++;
        if (answer.isCorrect) {
            correct++;
        }
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Update final results display
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('correct-answers').textContent = correct;
    document.getElementById('total-questions').textContent = total;

    // Clear session storage
    sessionStorage.clear();

    // Switch to ended state
    switchState('state-ended');

    // Remove listeners
    if (sessionRef) {
        sessionRef.off();
    }
}

// Show error state
function showError(title, message) {
    document.getElementById('error-title').textContent = title;
    document.getElementById('error-message').textContent = message;
    switchState('state-error');
}

// Switch between states
function switchState(activeState) {
    STATES.forEach(state => {
        const el = document.getElementById(state);
        if (el) {
            if (state === activeState) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    });

    // Reset feedback when switching to answered state
    if (activeState === 'state-answered') {
        document.getElementById('answer-feedback').classList.add('hidden');
    }
}
