
// data/quiz_uv8.js - Quiz UV8 Module Professionnel
const quizConfig = {
    id: "quiz_uv8",
    title: "UV8 - Module Professionnel",
    description: "Questionnaire sur les pratiques professionnelles, la réglementation et les procédures des APS",
    timeEstimate: "40-50 minutes",
    icon: "fa-user-shield",
    questions: [
        {
            id: 1,
            question: "Si vous êtes blessé au cours d’une interpellation effectuée durant votre vacation, s’agit-il d’un accident du travail ?",
            answers: [
                "Non",
                "Oui",
                "Seulement si mon incapacité de travail (ITT) est supérieure à 8 jours",
                "Aucunes des réponses précédentes"
            ],
            correct: 2,
            explanation: "Un accident survenu pendant le travail, lors d'une intervention professionnelle, est considéré comme un accident du travail, quelle que soit la durée de l'ITT."
        },
        {
            id: 2,
            question: "Lors d'une manifestation sportive à risque, un APS peut-il porter sans autorisation Préfectorale ?",
            answers: [
                "Une arme de catégorie D",
                "Un pistolet à impulsion électrique",
                "Une bombe de défense",
                "Une matraque téléscopique",
                "Aucune des autres réponses"
            ],
            correct: 4,
            explanation: "Les armes de catégorie D (matraques, bombes lacrymogènes) peuvent être portées par les APS dans le cadre de leurs missions, sous certaines conditions, sans autorisation préfectorale spécifique pour ce type d'arme."
        },
        {
            id: 3,
            question: "Il doit être impérativement disponible dans un PC de sécurité :",
            answers: [
                "Les consignes générales",
                "Toutes les réponses sont bonnes",
                "Les consignes particulières",
                "La main courante",
                "Les itinéraires de rondes",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "Un PC de sécurité doit disposer de tous ces documents : consignes générales, consignes particulières, main courante, itinéraires de rondes, etc."
        },
        {
            id: 4,
            question: "En tant qu’agent de sécurité dans un centre commercial, dans l’exercice de vos fonctions, vous devez porter assistance à toute personne en péril :",
            answers: [
                "Uniquement si la personne est cliente",
                "S’il n’y a pas de risque pour moi-même ou autrui",
                "Oui si les consignes le prévoient",
                "Dans tous les cas, même au péril de ma vie",
                "Aucune des réponses proposées"
            ],
            correct: 1,
            explanation: "L'obligation d'assistance est régie par l'article 223-6 du code pénal, mais l'agent doit évaluer les risques et agir dans le respect des consignes et de sa propre sécurité."
        },
        {
            id: 5,
            question: "Lors d'un contrôle des autorités compétentes pendant votre travail, vous devez pouvoir leur présenter :",
            answers: [
                "Votre carte de sécurité sociale",
                "Votre carte professionnelle matérialisée",
                "Votre contrat de travail",
                "Un ordre de mission de votre employeur",
                "Aucune des réponses proposées"
            ],
            correct: 1,
            explanation: "La carte professionnelle est obligatoire et doit être présentée aux autorités lors d'un contrôle."
        },
        {
            id: 6,
            question: "Qui peut procéder à une réquisition ?",
            answers: [
                "Un officier de la police judiciaire",
                "Un officier supérieur du Ministère de la Défense",
                "Un agent de police judiciaire adjoint",
                "Un Huissier de justice",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "Seuls les officiers de police judiciaire (OPJ) ont le pouvoir de réquisitionner des personnes ou des biens dans le cadre d'une enquête."
        },
        {
            id: 7,
            question: "Au cours d'une ronde, il est déconseillé :",
            answers: [
                "D’utiliser l’Emetteur/Récepteur",
                "D'utiliser la lampe torche",
                "D'utiliser les ascenseurs",
                "D'utiliser le contrôleur de ronde",
                "Aucune des réponses proposées"
            ],
            correct: 2,
            explanation: "L'utilisation des ascenseurs est déconseillée pendant une ronde pour éviter de se retrouver piégé et pour favoriser la surveillance active des escaliers et couloirs."
        },
        {
            id: 8,
            question: "Est considérée comme faute professionnelle :",
            answers: [
                "Ne pas porter ses gants pendant la ronde",
                "La somnolence pendant le service",
                "Manger après 13h00",
                "Tousser pendant un appel téléphonique",
                "Aucune des réponses précédentes"
            ],
            correct: 1,
            explanation: "La somnolence pendant le service constitue une faute professionnelle car elle compromet la vigilance et la sécurité."
        },
        {
            id: 9,
            question: "Peut être considéré comme faute professionnelle, le fait de :",
            answers: [
                "Arriver sur son poste de travail alcoolisé",
                "Etre vigilant et attentif pendant sa vacation",
                "Faire tomber le téléphone pendant sa vacation",
                "Arriver sur son poste de travail sans être en tenue",
                "Aucune des réponses précédentes"
            ],
            correct: 0,
            explanation: "L'alcoolémie sur le poste de travail est une faute grave, pouvant entraîner des sanctions disciplinaires."
        },
        {
            id: 10,
            question: "Indiquez ce que l'on doit inscrire sur la main courante :",
            answers: [
                "Les entrées et sorties des employés lors des pauses cigarettes",
                "Aucune des réponses précédentes",
                "Les noms des agents de sécurité de repos",
                "Les départs et retours de ronde",
                "Aucune des réponses précédentes"
            ],
            correct: 3,
            explanation: "La main courante sert à consigner tous les événements significatifs, y compris les départs et retours de ronde."
        },
        {
            id: 11,
            question: "Vous êtes seul sur votre site, lors de votre ronde, vous constatez qu'un individu sort par la fenêtre avec du matériel informatique dans les mains. Que faites-vous ?",
            answers: [
                "Je ne fais rien",
                "N'étant pas armé, j'attends les forces de l'ordre",
                "Je prends un maximum d'informations et je contacte les forces de l'ordre",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "L'agent doit prioriser sa sécurité, observer et collecter des informations (description, direction, véhicule) avant d'alerter les forces de l'ordre."
        },
        {
            id: 12,
            question: "Vous êtes en ronde et votre PCS vous informe d'une alarme intrusion, que faites-vous ?",
            answers: [
                "Vous terminez d'abord votre ronde avant d'effectuer la levée de doute",
                "Vous demandez à votre chef de poste d'appeler immédiatement la police",
                "Vous vous rendez sur les lieux en demandant « s'il y a du monde ? »",
                "Vous effectuez la levée de doute en faisant le moins de bruit possible"
            ],
            correct: 3,
            explanation: "La levée de doute doit être effectuée discrètement pour ne pas alerter d'éventuels intrus et permettre une intervention adaptée."
        },
        {
            id: 13,
            question: "Quel équipement utilise-t-on pour effectuer une ronde pointée ?",
            answers: [
                "La main courante",
                "Le contrôleur de ronde",
                "Le registre des consignes",
                "Le magnétomètre",
                "Aucune des réponses"
            ],
            correct: 1,
            explanation: "Le contrôleur de ronde (ou PDA de ronde) est l'outil spécifique pour enregistrer les points de contrôle lors d'une ronde pointée."
        },
        {
            id: 14,
            question: "Vous êtes rondier avec véhicule et un ami vous demande d'effectuer des rondes de surveillance de sa maison pendant son absence",
            answers: [
                "Vous le faites mais contre dédommagement en espèces",
                "Vous refusez, c'est interdit !",
                "Vous le faites amicalement et sans salaire",
                "Vous le dénoncez au CNAPS",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "Exercer une activité de surveillance en dehors du cadre professionnel et sans autorisation est interdit par le Code de la sécurité intérieure."
        },
        {
            id: 15,
            question: "Dans quel cas un agent est-il dispensé de porter sa tenue ?",
            answers: [
                "L'agent est à l'accueil d'une administration publique",
                "L'agent transporte des fonds dans un véhicule banalisé",
                "L'agent est à l'entrée d'une salle de danse",
                "L'agent est à l'entrée d'un stade de foot",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "Pour des missions de transport de fonds en véhicule banalisé, la tenue peut être omise pour des raisons de discrétion et de sécurité."
        },
        {
            id: 16,
            question: "Lorsqu'il a constaté une infraction contre l'intégrité d'une personne, un agent de sécurité privée :",
            answers: [
                "Ne doit jamais intervenir",
                "Doit obligatoirement intervenir physiquement",
                "Doit intervenir sauf en cas de danger pour lui-même ou pour autrui",
                "N’a aucun droit spécial",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "L'agent peut intervenir dans le cadre de son devoir d'assistance, mais doit prioriser sa sécurité et celle d'autrui."
        },
        {
            id: 17,
            question: "Lors du contrôle d'accès les agents prévention et de sécurité doivent connaître :",
            answers: [
                "La forme des différents titre justificatifs d'accès",
                "L'identité de toutes les personnes qui accèdent à la manifestation",
                "Le nombre de places assises du site",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "La connaissance des titres d'accès valides (badges, invitations, tickets) est essentielle pour un contrôle d'accès efficace."
        },
        {
            id: 18,
            question: "Vous n'arrivez pas à faire comprendre le nom Yaël à votre PCS comment l'épelez-vous en utilisant l'alphabet ?",
            answers: [
                "Yellow Aléa Echo Lyon",
                "yankee alpha emile lemon",
                "yankee alma echo lima",
                "yankee alpha echo lima",
                "Aucune des réponses proposées"
            ],
            correct: 3,
            explanation: "L'épellation correcte avec l'alphabet radio international est : Yankee, Alpha, Echo, Lima."
        },
        {
            id: 19,
            question: "Quelles sont les qualités de l'APS ?",
            answers: [
                "ponctualité - professionnalisme – Agressivité",
                "professionnalisme - ponctualité – probité",
                "probité - propreté - alcoolisme",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "Les qualités attendues sont le professionnalisme, la ponctualité et la probité (intégrité)."
        },
        {
            id: 20,
            question: "Le traitement d'un problème de contrôle d'accès se trouve dans les consignes :",
            answers: [
                "Incendie",
                "Techniques",
                "Sûreté",
                "CHSCT",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "Les consignes de sûreté traitent spécifiquement des procédures de contrôle d'accès, de gestion des intrusions, etc."
        },
        {
            id: 21,
            question: "Vous travaillez au contrôle d'accès en tant qu'APS, laquelle de ces réponses n'est pas la bonne ?",
            answers: [
                "De laisser passer les personnes dans le bâtiment sans aucune vérification",
                "De contrôler et de vérifier les marchandises avec des justificatifs",
                "D'informer, de renseigner et de diriger les personnes",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "Laisser passer sans vérification est contraire à la mission de contrôle d'accès."
        },
        {
            id: 22,
            question: "Indiquez une mission entrant dans le cadre d'une ronde :",
            answers: [
                "Arroser les plantes de l'accueil",
                "Distribuer le courrier",
                "Mettre en action les extincteurs",
                "Nettoyer les vitres",
                "Contrôler la vacuité des dégagements"
            ],
            correct: 4,
            explanation: "Vérifier que les issues de secours et les dégagements sont libres est une mission essentielle de la ronde."
        },
        {
            id: 23,
            question: "Lors d'un appel du PC de télésurveillance pour une alarme intrusion sur votre site, vous devez en premier lieu :",
            answers: [
                "Confirmer qu'il n'existe aucune anomalie avant d'avoir fait effectuer une levée de doute",
                "Confirmer votre identité par un mot de passe",
                "Noter l'appel sur la main courante ou le cahier de poste",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "La première étape est de s'identifier de manière sécurisée auprès du PC télésurveillance pour authentifier la communication."
        },
        {
            id: 24,
            question: "Lorsqu'il voit une personne en péril en dehors de son site, un agent de sécurité privée doit :",
            answers: [
                "Quitter son poste pour la secourir",
                "Ne rien faire s'il est seul",
                "Avertir les secours",
                "Toujours intervenir personnellement",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "Même hors site, l'agent a une obligation morale et légale d'alerter les secours (police, pompiers, SAMU)."
        },
        {
            id: 25,
            question: "Les personnels des entreprises de surveillance, gardiennage sont, dans l’exercice de leurs fonctions, revêtus d’une tenue :",
            answers: [
                "Qui ne doit pas prêter à confusion avec les uniformes définis par les textes réglementaires",
                "Rappelant le caractère officiel de leur fonction",
                "Qui comporte au moins trois insignes reproduisant la dénomination ou le sigle de l’entreprise",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "La tenue doit être distincte des uniformes des forces de l'ordre pour éviter toute confusion."
        },
        {
            id: 26,
            question: "L’activité essentielle de l’agent de sécurité, surveillant de magasin :",
            answers: [
                "Prévenir les attentats",
                "Eviter les actes de malveillance",
                "Contrôler le bon affichage des prix",
                "Remettre en place les produits dans les rayons",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "La mission principale est la prévention des vols, dégradations et autres actes de malveillance."
        },
        {
            id: 27,
            question: "Lors d'une communication radio avec le PC, quel langage doit avoir l'APS ?",
            answers: [
                "Raconter sa vie par radio",
                "Avoir une conversation longue pour tout expliquer",
                "Avoir une communication brève et claire",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "Les communications radio doivent être concises, claires et professionnelles pour être efficaces."
        },
        {
            id: 28,
            question: "Un agent de sécurité qui tient son arme chargée trébuche en marchant, et le coup part atteignant un autre agent qui le précède. Celui-ci décède sur le coup. Qu’en est-il au niveau de la Loi ?",
            answers: [
                "Il y a violence volontaire ayant entraîné la mort sans intention de la donner",
                "Il n’y a pas d’infraction car il ne l’a pas fait exprès",
                "Homicide volontaire",
                "Homicide involontaire",
                "Aucune des réponses proposées"
            ],
            correct: 3,
            explanation: "Il s'agit d'un homicide involontaire, car la mort est causée par une imprudence (arme chargée et manipulation non sécurisée)."
        },
        {
            id: 29,
            question: "Lors d'une ronde vous découvrez une victime inconsciente. Que faites-vous ?",
            answers: [
                "Je demande au PCS d'alerter la police",
                "Je prends en charge la victime et transmet mon bilan au PCS",
                "Je continue la ronde et préviens le PC Sécurité",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "La priorité est de sécuriser la victime, d'alerter les secours médicaux (via le PCS) et de transmettre un bilan précis."
        },
        {
            id: 30,
            question: "La tenue d’un agent de sécurité doit comporter des insignes reproduisant la dénomination ou le signe de l’entreprise, au nombre de :",
            answers: [
                "Au moins un insigne",
                "Au moins deux insignes",
                "Trois insignes",
                "Aucun n’est exigé, seule l’indication « SECURITE » sur un blouson ou un tee-shirt suffit"
            ],
            correct: 0,
            explanation: "La réglementation impose au moins un insignes (ex. : sur les épaules) identifiant clairement l'entreprise."
        },
        {
            id: 31,
            question: "Quel matériel est indispensable pendant la ronde de l'APS ?",
            answers: [
                "Un système géolocalisation pour les grands sites",
                "Une bouteille d'eau en cas de canicule",
                "Son émetteur-récepteur en liaison avec le P.C.S.",
                "Son téléphone portable",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "La liaison radio avec le PC de sécurité est essentielle pour la sécurité de l'agent et la coordination des interventions."
        },
        {
            id: 32,
            question: "Quand vous arrivez sur le site pour effectuer votre vacation, que faites-vous en premier avant le départ de vos collègues ?",
            answers: [
                "Vous allez boire un café avec vos collègues jusqu'à leur départ",
                "Vous effectuez la prise en compte du matériel avant le départ de l'équipe sortante",
                "Vous bavardez avec le personnel de l'entreprise où vous travaillez",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "La prise en compte du matériel, des consignes et du bilan de la vacation précédente est la première étape professionnelle."
        },
        {
            id: 33,
            question: "Un agent de prévention et de sécurité peut-il, au regard du livre VI du Code de la Sécurité Intérieure :",
            answers: [
                "Déplacer le véhicule d'un visiteur garé sur un emplacement réservé",
                "Vérifier le bon emplacement des extincteurs d'un site",
                "Distribuer le courrier",
                "Sortir les poubelles du site dont il assure la surveillance",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "La vérification des extincteurs entre dans les missions de sécurité et de prévention incendie autorisées."
        },
        {
            id: 34,
            question: "Au regard du code de la sécurité intérieure et des textes en vigueur, un APS peut :",
            answers: [
                "porter des plis urgent à la poste",
                "distribuer le courrier",
                "contrôler le fonctionnement des BAES",
                "Déplacer le véhicule d'un visiteur garé sur l'emplacement réservé au PDG de la société",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "Le contrôle des Blocs Autonomes d'Éclairage de Sécurité (BAES) fait partie des missions de sécurité incendie."
        },
        {
            id: 35,
            question: "La ronde pointée est une ronde :",
            answers: [
                "sans itinéraire prédéfini",
                "Facultative",
                "avec itinéraire prédéfinis",
                "Aléatoire",
                "Aucune des réponses précédentes"
            ],
            correct: 2,
            explanation: "La ronde pointée suit un itinéraire précis avec des points de contrôle obligatoires à enregistrer."
        },
        {
            id: 36,
            question: "Vous quittez le pc pour départ de ronde avec votre émetteur-récepteur, que faites-vous immédiatement ?",
            answers: [
                "J'effectue un test de mon émetteur récepteur avec le pc",
                "Je baisse le volume de mon émetteur récepteur pour ne pas être dérangé",
                "Rien, car mon collègue sait que je pars en ronde",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "Un test de communication avant le départ assure que la liaison avec le PC est opérationnelle."
        },
        {
            id: 37,
            question: "Je suis au PCS, mon collègue m'informe de l'encombrement d'une circulation par du mobilier, que faites-vous ?",
            answers: [
                "Je contacte le service concerné pour faire retirer le mobilier",
                "Je ne fais rien",
                "Je demande à l'agent de le retirer lui-même",
                "Aucune des réponses proposées"
            ],
            correct: 0,
            explanation: "Le PCS doit coordonner avec les services internes (entretien, sécurité) pour résoudre le problème sans compromettre la sécurité."
        }
    ]
};
