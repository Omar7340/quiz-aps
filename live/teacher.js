// teacher.js - Teacher control panel logic

// State variables
let sessionCode = null;
let teacherToken = null;
let quizConfig = null;
let selectedQuizId = null;
let currentQuestionIndex = 0;
let sessionRef = null;
let participantsRef = null;
let answersRef = null;
let participants = {};
let answers = {};
let resultsRevealed = false;
let showLiveChart = true;
let autoNextEnabled = true;

// Phase names for switching
const PHASES = ['setup-phase', 'waiting-phase', 'active-phase', 'results-phase'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check Firebase configuration
    if (!isFirebaseConfigured()) {
        showElement('firebase-warning');
        document.getElementById('create-session-btn').disabled = true;
        return;
    }

    // Load available quizzes
    loadAvailableQuizzes();

    // Setup event listeners
    document.getElementById('create-session-btn').addEventListener('click', createSession);
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('prev-question-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('toggle-results-btn').addEventListener('click', toggleResults);
    document.getElementById('end-session-btn').addEventListener('click', endSession);
    document.getElementById('export-results-btn').addEventListener('click', () => {
        const stats = calculateSessionStats(answers, participants, quizConfig);
        const leaderboard = generateLeaderboard(stats, participants);
        exportToCSV(leaderboard, sessionCode, quizConfig.title);
    });

    // Toggle options
    document.getElementById('show-live-chart').addEventListener('change', (e) => {
        showLiveChart = e.target.checked;
        const chartEl = document.getElementById('results-chart');
        chartEl.style.display = showLiveChart ? 'flex' : 'none';
    });

    document.getElementById('auto-next').addEventListener('change', (e) => {
        autoNextEnabled = e.target.checked;
    });
});

// Load and display available quizzes
async function loadAvailableQuizzes() {
    const container = document.getElementById('quiz-selector');
    container.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Chargement...</p>';

    const quizzes = await getAvailableQuizzes();

    container.innerHTML = quizzes.map(quiz => `
        <div class="quiz-select-card" data-quiz-id="${quiz.id}">
            <div class="quiz-select-icon">
                <i class="fas ${quiz.icon}"></i>
            </div>
            <div class="quiz-select-info">
                <h3>${quiz.title}</h3>
                <p>${quiz.questions} questions</p>
            </div>
            <div class="quiz-select-check">
                <i class="fas fa-check-circle"></i>
            </div>
        </div>
    `).join('');

    // Add click listeners for selection
    container.querySelectorAll('.quiz-select-card').forEach(card => {
        card.addEventListener('click', () => selectQuiz(card.dataset.quizId));
    });
}

// Select a quiz
function selectQuiz(quizId) {
    selectedQuizId = quizId;

    // Update UI
    document.querySelectorAll('.quiz-select-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.quizId === quizId);
    });

    document.getElementById('create-session-btn').disabled = false;
}

// Create a new session
async function createSession() {
    if (!selectedQuizId) return;

    try {
        // Load quiz data
        quizConfig = await loadQuizData(selectedQuizId);

        // Generate session code and teacher token
        sessionCode = await generateUniqueSessionCode();
        teacherToken = generateUUID();

        // Create session in Firebase
        sessionRef = database.ref(`sessions/${sessionCode}`);
        await sessionRef.set({
            quizId: selectedQuizId,
            quizTitle: quizConfig.title,
            teacherToken: teacherToken,
            status: 'waiting',
            currentQuestionIndex: 0,
            showResults: false,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            settings: {
                allowLateJoin: true
            }
        });

        // Setup listeners
        participantsRef = sessionRef.child('participants');
        answersRef = sessionRef.child('answers');
        setupParticipantListener();

        // Update UI
        document.getElementById('session-code').textContent = sessionCode;
        document.getElementById('waiting-quiz-title').textContent = quizConfig.title;

        // Generate join link and QR code
        const joinUrl = `${window.location.origin}${window.location.pathname.replace('teacher.html', 'join.html')}?code=${sessionCode}`;
        document.getElementById('join-link').textContent = joinUrl;
        generateQRCode(joinUrl);

        // Switch to waiting phase
        switchPhase(PHASES, 'waiting-phase');

    } catch (error) {
        console.error('Error creating session:', error);
        alert('Erreur lors de la creation de la session');
    }
}

// Generate unique session code
async function generateUniqueSessionCode() {
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        const code = generateSessionCode();
        const existing = await database.ref(`sessions/${code}`).once('value');
        if (!existing.exists()) {
            return code;
        }
        attempts++;
    }

    throw new Error('Unable to generate unique session code');
}

// Generate QR code
function generateQRCode(url) {
    const qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = '';

    if (typeof qrcode !== 'undefined') {
        try {
            const qr = qrcode(0, 'M');
            qr.addData(url);
            qr.make();
            qrContainer.innerHTML = qr.createImgTag(5, 10);
        } catch (error) {
            console.error('QR Code error:', error);
        }
    }
}

// Copy join link to clipboard
function copyJoinLink() {
    const link = document.getElementById('join-link').textContent;
    navigator.clipboard.writeText(link).then(() => {
        // Show brief feedback
        const btn = document.querySelector('.join-url .btn-icon');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
    });
}

// Setup participant listener
function setupParticipantListener() {
    participantsRef.on('value', (snapshot) => {
        participants = snapshot.val() || {};
        updateParticipantList();
    });
}

// Update participant list UI
function updateParticipantList() {
    const count = Object.keys(participants).length;
    document.getElementById('participant-count').textContent = count;
    document.getElementById('start-quiz-btn').disabled = count === 0;

    const listContainer = document.getElementById('participant-list');

    if (count === 0) {
        listContainer.innerHTML = '<p class="no-participants">En attente de participants...</p>';
        return;
    }

    listContainer.innerHTML = Object.values(participants).map(p => `
        <div class="participant-chip ${p.isConnected ? '' : 'offline'}">
            <i class="fas fa-user"></i>
            <span>${p.name}</span>
            ${!p.isConnected ? '<i class="fas fa-wifi-slash"></i>' : ''}
        </div>
    `).join('');
}

// Cancel session and go back
async function cancelSession() {
    if (sessionRef) {
        await sessionRef.remove();
    }
    resetState();
    switchPhase(PHASES, 'setup-phase');
}

// Start the quiz
async function startQuiz() {
    if (Object.keys(participants).length === 0) return;

    try {
        // Update session status
        await sessionRef.update({
            status: 'active',
            currentQuestionIndex: 0,
            startedAt: firebase.database.ServerValue.TIMESTAMP
        });

        // Setup answer listener
        setupAnswerListener();

        // Update UI
        document.getElementById('active-session-code').textContent = sessionCode;
        currentQuestionIndex = 0;
        displayCurrentQuestion();

        // Switch to active phase
        switchPhase(PHASES, 'active-phase');

    } catch (error) {
        console.error('Error starting quiz:', error);
        alert('Erreur lors du demarrage du quiz');
    }
}

// Setup answer listener
function setupAnswerListener() {
    answersRef.on('value', (snapshot) => {
        answers = snapshot.val() || {};
        updateAnswerStats();
    });
}

// Display current question
function displayCurrentQuestion() {
    const question = quizConfig.questions[currentQuestionIndex];
    const totalQuestions = quizConfig.questions.length;

    // Update question indicator
    document.getElementById('question-indicator').textContent =
        `${currentQuestionIndex + 1}/${totalQuestions}`;

    // Update navigation buttons
    document.getElementById('prev-question-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-question-btn').disabled =
        currentQuestionIndex === totalQuestions - 1;

    // Display question text
    document.getElementById('current-question-text').textContent = question.question;

    // Display answer options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = question.answers.map((answer, idx) => `
        <div class="answer-option-display ${resultsRevealed && idx === question.correct ? 'correct' : ''}">
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${answer}</span>
            ${resultsRevealed && idx === question.correct ? '<i class="fas fa-check"></i>' : ''}
        </div>
    `).join('');

    // Display explanation if results revealed
    const explanationPanel = document.getElementById('explanation-panel');
    if (resultsRevealed) {
        document.getElementById('explanation-text').textContent = question.explanation;
        explanationPanel.classList.remove('hidden');
    } else {
        explanationPanel.classList.add('hidden');
    }

    // Update results chart
    updateResultsChart();

    // Update toggle button text
    document.getElementById('toggle-results-btn').innerHTML = resultsRevealed
        ? '<i class="fas fa-eye-slash"></i> Masquer la reponse'
        : '<i class="fas fa-eye"></i> Reveler la reponse';

    // Update participant count in header
    document.getElementById('active-participant-count').textContent =
        `${Object.keys(participants).length} participants`;
}

// Update answer statistics
function updateAnswerStats() {
    const question = quizConfig.questions[currentQuestionIndex];
    const questionId = question.id;

    let answeredCount = 0;
    let correctCount = 0;

    Object.values(answers).forEach(participantAnswers => {
        if (participantAnswers[questionId]) {
            answeredCount++;
            if (participantAnswers[questionId].isCorrect) {
                correctCount++;
            }
        }
    });

    const totalParticipants = Object.keys(participants).length;

    document.getElementById('answered-count').textContent = answeredCount;
    document.getElementById('total-participants').textContent = totalParticipants;
    document.getElementById('correct-count').textContent = correctCount;

    updateResultsChart();

    // Auto-next when everyone has answered
    if (autoNextEnabled && totalParticipants > 0 && answeredCount >= totalParticipants) {
        // Small delay before auto-advancing
        setTimeout(() => {
            // Check again in case new participants joined
            const currentAnswered = countAnswersForQuestion(questionId);
            const currentTotal = Object.keys(participants).length;

            if (currentAnswered >= currentTotal && currentQuestionIndex < quizConfig.questions.length - 1) {
                nextQuestion();
            }
        }, 1500);
    }
}

// Helper to count answers for a specific question
function countAnswersForQuestion(questionId) {
    let count = 0;
    Object.values(answers).forEach(participantAnswers => {
        if (participantAnswers[questionId]) {
            count++;
        }
    });
    return count;
}

// Update results chart
function updateResultsChart() {
    const question = quizConfig.questions[currentQuestionIndex];
    const questionId = question.id;
    const answerCount = question.answers.length;

    // Count answers for each option
    const distribution = new Array(answerCount).fill(0);
    Object.values(answers).forEach(participantAnswers => {
        if (participantAnswers[questionId]) {
            const answerIdx = participantAnswers[questionId].answer;
            if (answerIdx >= 0 && answerIdx < answerCount) {
                distribution[answerIdx]++;
            }
        }
    });

    const maxCount = Math.max(...distribution, 1);

    // Generate chart bars
    const chartContainer = document.getElementById('results-chart');
    chartContainer.innerHTML = distribution.map((count, idx) => {
        const height = (count / maxCount) * 100;
        const isCorrect = resultsRevealed && idx === question.correct;
        return `
            <div class="chart-bar-container">
                <div class="chart-bar ${isCorrect ? 'correct' : ''}" style="height: ${height}%">
                    <span class="chart-bar-value">${count}</span>
                </div>
                <span class="chart-bar-label">${String.fromCharCode(65 + idx)}</span>
            </div>
        `;
    }).join('');
}

// Navigate to previous question
async function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resultsRevealed = false;
        await sessionRef.update({
            currentQuestionIndex: currentQuestionIndex,
            showResults: false
        });
        displayCurrentQuestion();
    }
}

// Navigate to next question
async function nextQuestion() {
    if (currentQuestionIndex < quizConfig.questions.length - 1) {
        currentQuestionIndex++;
        resultsRevealed = false;
        await sessionRef.update({
            currentQuestionIndex: currentQuestionIndex,
            showResults: false
        });
        displayCurrentQuestion();
    }
}

// Toggle results visibility
async function toggleResults() {
    resultsRevealed = !resultsRevealed;
    await sessionRef.update({
        showResults: resultsRevealed
    });
    displayCurrentQuestion();
}

// End the session
async function endSession() {
    if (!confirm('Etes-vous sur de vouloir terminer la session ?')) {
        return;
    }

    try {
        // Update session status
        await sessionRef.update({
            status: 'ended',
            endedAt: firebase.database.ServerValue.TIMESTAMP
        });

        // Calculate and display final results
        displayFinalResults();

        // Switch to results phase
        switchPhase(PHASES, 'results-phase');

    } catch (error) {
        console.error('Error ending session:', error);
        alert('Erreur lors de la fin de la session');
    }
}

// Display final results
function displayFinalResults() {
    const stats = calculateSessionStats(answers, participants, quizConfig);
    const leaderboard = generateLeaderboard(stats, participants);

    // Update summary stats
    document.getElementById('final-participants').textContent = stats.totalParticipants;
    document.getElementById('final-questions').textContent = stats.totalQuestions;

    // Calculate average score
    const scores = Object.values(stats.participantScores);
    const avgScore = scores.length > 0
        ? Math.round(scores.reduce((sum, s) => sum + s.percentage, 0) / scores.length)
        : 0;
    document.getElementById('final-average').textContent = `${avgScore}%`;

    // Build leaderboard table
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = leaderboard.map((entry, idx) => {
        let rankIcon = '';
        if (idx === 0) rankIcon = '<i class="fas fa-trophy gold"></i>';
        else if (idx === 1) rankIcon = '<i class="fas fa-medal silver"></i>';
        else if (idx === 2) rankIcon = '<i class="fas fa-medal bronze"></i>';

        return `
            <tr class="${idx < 3 ? 'top-three' : ''}">
                <td>${rankIcon || (idx + 1)}</td>
                <td>${entry.name}</td>
                <td>${entry.correct}/${entry.total}</td>
                <td>${entry.percentage}%</td>
            </tr>
        `;
    }).join('');
}

// Reset state for new session
function resetState() {
    sessionCode = null;
    teacherToken = null;
    quizConfig = null;
    currentQuestionIndex = 0;
    participants = {};
    answers = {};
    resultsRevealed = false;

    if (participantsRef) participantsRef.off();
    if (answersRef) answersRef.off();

    sessionRef = null;
    participantsRef = null;
    answersRef = null;
}
