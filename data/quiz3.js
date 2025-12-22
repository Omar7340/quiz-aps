// data/quiz3.js - UV7 - Terrorisme
const quizConfig = {
    id: "quiz3",
    title: "UV7 - Terrorisme",
    description: "QCM sur la prévention et les comportements face au terrorisme, les gestes de secours et les procédures d'urgence.",
    timeEstimate: "30 minutes",
    icon: "fa-shield-alt",
    questions: [
        {
            id: 1,
            question: "Suite à une attaque terroriste, les forces de l’ordre vous demandent de sortir. Que devez-vous faire ?",
            answers: [
                "Sortir en vous cachant le visage",
                "Courir vers eux en criant",
                "Aucune des autres réponses",
                "Garder votre calme et suivre les instructions",
                "Sortir avec les mains dans le dos"
            ],
            correct: 3,
            explanation: "Il faut garder son calme et suivre les instructions des forces de l’ordre pour éviter toute confusion."
        },
        {
            id: 2,
            question: "Qu’est-ce qu’un « tireur actif » ?",
            answers: [
                "Un tireur professionnel",
                "Un tireur ouvert aux discussions",
                "Un tireur qui choisit ses victimes",
                "Aucune des autres réponses",
                "Un tireur qui tue de manière aléatoire"
            ],
            correct: 4,
            explanation: "Un tireur actif est un individu qui tue ou tente de tuer des personnes de manière aléatoire, souvent dans un espace confiné."
        },
        {
            id: 3,
            question: "Dans le cadre d’un risque d’attentat que peut faire un Préfet ?",
            answers: [
                "Aucune des autres réponses",
                "Accroître les contrôles aux frontières",
                "Faire procéder à des fouilles à corps par des agents de sécurité privée",
                "Décréter l’Etat d’Urgence mais seulement au niveau « Vigilance »",
                "Interdire la circulation, instaurer un couvre-feu et limiter les allées/venues des personnes"
            ],
            correct: 4,
            explanation: "Le Préfet peut prendre des mesures exceptionnelles comme interdire la circulation, instaurer un couvre-feu et restreindre les déplacements."
        },
        {
            id: 4,
            question: "Parmi les types de « Blast » suivants, lequel ou lesquels existent ?",
            answers: [
                "Blast tertiaire",
                "Blast quaternaire",
                "Blast primaire",
                "Blast secondaire",
                "Toutes les réponses précédentes sont exactes"
            ],
            correct: 4,
            explanation: "Tous existent : primaire (onde de choc), secondaire (projections), tertiaire (déplacement de la victime), quaternaire (brûlures, inhalation)."
        },
        {
            id: 5,
            question: "Suite à une attaque terroriste les forces de l’ordre vous demandent de sortir. Que devez-vous faire ?",
            answers: [
                "Courir vers eux en criant",
                "Sortir avec les mains dans le dos",
                "Sortir avec les mains visibles",
                "Aucune des autres réponses",
                "Sortir en vous cachant le visage"
            ],
            correct: 2,
            explanation: "Il est recommandé de sortir les mains visibles pour rassurer les forces de l’ordre et éviter toute méprise."
        },
        {
            id: 6,
            question: "Dès l’arrivée des forces de l’ordre, dans une zone d’attente, vous devez en premier ?",
            answers: [
                "Suivre les instructions",
                "Courir vers eux",
                "Leur indiquer l’emplacement des victimes",
                "Aucunes des autres réponses",
                "Leur parler de la situation"
            ],
            correct: 0,
            explanation: "Il faut avant tout suivre leurs instructions pour ne pas gêner leur intervention."
        },
        {
            id: 7,
            question: "A quoi reconnaît-on une hémorragie artérielle d’un membre ?",
            answers: [
                "Le sang s’écoule avec une intensité forte et continue",
                "Le sang ruisselle très faiblement",
                "Le sang s’écoule en continu à faible intensité",
                "Aucunes des autres réponses",
                "Le sang s’écoule abondamment par saccades"
            ],
            correct: 4,
            explanation: "Une hémorragie artérielle se caractérise par un écoulement abondant et pulsatile (par saccades)."
        },
        {
            id: 8,
            question: "Pour limiter un traumatisme psychologique post attentat, il est conseillé de :",
            answers: [
                "Ne rien faire, cela passera après quelques semaines",
                "Ne pas en parler à ses amis, qui risquent de se détourner",
                "Aucune des autres réponses",
                "Retourner aux urgences pour un traitement de profondeur",
                "Consulter un médecin spécialisé"
            ],
            correct: 4,
            explanation: "Il est recommandé de consulter un professionnel de santé mentale pour un accompagnement adapté."
        },
        {
            id: 9,
            question: "Durant un attentat, puis-je revenir sur la zone attaquée ?",
            answers: [
                "Aucunes des réponses",
                "Seulement pour porter assistance aux victimes",
                "Oui, si je ne vois pas de terroristes",
                "Non, dans tous les cas",
                "Seulement si je n’entends plus aucun tir"
            ],
            correct: 3,
            explanation: "Il est strictement interdit de revenir sur les lieux tant que les forces de l’ordre n’ont pas sécurisé la zone."
        },
        {
            id: 10,
            question: "Quelle arme est généralement utilisée pour un « attentat suicide » ?",
            answers: [
                "Aucune des autres réponses",
                "Des couteaux poignards",
                "Une arme de poing",
                "Une arme automatique",
                "Un engin explosif"
            ],
            correct: 4,
            explanation: "L’attentat suicide utilise le plus souvent un engin explosif porté par le terroriste."
        },
        {
            id: 11,
            question: "Quel est l’un des grands objectifs du plan Vigipirate ?",
            answers: [
                "Permettre la destruction des intérêts fondamentaux de la Nation",
                "Aucune des autres réponses",
                "Permettre un contrôle du peuple",
                "Développer et maintenir la vigilance",
                "Développer un régime autocratique"
            ],
            correct: 3,
            explanation: "Le plan Vigipirate vise à renforcer la vigilance et la protection des citoyens et des infrastructures."
        },
        {
            id: 12,
            question: "A quoi correspond la règle des 3C ?",
            answers: [
                "Col-Cravate-Ceinture",
                "Se cacher-Courir-Combattre systématiquement",
                "Aucune des autres réponses",
                "Casser-Combattre-Courir",
                "Courir-se Cacher-Combattre en dernier recours"
            ],
            correct: 4,
            explanation: "La règle des 3C : Courir, se Cacher, Combattre (en dernier recours)."
        },
        {
            id: 13,
            question: "Vous avez des soupçons de radicalisation concernant une personne, que faites-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Vous tentez de raisonner la personne en la sensibilisant au risque terroriste",
                "Vous allez déposer plainte au commissariat le plus proche",
                "Vous ne faites rien car aucune preuve ne permet d’être certain de la radicalisation de cette personne",
                "Vous contactez le numéro vert (0800005696) ou vous remplissez le formulaire en ligne mis en place par le gouvernement"
            ],
            correct: 4,
            explanation: "Il faut signaler ses soupçons via les canaux dédiés (numéro vert ou formulaire en ligne)."
        },
        {
            id: 14,
            question: "Témoin direct d’un attentat en cours sur votre site, quelles consignes à suivre sont les plus appropriées ?",
            answers: [
                "Toutes les réponses sont exactes",
                "Si vous ne pouvez pas courir, se confiner, éteindre la lumière et couper le son des appareils à proximité",
                "Si possible, aider les autres personnes à s’échapper",
                "Laisser vos affaires derrière vous",
                "Alerter les personnes autour de vous"
            ],
            correct: 0,
            explanation: "Toutes ces consignes font partie des comportements recommandés en cas d’attaque terroriste."
        },
        {
            id: 15,
            question: "Le pneumothorax peut être occasionné par :",
            answers: [
                "Une perforation par une côte",
                "Une plaie pénétrante par arme blanche",
                "Une explosion (blast primaire)",
                "Une plaie pénétrante par balle",
                "Toutes les réponses sont bonnes"
            ],
            correct: 4,
            explanation: "Un pneumothorax peut résulter de diverses lésions thoraciques (traumatismes, explosions, plaies)."
        },
        {
            id: 16,
            question: "Suite à une blessure par balle sur le torse d’une victime, comment puis-je la secourir sans provoquer un pneumothorax ?",
            answers: [
                "En réalisant un pansement 3 côtés",
                "Aucune des autres réponses",
                "En posant dès que possible un garrot",
                "En mettant en place la réanimation cardio pulmonaire",
                "En bouchant le trou formé par l’impact avec ma main"
            ],
            correct: 0,
            explanation: "Un pansement 3 côtés permet d’éviter l’entrée d’air tout en laissant s’échapper l’air déjà présent."
        },
        {
            id: 17,
            question: "Parmi les propositions suivantes, laquelle est un mode opératoire traditionnel des actes de terrorisme ?",
            answers: [
                "Vol à main armée",
                "Financement des ONG",
                "Prise d’otage et exécution",
                "Aucune des autres réponses",
                "Escroquerie en bande organisée"
            ],
            correct: 2,
            explanation: "La prise d’otage suivie d’exécution est un mode opératoire historique du terrorisme."
        },
        {
            id: 18,
            question: "Lors d’une attaque terroriste sur votre lieu de travail, vous vous êtes confiné dans un local sûr, à quel numéro envoyez-vous le SMS d’alerte ?",
            answers: [
                "Au 18",
                "Au 17",
                "Au 112",
                "Aucune des autres réponses",
                "Au 114"
            ],
            correct: 4,
            explanation: "Le 114 est le numéro d’urgence pour les personnes sourdes ou malentendantes, mais il peut être utilisé pour envoyer un SMS en cas de danger."
        },
        {
            id: 19,
            question: "Qu’est-ce que le terrorisme d’Etat ?",
            answers: [
                "C’est lorsqu’un Etat terrorise son peuple",
                "C’est lorsqu’un peuple terrorise son gouvernement",
                "Aucune des autres réponses",
                "C’est lorsqu’un Etat combat le terrorisme à l’intérieur de ses frontières",
                "C’est lorsque une organisation terroriste veut prendre le pouvoir d’un état"
            ],
            correct: 0,
            explanation: "Le terrorisme d’État désigne l’usage de la terreur par un État contre sa propre population ou d’autres États."
        },
        {
            id: 20,
            question: "Je combats un terroriste :",
            answers: [
                "Uniquement si je peux l’attaquer par derrière",
                "Aucune des autres réponses",
                "Lorsque je suis armé uniquement",
                "Lorsqu’un collègue est tenu en joue",
                "Seulement si ma vie est en jeu et en dernier recours"
            ],
            correct: 4,
            explanation: "Combattre doit être un dernier recours, uniquement si la vie est directement menacée."
        },
        {
            id: 21,
            question: "D’où vient le mot terrorisme ?",
            answers: [
                "Tireur",
                "Aucune des autres réponses",
                "Tueur",
                "Traiteur",
                "Terreur"
            ],
            correct: 4,
            explanation: "Le mot terrorisme vient du mot « terreur », en référence à la période de la Terreur pendant la Révolution française."
        },
        {
            id: 22,
            question: "En cas d’explosion imminente (grenade), votre premier réflexe sera de :",
            answers: [
                "Relancer la grenade à l’envoyeur",
                "S’allonger face contre sol",
                "Sauter à plat ventre sur la grenade pour protéger les autres",
                "Aucune des autres réponses",
                "Se tenir debout derrière une cloison vitrée"
            ],
            correct: 1,
            explanation: "S’allonger face contre sol permet de réduire la surface exposée aux projections et à l’onde de choc."
        },
        {
            id: 23,
            question: "Pour limiter un traumatisme psychologique post attentat, il est conseillé de :",
            answers: [
                "Aucune des autres réponses",
                "De rester plusieurs jours isolé de tous, pour oublier",
                "Aller consulter un anti-terrologue",
                "Ne rien faire, cela passera après quelques mois",
                "D’en parler autour de soi pour extérioriser le traumatisme"
            ],
            correct: 4,
            explanation: "Parler de son vécu avec des proches ou un professionnel aide à surmonter le traumatisme."
        },
        {
            id: 24,
            question: "Témoin direct dans une attaque terroriste, je préviens les secours :",
            answers: [
                "Immédiatement par tous les moyens",
                "Aucune des autres réponses",
                "Immédiatement mais uniquement par SMS",
                "En m'enfuyant et en criant vers les forces de l'ordre",
                "Après m'être échappé et une fois à l'abri"
            ],
            correct: 4,
            explanation: "Il faut d’abord se mettre en sécurité avant d’alerter les secours, pour éviter de se mettre en danger."
        },
        {
            id: 25,
            question: "Puis-je entraver un terroriste venant d’être appréhendé ?",
            answers: [
                "Seulement si il est dangereux",
                "Oui, la Loi m’y autorise",
                "Uniquement si il est encore armé",
                "Non, la Loi ne m’y autorise pas",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "Tous les citoyens sont habilitées à appréhender et entraver un individu si nécessaire."
        },
        {
            id: 26,
            question: "Que signifie RETEX ?",
            answers: [
                "Répétition d’Explosion",
                "Retour d’expérience",
                "Retournement d’Explosion",
                "Répétition d’explication",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "RETEX signifie Retour d’Expérience, une méthode d’analyse post-crise pour améliorer les pratiques."
        },
        {
            id: 27,
            question: "Un attentat aveugle :",
            answers: [
                "Aucune des autres réponses",
                "Ne vise que les autorités d’Etat",
                "Est dirigé vers les Organismes d’Importance Vitale (OIV)",
                "Est dirigé vers un monument important du pays",
                "Ne vise personne en particulier"
            ],
            correct: 4,
            explanation: "Un attentat aveugle ne cible pas de victime précise ; il cherche à frapper au hasard pour semer la terreur."
        },
        {
            id: 28,
            question: "Que signifie le « R » de NRBC-E ?",
            answers: [
                "Radiologique",
                "Aucune des autres réponses",
                "Rayonnant",
                "Radicalisé",
                "radioactif"
            ],
            correct: 0,
            explanation: "Dans NRBC-E, le « R » signifie Radiologique (risque lié aux rayonnements ionisants)."
        },
        {
            id: 29,
            question: "Qu’est-ce que l’état d’urgence ?",
            answers: [
                "Un régime totalitaire qui octroie les pleins pouvoirs au Président de la République",
                "Un régime qui donne des pouvoirs supplémentaires aux agents de prévention et de sécurité",
                "Aucune des autres réponses",
                "Un régime exceptionnel qui permet à l’Etat Français de gérer une crise",
                "Un régime continu servant à instaurer un climat de sécurité au peuple"
            ],
            correct: 3,
            explanation: "L’état d’urgence est un régime juridique exceptionnel permettant à l’État de prendre des mesures spécifiques en période de crise grave."
        },
        {
            id: 30,
            question: "Que dois-je regarder pour détecter un potentiel terroriste ?",
            answers: [
                "Ses antécédents judiciaires",
                "Aucune des autres réponses",
                "Son comportement",
                "La pratique de sa religion",
                "Son apparence physique"
            ],
            correct: 2,
            explanation: "C’est le comportement (agitation, propos menaçants, attitude suspecte) qui doit alerter, pas l’apparence ou la religion."
        },
        {
            id: 31,
            question: "Comment appelle-t-on le phénomène qui explique l’ensemble des lésions anatomiques suite à une explosion ?",
            answers: [
                "Le FLASH",
                "Le CLASH",
                "Aucune des autres réponses",
                "Le BLAST",
                "La CLAC"
            ],
            correct: 3,
            explanation: "Le terme « blast » désigne l’ensemble des lésions causées par une explosion (primaire, secondaire, tertiaire, quaternaire)."
        },
        {
            id: 32,
            question: "La première équipe spécialisée dans les interventions anti-terroristes est présente dans le but :",
            answers: [
                "De prendre des photographies de la scène pour récupérer un maximum de preuves",
                "De neutraliser les tireurs actifs",
                "De secourir les victimes",
                "Aucune des autres réponses",
                "D’évacuer les blessés"
            ],
            correct: 1,
            explanation: "La priorité des forces d’intervention anti-terroristes est de neutraliser les tireurs actifs pour sécuriser la zone."
        },
        {
            id: 33,
            question: "En cas de plan Vigipirate, l’accès à n’importe quel établissement peut-être soumis à une palpation de sécurité : qui peut en décider ?",
            answers: [
                "Le préfet, par un arrêté spécifique",
                "Le CNAPS, par une circulaire ministérielle",
                "Le chef de l’établissement dans le règlement intérieur",
                "Aucune des autres réponses",
                "L’agent de sécurité, si les consignes spéciales le prévoient"
            ],
            correct: 0,
            explanation: "C’est le préfet qui peut décider de mesures de sécurité renforcées, y compris les palpations, par arrêté."
        },
        {
            id: 34,
            question: "Qu’est ce qu’un pneumothorax ?",
            answers: [
                "Un remplissage d’air dans la cavité pleurale",
                "Une brulure au thorax",
                "Une protection thoracique contre les coups",
                "Aucune des autres réponses",
                "Un médicament vendu uniquement en pharmacie"
            ],
            correct: 0,
            explanation: "Un pneumothorax est la présence d’air dans la cavité pleurale, comprimant le poumon et gênant la respiration."
        },
        {
            id: 35,
            question: "Doit-on obligatoirement déclencher l’alarme incendie afin de prévenir les occupants d’un attentat ?",
            answers: [
                "Non, ce n’est pas préconisé car cela provoquerait un regroupement de personnes",
                "Oui, dès que j’entends des coups de feu",
                "Oui, même si les consignes de l’établissement ne stipulent pas",
                "Aucune des autres réponses",
                "Oui, dès lors que le doute subsiste"
            ],
            correct: 0,
            explanation: "Il ne faut pas déclencher l’alarme incendie car cela pourrait rassembler des personnes dans des zones dangereuses."
        }
    ]
};
