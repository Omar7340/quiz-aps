// data/quiz5.js - UV3 - Gestion des Conflits
const quizConfig = {
    id: "quiz5",
    title: "UV3 - Gestion des Conflits",
    description: "Questionnaire sur la communication, la posture, la gestion de l'agressivité et la résolution de conflits en sécurité privée.",
    timeEstimate: "30-40 minutes",
    icon: "fa-users",
    questions: [
        {
            id: 1,
            question: "Quelle est l'attitude adaptée pour résoudre un conflit ?",
            answers: [
                "Aucune des réponses",
                "Imposer – Dialoguer – Interroger – Inciter",
                "Écouter – Reformuler – Interroger – Confirmer",
                "Critiquer – Écouter – Imposer – Inciter",
                "Interroger – Infirmer – Reformuler – Accepter"
            ],
            correct: 2,
            explanation: "La méthode de communication non-violente privilégie l'écoute active, la reformulation, le questionnement et la confirmation pour désamorcer les tensions."
        },
        {
            id: 2,
            question: "Vous êtes en conflit avec une personne. Lors de vos échanges, vous devez :",
            answers: [
                "Essayer de vous imposer par votre discours",
                "Écouter attentivement et réagir aux mots et aux sentiments",
                "Parler un peu plus de la situation que de l'écouter",
                "Écouter passivement, acquiescer et vous excuser",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "L'écoute active et la prise en compte des émotions permettent de mieux comprendre l'interlocuteur et de désamorcer le conflit."
        },
        {
            id: 3,
            question: "Lorsqu'une personne vous irrite, quelle doit être votre façon de communiquer avec elle ?",
            answers: [
                "Ne rien dire et ne rien faire",
                "Utiliser un langage fort et direct",
                "Aucune des autres réponses",
                "Essayer de persuader cette personne d'arrêter",
                "Parler poliment et exprimer votre point de vue"
            ],
            correct: 4,
            explanation: "Il faut garder son calme, rester poli et exposer son point de vue de manière constructive pour éviter l'escalade."
        },
        {
            id: 4,
            question: "Dans l'analyse des postures, à quoi correspond le corps tassé ?",
            answers: [
                "Découragement",
                "Aucune des réponses",
                "Implication personnelle",
                "Désengagement",
                "Affirmation de soi"
            ],
            correct: 0,
            explanation: "Un corps tassé, épaules basses, tête baissée, traduit souvent un état de découragement, de résignation ou de soumission."
        },
        {
            id: 5,
            question: "Comment un agent de prévention et de sécurité peut-il prévenir un conflit ?",
            answers: [
                "En haussant le ton dès qu'un conflit débute",
                "En démontrant aux personnes qu'il est détenteur de l'autorité",
                "Aucune des autres réponses",
                "En pratiquant un sport de combat",
                "En ayant une attitude et un comportement exemplaire"
            ],
            correct: 4,
            explanation: "Une attitude professionnelle, calme, respectueuse et exemplaire est la meilleure façon de prévenir les conflits."
        },
        {
            id: 6,
            question: "Une opposition d'idées où chaque personne exprime son hostilité pour l'obtention d'une même ressource s'appelle :",
            answers: [
                "Aucune des réponses",
                "Un conflit",
                "Un parrainage",
                "Une interview",
                "Un exposé"
            ],
            correct: 1,
            explanation: "Un conflit est une opposition entre deux ou plusieurs parties ayant des intérêts, des besoins ou des valeurs divergents."
        },
        {
            id: 7,
            question: "Vous êtes dans un poste de filtrage, lors d'un concert, un spectateur refuse de se soumettre à l'inspection visuelle de ses bagages. Que faites-vous en premier ?",
            answers: [
                "Vous lui rappelez les conditions d'accès prévus pour ce concert",
                "Vous ouvrez ses bagages pour contrôler leurs contenus",
                "Vous le laissez exceptionnellement rentrer car c'est un habitué",
                "Vous lui refusez définitivement l'accès",
                "Aucune des réponses"
            ],
            correct: 0,
            explanation: "La première étape est de rappeler calmement et clairement la règle en vigueur, avant d'envisager toute autre mesure."
        },
        {
            id: 8,
            question: "Quel type de personne peut-être plus générateur de conflit ?",
            answers: [
                "Une personne bavarde",
                "Une personne ne parlant pas le français",
                "Une personne insatisfaite",
                "Une personne timide",
                "Aucune des réponses"
            ],
            correct: 2,
            explanation: "Une personne insatisfaite, frustrée ou se sentant lésée est plus susceptible d'être à l'origine ou de s'impliquer dans un conflit."
        },
        {
            id: 9,
            question: "Quelle est la meilleure attitude face à un individu qui ne veut pas se soumettre aux règlements de l'établissement ?",
            answers: [
                "Systématiquement demander l'aide d'un autre agent",
                "Feindre une intervention importante pour limiter la confrontation",
                "L'écouter, argumenter et proposer des solutions conformément aux consignes du site",
                "Aucune des autres réponses",
                "L'expulser gentiment de l'établissement"
            ],
            correct: 2,
            explanation: "Il faut combiner écoute, argumentation et recherche de solutions dans le cadre défini par les consignes."
        },
        {
            id: 10,
            question: "Dans l'analyse des postures, à quoi correspond le corps en arrière ?",
            answers: [
                "Affirmation de soi",
                "Désengagement",
                "Aucune des réponses",
                "Implication personnelle",
                "Découragement"
            ],
            correct: 1,
            explanation: "Un recul du corps, une posture en arrière, peut indiquer un désengagement, un retrait ou un refus d'implication."
        },
        {
            id: 11,
            question: "Dans l'analyse des postures, à quoi correspond la tête baissée ?",
            answers: [
                "À l'assurance",
                "À l'acceptation passive",
                "À la courbure de l'échine",
                "À la séduction",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "La tête baissée peut signifier l'acceptation passive, la soumission, la honte."
        },
        {
            id: 12,
            question: "À quoi sert une GTC (Gestion Technique Centralisée) ou GTB (Gestion Technique du Bâtiment) ?",
            answers: [
                "À coordonner les équipes techniques extérieures au site",
                "Aucune des autres réponses",
                "À gérer et piloter à distance les différents équipements techniques du site",
                "À gérer le système de communication radio du site",
                "À identifier les dysfonctionnements du système de sécurité incendie"
            ],
            correct: 2,
            explanation: "Une GTC/GTB est un système informatique qui supervise et contrôle les équipements techniques d'un bâtiment (chauffage, climatisation, éclairage, sécurité, etc.)."
        },
        {
            id: 13,
            question: "Un groupe d'individus cagoulés et armés pénètre dans votre établissement, vous êtes seul que faites-vous ?",
            answers: [
                "J'appelle la relève pour me venir en aide le plus tôt possible",
                "Je dois agir physiquement pour l'expulser de l'établissement",
                "Je fais appel aux forces de l'ordre le plus rapidement possible",
                "Aucune des autres réponses",
                "Je m'enfuis si je peux ou sinon me confine, et je contacte le 112 par SMS"
            ],
            correct: 2,
            explanation: "Face à une menace, la priorité est l'alerte des secours."
        },
        {
            id: 14,
            question: "Suite à une alarme feu, une unité de signalisation est allumée en rouge clignotant, à quoi correspond cette information ?",
            answers: [
                "Au moins un DAS est en défaut de position de sécurité",
                "C’est une alarme feu",
                "Aucune des réponses",
                "Tous les DAS sont en position de sécurité",
                "Au moins un DAS est en défaut de position d’attente"
            ],
            correct: 0,
            explanation: "Sur un SSI (Système de Sécurité Incendie), un voyant rouge clignotant indique généralement un défaut de position de sécurité."
        },
        {
            id: 15,
            question: "Quels sont les 4 comportements pouvant être adoptés lors d'un conflit ?",
            answers: [
                "Fuite – Assertivité – Négociation – Manipulation",
                "Assertivité – Arrogance – Manipulation – Agressivité",
                "Agressivité – Assertivité – Fuite – Manipulation",
                "Aucune des réponses",
                "Agressivité – Fuite – Manipulation – Monologue"
            ],
            correct: 3,
            explanation: "Aucune des réponses."
        },
        {
            id: 16,
            question: "L’agent aperçoit un client jeter un paquet de biscuit à l’intérieur de la surface de vente après l’avoir mangé. L’agent le ramasse. Le client est pris sur le fait. Que doit faire l’agent ?",
            answers: [
                "Aucune des autres réponses",
                "L’agent menace le client d’interdiction de revenir",
                "L’agent jette le paquet de biscuits à la poubelle",
                "L’agent le réprimande d’avoir mangé des biscuits non achetés et l’accuse de vol",
                "L’agent lui tend le paquet de biscuit pour qu’il le paye avec ses courses en caisse"
            ],
            correct: 4,
            explanation: "L'approche la plus professionnelle est de confronter le client calmement avec la preuve (l'emballage) et de lui demander de régulariser la situation en caisse, sans accusation directe de vol."
        },
        {
            id: 17,
            question: "Quelle est la première attitude à adopter pour résoudre un conflit ?",
            answers: [
                "La confrontation physique",
                "Aucune des autres réponses",
                "L’agressivité",
                "Le dialogue constructif",
                "La fuite"
            ],
            correct: 3,
            explanation: "Le dialogue calme et constructif est la base de toute tentative de résolution de conflit."
        },
        {
            id: 18,
            question: "Quel est l’un des aspects négatifs du conflit ?",
            answers: [
                "Stimulation d’énergie",
                "Aucune des autres réponses",
                "Responsabilité de l’individu",
                "Dépense d’énergie émotive",
                "Créativité"
            ],
            correct: 3,
            explanation: "Un conflit peut être épuisant émotionnellement, générer du stress et consommer beaucoup d'énergie psychique."
        },
        {
            id: 19,
            question: "Dans l’analyse des postures, à quoi correspond le corps déployé ?",
            answers: [
                "Implication personnelle",
                "Aucune des autres réponses",
                "Désengagement",
                "Affirmation de soi",
                "Découragement"
            ],
            correct: 3,
            explanation: "Une posture ouverte, épaules en arrière, poitrine offerte, traduit souvent l'affirmation de soi, la confiance, voire la domination."
        },
        {
            id: 20,
            question: "Un membre du personnel perd ses droits d’accès à l’établissement dans lequel il travaille. L’agent en poste lui interdit donc l’accès. Le ton monte :",
            answers: [
                "L’agent le laisse rentrer juste pour prendre ses affaires et dire au revoir à ses collègues.",
                "L’agent le saisit et le conduit à l’extérieur du site.",
                "Aucune des autres réponses",
                "L’agent reste ferme et diplomate, il lui propose de contacter directement son responsable.",
                "L’agent porte un jugement personnel sur sa situation et lui interdit l’accès."
            ],
            correct: 3,
            explanation: "L'agent doit rester ferme sur la consigne (refus d'accès), mais diplomate en proposant une solution alternative (contacter le responsable) pour désamorcer la tension."
        },
        {
            id: 21,
            question: "Qu’est-ce qu’un conflit ?",
            answers: [
                "Aucune des autres réponses",
                "Une situation problématique n’ayant pas abouti",
                "Une situation qui va obligatoirement engendrer des coups",
                "Une situation où le plus fort a toujours raison",
                "Une situation où une personne a toujours tort"
            ],
            correct: 1,
            explanation: "Aucune des définitions proposées n'est satisfaisante. Un conflit est une opposition d'intérêts, de valeurs, de besoins ou de perceptions entre parties."
        },
        {
            id: 22,
            question: "Dans une galerie marchande, deux jeunes enfants chahutent bruyamment, les parents ne sont pas présents :",
            answers: [
                "S’agissant d’enfants, c’est courant et l’agent ne s’en préoccupe pas.",
                "L’agent leur demande de se calmer et fait appeler les parents au micro",
                "L’agent vient avec plusieurs collègues pour les appréhender",
                "Aucune des autres réponses",
                "L’agent les sépare et les réprimande fermement"
            ],
            correct: 1,
            explanation: "La réponse adaptée est de calmer les enfants et de tenter de localiser les parents via une annonce, sans dramatiser ni utiliser la force."
        },
        {
            id: 23,
            question: "Parmi les propositions suivantes, laquelle n’est pas un facteur déclenchant de l’agressivité ?",
            answers: [
                "L’identité",
                "Aucune des autres réponses",
                "L’atteinte au territoire",
                "La bienveillance",
                "L’excès d’estime de soi"
            ],
            correct: 3,
            explanation: "La bienveillance est une attitude positive qui apaise les tensions, elle ne déclenche pas l'agressivité. Les autres (menace identitaire, territoriale, narcissique) peuvent être des facteurs."
        },
        {
            id: 24,
            question: "Lors d’un conflit, que ne faut-il absolument pas faire ?",
            answers: [
                "Ecouter et interroger",
                "Reformuler et continuer",
                "Mettre en garde et imposer une solution",
                "Dialoguer et comprendre l’origine du conflit",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Imposer une solution par la menace ou l'ultimatum bloque la communication et aggrave généralement le conflit."
        },
        {
            id: 25,
            question: "Lorsqu’un conflit n’est pas clairement déclaré il est :",
            answers: [
                "Préalable",
                "Aucune des autres réponses",
                "Latent",
                "Ouvert",
                "Dégradé"
            ],
            correct: 2,
            explanation: "Un conflit latent existe mais n'est pas exprimé ouvertement. Les tensions sont sous-jacentes."
        },
        {
            id: 26,
            question: "À quoi doit-on faire attention lors d’un dialogue avec une personne agressive ?",
            answers: [
                "À l’intonation de la voix",
                "À ne pas l’énerver encore plus - Garder son calme - Articuler",
                "Au regard - À la voix – Aux gestes",
                "Toutes les réponses sont bonnes",
                "À l’intonation de la voix – intensité de la voix – Articulation – Débit de la parole"
            ],
            correct: 3,
            explanation: "Il faut être attentif à tous les éléments de communication verbale (ton, débit, articulation) et non-verbale (regard, posture, gestes) pour gérer la situation."
        },
        {
            id: 27,
            question: "Un de vos collègues APS est menacé de mort verbalement par un client qui s’en va. Que faites-vous?",
            answers: [
                "Je vais remonter le moral de mon collègue pour qu’il banalise la situation",
                "Le client étant parti sans autre action, le dossier est clos",
                "Je prends soin de bien noter avec mon collègue tous les éléments importants et factuels sur la main courante et je vais porter plainte",
                "Aucune des autres réponses",
                "Je poursuis le client, lui fait la morale et le somme de venir présenter ses excuses à mon collègue"
            ],
            correct: 2,
            explanation: "Une menace de mort est un délit grave. Il faut consigner tous les faits avec précision dans la main courante et déposer plainte."
        },
        {
            id: 28,
            question: "Je viens de fermer la porte d’entrée au supermarché avant sa fermeture totale. Un client veut rentrer malgré tout et frappe violemment sur la porte vitrée. Que faites-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Je l’ignore et continue ma ronde de fermeture",
                "J’ouvre les portes et le laisse rentrer exceptionnellement",
                "Je lui ordonne de quitter les lieux immédiatement et le menace d’appeler les forces de l’ordre",
                "Je lui explique que le magasin et les caisses sont fermés"
            ],
            correct: 4,
            explanation: "Il faut communiquer calmement la raison du refus (fermeture) par la porte ou via un interphone, sans ouvrir ni monter dans l'agressivité."
        },
        {
            id: 29,
            question: "Quelle est la meilleure attitude face à un individu qui ne veut pas se soumettre aux règlements de l’établissement ?",
            answers: [
                "L’écouter, argumenter et proposer des solutions conformément aux consignes du site",
                "L’expulser gentiment de l’établissement",
                "Aucune des autres réponses",
                "Systématiquement demander l’aide d’un autre agent",
                "Feindre une intervention importante pour limiter la confrontation"
            ],
            correct: 0,
            explanation: "Il faut combiner écoute, argumentation et recherche de solutions dans le cadre défini par les consignes."
        },
        {
            id: 30,
            question: "Vous êtes dans un poste de filtrage, lors d’un concert, un spectateur refuse de se soumettre à l’inspection visuelle de ses bagages. Que faites-vous en premier ?",
            answers: [
                "Vous lui rappelez les conditions d’accès prévues pour ce concert",
                "Vous le laissez exceptionnellement rentrer car c’est un habitué",
                "Vous lui refusez définitivement l’accès",
                "Aucune des autres réponses",
                "Vous ouvrez ses bagages pour contrôler leurs contenus"
            ],
            correct: 0,
            explanation: "La première étape est de rappeler calmement et clairement la règle en vigueur, avant d'envisager toute autre mesure."
        },
        {
            id: 31,
            question: "Quels sont les principes pour faire face à une agression verbale?",
            answers: [
                "Dires à l’interlocuteur de patienter – l’ignorer",
                "Donner des réponses claires et précises – couper court à la conversation",
                "Garder son calme – ne pas interrompre l’interlocuteur",
                "Ecouter attentivement – ne pas le faire répéter en cas d’incompréhension",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Face à une agression verbale, il est crucial de garder son calme et de laisser la personne s'exprimer sans l'interrompre, pour éviter d'ajouter de l'huile sur le feu."
        },
        {
            id: 32,
            question: "Vous êtes agent de sécurité dans un hôpital, une personne s’en prend verbalement à l’agent d’accueil des urgences, que faites-vous ?",
            answers: [
                "Vous demandez à la personne de quitter l’hôpital afin de résoudre le conflit avec l’agent d’accueil",
                "Vous attendez que le conflit se résolve de lui-même",
                "Vous appelez les forces de l’ordre",
                "Vous demandez à l’agent d’accueil de sortir du champ visuel de l’agresseur afin de résoudre le conflit",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "L'agent doit s'interposer calmement pour protéger son collègue et tenter de calmer l'agresseur notamment en éloignant son collègue et, si nécessaire, appeler du renfort ou les forces de l'ordre."
        },
        {
            id: 33,
            question: "Les conflits factuels sont :",
            answers: [
                "Des conflits issus d’un fait qui donne lieu à une divergence",
                "Des conflits liés à un enjeu de pouvoir",
                "Des conflits issus d’une impression",
                "Des conflits liés à la défense de valeurs différentes",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Les conflits factuels naissent d'un désaccord sur un fait, une information, une interprétation concrète de la réalité."
        },
        {
            id: 34,
            question: "Quelles sont les 3 grandes phases à utiliser pour bien gérer un conflit (dites aussi piliers de la méthode Gordon) ?",
            answers: [
                "Ecoute passive- affirmation de ses propos –résolution du conflit",
                "Ecoute active- affirmation de soi- résolution du conflit sans perdant",
                "Aucune des autres réponses",
                "Ecoute active- affirmation- dénonciation",
                "Ecoute passive- affirmation- alerter la police"
            ],
            correct: 1,
            explanation: "La méthode Gordon repose sur l'écoute active, l'affirmation de soi non-violente et la recherche d'une solution gagnant-gagnant."
        },
        {
            id: 35,
            question: "Quel est l’un des aspects positifs du conflit?",
            answers: [
                "Perception négative envers l’autre",
                "Dépense d’énergie émotive",
                "Aucune des autres réponses",
                "Dépense de temps",
                "Stimulation d’énergie"
            ],
            correct: 4,
            explanation: "Un conflit bien géré peut stimuler l'énergie, la créativité, l'innovation et conduire à une meilleure compréhension mutuelle."
        },
        {
            id: 36,
            question: "Lorsqu’un avantage auquel on tient est menacé, on parle de :",
            answers: [
                "Aucune des autres réponses",
                "Conflit de Loi",
                "Conflit d’évaluation",
                "Conflit d’intérêt",
                "Conflit de personnes"
            ],
            correct: 3,
            explanation: "Un conflit d'intérêts survient lorsque la poursuite d'un intérêt personnel entre en contradiction avec un devoir ou un intérêt général."
        },
        {
            id: 37,
            question: "Est-il nécessaire de connaître son cadre légal afin de résoudre un conflit?",
            answers: [
                "Aucune des autres réponses",
                "Oui, le cadre légal permet de rappeler aux personnes les règles établies",
                "Non, le cadre légal ne concerne que les agent de prévention et de sécurité",
                "Non, le cadre légal sert uniquement en cas de légitime défense",
                "Oui, car l’agent de prévention et de sécurité à plus de prérogative qu’un citoyen"
            ],
            correct: 1,
            explanation: "Connaître le cadre légal (droits, devoirs, limites d'intervention) est essentiel pour agir de manière légitime et rassurante lors d'un conflit."
        },
        {
            id: 38,
            question: "Que doit faire le chef de poste, lorsque vous êtes en conflit avec l’un de vos collègue ADS?",
            answers: [
                "Aucune des autres réponses",
                "Attendre la dégradation de la situation pour offrir son aide",
                "Ne pas intervenir pour laisser la dispute s’estomper",
                "Contacter immédiatement la hiérarchie et demander des sanctions",
                "Réunir les agents concernés pour résoudre le problème"
            ],
            correct: 4,
            explanation: "Le chef de poste doit jouer un rôle de médiateur en réunissant les parties pour identifier le problème et trouver une solution constructive."
        },
        {
            id: 39,
            question: "Quelles sont les méthodes de réaction aux attaques verbales, menaces et intimidation?",
            answers: [
                "Ignorer la personne- Continuer de faire son travail",
                "Garder son calme- Pratiquer le judo verbal pour retourner la situation",
                "Répondre sur le même ton - Faire du Karaté",
                "Céder du terrain - Appeler systématiquement son binôme",
                "Répondre sur le même ton – Appeler la police"
            ],
            correct: 1,
            explanation: "Le 'judo verbal' consiste à utiliser la force de l'agresseur (ses arguments, son émotion) pour désamorcer l'attaque, sans violence et en gardant son calme."
        },
        {
            id: 40,
            question: "À l’entrée d’un centre commercial, un client vient se plaindre auprès de vous d’un article acheté, qu’il juge défectueux. Que faites-vous?",
            answers: [
                "Vous lui rappelez que vous n’êtes pas un vendeur",
                "Vous lui indiquez que l’article ne peut être repris car il l’a déjà ouvert et utilisé",
                "Vous prenez le temps de l’écouter et le dirigez vers le service après-vente",
                "Vous lui proposez vos services, après votre vacation, car vous connaissez bien les défauts de cet article",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Même si ce n'est pas son rôle direct, un agent peut pratiquer l'écoute active et orienter la personne vers le service compétent, ce qui apaise souvent la frustration."
        },
        {
            id: 41,
            question: "Lorsque l’agent observe des personnes en conflit dans son périmètre d’action, il doit?",
            answers: [
                "S’en mêler et prendre position",
                "Uniquement observer ce qui se passe",
                "Se poser en conciliateur",
                "Aucune des autres réponses",
                "Partir le plus vite possible"
            ],
            correct: 2,
            explanation: "Le rôle de l'agent est d'intervenir pour calmer le jeu et tenter de concilier les parties, sans prendre parti, afin de rétablir l'ordre et la sécurité."
        },
        {
            id: 42,
            question: "Dans l’analyse des postures, à quoi correspond le corps en avant?",
            answers: [
                "Désengagement",
                "Découragement",
                "Implication personnelle",
                "Affirmation de soi",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Une posture penchée en avant, le corps tendu vers l'interlocuteur, montre de l'intérêt, de l'implication et un désir d'engagement."
        },
        {
            id: 43,
            question: "Deux de vos collègues, en poste avec vous, ne veulent plus se parler à cause d’un différent. Que faites-vous?",
            answers: [
                "Vous demandez l’organisation d’une conciliation à votre responsable",
                "Vous ne faites rien, vous pouvez enfin travailler dans le calme",
                "Vous les laissez se débrouiller, ce n’est pas vos problèmes",
                "Vous prévenez immédiatement le client",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Un conflit entre collègues nuit au travail d'équipe. Il est responsable de demander l'intervention d'un supérieur ou du service RH pour une médiation."
        },
        {
            id: 44,
            question: "Lorsque l’agent est pris dans une dispute interpersonnelle, quelle attitude doit-il adopter?",
            answers: [
                "Amener l’autre personne à voir le problème tel qu’il le voit",
                "Aucune des autres réponses",
                "Imposer sa vision des choses",
                "Examiner leur désaccord et chercher un compromis",
                "Laisser le temps passer et le problème s’arranger de lui-même"
            ],
            correct: 3,
            explanation: "L'attitude constructive est d'analyser objectivement les points de désaccord et de travailler ensemble à trouver un terrain d'entente acceptable pour tous."
        }
    ]
};
