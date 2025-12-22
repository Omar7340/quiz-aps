// data/quiz2.js - UV9 - Palpation
const quizConfig = {
    id: "quiz2",
    title: "UV9 - Palpation",
    description: "Questionnaire sur les palpations de sécurité, cadre légal, conditions et procédures",
    timeEstimate: "30-45 minutes",
    icon: "fa-search",
    questions: [
        {
            id: 1,
            question: "Parmi ces propositions, quelles sont les conditions faisant partie de celles permettant les palpations de sécurité lors d’un rassemblement festif de 500 personnes ?",
            answers: [
                "Habilitation par l’employeur, sous le contrôle d’un APJ, agrément par le préfet",
                "Aucune des autres réponses",
                "Consentement exprès de la personne, formation de formateur en palpation",
                "Personne de même sexe, consentement exprès de la personne, sous contrôle d’un OPJ",
                "Consentement de la personne, de sexe opposé, arrêté préfectoral"
            ],
            correct: 3,
            explanation: "Pour les palpations lors d’un rassemblement festif de 500 personnes, il faut notamment que l'agent soit de même sexe, que la personne donne son consentement exprès, et que le contrôle se fasse sous la responsabilité d’un OPJ."
        },
        {
            id: 2,
            question: "Un agent de sécurité a-t-il le droit d’effectuer, à l’entrée du magasin, une palpation de sécurité ?",
            answers: [
                "Oui, à la demande du client de la société de sécurité privée",
                "Aucune des autres réponses",
                "Oui avec une autorisation du CNAPS",
                "Oui sur ordre de son employeur",
                "Oui sur autorisation préfectorale ou en cas d’état de nécessité"
            ],
            correct: 4,
            explanation: "Une palpation en magasin n’est autorisée que sur autorisation préfectorale ou en cas d’état de nécessité (article 122-7 du Code pénal)."
        },
        {
            id: 3,
            question: "Lors de palpations de sécurité en vue d’accéder aux manifestations, la formulation « sous contrôle d’un OPJ » signifie ?",
            answers: [
                "Qu’un OPJ doit être obligatoirement présent sur les lieux de la manifestation",
                "Qu’un OPJ peut désigner un Agent de Police adjoint pour le représenter",
                "Aucune des autres réponses",
                "Qu’un nombre d’OPJ proportionné au nombre d’agents doit être présent",
                "La désignation d’un OPJ par le préfet et sa situation d’astreinte"
            ],
            correct: 4,
            explanation: "« Sous contrôle d’un OPJ » signifie que l’OPJ est désigné par le préfet et peut être en astreinte, sans obligation de présence physique permanente."
        },
        {
            id: 4,
            question: "Me trouvant au PCS de l’entreprise, je peux procéder à une inspection visuelle à l’intérieur d’un véhicule qui souhaite entrer si les consignes le prévoient :",
            answers: [
                "D’autorité car je suis habilité",
                "Seulement si le véhicule est classifié",
                "Aucune des autres réponses",
                "Si le conducteur est consentant",
                "Non car interdit par la loi"
            ],
            correct: 3,
            explanation: "L’inspection visuelle d’un véhicule nécessite le consentement du conducteur, même si les consignes le prévoient."
        },
        {
            id: 5,
            question: "Parmi ces propositions, quelles sont les conditions faisant partie de celles permettant les palpations de sécurité lors d’un rassemblement sportif de plus de 300 personnes ?",
            answers: [
                "Personne de même sexe sauf si agent agréé par le CNAPS à la demande de son employeur",
                "Consentement exprès de la personne et agrément de son employeur",
                "Attestation de formateur en palpation réalisées en moins de 13 secondes",
                "Sous le contrôle d’un OPJ et personne de même sexe",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Pour un rassemblement sportif de plus de 300 personnes, les palpations doivent être réalisées sous contrôle d’un OPJ et par une personne de même sexe."
        },
        {
            id: 6,
            question: "Qu’est-ce qu’une palpation de sécurité ?",
            answers: [
                "Aucune des autres réponses",
                "Le fait de passer des personnes au magnétomètre",
                "Le fait de demander aux personnes de vider leurs sacs",
                "Le fait de mettre les mains dans les poches des personnes",
                "Le fait de demander aux personnes d’enlever leurs vêtements"
            ],
            correct: 0,
            explanation: "Aucune des propositions ne définit correctement la palpation de sécurité, qui consiste en un examen externe des vêtements sans pénétration des poches ni déshabillage."
        },
        {
            id: 7,
            question: "Je suis agent dans un magasin: sous quelles conditions ai-je le droit d’inspecter des sacs ?",
            answers: [
                "Je peux faire une inspection visuelle, dès lors que j’ai un doute",
                "Je peux vérifier visuellement et fouiller les sacs sans avoir besoin du consentement du propriétaire",
                "Aucune des autres réponses",
                "Si c’est prévu dans les consignes, je peux fouiller les sacs sans besoin de consentement du propriétaire",
                "J’ai le droit de faire une inspection visuelle des bagages et, avec le consentement de leur propriétaire, à leur fouille"
            ],
            correct: 4,
            explanation: "L’inspection visuelle est autorisée ; la fouille nécessite le consentement exprès de la personne."
        },
        {
            id: 8,
            question: "En tant qu’agent palpeur, ai-je le droit de vérifier une personne en situation de handicap ?",
            answers: [
                "Non",
                "Non, seules les forces de l’ordre sont habilitées",
                "Oui uniquement avec une attestation de palpation PMR",
                "Oui, en respectant certaines règles",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Oui, sous réserve du respect des règles spécifiques (consentement, dignité, même sexe, etc.)."
        },
        {
            id: 9,
            question: "Quel est le seuil fixé par le Code de la Sécurité Intérieure, concernant l’obligation de palpation de sécurité des manifestations ?",
            answers: [
                "Pour l’accès aux enceintes dans lesquelles est organisée des manifestations rassemblant plus de 300 personnes",
                "Pour l’accès aux enceintes dans lesquelles est organisée des manifestations rassemblant plus de 1500 personnes",
                "Pour l’accès aux enceintes dans lesquelles est organisée une manifestation rassemblant de 150 à 200 personnes",
                "Aucune des autres réponses",
                "Pour l’accès aux enceintes dans lesquelles est organisée une manifestation, rassemblant moins de 300 personnes"
            ],
            correct: 0,
            explanation: "Le seuil est fixé à 300 personnes pour les manifestations sportives, culturelles ou festives."
        },
        {
            id: 10,
            question: "Peut-on effectuer une palpation dans un magasin, lors d’un appréhension d’une personne qui présente un danger pour lui-même ou autrui ?",
            answers: [
                "Non, jamais",
                "Pour trouver des preuves du vol (délits flagrant)",
                "Oui dans le cadre de l’état de nécessité (122-7 du Code Pénal)",
                "Aucune des autres réponses",
                "A chaque fois qu’on le désire"
            ],
            correct: 2,
            explanation: "En cas d’état de nécessité (danger immédiat), la palpation peut être justifiée."
        },
        {
            id: 11,
            question: "Votre employeur a refusé de vous former aux palpations de sécurité invoquant un coût trop élevé. Il vous demande d’effectuer des palpations de sécurité lors d’un concert. Que faites-vous ?",
            answers: [
                "J’accepte volontiers pour créer une bonne ambiance de travail",
                "Je refuse, sauf si je suis rémunéré(e) au coefficient 150",
                "Aucune des autres réponses",
                "Je refuse, car en cas de contrôle je peux être sanctionné(e)",
                "J’accepte quand même car je connais la technique"
            ],
            correct: 3,
            explanation: "Sans formation et habilitation, l’agent ne peut légalement pratiquer de palpation et encourt des sanctions."
        },
        {
            id: 12,
            question: "Les membres du service d’ordre de l’organisation chargés d’une mission relative aux palpations de sécurité doivent :",
            answers: [
                "Être dotés d’un signe distinctif permettant d’identifier leur qualité",
                "Porter une tenue qui officialise leur mission en tant que membre des forces de l’ordre",
                "Être dispensés du port d’une tenue spécifique",
                "Porter tous la même tenue mais sans obligation particulière",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Ils doivent porter un signe distinctif visible permettant de les identifier comme membres du service d’ordre."
        },
        {
            id: 13,
            question: "Je suis agent dans un établissement: sous quelles conditions ai-je le droit d’inspecter des sacs ?",
            answers: [
                "Je peux faire une inspection visuelle, même si ce n’est pas dans les consignes",
                "Je peux vérifier visuellement et fouiller tous les sacs",
                "J’ai le droit de faire une inspection visuelle des bagages et, avec le consentement de leur propriétaire, à leur fouille",
                "Si c’est prévu dans les consignes, je peux fouiller les sacs sans besoin de consentement du propriétaire",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "L’inspection visuelle est libre ; la fouille nécessite un consentement exprès."
        },
        {
            id: 14,
            question: "Quelles sont les méthodes pour les agents masculins pour effectuer des vérifications de sécurité sur des femmes qui sont au contrôle d’accès :",
            answers: [
                "Le contrôle visuel des bagages",
                "Les palpations de sécurité",
                "Aucune des autres réponses",
                "La fouille du corps",
                "La fouille à corps uniquement avec le consentement de la personne"
            ],
            correct: 0,
            explanation: "Un agent masculin ne peut pas palper une femme ; il doit se limiter au contrôle visuel des bagages."
        },
        {
            id: 15,
            question: "D’après le Code de la Sécurité Intérieure, quelles conditions devez-vous respecter pour effectuer une palpation de sécurité ?",
            answers: [
                "Détenir l’agrément du préfet, l’habilitation de l’employeur et effectuer la palpation sur n’importe quelle personne",
                "Détenir l’agrément du préfet et l’habilitation de l’employeur",
                "Détenir l’agrément du préfet et effectuer la palpation de même sexe avec son accord",
                "Détenir l’agrément du préfet, l’habilitation de l’employeur et effectuer la palpation sur une personne de même sexe avec son accord"
            ],
            correct: 3,
            explanation: "Il faut : agrément préfectoral, habilitation employeur, même sexe, et consentement exprès."
        },
        {
            id: 16,
            question: "On vous demande d’effectuer des palpations de sécurité sur une personne. Parmi ces propositions laquelle est valable ?",
            answers: [
                "La palpation peut se faire sans l’accord de la personne",
                "Les agents de sécurité peuvent procéder à des palpations de sécurité sans condition particulière",
                "La palpation ne peut se faire qu’avec l’accord de la personne, sauf dans le cas de l’état de nécessité",
                "Aucune des autres réponses",
                "Retirer les vêtements"
            ],
            correct: 2,
            explanation: "Le consentement est obligatoire, sauf en cas d’état de nécessité (danger immédiat)."
        },
        {
            id: 17,
            question: "Vous n’êtes pas agréé. Votre employeur vous habilite pour effectuer des palpations lors d’une manifestation artistique réunissant plus de 20 000 personnes, que faites-vous ?",
            answers: [
                "Vous lui demandez s’il a une autorisation Préfectorale",
                "Vous acceptez car votre employeur a engagé sa responsabilité",
                "Aucune des autres réponses",
                "Vous lui demandez s’il dispose d’une autorisation du CNAPS en cas de circonstances exceptionnelles",
                "Vous lui rappelez que vous n’avez pas d’agrément du CNAPS et que vous n’avez pas le droit de le faire"
            ],
            correct: 4,
            explanation: "Sans agrément préfectoral, l’agent ne peut pas pratiquer de palpations, même avec l’habilitation de l’employeur."
        },
        {
            id: 18,
            question: "Faisant suite à une appréhension en flagrant délit de vol, je peux procéder à une palpation de sécurité",
            answers: [
                "Je peux demander à l’individu de se déshabiller afin d’être certain qu’il ne détient plus de produit",
                "Aucunes des autres réponses",
                "Je n’ai pas le droit de procéder à une palpation de sécurité sans motif légitime sauf cas d’état de nécessité",
                "Je dois avoir le consentement de la personne et d’un tiers pour procéder à cette palpation de sécurité",
                "Je n’ai pas le droit de procéder à une palpation de sécurité, sauf cas de légitime défense"
            ],
            correct: 2,
            explanation: "En dehors de l’état de nécessité, l’agent de sécurité ne peut pas palper une personne appréhendée pour vol."
        },
        {
            id: 19,
            question: "En cas d'événement récréatif rassemblant plus de 300 personnes, l'agrément de palpation est délivré par :",
            answers: [
                "Le Préfet",
                "La CLAC",
                "Aucune des autres réponses",
                "L'OPJ",
                "Le Maire"
            ],
            correct: 1,
            explanation: "C’est le CNAPS qui délivre l’agrément pour les palpations de sécurité."
        },
        {
            id: 20,
            question: "Dans quelles situations pourrais-je effectuer des palpations de sécurité ?",
            answers: [
                "Dans tout le magasin sur des personnes soupçonnées de vouloir fumer",
                "À la sortie du magasin sur un individu connu pour des actes de vol",
                "À l'intérieur d'une salle de concert, à la demande du chef de poste",
                "Dans tout lieu avec l'autorisation préfectorale",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Les palpations ne sont autorisées que dans le cadre prévu par la loi, avec autorisation préfectorale et dans les conditions strictes du CSI."
        },
        {
            id: 21,
            question: "Quelles sont les méthodes pour les agents féminins pour effectuer des vérifications de sécurité sur des hommes qui sont au contrôle d’accès :",
            answers: [
                "Aucune des autres réponses",
                "La fouille à corps uniquement avec le consentement de la personne",
                "L’utilisation du magnétomètre",
                "Les palpations de sécurité",
                "La fouille au corps"
            ],
            correct: 2,
            explanation: "Une agente féminine ne peut pas palper un homme ; elle doit utiliser d’autres méthodes (contrôle visuel, magnétomètre)."
        },
        {
            id: 22,
            question: "Pour procéder à des palpations de sécurité dans les enceintes de manifestations sportives, les employés des entreprises de surveillance et de gardiennage doivent :",
            answers: [
                "Avoir été habilités par leur employeur, puis agréés par la C.L.A.C",
                "Avoir été habilités par leur employeur, puis agréés par le préfet de département",
                "Aucune des autres réponses",
                "Avoir été agréés par la commission internationale suite à l’envoi d’un dossier par l’organisateur de la manifestation",
                "Rien n’est nécessaire"
            ],
            correct: 0,
            explanation: "Il faut une habilitation de l’employeur et un agrément délivré par le CNAPS."
        },
        {
            id: 23,
            question: "Dans quelle situation pourrais-je effectuer des palpations de sécurité ?",
            answers: [
                "À la sortie d’un magasin sur un individu connu pour des actes de vols fréquents, sur demande du responsable du magasin",
                "À l’entrée d’un magasin sur toute personne suspecte",
                "À l’entrée d’une salle de concert, sans les agréments réglementaires",
                "Sur une personne appréhendée suite à un flagrant délit qui menaçait de se couper les veines",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Recherche d'arme par exemple."
        },
        {
            id: 24,
            question: "Un agent de prévention et de sécurité a-t-il le droit de pratiquer des palpations de sécurité ?",
            answers: [
                "Oui, s’il est habilité par son entreprise",
                "Aucune des autres réponses",
                "Oui, en toutes circonstances",
                "Oui, a minima s’il est agréé par le CNAPS ou par la préfecture et habilité par son employeur",
                "Non sauf s’il est habilité par son employeur"
            ],
            correct: 3,
            explanation: "Il faut au minimum un agrément (CNAPS ou préfecture) et une habilitation de l’employeur."
        },
        {
            id: 25,
            question: "Suite à une appréhension en flagrant délit pour vol, je vois que l’individu possède un couteau dans sa poche de blouson. Que dois-je faire ?",
            answers: [
                "Je ne peux pas saisir d’autorité l’arme car ce serait assimilé à une réquisition",
                "Aucune des autres réponses",
                "Je menottes l’individu pour qu’il ne puisse pas faire usage de son arme",
                "Je demande à la personne de bien vouloir poser délicatement et en sécurité le couteau au sol",
                "Je peux saisir d’autorité l’arme par mesure de sécurité"
            ],
            correct: 3,
            explanation: "Je demande à la personne de bien vouloir poser délicatement et en sécurité le couteau au sol"
        },
        {
            id: 26,
            question: "Effectuer une palpation, c’est :",
            answers: [
                "Aucune des autres réponses",
                "Mettre les mains dans les poches pour vérifier qu’une personne ne porte pas d’objet dangereux",
                "Fouiller une personne qui a un comportement suspect",
                "Passer les mains par-dessus les vêtements afin de vérifier qu’une personne ne porte pas d’objets dangereux",
                "Faire une inspection visuelle des bagages et des sacs à main"
            ],
            correct: 3,
            explanation: "La palpation de sécurité est un examen externe, sans pénétrer dans les poches ni déshabiller la personne."
        }
    ]
};
