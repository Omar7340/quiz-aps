// live-common.js - Shared utilities for Live Quiz feature

// Generate a 6-character alphanumeric session code
function generateSessionCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid confusing chars (0/O, 1/I/L)
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Generate a UUID v4
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Get session data from Firebase
async function getSession(sessionCode) {
    try {
        const snapshot = await database.ref(`sessions/${sessionCode}`).once('value');
        return snapshot.val();
    } catch (error) {
        console.error('Error getting session:', error);
        return null;
    }
}

// Validate session exists and is joinable
async function validateSession(sessionCode) {
    const session = await getSession(sessionCode);
    if (!session) {
        return { valid: false, error: 'Session introuvable' };
    }
    if (session.status === 'ended') {
        return { valid: false, error: 'Cette session est terminee' };
    }
    return { valid: true, session };
}

// Load quiz data dynamically
function loadQuizData(quizId) {
    return new Promise((resolve, reject) => {
        // Fetch the quiz file as text and extract the data
        fetch(`../data/quiz${quizId}.js`)
            .then(response => {
                if (!response.ok) throw new Error('Quiz file not found');
                return response.text();
            })
            .then(text => {
                // Extract the quizConfig object from the file content
                // The file contains: const quizConfig = { ... };
                const match = text.match(/const\s+quizConfig\s*=\s*(\{[\s\S]*\});?\s*$/);
                if (match) {
                    try {
                        // Use Function constructor to safely evaluate the object
                        const quizData = new Function('return ' + match[1])();
                        resolve(quizData);
                    } catch (e) {
                        reject(new Error('Failed to parse quiz data'));
                    }
                } else {
                    reject(new Error('Quiz data not found in file'));
                }
            })
            .catch(reject);
    });
}

// Get available quizzes metadata
function getAvailableQuizzes() {
    return [
        { id: '1', title: 'UV2 - Cadre Juridique', questions: 65, icon: 'fa-balance-scale' },
        { id: '2', title: 'UV5 - Securite Incendie', questions: 24, icon: 'fa-fire-extinguisher' },
        { id: '3', title: 'UV7 - Terrorisme', questions: 35, icon: 'fa-shield-alt' },
        { id: '4', title: 'UV11 - Gestion des Risques', questions: 31, icon: 'fa-exclamation-triangle' }
    ];
}

// Format timestamp to readable time
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

// Calculate session statistics
function calculateSessionStats(answers, participants, quizConfig) {
    const stats = {
        totalParticipants: Object.keys(participants || {}).length,
        totalQuestions: quizConfig.questions.length,
        participantScores: {},
        questionStats: {}
    };

    // Initialize question stats
    quizConfig.questions.forEach((q, idx) => {
        stats.questionStats[q.id] = {
            totalAnswers: 0,
            correctAnswers: 0,
            answerDistribution: {}
        };
    });

    // Process answers
    Object.entries(answers || {}).forEach(([participantId, participantAnswers]) => {
        let correct = 0;
        let total = 0;

        Object.entries(participantAnswers).forEach(([questionId, answerData]) => {
            const qStats = stats.questionStats[questionId];
            if (qStats) {
                qStats.totalAnswers++;
                if (answerData.isCorrect) {
                    qStats.correctAnswers++;
                    correct++;
                }
                qStats.answerDistribution[answerData.answer] =
                    (qStats.answerDistribution[answerData.answer] || 0) + 1;
            }
            total++;
        });

        stats.participantScores[participantId] = {
            correct,
            total,
            percentage: total > 0 ? Math.round((correct / total) * 100) : 0
        };
    });

    return stats;
}

// Generate leaderboard from stats
function generateLeaderboard(stats, participants) {
    const leaderboard = [];

    Object.entries(stats.participantScores).forEach(([participantId, score]) => {
        const participant = participants[participantId];
        if (participant) {
            leaderboard.push({
                id: participantId,
                name: participant.name,
                correct: score.correct,
                total: score.total,
                percentage: score.percentage
            });
        }
    });

    // Sort by percentage descending, then by correct answers
    leaderboard.sort((a, b) => {
        if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
        }
        return b.correct - a.correct;
    });

    return leaderboard;
}

// Export results to CSV
function exportToCSV(leaderboard, sessionCode, quizTitle) {
    const headers = ['Rang', 'Nom', 'Score', 'Bonnes reponses', 'Total questions', 'Pourcentage'];
    const rows = leaderboard.map((entry, idx) => [
        idx + 1,
        entry.name,
        `${entry.correct}/${entry.total}`,
        entry.correct,
        entry.total,
        `${entry.percentage}%`
    ]);

    const csvContent = [
        `Session: ${sessionCode} - ${quizTitle}`,
        `Date: ${new Date().toLocaleDateString('fr-FR')}`,
        '',
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `quiz-results-${sessionCode}-${Date.now()}.csv`;
    link.click();
}

// Show/hide UI elements
function showElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

function hideElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

// Switch between phases/states
function switchPhase(phases, activePhase) {
    phases.forEach(phase => {
        const el = document.getElementById(phase);
        if (el) {
            if (phase === activePhase) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    });
}
