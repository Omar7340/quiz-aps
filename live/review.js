// review.js - Session review logic for teachers

// State variables
let sessions = [];
let selectedSession = null;
let selectedSessionCode = null;
let quizConfig = null;
let currentQuestionIndex = 0;
let isBroadcasting = false;
let sessionRef = null;

// Phase names for switching
const PHASES = ['select-phase', 'review-phase'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check Firebase configuration
    if (!isFirebaseConfigured()) {
        showElement('firebase-warning');
        return;
    }

    // Load ended sessions
    loadEndedSessions();

    // Setup event listeners
    document.getElementById('prev-question-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('broadcast-btn').addEventListener('click', toggleBroadcast);
});

// Load all ended sessions
async function loadEndedSessions() {
    try {
        const snapshot = await database.ref('sessions')
            .orderByChild('status')
            .equalTo('ended')
            .once('value');

        sessions = [];
        snapshot.forEach((child) => {
            sessions.push({
                code: child.key,
                ...child.val()
            });
        });

        // Sort by endedAt descending (most recent first)
        sessions.sort((a, b) => (b.endedAt || 0) - (a.endedAt || 0));

        displaySessionsList();

    } catch (error) {
        console.error('Error loading sessions:', error);
        document.getElementById('sessions-list').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <span>Erreur lors du chargement des sessions</span>
            </div>
        `;
    }
}

// Display the list of sessions
function displaySessionsList() {
    const container = document.getElementById('sessions-list');

    if (sessions.length === 0) {
        container.innerHTML = '';
        showElement('no-sessions');
        return;
    }

    hideElement('no-sessions');

    container.innerHTML = sessions.map(session => {
        const participantCount = session.participants ? Object.keys(session.participants).length : 0;
        const dateStr = formatDate(session.endedAt);

        return `
            <div class="session-card" onclick="selectSession('${session.code}')">
                <div class="session-code">${session.code}</div>
                <div class="session-info">
                    <h3>${session.quizTitle || 'Quiz'}</h3>
                    <div class="session-meta">
                        <span><i class="fas fa-calendar"></i> ${dateStr}</span>
                        <span><i class="fas fa-users"></i> ${participantCount} participants</span>
                    </div>
                </div>
                <div class="session-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    }).join('');
}

// Format date for display
function formatDate(timestamp) {
    if (!timestamp) return 'Date inconnue';
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Select a session to review
async function selectSession(sessionCode) {
    try {
        // Find session in loaded sessions
        selectedSession = sessions.find(s => s.code === sessionCode);
        if (!selectedSession) {
            alert('Session introuvable');
            return;
        }

        selectedSessionCode = sessionCode;
        sessionRef = database.ref(`sessions/${sessionCode}`);

        // Load quiz data
        quizConfig = await loadQuizData(selectedSession.quizId);

        // Update UI with session info
        document.getElementById('review-quiz-title').textContent = selectedSession.quizTitle || quizConfig.title;
        document.getElementById('review-session-date').textContent = formatDate(selectedSession.endedAt);

        const participantCount = selectedSession.participants ? Object.keys(selectedSession.participants).length : 0;
        document.getElementById('review-participant-count').textContent = participantCount;
        document.getElementById('broadcast-code').textContent = sessionCode;

        // Reset state
        currentQuestionIndex = 0;
        isBroadcasting = false;
        updateBroadcastButton();

        // Display first question
        displayQuestion(currentQuestionIndex);

        // Switch to review phase
        switchPhase(PHASES, 'review-phase');

    } catch (error) {
        console.error('Error selecting session:', error);
        alert('Erreur lors du chargement de la session');
    }
}

// Go back to session list
function backToList() {
    // Stop broadcasting if active
    if (isBroadcasting) {
        stopBroadcast();
    }

    // Reset state
    selectedSession = null;
    selectedSessionCode = null;
    quizConfig = null;
    sessionRef = null;

    // Switch to select phase
    switchPhase(PHASES, 'select-phase');
}

// Display a question
function displayQuestion(index) {
    const question = quizConfig.questions[index];
    const totalQuestions = quizConfig.questions.length;

    // Update question indicator
    document.getElementById('question-indicator').textContent = `${index + 1}/${totalQuestions}`;

    // Update navigation buttons
    document.getElementById('prev-question-btn').disabled = index === 0;
    document.getElementById('next-question-btn').disabled = index === totalQuestions - 1;

    // Display question text
    document.getElementById('question-text').textContent = question.question;

    // Display answer options with correct answer highlighted
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = question.answers.map((answer, idx) => {
        const isCorrect = idx === question.correct;
        return `
            <div class="review-answer-option ${isCorrect ? 'correct' : ''}">
                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${answer}</span>
                ${isCorrect ? '<i class="fas fa-check"></i>' : ''}
            </div>
        `;
    }).join('');

    // Display explanation
    document.getElementById('explanation-text').textContent = question.explanation || 'Pas d\'explication disponible.';

    // Calculate and display distribution
    displayDistribution(question);

    // Display participant answers
    displayParticipantAnswers(question);
}

// Display answer distribution chart
function displayDistribution(question) {
    const answers = selectedSession.answers || {};
    const questionId = question.id;
    const answerCount = question.answers.length;

    // Count answers for each option
    const distribution = new Array(answerCount).fill(0);
    let correctCount = 0;
    let wrongCount = 0;

    Object.values(answers).forEach(participantAnswers => {
        if (participantAnswers[questionId]) {
            const answerIdx = participantAnswers[questionId].answer;
            if (answerIdx >= 0 && answerIdx < answerCount) {
                distribution[answerIdx]++;
            }
            if (participantAnswers[questionId].isCorrect) {
                correctCount++;
            } else {
                wrongCount++;
            }
        }
    });

    // Update stats
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;

    // Generate chart bars
    const maxCount = Math.max(...distribution, 1);
    const chartContainer = document.getElementById('distribution-chart');

    chartContainer.innerHTML = distribution.map((count, idx) => {
        const height = (count / maxCount) * 100;
        const isCorrect = idx === question.correct;
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

// Display participant answers table
function displayParticipantAnswers(question) {
    const answers = selectedSession.answers || {};
    const participants = selectedSession.participants || {};
    const questionId = question.id;

    const tbody = document.getElementById('participant-answers-body');
    const rows = [];

    // Collect participant answers
    Object.entries(participants).forEach(([participantId, participant]) => {
        const participantAnswers = answers[participantId] || {};
        const answerData = participantAnswers[questionId];

        if (answerData) {
            rows.push({
                name: participant.name,
                answerIdx: answerData.answer,
                answerText: question.answers[answerData.answer],
                isCorrect: answerData.isCorrect
            });
        } else {
            rows.push({
                name: participant.name,
                answerIdx: -1,
                answerText: 'Pas de reponse',
                isCorrect: false,
                noAnswer: true
            });
        }
    });

    // Sort: correct first, then incorrect, then no answer
    rows.sort((a, b) => {
        if (a.noAnswer && !b.noAnswer) return 1;
        if (!a.noAnswer && b.noAnswer) return -1;
        if (a.isCorrect && !b.isCorrect) return -1;
        if (!a.isCorrect && b.isCorrect) return 1;
        return 0;
    });

    // Generate table rows
    tbody.innerHTML = rows.map(row => {
        const letter = row.answerIdx >= 0 ? String.fromCharCode(65 + row.answerIdx) : '-';
        const statusClass = row.noAnswer ? 'no-answer' : (row.isCorrect ? 'correct' : 'incorrect');
        const statusIcon = row.noAnswer
            ? '<i class="fas fa-minus-circle"></i>'
            : (row.isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>');

        return `
            <tr class="${statusClass}">
                <td>${row.name}</td>
                <td><span class="answer-badge">${letter}</span> ${row.answerText}</td>
                <td class="status-cell">${statusIcon}</td>
            </tr>
        `;
    }).join('');
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        if (isBroadcasting) {
            updateBroadcastState();
        }
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < quizConfig.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        if (isBroadcasting) {
            updateBroadcastState();
        }
    }
}

// Toggle broadcast mode
function toggleBroadcast() {
    if (isBroadcasting) {
        stopBroadcast();
    } else {
        startBroadcast();
    }
}

// Start broadcasting the review
async function startBroadcast() {
    try {
        await sessionRef.child('review').set({
            isActive: true,
            currentQuestionIndex: currentQuestionIndex,
            startedAt: firebase.database.ServerValue.TIMESTAMP
        });

        isBroadcasting = true;
        updateBroadcastButton();
        showElement('broadcast-indicator');

    } catch (error) {
        console.error('Error starting broadcast:', error);
        alert('Erreur lors du demarrage de la diffusion');
    }
}

// Stop broadcasting
async function stopBroadcast() {
    try {
        await sessionRef.child('review').update({
            isActive: false
        });

        isBroadcasting = false;
        updateBroadcastButton();
        hideElement('broadcast-indicator');

    } catch (error) {
        console.error('Error stopping broadcast:', error);
    }
}

// Update broadcast state in Firebase
async function updateBroadcastState() {
    if (!isBroadcasting) return;

    try {
        await sessionRef.child('review').update({
            currentQuestionIndex: currentQuestionIndex
        });
    } catch (error) {
        console.error('Error updating broadcast state:', error);
    }
}

// Update broadcast button appearance
function updateBroadcastButton() {
    const btn = document.getElementById('broadcast-btn');
    if (isBroadcasting) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-stop"></i><span>Arreter</span>';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-broadcast-tower"></i><span>Diffuser</span>';
    }
}
