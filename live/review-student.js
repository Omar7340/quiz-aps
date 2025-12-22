// review-student.js - Student review viewer logic

// State variables
let sessionCode = null;
let participantId = null;
let participantName = null;
let sessionRef = null;
let reviewRef = null;
let quizConfig = null;
let sessionData = null;
let myAnswers = {};
let currentReviewIndex = -1;

// State names for switching
const STATES = ['state-join', 'state-waiting', 'state-review', 'state-ended', 'state-error'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check Firebase configuration
    if (!isFirebaseConfigured()) {
        showError('Firebase non configure', 'Veuillez configurer Firebase pour utiliser cette fonctionnalite.');
        return;
    }

    // Setup event listeners
    document.getElementById('join-review-btn').addEventListener('click', joinReview);
    document.getElementById('session-code-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') joinReview();
    });
    document.getElementById('session-code-input').addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
        hideElement('join-error');
    });

    // Check URL parameter for session code
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam) {
        document.getElementById('session-code-input').value = codeParam.toUpperCase();
        joinReview();
    }

    // Check sessionStorage for previous session data
    const storedCode = sessionStorage.getItem('sessionCode');
    const storedParticipantId = sessionStorage.getItem('participantId');
    const storedName = sessionStorage.getItem('participantName');

    if (storedParticipantId) {
        participantId = storedParticipantId;
        participantName = storedName || 'Participant';
        document.getElementById('my-name').textContent = participantName;
    }
});

// Join a review session
async function joinReview() {
    const codeInput = document.getElementById('session-code-input');
    const code = codeInput.value.trim().toUpperCase();

    if (code.length !== 6) {
        showJoinError('Le code doit contenir 6 caracteres');
        return;
    }

    try {
        // Get session data
        const snapshot = await database.ref(`sessions/${code}`).once('value');
        sessionData = snapshot.val();

        if (!sessionData) {
            showJoinError('Session introuvable');
            return;
        }

        if (sessionData.status !== 'ended') {
            showJoinError('Cette session n\'est pas encore terminee');
            return;
        }

        sessionCode = code;
        sessionRef = database.ref(`sessions/${code}`);
        reviewRef = sessionRef.child('review');

        // Load quiz data
        quizConfig = await loadQuizData(sessionData.quizId);

        // Update UI
        document.getElementById('quiz-title').textContent = sessionData.quizTitle || quizConfig.title;
        document.getElementById('waiting-session-code').textContent = code;

        // Get my answers if I was a participant
        if (participantId && sessionData.answers && sessionData.answers[participantId]) {
            myAnswers = sessionData.answers[participantId];
        }

        // Calculate my score for final display
        calculateMyScore();

        // Setup listener for review updates
        setupReviewListener();

        // Check if review is already active
        if (sessionData.review && sessionData.review.isActive) {
            currentReviewIndex = sessionData.review.currentQuestionIndex;
            displayReviewQuestion(currentReviewIndex);
            switchState('state-review');
        } else {
            switchState('state-waiting');
        }

    } catch (error) {
        console.error('Error joining review:', error);
        showJoinError('Erreur lors de la connexion');
    }
}

// Setup listener for review state changes
function setupReviewListener() {
    reviewRef.on('value', (snapshot) => {
        const review = snapshot.val();

        if (!review) {
            // No review data yet, wait
            if (getCurrentState() === 'state-review') {
                switchState('state-waiting');
            }
            return;
        }

        if (!review.isActive) {
            // Review stopped
            if (currentReviewIndex >= 0) {
                // Show ended state with results
                switchState('state-ended');
            } else {
                switchState('state-waiting');
            }
            return;
        }

        // Review is active
        if (review.currentQuestionIndex !== currentReviewIndex) {
            currentReviewIndex = review.currentQuestionIndex;
            displayReviewQuestion(currentReviewIndex);
        }

        if (getCurrentState() !== 'state-review') {
            switchState('state-review');
        }
    });
}

// Get current state
function getCurrentState() {
    for (const state of STATES) {
        const el = document.getElementById(state);
        if (el && !el.classList.contains('hidden')) {
            return state;
        }
    }
    return null;
}

// Display the review question
function displayReviewQuestion(index) {
    if (!quizConfig || index < 0 || index >= quizConfig.questions.length) {
        return;
    }

    const question = quizConfig.questions[index];
    const totalQuestions = quizConfig.questions.length;

    // Update progress
    document.getElementById('question-number').textContent = `Question ${index + 1}/${totalQuestions}`;

    // Display question text
    document.getElementById('question-text').textContent = question.question;

    // Get my answer for this question
    const myAnswer = myAnswers[question.id];

    // Display answers with highlighting
    renderReviewAnswers(question, myAnswer);

    // Show my result
    renderMyResult(question, myAnswer);

    // Show explanation
    document.getElementById('explanation-text').textContent = question.explanation || 'Pas d\'explication disponible.';
}

// Render answer options with highlighting
function renderReviewAnswers(question, myAnswer) {
    const container = document.getElementById('review-answers');

    container.innerHTML = question.answers.map((answer, idx) => {
        const isCorrect = idx === question.correct;
        const isMyAnswer = myAnswer && myAnswer.answer === idx;

        let classes = 'review-answer-option';
        if (isCorrect) classes += ' correct';
        if (isMyAnswer && !isCorrect) classes += ' my-wrong';
        if (isMyAnswer && isCorrect) classes += ' my-correct';

        let icons = '';
        if (isCorrect) icons += '<i class="fas fa-check correct-icon"></i>';
        if (isMyAnswer) icons += '<i class="fas fa-user my-icon"></i>';

        return `
            <div class="${classes}">
                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${answer}</span>
                <span class="option-icons">${icons}</span>
            </div>
        `;
    }).join('');
}

// Render my result for this question
function renderMyResult(question, myAnswer) {
    const resultEl = document.getElementById('my-answer-result');

    if (!myAnswer) {
        resultEl.innerHTML = `
            <div class="result no-answer">
                <i class="fas fa-minus-circle"></i>
                <span>Vous n'avez pas repondu a cette question</span>
            </div>
        `;
        return;
    }

    const letter = String.fromCharCode(65 + myAnswer.answer);

    if (myAnswer.isCorrect) {
        resultEl.innerHTML = `
            <div class="result correct">
                <i class="fas fa-check-circle"></i>
                <span>Votre reponse: ${letter} - Correct !</span>
            </div>
        `;
    } else {
        const correctLetter = String.fromCharCode(65 + question.correct);
        resultEl.innerHTML = `
            <div class="result incorrect">
                <i class="fas fa-times-circle"></i>
                <span>Votre reponse: ${letter} - Incorrect (reponse: ${correctLetter})</span>
            </div>
        `;
    }
}

// Calculate my score for final display
function calculateMyScore() {
    if (!quizConfig || !myAnswers) {
        document.getElementById('personal-results').classList.add('hidden');
        return;
    }

    let correct = 0;
    const total = quizConfig.questions.length;

    quizConfig.questions.forEach(question => {
        const myAnswer = myAnswers[question.id];
        if (myAnswer && myAnswer.isCorrect) {
            correct++;
        }
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('correct-answers').textContent = correct;
    document.getElementById('total-questions').textContent = total;
    document.getElementById('personal-results').classList.remove('hidden');
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
}

// Show join error
function showJoinError(message) {
    const errorEl = document.getElementById('join-error');
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
}

// Show error state
function showError(title, message) {
    document.getElementById('error-title').textContent = title;
    document.getElementById('error-message').textContent = message;
    switchState('state-error');
}

// Rejoin review - try to reconnect to the same session
function rejoinReview() {
    if (sessionCode) {
        // Reset state and rejoin
        currentReviewIndex = -1;
        switchState('state-waiting');

        // Check if review is still/again active
        if (reviewRef) {
            reviewRef.once('value').then((snapshot) => {
                const review = snapshot.val();
                if (review && review.isActive) {
                    currentReviewIndex = review.currentQuestionIndex;
                    displayReviewQuestion(currentReviewIndex);
                    switchState('state-review');
                }
            });
        }
    } else {
        // No session code, go back to join screen
        switchState('state-join');
    }
}
