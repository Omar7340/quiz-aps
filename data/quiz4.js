// data/quizUV11GestionDesRisques.js - Quiz UV11 Gestion des Risques
const quizConfig = {
    "id": "quizUV11",
    "title": "UV11 Gestion des Risques",
    "description": "QCM sur la gestion des risques, les procédures de sécurité, les équipements et les comportements à adopter en intervention.",
    "timeEstimate": "25 minutes",
    "questions": [
        {
            "id": 1,
            "question": "Votre établissement est desservi par sa voie d’accès privée et fermée, que devez-vous faire pour permettre l’accès des services de secours alertés ?",
            "answers": [
                "Rien de particulier juste à les attendre",
                "Envoyer un membre du personnel du site pour leur ouvrir l’accès",
                "Aucune des autres réponses",
                "Contacter les forces de l’ordre pour guider les équipes de secours",
                "Autoriser les services de secours à forcer le portail d’accès"
            ],
            "correct": 1,
            "explanation": "Il faut envoyer une personne pour ouvrir l’accès afin de permettre une intervention rapide des secours."
        },
        {
            "id": 2,
            "question": "Que devez-vous fournir éventuellement comme document aux services de secours lors d’une intervention ?",
            "answers": [
                "Les consignes de l’établissement",
                "Les dossiers techniques des installations de sécurité",
                "Aucune des autres réponses",
                "Des extincteurs CO2",
                "Les plans de l’établissement"
            ],
            "correct": 4,
            "explanation": "Les plans de l’établissement sont essentiels pour guider les secours dans les locaux."
        },
        {
            "id": 3,
            "question": "En cas d’alarme observée sur la centrale incendie, quelle est généralement la procédure à suivre ?",
            "answers": [
                "Aucune des autres réponses",
                "Levée de doute, appel des secours, retour au PCS",
                "Intervention immédiate sur feu, appel des secours, réinitialisation centrale incendie",
                "Acquittement du signal sonore, lecture de l’information, levée de doute, plan d’action conforme aux consignes site",
                "Appel de l’astreinte incendie, attente des secours, intervention éventuelle sur feu"
            ],
            "correct": 3,
            "explanation": "La procédure standard comprend l’acquittement, la lecture, la levée de doute et l’action selon les consignes."
        },
        {
            "id": 4,
            "question": "Un employé appelle au PC Sécurité pour me signaler qu’il se sent mal et qu’il risque de perdre connaissance. Que dois-je faire en premier ?",
            "answers": [
                "Lui demander où il se trouve, de s’assoir ou de s’étendre au sol en attendant les secours",
                "Aucune des autres réponses",
                "Prévenir le responsable de la sécurité de l’établissement",
                "Appeler immédiatement les pompiers",
                "Envoyer l’agent rondier le secourir dès qu’il aura terminé sa ronde"
            ],
            "correct": 0,
            "explanation": "Il faut d’abord sécuriser la victime en la faisant s’allonger pour éviter une chute, puis alerter les secours."
        },
        {
            "id": 5,
            "question": "Le report d’alarme d’une centrale d’alarme intrusion est un dispositif :",
            "answers": [
                "Aucune des autres réponses",
                "De secours en cas de défaillance du clavier principale",
                "Qui permet aux agents d’accéder à certaines informations hors du PCS",
                "De cloisonnement anti-intrusion indépendant du système central",
                "Uniquement destiné aux équipes de sûreté en cas d’intrusion"
            ],
            "correct": 1,
            "explanation": "Le report d’alarme permet d’accéder aux informations d’alarme depuis un autre poste en cas de problème."
        },
        {
            "id": 6,
            "question": "En cas de défaillance du DATI, quelle est l’une des solutions alternatives pouvant être mise place ?",
            "answers": [
                "Aucune des autres réponses",
                "L’agent envoie des SMS à un de ses collègues toutes les heures",
                "L’agent de sécurité termine sa vacation normalement",
                "L’agent reste au PCS et n’effectue aucune ronde n’ayant pas de dispositif en bon état de fonctionnement",
                "L’agent fait appels sécuritaires conformément aux consignes de site."
            ],
            "correct": 4,
            "explanation": "Les appels sécuritaires réguliers permettent de vérifier l’état de l’agent en l’absence de DATI fonctionnel."
        },
        {
            "id": 7,
            "question": "De façon général, quel appareil est utilisable pour effectuer une réanimation cardio-pulmonaire (RCP) ?",
            "answers": [
                "Un DES : défibrillateur sécurisé élémentaire",
                "Un DMA : défibrillateur à mouvement automatique",
                "Un DAI : défibrillateur automatisé interne",
                "Un DAE : défibrillateur automatisé externe",
                "Aucune des réponses"
            ],
            "correct": 3,
            "explanation": "Le DAE (Défibrillateur Automatisé Externe) est l’appareil utilisé pour assister une RCP en cas d’arrêt cardiaque."
        },
        {
            "id": 8,
            "question": "Quel événement doit être prioritaire ?",
            "answers": [
                "L’alarme intrusion",
                "Aucune des autres réponses",
                "L’alarme technique",
                "La découverte d’une victime",
                "L’alarme incendie"
            ],
            "correct": 4,
            "explanation": "L’alarme incendie est prioritaire car elle engage la sécurité des personnes de manière immédiate et collective."
        },
        {
            "id": 9,
            "question": "Pour vous, quelle réponse justifierait le port du DATI?",
            "answers": [
                "Je suis affecté au contrôle d’accès d’un site face à l’accueil en activité",
                "Je suis en surveillance de nuit, avec 2 autres APS",
                "Je suis en surveillance derrière la ligne de caisse avec 2 autres APS",
                "Aucune des autres réponses",
                "J’effectue une vacation seul/isolé sur un site"
            ],
            "correct": 4,
            "explanation": "Le DATI est particulièrement justifié pour un travailleur isolé, afin d’assurer sa sécurité en cas d’incident."
        },
        {
            "id": 10,
            "question": "Que devez vous mettre à disposition comme matériel aux forces de l’ordre lors d’une intervention?",
            "answers": [
                "Les clés ou badges d’accès",
                "Des magnétomètre",
                "Aucune des autres réponses",
                "Un extincteur",
                "La main courante pour qu’ils puissent y rédiger leur rapport"
            ],
            "correct": 0,
            "explanation": "Il faut fournir les moyens d’accès (clés, badges) pour faciliter l’intervention des forces de l’ordre."
        },
        {
            "id": 11,
            "question": "Quelle habilitation minimum doit avoir un APS pour entrer dans un local avec TGBT (Tableau Général Basse Tension)?",
            "answers": [
                "L’habilitation BR ou BC",
                "L’habilitation BS ou BE Manceuvre",
                "Aucune habilitation n’est nécessaire",
                "L’habilitation H0/B0",
                "L’habilitation H1/B1"
            ],
            "correct": 3,
            "explanation": "L’habilitation H0/B0 est le niveau minimum pour pénétrer dans un local électrique sans intervention."
        },
        {
            "id": 12,
            "question": "A quoi peut servir une GTC (ou une GTB) dans les missions journalières d’un agent de prévention et de sécurité?",
            "answers": [
                "A reporter les alarmes émanant du système d’extinction à eau",
                "A disposer d’une information centralisée au PCS notamment des alarmes techniques",
                "Aucunes des autres réponses",
                "A limiter le nombre de rondes aux consignes du site lorsque tous les voyants sont vert",
                "Gérer et suivre les contrôles d’entrées et de sorties du site"
            ],
            "correct": 1,
            "explanation": "La GTC/GTB centralise les informations techniques (alarmes, température, etc.) et facilite la surveillance."
        },
        {
            "id": 13,
            "question": "Lors d’une levée de doute incendie, je découvre une victime, je dois:",
            "answers": [
                "Signaler la victime au PC pour qu’il envoie un autre agent s’en occuper pendant que je réalise la levée de doute incendie",
                "M’occupe de la victime avant tout, et demande au PC d’envoyer un autre agent sur la levée de doute incendie",
                "Demande aux pompiers de réaliser la levée de doute incendie pendant que je m’occupe de la victime",
                "Demande aux pompiers d’intervenir sans faire le bilan afin que je puisse effectuer la levée de doute incendie",
                "Faire le bilan de la victime, si elle est consciente et respire je pourrais la placer en PLS et partir m’occuper de la levée de doute incendie"
            ],
            "correct": 1,
            "explanation": "La priorité est la victime. Il faut la prendre en charge et demander un renfort pour la levée de doute incendie."
        },
        {
            "id": 14,
            "question": "L’appel des services de secours public est:",
            "answers": [
                "Aucunes des autres réponses",
                "Une alarme extérieur",
                "Une alarme intérieur",
                "Une alerte extérieur",
                "Une alerte intérieur"
            ],
            "correct": 3,
            "explanation": "L’appel des secours est une alerte extérieure, déclenchée vers l’extérieur de l’établissement."
        },
        {
            "id": 15,
            "question": "Lors d’un incident grave, à quel moment devez vous prévenir la hiérarchie?",
            "answers": [
                "Aucune des autres réponses",
                "Une fois le départ des services de secours",
                "Le plus rapidement possible",
                "Quand elle se rendra au poste de sécurité (PCS)",
                "Une fois que les services de secours sont arrivés"
            ],
            "correct": 2,
            "explanation": "Il faut prévenir la hiérarchie dès que possible pour une prise de décision rapide et coordonnée."
        },
        {
            "id": 16,
            "question": "Quels types d’alarme existe-il notamment dans le fonctionnement d’un DATI?",
            "answers": [
                "Perte de liaison – Appel secours",
                "Aucune des autres réponses",
                "Déclenchement volontaire – Perte de verticalité",
                "Signal sonore continu – Alerte générale",
                "Appel aléatoire – Perte de verticalité"
            ],
            "correct": 2,
            "explanation": "Un DATI peut inclure un déclenchement volontaire (bouton) et une détection de perte de verticalité (chute)."
        },
        {
            "id": 17,
            "question": "Combien de temps maximum avez-vous pour acquitter le processus d’alarme d’évacuation générale d’un bâtiment où vous êtes en poste, avant qu’elle ne se déclenche?",
            "answers": [
                "10 minutes",
                "15 minutes",
                "Le temps maximum dépend du chef d’établissement",
                "5 minutes",
                "3 minutes"
            ],
            "correct": 4,
            "explanation": "Le délai standard pour acquitter une alarme d’évacuation est généralement de 3 minutes maximum."
        },
        {
            "id": 18,
            "question": "Le DATI est une obligation légale:",
            "answers": [
                "Oui, imposée par l’article R4512-13 du code du travail",
                "Non, mais l’employeur doit s’assurer qu’aucun travailleur ne travaille isolément en un point où il ne peut être secouru à bref délais en cas d’accident",
                "Oui, lorsque le travailleur est en position isolé",
                "Non, cela ne concerne que les SSIAP en activité dans un ERP ou IGH",
                "Aucune des autres réponses"
            ],
            "correct": 1,
            "explanation": "L’employeur doit garantir la sécurité des travailleurs isolés, mais le DATI n’est pas une obligation légale spécifique."
        },
        {
            "id": 19,
            "question": "Un groupe d’individus cagoulés et armés pénètre dans votre établissement, vous êtes seul que faites-vous?",
            "answers": [
                "J’appelle la relève pour venir en aide le plus tôt possible",
                "Je m’enfuis et je fais appel aux forces de l’ordre le plus rapidement possible",
                "Je m’enfuis si je peux ou sinon je me confine, et je contacte le 114 par SMS",
                "Je dois agir physiquement pour les expulser de l’établissement",
                "Aucune des autres réponses"
            ],
            "correct": 2,
            "explanation": "La priorité est la sécurité personnelle : fuir si possible, sinon se confiner et alerter discrètement (ex: SMS au 114)."
        },
        {
            "id": 20,
            "question": "En vous rendant sur une levée de doute intrusion, votre PC vous appelle car une détection incendie vient d’avoir lieu. Que faite-vous?",
            "answers": [
                "Je fais demi-tour et priorise la détection incendie dont la gravité peut être supérieure",
                "Aucune des autres réponses",
                "Je demande au chef de poste d’effectuer lui-même la levée de doute incendie",
                "Je poursuis la levée de doute intrusion étant presque arrivé",
                "Je termine la levée de doute intrusion sans effectuer les contrôles de rigueur pour aller sur le levée de doute incendie"
            ],
            "correct": 0,
            "explanation": "L’incendie étant prioritaire, il faut immédiatement se rediriger vers la levée de doute incendie."
        },
        {
            "id": 21,
            "question": "Vous êtes en position de travailleur isolé sur un site de nuit et disposez d’un DATI:",
            "answers": [
                "Le DATI est un élément de la chaine de sécurité, qui émet un signal afin de déclencher une procédure prédéfinie",
                "Le DATI est un appareil mis à disposition des agents pour garantir leur sécurité totale",
                "Vous êtes totalement en sécurité s’il vous arrivait quoi que ce soit",
                "Aucune des autres réponses",
                "Vous ne devez utiliser le DATI que lorsque vous partez en ronde"
            ],
            "correct": 0,
            "explanation": "Le DATI est un outil de sécurité qui déclenche une alerte en cas de problème, mais il ne garantit pas une sécurité absolue."
        },
        {
            "id": 22,
            "question": "Vous êtes au PCS, votre agent est parti en levée de doute pour une alarme intrusion. Que faites-vous en attendant?",
            "answers": [
                "Aucune des autres réponses",
                "Je me concentre uniquement sur la centrale intrusion dans l’éventualité d’une nouvelle alarme",
                "Je préviens le client de l’établissement",
                "Rien, j’attends que mon collègue me transmette les informations",
                "Je consulte les consignes intrusion pour ne rien oublier"
            ],
            "correct": 4,
            "explanation": "Il est utile de revoir les consignes pendant l’attente pour être prêt à réagir correctement."
        },
        {
            "id": 23,
            "question": "Quel type d’alarme existe dans le fonctionnement d’un DATI?",
            "answers": [
                "L’alarme aléatoire",
                "La perte de verticalité",
                "La perte d’horizontalité",
                "L’alarme semi-automatique",
                "Aucune des autres réponses"
            ],
            "correct": 1,
            "explanation": "La perte de verticalité (chute) est un type d’alarme courant sur les DATI."
        },
        {
            "id": 24,
            "question": "En cas d’alarme feu, sur quel appareil reçoit-on l’alarme restreinte?",
            "answers": [
                "L’UGCIS, Unité de Gestion Centralisée des Issus de Secours",
                "L’EA, Equipement d’Alarme",
                "Aucune des autres réponses",
                "L’ECS, l’Equipement de Contrôle et de Signalisation",
                "Le DAS, Dispositif Actionné de Sécurité"
            ],
            "correct": 3,
            "explanation": "L’ECS (Équipement de Contrôle et de Signalisation) reçoit et affiche les alarmes restreintes."
        },
        {
            "id": 25,
            "question": "L’appel des services de secours public est:",
            "answers": [
                "Une alarme extérieure",
                "Aucune des autres réponses",
                "Une alarme intérieure",
                "Une alerte extérieure",
                "Une alerte intérieure"
            ],
            "correct": 3,
            "explanation": "L’appel des secours est une alerte extérieure, déclenchée vers l’extérieur de l’établissement."
        },
        {
            "id": 26,
            "question": "Quand un agent peut-il alerter les forces de l’ordre lors d’un détection intrusion?",
            "answers": [
                "Dès que l’intrusion est confirmée",
                "Dès que l’agent est arrivée sur zone",
                "Dès que l’agent constate l’ouverture d’une fenêtre",
                "Aucune des autres réponses",
                "Dès que l’agent reçoit l’alarme"
            ],
            "correct": 0,
            "explanation": "Il faut confirmer l’intrusion avant d’alerter les forces de l’ordre pour éviter les interventions inutiles."
        },
        {
            "id": 27,
            "question": "Suite à une détection incendie, votre PC vous demande d’effectuer une levée de doute, à quel moment pouvez-vous lui confirmer la levée de doute?",
            "answers": [
                "Jusqu’à ce que vous identifiez le voyant jaune allumé, si possible",
                "Dès que vous êtes arrivé sur zone sans chercher à aller plus loi",
                "Jusqu’à ce que vous identifiez le voyant rouge allumé sur le détecteur, si possible",
                "Dès que vous êtes arrivé au niveau sans chercher à aller plus loin",
                "Aucune des autres réponses"
            ],
            "correct": 2,
            "explanation": "La levée de doute est confirmée lorsque l’agent identifie le voyant rouge sur le détecteur, indiquant l’origine de l’alarme."
        },
        {
            "id": 28,
            "question": "Suite à l’alarme feu, une unité de signalisation est allumée en rouge clignotant, à quoi correspond cette information?",
            "answers": [
                "Aucune des autres réponses",
                "L’E.A, Equipement d’Alarme",
                "L’UGCIS, Unité de Gestion Centralisée des Issus de Secours",
                "Sur le SDI, Système de détection incendie",
                "Le DAS, Dispositif Actionné de Sécurité"
            ],
            "correct": 3,
            "explanation": "Le voyant rouge clignotant sur le SDI indique une alarme feu en cours."
        },
        {
            "id": 29,
            "question": "Lorsque l’opération est réalisée de nuit ou dans un lieu isolé ou à un moment où l’activité de l’entreprise utilisatrice est interrompue le chef de l’entreprise extérieure intéressé prend les mesures nécessaires pour:",
            "answers": [
                "Qu’aucun travailleur ne travaille isolement en un point où il ne pourrait être secouru à bref délais en cas d’accident",
                "Que le travailleur ne soit jamais seul en tout point du site",
                "Que le travailleur soit toujours joint en moins de 10 minutes",
                "Aucune des autres réponses",
                "Que le travailleur travaille seul en un point du site afin d’être tranquille"
            ],
            "correct": 0,
            "explanation": "L’employeur doit garantir qu’un travailleur isolé puisse être secouru rapidement en cas d’accident."
        },
        {
            "id": 30,
            "question": "Vous êtes au PCS votre agent est parti en levée de doute pour une alarme intrusion, Que faites vous en attendant?",
            "answers": [
                "Je préviens le client de l’établissement",
                "Aucune des autres réponses",
                "Je me concentre uniquement sur la centrale intrusion dans l’éventualité d’une nouvelle alarme",
                "Rien, j’attends que mon collègue me transmette les informations",
                "Je surveille la zone concernée à l’aide du système de vidéo surveillance"
            ],
            "correct": 4,
            "explanation": "La vidéosurveillance permet de suivre la situation à distance et d’anticiper d’éventuels risques."
        },
        {
            "id": 31,
            "question": "Vous venez d’alerter les secours, que devez vous faire?",
            "answers": [
                "Envoyer un membre du personnel du site pour les réceptionner",
                "Envoyer obligatoirement un agent des services techniques pour les réceptionner",
                "Envoyer obligatoirement un agent de sécurité incendie pour les réceptionner",
                "Aucune des autres réponses",
                "Rien de particulier juste à les attendre"
            ],
            "correct": 0,
            "explanation": "Il faut désigner une personne pour accueillir et guider les secours dès leur arrivée."
        }
    ]
};