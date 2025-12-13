// quiz.js - Logique principale du quiz
let currentQuiz = quizConfig;
let currentQuestionIndex = 0;
let userAnswers = {};
let quizCompleted = false;

// Initialisation
function initQuiz() {
    if (typeof quizConfig !== 'undefined') {
        currentQuiz = quizConfig;

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
    
    const isCorrect = userAnswer === question.correct;
    const correctAnswerText = question.answers[question.correct];
    
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
        if (idx === userAnswer) {
            option.classList.add(isCorrect ? 'selected-correct' : 'selected-incorrect');
        } else if (idx === question.correct) {
            option.classList.add('correct-option');
        }
    });
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
            if (userAnswers[question.id] === question.correct) {
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
            if (userAnswers[question.id] === question.correct) {
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