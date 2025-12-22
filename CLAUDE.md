# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Quiz-APS is a static web application for training on French private security (sécurité privée) professional exams. It is hosted on GitHub Pages and requires no backend or build process.

## Development

This is a vanilla HTML/CSS/JavaScript project with no build tools or package manager. To develop:

1. Open any HTML file directly in a browser, or
2. Use a local server: `python -m http.server 8000` then navigate to `http://localhost:8000`

## Architecture

### File Structure

```
quiz-aps/
├── index.html       # Dashboard listing all available quizzes (dynamic)
├── quiz.html        # Single quiz page (loads quiz via ?id=N parameter)
├── quiz.js          # Quiz engine logic
├── quiz-loader.js   # Dynamic quiz card loader for index.html
├── style.css        # Global styles
└── data/
    ├── quiz1.js     # UV2 - Cadre Juridique
    ├── quiz2.js     # UV5 - Sécurité Incendie
    ├── quiz3.js     # UV7 - Terrorisme
    └── quiz4.js     # UV11 - Gestion des risques
```

### Quiz Data Schema

Each quiz data file (`data/quizN.js`) exports a `quizConfig` object:

```javascript
const quizConfig = {
    id: "quiz1",
    title: "UV2 - Cadre Juridique",
    description: "...",
    timeEstimate: "30-45 minutes",
    icon: "fa-balance-scale",  // Font Awesome icon class
    questions: [
        {
            id: 1,
            question: "Question text?",
            answers: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0,  // 0-indexed correct answer
            explanation: "Explanation shown after answering"
        }
    ]
};
```

### Adding a New Quiz

1. Create `data/quizN.js` following the schema above (N must be sequential: quiz5.js, quiz6.js, etc.)
2. The quiz will automatically appear on the dashboard - no HTML changes needed

### Quiz Engine Flow

The `quiz.html` page:
- Reads the `id` parameter from URL (e.g., `quiz.html?id=2`)
- Dynamically loads the corresponding `data/quizN.js` file
- Initializes `quiz.js` which renders questions and handles navigation

The `quiz.js` engine:
- Dynamically creates question cards on navigation
- Shows instant feedback after each answer selection
- Auto-advances to next question after 1.5 seconds
- Calculates and displays final score with grade thresholds (90%: Excellent, 75%: Très bien, 60%: Satisfaisant, 50%: Passable)

## Live Quiz Feature

The application includes a real-time "Live Quiz" mode for classroom sessions.

### Setup Requirements

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Realtime Database
3. Copy your Firebase config to `js/firebase-config.js`

### Live Quiz Architecture

```
live/
├── teacher.html    # Teacher control panel
├── teacher.js      # Teacher logic (session management, question control)
├── join.html       # Student entry page
├── student.html    # Student quiz interface
├── student.js      # Student logic (answer submission, state sync)
├── live-common.js  # Shared utilities
└── live-style.css  # Live-specific styles
```

### Firebase Data Model

```
sessions/{sessionCode}/
├── quizId, quizTitle, status, currentQuestionIndex
├── participants/{id}/ (name, isConnected)
└── answers/{participantId}/{questionId}/ (answer, isCorrect)
```

## Language

All quiz content is in French. The application uses Font Awesome icons loaded from CDN.
