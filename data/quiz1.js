// data/quiz1.js - Quiz UV2 Cadre Juridique
const quizConfig = {
    id: "quiz1",
    title: "UV2 - Cadre Juridique",
    description: "Questionnaire sur le droit pénal et la législation sécurité",
    timeEstimate: "30-45 minutes",
    questions: [
        {
            id: 1,
            question: "Quel article du code pénal concerne « la non assistance à personne en danger » ?",
            answers: [
                "L’article 63 du code pénal",
                "L’article 73 du code pénal",
                "L’article 122-7 du code pénal",
                "L’article 223-6 du code pénal"
            ],
            correct: 3,
            explanation: "L'article 223-6 du code pénal traite de la non-assistance à personne en danger."
        },
        {
            id: 2,
            question: "Les acteurs de la sécurité privée doivent respecter la confidentialité des informations dont ils ont eu connaissance dans le cadre de leur activité :",
            answers: [
                "Dans le respect d’un délai de 5 ans",
                "Sauf en cas d’accord préalable de leur ancien employeur",
                "Sous réserve des cas prévus ou autorisés par la loi (ex : procédure judiciaire)",
                "Dans tous les cas",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "La confidentialité est obligatoire sauf dans les cas prévus ou autorisés par la loi."
        },
        {
            id: 3,
            question: "Quelles sont les conditions relatives à la défense, devant être réunies pour pouvoir invoquer la légitime défense ?",
            answers: [
                "Indispensable, proportionnée à l’attitude de l’agresseur, différée en cas d’hésitation",
                "Nécessaire, dans le même temps, proportionnée à la gravité de l’atteinte",
                "Actuelle, dirigée contre l’agresseur, imminente",
                "Aucune des autres réponses",
                "Instinctive, sans violence, après sommations"
            ],
            correct: 1,
            explanation: "La légitime défense doit être nécessaire, simultanée et proportionnée à l'agression."
        }
        // ... Ajoutez les 62 autres questions dans le même format
        // Pensez à ajouter la propriété "explanation" pour chaque question
    ]
};

// Exemple d'ajout rapide (vous compléterez avec vos 65 questions):
/*
{
    id: 4,
    question: "En fin de contrat, que devez vous faire de votre carte professionnelle matérialisée ?",
    answers: [
        "La détruire",
        "Aucune des autres réponses",
        "La rendre obligatoirement à l'employeur",
        "La rendre au CNAPS",
        "La conserver"
    ],
    correct: 2,
    explanation: "La carte professionnelle doit être rendue à l'employeur en fin de contrat."
}
*/