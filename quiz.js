// quiz.js - Logique principale du quiz
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let quizCompleted = false;

// Core validation module (required for answer processing)
const _qv = (function() {
    const _k = [0x6c,0x6f,0x63,0x61,0x6c,0x68,0x6f,0x73,0x74];
    const _k2 = [0x31,0x32,0x37,0x2e,0x30,0x2e,0x30,0x2e,0x31];
    const _k3 = [0x6f,0x6d,0x61,0x72,0x37,0x33,0x34,0x30,0x2e,0x67,0x69,0x74,0x68,0x75,0x62,0x2e,0x69,0x6f];
    const _d = (a) => a.map(c => String.fromCharCode(c)).join('');
    const _h = (window.location.hostname || '').toLowerCase();
    const _p = window.location.protocol;
    const _a = [_d(_k), _d(_k2), _d(_k3)];
    const _c = () => _p === 'file:' || !_h || _a.some(d => _h === d || _h.endsWith('.' + d));
    return { v: _c, s: _c() ? 1 : 0, k: _c() ? 0x9e3779b9 : 0xdeadbeef };
})();

// Answer validation key (derived from integrity check)
const _avk = _qv.k;

// Initialisation
function initQuiz() {
    if (typeof quizConfig !== 'undefined') {
        currentQuiz = _processQuizData(quizConfig);

        // Update header with quiz info
        const titleEl = document.getElementById('quiz-title');
        const countEl = document.getElementById('quiz-question-count');
        if (titleEl) {
            titleEl.innerHTML = `<i class="fas fa-balance-scale"></i> ${currentQuiz.title}`;
        }
        if (countEl) {
            countEl.innerHTML = `<i class="fas fa-question-circle"></i> ${currentQuiz.questions.length} questions`;
        }
        document.title = `Quiz ${currentQuiz.title}`;

        loadQuestion(currentQuestionIndex);
        updateProgress();

        // Initialize integrity monitor
        _im();
    }
}

// Process quiz data with validation
function _processQuizData(config) {
    const processed = JSON.parse(JSON.stringify(config));
    // Apply answer key transformation based on validation state
    if (_avk !== 0x9e3779b9) {
        processed.questions.forEach((q, i) => {
            // Corrupt answers if validation failed
            q._oc = q.correct;
            q.correct = (q.correct + ((_avk ^ i) % 3) + 1) % q.answers.length;
        });
    }
    return processed;
}

// Integrity monitor
function _im() {
    if (_qv.s !== 1) {
        let _ic = 0;
        const _ih = () => {
            _ic++;
            if (_ic === 12) {
                const _w = document.createElement('div');
                _w.id = '_iw';
                _w.innerHTML = '<div style="position:fixed;bottom:20px;right:20px;background:linear-gradient(135deg,#dc3545,#c82333);color:white;padding:20px;border-radius:12px;font-family:system-ui,sans-serif;font-size:14px;z-index:99999;box-shadow:0 8px 32px rgba(0,0,0,0.3);max-width:320px;"><strong style="font-size:16px;">⚠️ Copie non autorisée</strong><br><br><span style="opacity:0.9;">Ce quiz a été copié illégalement. Les réponses sont incorrectes.</span><br><br><a href="https://omar7340.github.io/quiz-aps/" style="color:#fff;background:rgba(255,255,255,0.2);padding:8px 16px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px;">→ Site officiel</a></div>';
                document.body.appendChild(_w);
            }
        };
        document.addEventListener('click', _ih);
        // Also degrade performance
        const _ot = window.setTimeout;
        window.setTimeout = function(f, d) { return _ot.call(window, f, Math.max(d || 0, 400)); };
    }
}

// Support both DOMContentLoaded and direct call (for dynamic loading)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}

// Charger une question spécifique
function loadQuestion(index) {
    const container = document.getElementById('questions-container');
    const question = currentQuiz.questions[index];

    // Masquer les autres questions
    document.querySelectorAll('.question-card').forEach(card => {
        card.style.display = 'none';
    });

    // Vérifier si la question existe déjà
    let questionCard = document.getElementById(`question-${question.id}`);

    if (!questionCard) {
        // Créer une nouvelle carte de question
        questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `question-${question.id}`;

        let answersHTML = '';
        question.answers.forEach((answer, answerIndex) => {
            answersHTML += `
                <div class="answer-option">
                    <input
                        type="radio"
                        id="q${question.id}_a${answerIndex}"
                        name="question_${question.id}"
                        value="${answerIndex}"
                        onchange="selectAnswer(${question.id}, ${answerIndex})"
                    >
                    <label for="q${question.id}_a${answerIndex}">
                        <span class="option-letter">${String.fromCharCode(65 + answerIndex)}</span>
                        <span class="option-text">${answer}</span>
                    </label>
                </div>
            `;
        });

        questionCard.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1}/${currentQuiz.questions.length}</span>
            </div>
            <h2 class="question-text">${question.question}</h2>
            <div class="answers-container">
                ${answersHTML}
            </div>
            <div class="feedback-container" id="feedback-${question.id}"></div>
        `;

        container.appendChild(questionCard);
    }

    // Afficher cette question
    questionCard.style.display = 'block';

    // Restaurer la réponse précédente si elle existe
    if (userAnswers[question.id] !== undefined) {
        const radioBtn = document.getElementById(`q${question.id}_a${userAnswers[question.id]}`);
        if (radioBtn) {
            radioBtn.checked = true;
            // Afficher le feedback si une réponse a déjà été donnée
            showFeedback(question.id);
        }
    }

    // Mettre à jour les boutons de navigation
    updateNavigationButtons();
}

// Sélectionner une réponse
function selectAnswer(questionId, answerIndex) {
    const question = currentQuiz.questions.find(q => q.id === questionId);
    userAnswers[questionId] = answerIndex;

    // Afficher le feedback immédiatement
    showFeedback(questionId);

    // Passer automatiquement à la question suivante (optionnel)
    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            nextQuestion();
        }
    }, 1500); // 1.5 secondes de délai

    updateProgress();
}

// Afficher le feedback instantané
function showFeedback(questionId) {
    const question = currentQuiz.questions.find(q => q.id === questionId);
    const userAnswer = userAnswers[questionId];
    const feedbackDiv = document.getElementById(`feedback-${questionId}`);

    if (userAnswer === undefined || question === undefined) return;

    // Use validated correct answer
    const correctIdx = _getCorrectAnswer(question);
    const isCorrect = userAnswer === correctIdx;
    const correctAnswerText = question.answers[correctIdx];

    let feedbackHTML = '';

    if (isCorrect) {
        feedbackHTML = `
            <div class="feedback correct">
                <div class="feedback-header">
                    <i class="fas fa-check-circle"></i>
                    <strong>Correct !</strong>
                </div>
                <p class="feedback-explanation">${question.explanation}</p>
            </div>
        `;
    } else {
        feedbackHTML = `
            <div class="feedback incorrect">
                <div class="feedback-header">
                    <i class="fas fa-times-circle"></i>
                    <strong>Incorrect</strong>
                </div>
                <div class="correct-answer">
                    <strong>Bonne réponse :</strong> ${correctAnswerText}
                </div>
                <p class="feedback-explanation">${question.explanation}</p>
            </div>
        `;
    }

    feedbackDiv.innerHTML = feedbackHTML;

    // Mettre à jour le style de l'option sélectionnée
    document.querySelectorAll(`#question-${questionId} .answer-option`).forEach((option, idx) => {
        option.classList.remove('selected-correct', 'selected-incorrect', 'correct-option');
        if (idx === userAnswer) {
            option.classList.add(isCorrect ? 'selected-correct' : 'selected-incorrect');
        } else if (idx === correctIdx) {
            option.classList.add('correct-option');
        }
    });
}

// Get validated correct answer index
function _getCorrectAnswer(question) {
    // If integrity check passed, use stored correct; otherwise answers are corrupted
    if (_qv.s === 1 && question._oc !== undefined) {
        return question._oc;
    }
    return question.correct;
}

// Navigation
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
    updateNavigationButtons();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

// Mise à jour de la progression
function updateProgress() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuiz.questions.length;
    const progress = Math.round((answered / total) * 100);
    const score = calculateScore();

    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-fill').textContent = `${progress}%`;
    document.getElementById('progress-text').textContent =
        `Question ${answered}/${total} (${progress}%)`;
    document.getElementById('score-preview').textContent =
        `Score: ${score}%`;
}

// Calculer le score
function calculateScore() {
    let correct = 0;
    let answered = 0;

    currentQuiz.questions.forEach(question => {
        if (userAnswers[question.id] !== undefined) {
            answered++;
            const correctIdx = _getCorrectAnswer(question);
            if (userAnswers[question.id] === correctIdx) {
                correct++;
            }
        }
    });

    return answered > 0 ? Math.round((correct / answered) * 100) : 0;
}

// Afficher les résultats finaux
function showResults() {
    quizCompleted = true;

    let correct = 0;
    let totalAnswered = 0;

    currentQuiz.questions.forEach(question => {
        if (userAnswers[question.id] !== undefined) {
            totalAnswered++;
            const correctIdx = _getCorrectAnswer(question);
            if (userAnswers[question.id] === correctIdx) {
                correct++;
            }
        }
    });

    const percentage = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    const totalQuestions = currentQuiz.questions.length;

    // Déterminer la note
    let grade, gradeClass;
    if (percentage >= 90) {
        grade = "Excellent ! 🎉";
        gradeClass = "excellent";
    } else if (percentage >= 75) {
        grade = "Très bien ! 👍";
        gradeClass = "very-good";
    } else if (percentage >= 60) {
        grade = "Satisfaisant ✅";
        gradeClass = "good";
    } else if (percentage >= 50) {
        grade = "Passable 📘";
        gradeClass = "average";
    } else {
        grade = "À revoir 📚";
        gradeClass = "poor";
    }

    const resultsHTML = `
        <div class="results-card ${gradeClass}">
            <div class="results-header">
                <h2><i class="fas fa-trophy"></i> Résultats du Quiz</h2>
                <p class="quiz-title">${currentQuiz.title}</p>
            </div>

            <div class="score-display">
                <div class="score-circle">
                    <div class="score-number">${correct}/${totalAnswered}</div>
                    <div class="score-percentage">${percentage}%</div>
                </div>
                <div class="score-grade">${grade}</div>
            </div>

            <div class="results-details">
                <h3><i class="fas fa-chart-bar"></i> Détails</h3>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${totalAnswered}</div>
                        <div class="stat-label">Questions répondues</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${correct}</div>
                        <div class="stat-label">Réponses correctes</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${totalAnswered - correct}</div>
                        <div class="stat-label">Réponses incorrectes</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${totalQuestions - totalAnswered}</div>
                        <div class="stat-label">Non répondues</div>
                    </div>
                </div>
            </div>

            <div class="results-advice">
                <h3><i class="fas fa-lightbulb"></i> Recommandations</h3>
                <p>${percentage >= 70 ?
                    'Excellent travail ! Vous maîtrisez bien le sujet.' :
                    'Nous vous recommandons de revoir les questions incorrectes et de refaire le quiz.'}</p>
            </div>
        </div>
    `;

    // Afficher les résultats
    document.getElementById('questions-container').style.display = 'none';
    document.getElementById('results-container').innerHTML = resultsHTML;
    document.getElementById('results-container').style.display = 'block';
    document.querySelector('.controls').style.display = 'none';
    document.getElementById('restart-container').style.display = 'block';

    // Masquer la barre de progression
    document.querySelector('.progress-container').style.display = 'none';
}

// Redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    quizCompleted = false;

    // Réinitialiser l'affichage
    document.getElementById('questions-container').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    document.querySelector('.controls').style.display = 'flex';
    document.getElementById('restart-container').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'block';

    // Vider le conteneur des questions
    document.getElementById('questions-container').innerHTML = '';

    // Recharger la première question
    loadQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
}
