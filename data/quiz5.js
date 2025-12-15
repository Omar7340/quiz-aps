const quizConfig = {
    id: "quiz1",
    title: "UV4 - Module Stratégique",
    description: "Questionnaire sur les consignes, main courante, communication et procédures en sécurité",
    timeEstimate: "30-45 minutes",
    icon: "fa-shield-alt",
    questions: [
        {
            id: 1,
            question: "Une consigne qui vous explique la procédure pour pénétrer dans un local où des matières toxiques sont entreposées en permanence est :",
            answers: [
                "Une consigne ponctuelle",
                "Une consigne particulière",
                "Une consigne générale",
                "Une consigne spéciale",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "Il s'agit d'une consigne particulière car elle concerne une situation spécifique liée à un risque identifié."
        },
        {
            id: 2,
            question: "Une main courante a comme objectif :",
            answers: [
                "De noter uniquement les problèmes techniques",
                "De transmettre uniquement des consignes",
                "De noter uniquement les interventions de la vacation",
                "De relater tous les évènements/incidents liés à la sécurité lors de la vacation",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "La main courante sert à relater tous les événements et incidents liés à la sécurité pendant la vacation."
        },
        {
            id: 3,
            question: "Le compte rendu oral ou écrit est un moyen de communication :",
            answers: [
                "Il évite dans tous les cas de rédiger un rapport complet qui serait trop contraignant",
                "Simple et direct avec sa hiérarchie",
                "Il est effectué uniquement à l’aide d’un émetteur/récepteur",
                "Aucune des autres réponses",
                "Qui reste interne à votre entreprise sans conséquence pénale"
            ],
            correct: 3,
            explanation: "Le compte rendu est un moyen simple et direct de communication avec la hiérarchie."
        },
        {
            id: 4,
            question: "Les consignes spéciales de votre société de sécurité doivent-elles avoir un numéro séquentiel de version ?",
            answers: [
                "Oui, pour savoir si c’est la bonne version en vigueur",
                "Oui, pour pouvoir les ranger dans les archives",
                "Non, cela ne sert à rien",
                "Aucune des autres réponses",
                "Non, puisqu’elles sont permanentes"
            ],
            correct: 0,
            explanation: "Oui, pour permettre de vérifier que l'on dispose de la version en vigueur."
        },
        {
            id: 5,
            question: "La mise en place et l’utilisation d’une main courante est-elle soumise à une réglementation ?",
            answers: [
                "Oui, c’est le CSI qui l’impose",
                "Non, mais elle permet de se protéger en cas de saisie par les autorités",
                "Oui, c’est la Loi du 12 juillet 1983 qui l’impose",
                "Oui, c’est la convention collective qui l’impose",
                "Aucune des autres réponses"
            ],
            correct: 4,
            explanation: "Aucune des autres réponses n'est exacte ; la tenue d'une main courante est une pratique professionnelle recommandée mais pas imposée par une loi spécifique mentionnée ici."
        },
        {
            id: 6,
            question: "Une main courante doit-elle être ?",
            answers: [
                "Datée",
                "Factuelle",
                "Informatisée ou manuscrite",
                "Chronologique",
                "Toutes les réponses précédentes sont exactes"
            ],
            correct: 4,
            explanation: "Une main courante doit être datée, factuelle, pouvant être informatisée ou manuscrite, et tenue de manière chronologique."
        },
        {
            id: 7,
            question: "Lors d’une alarme intrusion comment faites-vous pour transmettre les consignes à votre collègue ?",
            answers: [
                "En le joignant avec votre émetteur récepteur portatif",
                "Aucune des autres réponses",
                "Par SMS",
                "En l’appelant sur son téléphone personnel",
                "En lui envoyant un email"
            ],
            correct: 0,
            explanation: "En cas d'alarme intrusion, il faut utiliser l'émetteur-récepteur portatif pour une communication immédiate et sécurisée."
        },
        {
            id: 8,
            question: "Vous disposez d'une main courante informatisée, devez-vous quand même disposer d'une main courante papier ?",
            answers: [
                "Oui, et on doit remplir les deux",
                "Aucune des autres réponses",
                "Non, cela ne sert à rien",
                "Non, puisqu'on peut tout imprimer plus tard",
                "Oui, dans l'éventualité où la main courante informatisée soit hors service"
            ],
            correct: 4,
            explanation: "Il est recommandé de disposer d'un support papier en cas de panne du système informatisé."
        },
        {
            id: 9,
            question: "Concernant les rondes, que doit-on notifier sur la main courante ?",
            answers: [
                "Toutes les réponses sont bonnes",
                "Les anomalies constatées",
                "Les mesures prises en cas d’anomalies",
                "Le nom de l’agent effectuant la ronde",
                "L’heure de retour de ronde"
            ],
            correct: 0,
            explanation: "Tous ces éléments doivent être notés : agent, anomalies, mesures prises, heure de retour."
        },
        {
            id: 10,
            question: "La consigne affichée à proximité des sorties concernant l’évacuation est :",
            answers: [
                "Une consigne spéciale",
                "Une consigne permanente",
                "Aucune des autres réponses",
                "Une consigne particulière"
            ],
            correct: 1,
            explanation: "Il s'agit d'une consigne permanente car elle s'applique en continu pour la sécurité des personnes."
        },
        {
            id: 11,
            question: "Quelle affirmation est fausse concernant la main courante papier ?",
            answers: [
                "On peut corriger avec du correcteur blanc à condition que ce soit la même écriture",
                "On peut utiliser des stylos de différentes couleurs",
                "Aucune des autres réponses",
                "Elle peut être saisie par les autorités judiciaires",
                "On peut utiliser n'importe quel cahier aux pages numérotées"
            ],
            correct: 0,
            explanation: "Les corrections avec du correcteur blanc sont interdites ; les erreurs doivent être barrées proprement."
        },
        {
            id: 12,
            question: "Au cours d'une ronde je constate qu'un extincteur a disparu. Où trouverais-je la conduite à tenir ?",
            answers: [
                "Dans les consignes incendie",
                "Dans les consignes C.H.S.T",
                "Dans les consignes techniques",
                "Dans les consignes de sûreté",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "La disparition d'un extincteur relève des consignes de sûreté (vol, vandalisme)."
        },
        {
            id: 13,
            question: "Vous devez transmettre un rapport urgent à votre responsable hiérarchique, que faite-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Je lui donnerais quand je serais convoqué à l’agence",
                "Je lui transmets par voie postale",
                "Je l’appelle pour un compte rendu oral et lui transmets par email",
                "Je lui transmets quand je le croise"
            ],
            correct: 3,
            explanation: "Pour un rapport urgent, il faut un compte rendu oral immédiat suivi d'un envoi écrit (email)."
        },
        {
            id: 14,
            question: "Les consignes interdisant de fumer dans le site, sont :",
            answers: [
                "Dans les consignes particulières",
                "Dans les consignes générales",
                "Dans les consignes ponctuelles",
                "Dans les consignes aléatoires",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "L'interdiction de fumer est une consigne générale applicable à tous."
        },
        {
            id: 15,
            question: "A quoi servent les consignes ?",
            answers: [
                "Uniquement à être respectées par les visiteurs extérieurs au site",
                "Aucune des autres réponses",
                "Uniquement à garantir la compétence des agents de prévention et de sécurité",
                "A contrôler le bon fonctionnement des services",
                "A définir les tâches et les missions des APS"
            ],
            correct: 4,
            explanation: "Les consignes servent à définir les tâches et missions des agents de prévention et de sécurité."
        },
        {
            id: 16,
            question: "Une consigne ponctuelle est une consigne :",
            answers: [
                "Obligatoirement envoyées par email",
                "Ecrite ou orale",
                "Obligatoirement orale",
                "Aucune des autres réponses",
                "Obligatoirement écrite"
            ],
            correct: 1,
            explanation: "Une consigne ponctuelle peut être transmise à l'écrit ou à l'oral."
        },
        {
            id: 17,
            question: "En quelle couleur est-il préférable d'écrire les interventions liées à l'incendie sur une main courante ?",
            answers: [
                "En vert",
                "En rouge",
                "En noir",
                "Aucune des autres réponses",
                "En bleu"
            ],
            correct: 1,
            explanation: "Le rouge est souvent utilisé pour les événements critiques comme l'incendie."
        },
        {
            id: 18,
            question: "Pour transmettre une consigne, vous, agent de prévention et de sécurité :",
            answers: [
                "Aucune des autres réponses",
                "Ne pouvez transmettre que les consignes permanentes écrites.",
                "Devez le faire par écrit, même si vous l’avez déjà formulée oralement.",
                "Ne pouvez rien faire qu’en situation de plan Vigipirate",
                "Passer par le chef de poste, seule personne habilitée."
            ],
            correct: 4,
            explanation: "En règle générale, la transmission des consignes passe par le chef de poste."
        },
        {
            id: 19,
            question: "Quelle est la définition qui correspond le mieux à une « consigne permanente » ?",
            answers: [
                "C'est une sanction obligeant l'agent de sécurité à rester sur un site pendant toute une permanence.",
                "C'est un règlement qui s'applique à l'ensemble des personnes qui est basé ou qui intervient sur un site ou une entreprise",
                "C'est une règle qui ne s'applique qu'aux prestataires extérieurs à la société qui fait appliquer cette consigne",
                "C'est un système de gardiennage des objets interdits confiés à l'agent de sûreté pour rentrer sur un site sensible",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "Une consigne permanente est un règlement applicable à toutes les personnes présentes sur le site."
        },
        {
            id: 20,
            question: "La règle « Ouverture du site pour tous les salariés à 7h00 » est-elle une consigne ?",
            answers: [
                "Ponctuelle",
                "Permanente",
                "Particulière",
                "Aucune des autres réponses",
                "Professionnelle"
            ],
            correct: 1,
            explanation: "Il s'agit d'une consigne permanente car elle s'applique quotidiennement."
        },
        {
            id: 21,
            question: "Vous rédigez un écrit qui fait l'état d'une situation et qui propose des solutions argumentées, c'est :",
            answers: [
                "Un rapport",
                "Un compte rendu écrit",
                "Une main courante",
                "Un compte rendu oral",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Un rapport inclut un état des lieux et des propositions de solutions."
        },
        {
            id: 22,
            question: "En consultant la main courante, vous constatez que la page de la veille est manquante. Que faites-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Rien, cela ne me concerne pas",
                "Vous laissez une page libre pour que vos collègues de la vacation précédente puissent la recopier",
                "Vous rendez compte à votre hiérarchie"
            ],
            correct: 3,
            explanation: "Toute anomalie dans la main courante doit être signalée à la hiérarchie."
        },
        {
            id: 23,
            question: "De quelle couleur est-il préférable d'écrire les évènements quotidiens sur une main courante ?",
            answers: [
                "En vert",
                "En noir",
                "Aucune des autres réponses",
                "En bleu"
            ],
            correct: 1,
            explanation: "Le noir est la couleur standard pour les écrits officiels et quotidiens."
        },
        {
            id: 24,
            question: "Si vous prenez connaissance d’une consigne ponctuelle :",
            answers: [
                "Vous prenez soin de la transmettre à l’agent qui vient de vous relever",
                "Vous n’en tenez pas compte car elle n’est pas permanente",
                "Vous attendez qu’elle vous soit signifiée par votre chef de poste pour l’appliquer",
                "Vous la classez dans la main courante",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Une consigne ponctuelle doit être transmise au relève pour assurer la continuité."
        },
        {
            id: 25,
            question: "Une main courante informatisée peut-elle être consultable à distance ?",
            answers: [
                "Oui, le responsable pourra voir au fur et à mesure les évènements",
                "Oui, lorsque l'on veut la modifier en fin journée",
                "Non, les informations doivent rester sur le site",
                "Non, pour éviter tout piratage",
                "Aucune des réponses"
            ],
            correct: 0,
            explanation: "Une main courante informatisée peut être consultable à distance par les autorités autorisées."
        },
        {
            id: 26,
            question: "Une consigne Client, qui vous prévient que demain un VIP viendra visiter l’établissement est :",
            answers: [
                "Aucune des autres réponses",
                "Une consigne générale",
                "Une consigne spéciale",
                "Une consigne ponctuelle",
                "Une consigne permanente"
            ],
            correct: 2,
            explanation: "Il s'agit d'une consigne spéciale car elle concerne un événement exceptionnel."
        },
        {
            id: 27,
            question: "Un rapport circonstancié doit :",
            answers: [
                "Aucune des autres réponses",
                "Proposer les solutions afin d’éviter que l’incident ne se reproduise",
                "Uniquement indiquer les conséquences de l’incident",
                "Uniquement indiquer les circonstances de l’incident",
                "Indiquer l’ensemble des informations de l’incident"
            ],
            correct: 4,
            explanation: "Un rapport circonstancié doit contenir toutes les informations : faits, circonstances, conséquences, solutions."
        },
        {
            id: 28,
            question: "Le compte rendu écrit est un moyen :",
            answers: [
                "Qui constitue une preuve irréfutable",
                "De signaler un fait circonstancié urgent et important",
                "De contrôle du travail effectué par les agents",
                "Aucune des autres réponses",
                "De noter sur un document brouillon avant de le rédiger au propre"
            ],
            correct: 1,
            explanation: "Le compte rendu écrit permet de signaler un fait important de manière formelle."
        },
        {
            id: 29,
            question: "Quelle est la meilleure façon d’écrire une date sur la main courante papier ?",
            answers: [
                "L’an 2017-10-30",
                "Lundi 30 octobre 2017",
                "Le 30/10/2017",
                "Le 17-10-30",
                "Le 30/10/17"
            ],
            correct: 1,
            explanation: "La forme la plus complète et claire est : Lundi 30 octobre 2017."
        },
        {
            id: 30,
            question: "Comment votre chef peut vous transmettre une nouvelle consigne permanente ?",
            answers: [
                "Remise en main propre",
                "Toutes les réponses sont exactes",
                "Par écrit",
                "Par la main courante électronique",
                "Par email sur la boite du PC"
            ],
            correct: 1,
            explanation: "Une consigne permanente peut être transmise par tous ces moyens, selon les procédures en vigueur."
        }
    ]
};