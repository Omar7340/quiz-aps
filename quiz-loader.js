// quiz-loader.js - Dynamic quiz card loader for index.html

(function() {
    'use strict';

    const quizGrid = document.getElementById('quiz-grid');
    if (!quizGrid) return;

    async function loadQuizzes() {
        const loadedQuizzes = [];
        let index = 1;

        while (true) {
            try {
                const response = await fetch(`data/quiz${index}.js`);
                if (!response.ok) break;

                const text = await response.text();
                // Extract the quizConfig object from the file
                const match = text.match(/const\s+quizConfig\s*=\s*(\{[\s\S]*\});?\s*$/);
                if (!match) break;

                // Parse the config (using Function to avoid eval)
                const config = (new Function('return ' + match[1]))();
                loadedQuizzes.push({ index, config });
                index++;
            } catch (e) {
                break;
            }
        }

        return loadedQuizzes;
    }

    function renderQuizCards(loadedQuizzes) {
        quizGrid.innerHTML = '';

        loadedQuizzes.forEach(quiz => {
            const config = quiz.config;
            const card = document.createElement('a');
            card.href = `quiz.html?id=${quiz.index}`;
            card.className = 'quiz-card';

            const icon = config.icon || 'fa-question-circle';
            const questionCount = config.questions ? config.questions.length : 0;

            card.innerHTML = `
                <div class="quiz-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="quiz-info">
                    <h3>${config.title}</h3>
                    <p>${config.description}</p>
                    <div class="quiz-meta">
                        <span><i class="fas fa-question-circle"></i> ${questionCount} questions</span>
                        <span><i class="fas fa-clock"></i> ${config.timeEstimate}</span>
                    </div>
                </div>
                <div class="quiz-action">
                    <i class="fas fa-play-circle"></i>
                </div>
            `;

            quizGrid.appendChild(card);
        });

        if (loadedQuizzes.length === 0) {
            quizGrid.innerHTML = '<p class="no-quizzes">Aucun quiz disponible</p>';
        }
    }

    loadQuizzes().then(renderQuizCards);
})();
