// editor.js - Quiz Editor Logic

(function() {
    'use strict';

    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const state = {
        mode: 'select', // 'select' or 'edit'
        isNewQuiz: false,
        hasUnsavedChanges: false,
        editingQuestionIndex: null,
        deleteQuestionIndex: null,
        quizData: {
            id: '',
            title: '',
            description: '',
            timeEstimate: '',
            icon: 'fa-question-circle',
            questions: []
        }
    };

    // Available quizzes cache
    let availableQuizzes = [];

    // ============================================
    // DOM ELEMENTS
    // ============================================

    const elements = {
        // Phases
        selectPhase: document.getElementById('select-phase'),
        editorPhase: document.getElementById('editor-phase'),

        // Select phase
        quizSelect: document.getElementById('quiz-select'),
        loadQuizBtn: document.getElementById('load-quiz-btn'),
        newQuizBtn: document.getElementById('new-quiz-btn'),
        importBtn: document.getElementById('import-btn'),

        // Import modal
        importModal: document.getElementById('import-modal'),
        closeImport: document.getElementById('close-import'),
        importTextarea: document.getElementById('import-textarea'),
        cancelImport: document.getElementById('cancel-import'),
        confirmImport: document.getElementById('confirm-import'),

        // Editor phase
        backToSelect: document.getElementById('back-to-select'),
        editorTitle: document.getElementById('editor-title'),
        previewBtn: document.getElementById('preview-btn'),
        downloadBtn: document.getElementById('download-btn'),

        // Metadata form
        quizId: document.getElementById('quiz-id'),
        quizTitle: document.getElementById('quiz-title'),
        quizDescription: document.getElementById('quiz-description'),
        quizTime: document.getElementById('quiz-time'),
        quizIcon: document.getElementById('quiz-icon'),

        // Questions
        questionCount: document.getElementById('question-count'),
        questionsList: document.getElementById('questions-list'),
        addQuestionBtn: document.getElementById('add-question-btn'),

        // Question modal
        questionModal: document.getElementById('question-modal'),
        closeQuestion: document.getElementById('close-question'),
        modalQuestionTitle: document.getElementById('modal-question-title'),
        questionText: document.getElementById('question-text'),
        answersContainer: document.getElementById('answers-container'),
        addAnswerBtn: document.getElementById('add-answer-btn'),
        questionExplanation: document.getElementById('question-explanation'),
        cancelQuestion: document.getElementById('cancel-question'),
        saveQuestion: document.getElementById('save-question'),

        // Preview modal
        previewModal: document.getElementById('preview-modal'),
        closePreview: document.getElementById('close-preview'),
        codePreview: document.getElementById('code-preview'),
        copyCodeBtn: document.getElementById('copy-code-btn'),

        // Delete modal
        deleteModal: document.getElementById('delete-modal'),
        cancelDelete: document.getElementById('cancel-delete'),
        confirmDelete: document.getElementById('confirm-delete'),

        // Validation
        validationErrors: document.getElementById('validation-errors'),
        errorList: document.getElementById('error-list')
    };

    // ============================================
    // INITIALIZATION
    // ============================================

    async function init() {
        await loadAvailableQuizzes();
        setupEventListeners();
    }

    async function loadAvailableQuizzes() {
        availableQuizzes = [];
        let index = 1;

        while (true) {
            try {
                const response = await fetch(`data/quiz${index}.js`);
                if (!response.ok) break;

                const text = await response.text();
                const match = text.match(/const\s+quizConfig\s*=\s*(\{[\s\S]*\});?\s*$/);
                if (!match) break;

                const config = (new Function('return ' + match[1]))();
                availableQuizzes.push({ index, config });

                const option = document.createElement('option');
                option.value = index;
                option.textContent = `Quiz ${index} - ${config.title}`;
                elements.quizSelect.appendChild(option);

                index++;
            } catch (e) {
                break;
            }
        }
    }

    function setupEventListeners() {
        // Select phase
        elements.quizSelect.addEventListener('change', onQuizSelectChange);
        elements.loadQuizBtn.addEventListener('click', loadSelectedQuiz);
        elements.newQuizBtn.addEventListener('click', createNewQuiz);
        elements.importBtn.addEventListener('click', showImportModal);

        // Import modal
        elements.closeImport.addEventListener('click', hideImportModal);
        elements.cancelImport.addEventListener('click', hideImportModal);
        elements.confirmImport.addEventListener('click', importQuiz);

        // Editor phase
        elements.backToSelect.addEventListener('click', goBackToSelect);
        elements.previewBtn.addEventListener('click', showPreview);
        elements.downloadBtn.addEventListener('click', downloadQuiz);

        // Metadata changes
        elements.quizTitle.addEventListener('input', onMetadataChange);
        elements.quizDescription.addEventListener('input', onMetadataChange);
        elements.quizTime.addEventListener('input', onMetadataChange);
        elements.quizIcon.addEventListener('change', onMetadataChange);

        // Questions
        elements.addQuestionBtn.addEventListener('click', () => openQuestionModal(null));

        // Question modal
        elements.closeQuestion.addEventListener('click', hideQuestionModal);
        elements.cancelQuestion.addEventListener('click', hideQuestionModal);
        elements.saveQuestion.addEventListener('click', saveCurrentQuestion);
        elements.addAnswerBtn.addEventListener('click', addAnswerInput);

        // Preview modal
        elements.closePreview.addEventListener('click', hidePreviewModal);
        elements.copyCodeBtn.addEventListener('click', copyCodeToClipboard);

        // Delete modal
        elements.cancelDelete.addEventListener('click', hideDeleteModal);
        elements.confirmDelete.addEventListener('click', confirmDeleteQuestion);

        // Unsaved changes warning
        window.addEventListener('beforeunload', onBeforeUnload);

        // Close modals on outside click
        window.addEventListener('click', (e) => {
            if (e.target === elements.importModal) hideImportModal();
            if (e.target === elements.questionModal) hideQuestionModal();
            if (e.target === elements.previewModal) hidePreviewModal();
            if (e.target === elements.deleteModal) hideDeleteModal();
        });
    }

    // ============================================
    // PHASE MANAGEMENT
    // ============================================

    function showSelectPhase() {
        state.mode = 'select';
        elements.selectPhase.classList.remove('hidden');
        elements.editorPhase.classList.add('hidden');
    }

    function showEditorPhase() {
        state.mode = 'edit';
        elements.selectPhase.classList.add('hidden');
        elements.editorPhase.classList.remove('hidden');
        updateEditorUI();
    }

    function goBackToSelect() {
        if (state.hasUnsavedChanges) {
            if (!confirm('Vous avez des modifications non enregistrees. Voulez-vous vraiment quitter ?')) {
                return;
            }
        }
        resetState();
        showSelectPhase();
    }

    // ============================================
    // QUIZ LOADING
    // ============================================

    function onQuizSelectChange() {
        elements.loadQuizBtn.disabled = !elements.quizSelect.value;
    }

    async function loadSelectedQuiz() {
        const quizIndex = parseInt(elements.quizSelect.value);
        if (!quizIndex) return;

        try {
            const response = await fetch(`data/quiz${quizIndex}.js`);
            if (!response.ok) throw new Error('Failed to load quiz');

            const text = await response.text();
            const match = text.match(/const\s+quizConfig\s*=\s*(\{[\s\S]*\});?\s*$/);
            if (!match) throw new Error('Invalid quiz format');

            const config = (new Function('return ' + match[1]))();
            loadQuizData(config);
            state.isNewQuiz = false;
            showEditorPhase();
        } catch (e) {
            alert('Erreur lors du chargement du quiz: ' + e.message);
        }
    }

    function createNewQuiz() {
        const nextId = availableQuizzes.length + 1;
        state.quizData = {
            id: `quiz${nextId}`,
            title: '',
            description: '',
            timeEstimate: '30-45 minutes',
            icon: 'fa-question-circle',
            questions: []
        };
        state.isNewQuiz = true;
        state.hasUnsavedChanges = true;
        showEditorPhase();
    }

    function loadQuizData(config) {
        state.quizData = {
            id: config.id || '',
            title: config.title || '',
            description: config.description || '',
            timeEstimate: config.timeEstimate || '',
            icon: config.icon || 'fa-question-circle',
            questions: (config.questions || []).map((q, i) => ({
                id: q.id || i + 1,
                question: q.question || '',
                answers: q.answers || [],
                correct: q.correct || 0,
                explanation: q.explanation || ''
            }))
        };
    }

    // ============================================
    // IMPORT
    // ============================================

    function showImportModal() {
        elements.importTextarea.value = '';
        elements.importModal.style.display = 'block';
    }

    function hideImportModal() {
        elements.importModal.style.display = 'none';
    }

    function importQuiz() {
        const text = elements.importTextarea.value.trim();
        if (!text) {
            alert('Veuillez coller le contenu du quiz.');
            return;
        }

        try {
            const match = text.match(/const\s+quizConfig\s*=\s*(\{[\s\S]*\});?\s*$/);
            if (!match) throw new Error('Format invalide. Le contenu doit contenir "const quizConfig = {...};"');

            const config = (new Function('return ' + match[1]))();
            if (!config.questions || !Array.isArray(config.questions)) {
                throw new Error('Le quiz doit contenir un tableau de questions.');
            }

            loadQuizData(config);
            state.isNewQuiz = false;
            state.hasUnsavedChanges = true;
            hideImportModal();
            showEditorPhase();
        } catch (e) {
            alert('Erreur lors de l\'import: ' + e.message);
        }
    }

    // ============================================
    // EDITOR UI
    // ============================================

    function updateEditorUI() {
        // Update title
        elements.editorTitle.textContent = state.isNewQuiz
            ? 'Nouveau quiz'
            : `Edition: ${state.quizData.title || state.quizData.id}`;

        // Update metadata form
        elements.quizId.value = state.quizData.id;
        elements.quizTitle.value = state.quizData.title;
        elements.quizDescription.value = state.quizData.description;
        elements.quizTime.value = state.quizData.timeEstimate;
        elements.quizIcon.value = state.quizData.icon;

        // Update questions list
        renderQuestionsList();
        hideValidationErrors();
    }

    function onMetadataChange() {
        state.quizData.title = elements.quizTitle.value;
        state.quizData.description = elements.quizDescription.value;
        state.quizData.timeEstimate = elements.quizTime.value;
        state.quizData.icon = elements.quizIcon.value;
        state.hasUnsavedChanges = true;
    }

    // ============================================
    // QUESTIONS LIST
    // ============================================

    function renderQuestionsList() {
        const questions = state.quizData.questions;
        elements.questionCount.textContent = questions.length;

        if (questions.length === 0) {
            elements.questionsList.innerHTML = '<p class="no-questions">Aucune question. Cliquez sur "Ajouter une question" pour commencer.</p>';
            return;
        }

        elements.questionsList.innerHTML = questions.map((q, index) => `
            <div class="question-item" data-index="${index}">
                <div class="question-number">${index + 1}</div>
                <div class="question-preview">
                    <div class="question-preview-text">${escapeHtml(q.question)}</div>
                    <div class="question-preview-meta">
                        ${q.answers.length} reponses -
                        <span class="correct-badge">Correcte: ${getLetter(q.correct)}</span>
                    </div>
                </div>
                <div class="question-actions">
                    <button class="btn-icon-action btn-move" onclick="moveQuestion(${index}, -1)" ${index === 0 ? 'disabled' : ''} title="Monter">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                    <button class="btn-icon-action btn-move" onclick="moveQuestion(${index}, 1)" ${index === questions.length - 1 ? 'disabled' : ''} title="Descendre">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                    <button class="btn-icon-action btn-edit" onclick="editQuestion(${index})" title="Modifier">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon-action btn-delete" onclick="deleteQuestion(${index})" title="Supprimer">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    function getLetter(index) {
        return String.fromCharCode(65 + index); // A, B, C, D...
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============================================
    // QUESTION CRUD
    // ============================================

    window.editQuestion = function(index) {
        openQuestionModal(index);
    };

    window.deleteQuestion = function(index) {
        state.deleteQuestionIndex = index;
        elements.deleteModal.style.display = 'block';
    };

    window.moveQuestion = function(index, direction) {
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= state.quizData.questions.length) return;

        const questions = state.quizData.questions;
        [questions[index], questions[newIndex]] = [questions[newIndex], questions[index]];

        // Renumber IDs
        questions.forEach((q, i) => q.id = i + 1);

        state.hasUnsavedChanges = true;
        renderQuestionsList();
    };

    function confirmDeleteQuestion() {
        if (state.deleteQuestionIndex !== null) {
            state.quizData.questions.splice(state.deleteQuestionIndex, 1);
            // Renumber IDs
            state.quizData.questions.forEach((q, i) => q.id = i + 1);
            state.hasUnsavedChanges = true;
            renderQuestionsList();
        }
        hideDeleteModal();
    }

    function hideDeleteModal() {
        elements.deleteModal.style.display = 'none';
        state.deleteQuestionIndex = null;
    }

    // ============================================
    // QUESTION MODAL
    // ============================================

    function openQuestionModal(index) {
        state.editingQuestionIndex = index;

        if (index === null) {
            // New question
            elements.modalQuestionTitle.textContent = 'Nouvelle question';
            elements.questionText.value = '';
            elements.questionExplanation.value = '';
            renderAnswerInputs(['', '', '', ''], 0);
        } else {
            // Edit existing
            const question = state.quizData.questions[index];
            elements.modalQuestionTitle.textContent = `Modifier la question ${index + 1}`;
            elements.questionText.value = question.question;
            elements.questionExplanation.value = question.explanation;
            renderAnswerInputs(question.answers, question.correct);
        }

        elements.questionModal.style.display = 'block';
    }

    function hideQuestionModal() {
        elements.questionModal.style.display = 'none';
        state.editingQuestionIndex = null;
    }

    function renderAnswerInputs(answers, correctIndex) {
        elements.answersContainer.innerHTML = answers.map((answer, i) => `
            <div class="answer-input-row ${i === correctIndex ? 'correct' : ''}" data-index="${i}">
                <input type="radio" name="correct-answer" class="answer-radio" ${i === correctIndex ? 'checked' : ''} onchange="updateCorrectAnswer(${i})">
                <span class="answer-letter-badge">${getLetter(i)}</span>
                <input type="text" class="answer-input" value="${escapeHtml(answer)}" placeholder="Reponse ${getLetter(i)}...">
                <button type="button" class="btn-remove-answer" onclick="removeAnswer(${i})" ${answers.length <= 2 ? 'disabled' : ''}>
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    window.updateCorrectAnswer = function(index) {
        const rows = elements.answersContainer.querySelectorAll('.answer-input-row');
        rows.forEach((row, i) => {
            row.classList.toggle('correct', i === index);
        });
    };

    window.removeAnswer = function(index) {
        const rows = elements.answersContainer.querySelectorAll('.answer-input-row');
        if (rows.length <= 2) return;

        const answers = [];
        let correctIndex = 0;
        rows.forEach((row, i) => {
            if (i !== index) {
                answers.push(row.querySelector('.answer-input').value);
                if (row.querySelector('.answer-radio').checked) {
                    correctIndex = answers.length - 1;
                }
            }
        });

        renderAnswerInputs(answers, correctIndex);
    };

    function addAnswerInput() {
        const rows = elements.answersContainer.querySelectorAll('.answer-input-row');
        if (rows.length >= 6) {
            alert('Maximum 6 reponses autorisees.');
            return;
        }

        const answers = [];
        let correctIndex = 0;
        rows.forEach((row, i) => {
            answers.push(row.querySelector('.answer-input').value);
            if (row.querySelector('.answer-radio').checked) {
                correctIndex = i;
            }
        });
        answers.push('');

        renderAnswerInputs(answers, correctIndex);
    }

    function saveCurrentQuestion() {
        // Gather data
        const questionText = elements.questionText.value.trim();
        const explanation = elements.questionExplanation.value.trim();

        const rows = elements.answersContainer.querySelectorAll('.answer-input-row');
        const answers = [];
        let correctIndex = 0;

        rows.forEach((row, i) => {
            answers.push(row.querySelector('.answer-input').value.trim());
            if (row.querySelector('.answer-radio').checked) {
                correctIndex = i;
            }
        });

        // Validate
        const errors = [];
        if (!questionText) errors.push('La question est requise.');
        if (answers.filter(a => a).length < 2) errors.push('Au moins 2 reponses sont requises.');
        if (!answers[correctIndex]) errors.push('La reponse correcte ne peut pas etre vide.');
        if (!explanation) errors.push('L\'explication est requise.');

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        // Filter empty answers and adjust correct index
        const filteredAnswers = [];
        let newCorrectIndex = 0;
        answers.forEach((answer, i) => {
            if (answer) {
                if (i === correctIndex) newCorrectIndex = filteredAnswers.length;
                filteredAnswers.push(answer);
            }
        });

        const questionData = {
            id: state.editingQuestionIndex !== null
                ? state.quizData.questions[state.editingQuestionIndex].id
                : state.quizData.questions.length + 1,
            question: questionText,
            answers: filteredAnswers,
            correct: newCorrectIndex,
            explanation: explanation
        };

        if (state.editingQuestionIndex !== null) {
            state.quizData.questions[state.editingQuestionIndex] = questionData;
        } else {
            state.quizData.questions.push(questionData);
        }

        state.hasUnsavedChanges = true;
        hideQuestionModal();
        renderQuestionsList();
    }

    // ============================================
    // VALIDATION
    // ============================================

    function validateQuiz() {
        const errors = [];
        const data = state.quizData;

        if (!data.title || data.title.length < 3) {
            errors.push('Le titre doit contenir au moins 3 caracteres.');
        }
        if (!data.description || data.description.length < 10) {
            errors.push('La description doit contenir au moins 10 caracteres.');
        }
        if (data.questions.length === 0) {
            errors.push('Le quiz doit contenir au moins une question.');
        }

        data.questions.forEach((q, i) => {
            if (!q.question) {
                errors.push(`Question ${i + 1}: le texte est manquant.`);
            }
            if (!q.answers || q.answers.length < 2) {
                errors.push(`Question ${i + 1}: au moins 2 reponses sont requises.`);
            }
            if (!q.explanation) {
                errors.push(`Question ${i + 1}: l'explication est manquante.`);
            }
        });

        return errors;
    }

    function showValidationErrors(errors) {
        elements.errorList.innerHTML = errors.map(e => `<li>${e}</li>`).join('');
        elements.validationErrors.classList.remove('hidden');
    }

    function hideValidationErrors() {
        elements.validationErrors.classList.add('hidden');
    }

    // ============================================
    // PREVIEW & DOWNLOAD
    // ============================================

    function generateQuizCode() {
        const data = state.quizData;

        const questionsCode = data.questions.map(q => {
            const answersCode = q.answers.map(a => `                "${escapeQuotes(a)}"`).join(',\n');
            return `        {
            id: ${q.id},
            question: "${escapeQuotes(q.question)}",
            answers: [
${answersCode}
            ],
            correct: ${q.correct},
            explanation: "${escapeQuotes(q.explanation)}"
        }`;
        }).join(',\n');

        return `// data/${data.id}.js - ${data.title}
const quizConfig = {
    id: "${data.id}",
    title: "${escapeQuotes(data.title)}",
    description: "${escapeQuotes(data.description)}",
    timeEstimate: "${escapeQuotes(data.timeEstimate)}",
    icon: "${data.icon}",
    questions: [
${questionsCode}
    ]
};
`;
    }

    function escapeQuotes(str) {
        return (str || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    }

    function showPreview() {
        const errors = validateQuiz();
        if (errors.length > 0) {
            showValidationErrors(errors);
            return;
        }
        hideValidationErrors();

        elements.codePreview.textContent = generateQuizCode();
        elements.previewModal.style.display = 'block';
    }

    function hidePreviewModal() {
        elements.previewModal.style.display = 'none';
    }

    function copyCodeToClipboard() {
        const code = elements.codePreview.textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = elements.copyCodeBtn;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copie !';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            alert('Erreur lors de la copie: ' + err);
        });
    }

    function downloadQuiz() {
        const errors = validateQuiz();
        if (errors.length > 0) {
            showValidationErrors(errors);
            return;
        }
        hideValidationErrors();

        const code = generateQuizCode();
        const blob = new Blob([code], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${state.quizData.id}.js`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        state.hasUnsavedChanges = false;
    }

    // ============================================
    // UTILITIES
    // ============================================

    function resetState() {
        state.mode = 'select';
        state.isNewQuiz = false;
        state.hasUnsavedChanges = false;
        state.editingQuestionIndex = null;
        state.deleteQuestionIndex = null;
        state.quizData = {
            id: '',
            title: '',
            description: '',
            timeEstimate: '',
            icon: 'fa-question-circle',
            questions: []
        };
    }

    function onBeforeUnload(e) {
        if (state.hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = 'Vous avez des modifications non enregistrees.';
        }
    }

    // ============================================
    // START
    // ============================================

    document.addEventListener('DOMContentLoaded', init);
})();
