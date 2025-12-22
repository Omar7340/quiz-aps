const quizConfig = {
    id: "quiz4",
    title: "UV10 - Surveillance par Moyens Électroniques de Sécurité",
    description: "Questionnaire sur la télésurveillance, vidéoprotection, levée de doute, cadre légal (CNIL, CSI) et procédures opérationnelles.",
    timeEstimate: "35-45 minutes",
    icon: "fa-video",
    questions: [
        {
            id: 1,
            question: "Agent de télésurveillance en poste, je prends l'appel d'un employé de l'entreprise qui est sur la liste des astreintes et qui me demande de le supprimer de cette liste, que faites-vous ?",
            answers: [
                "Je refuse s'il ne vient pas avec une personne qui peut le remplacer.",
                "Je refuse et lui demande de s'adresser au responsable de sécurité qui validera ou non auprès du responsable du site.",
                "J'accepte car je n'ai aucun doute sur le sérieux et la fiabilité de cette personne",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "La modification d'une liste d'astreinte doit être validée par le responsable hiérarchique ou le responsable sécurité, pas par l'agent seul."
        },
        {
            id: 2,
            question: "Lors d'une levée de doute intrusion, vous découvrez une porte fracturée avec la présence d'empreintes de pas qui se dirigent vers l'intérieur d'un bâtiment ?",
            answers: [
                "Vous effectuez une levée de doute complémentaire pour appréhender un éventuel intrus",
                "Vous rendez compte pour faire intervenir un service de nettoyage",
                "Vous ramassez tout ce qui peut être blessant pour éviter un suraccident",
                "Vous donnez l'alerte et vous effectuez un périmètre de sécurité pour préserver les traces",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Il faut sécuriser les lieux et préserver les traces potentielles (empreintes) tout en donnant l'alerte conformément aux consignes."
        },
        {
            id: 3,
            question: "Agent de vidéosurveillance sur un site en journée, vous repérez un individu au visage dissimulé dans un local sensible à accès réglementé, que faites-vous ?",
            answers: [
                "J’informe immédiatement le responsable sécurité du site conformément aux consignes",
                "J’appelle les forces de l’ordre sans plus attendre",
                "Je déclenche l’alarme générale des bâtiments",
                "J’effectue la levée de doute immédiatement pour appréhender l’individu",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "La première action est d'alerter le responsable sécurité du site selon les consignes établies."
        },
        {
            id: 4,
            question: "Agent en poste, dans une enceinte où se déroule une manifestation culturelle, vous n’avez pas dans vos missions :",
            answers: [
                "À rassembler les groupes antagonistes pour mieux les contrôler.",
                "À être prêt à intervenir pour qu’un différend ne dégénère en rixe.",
                "À veiller au maintien de la vacuité des itinéraires et des sorties de secours.",
                "À porter assistance et secours aux personnes en péril.",
                "Aucunes des réponses précédentes."
            ],
            correct: 0,
            explanation: "L'agent ne doit jamais rassembler des groupes antagonistes, ce qui pourrait aggraver la situation. Il doit au contraire les séparer."
        },
        {
            id: 5,
            question: "En quoi consiste une alarme périmétrique ?",
            answers: [
                "Protection d'un objet ou d'un point précis dans un bâtiment contre l'intrusion",
                "Protection d'une infrastructure ou un bâtiment contre l'intrusion",
                "Protection d'un local ou un espace déterminé dans un bâtiment contre l'intrusion",
                "Protection d'une infrastructure ou un bâtiment contre l'incendie",
                "Protection associée à la limite juridique du site"
            ],
            correct: 1,
            explanation: "Une alarme périmétrique protège les limites extérieures d'un site (clôtures, murs, ouvertures) contre les intrusions."
        },
        {
            id: 6,
            question: "Rondier d'astreinte chez vous, le télésurveilleur vous contacte la nuit suite à un déclenchement d'alarme intrusion chez un client : que faites-vous ?",
            answers: [
                "Je pense qu'il s'agit d'un dysfonctionnement et économise une ronde inutile à mon entreprise, j'irais demain à la première heure de ma prise de fonction.",
                "J'envoie les forces de l'ordre pour effectuer la levée de doute, n'étant pas habilité",
                "Je donne mon mot de passe pour m'authentifier et me rends sur place pour effectuer la levée de doute",
                "Je mets à jour l'outil de main courante électronique et attends les consignes",
                "Aucunes des réponses précédentes"
            ],
            correct: 2,
            explanation: "En tant que rondier d'astreinte, la procédure consiste à s'authentifier puis à se rendre sur place pour effectuer une levée de doute."
        },
        {
            id: 7,
            question: "Quelle est la principale différence entre une caméra IP et une caméra analogique ?",
            answers: [
                "Le type de lentille utilisée",
                "La possibilité de distinguer le visage des personnes observées",
                "La capacité de stockage",
                "La façon dont le signal est transmis",
                "Aucunes des réponses précédentes"
            ],
            correct: 3,
            explanation: "Une caméra IP transmet un signal numérique via un réseau (Ethernet, Wi-Fi), tandis qu'une caméra analogique transmet un signal analogique via un câble coaxial."
        },
        {
            id: 8,
            question: "Toute personne peut-elle demander d’avoir accès aux enregistrements de vidéosurveillance qui la concerne ?",
            answers: [
                "Non car les enregistrements restent toujours confidentiels",
                "Selon le bon-vouloir du responsable de l’installation de vidéosurveillance car il n’est pas obligé de le faire",
                "Oui car cet accès est de droit, et sans qu’il soit nécessaire de justifier la demande",
                "Oui après en avoir fait la demande auprès du Préfet",
                "Aucunes des réponses précédentes"
            ],
            correct: 4,
            explanation: "Aucune des propositions n'est totalement exacte. L'accès est un droit (RGPD, loi Informatique et Libertés) mais peut être refusé pour des motifs légitimes (sûreté, enquête)."
        },
        {
            id: 9,
            question: "Quel est l'un des rôles de la CNIL ?",
            answers: [
                "Autoriser le port d'armes",
                "Protéger la vie privée et les libertés publiques",
                "Délivrer les cartes professionnelles",
                "Délivrer les cartes bleues",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "La CNIL (Commission Nationale de l'Informatique et des Libertés) veille à la protection des données personnelles et des libertés individuelles."
        },
        {
            id: 10,
            question: "Le contrôle d'accès électronique est ?",
            answers: [
                "Un système de sécurité permettant de détecter les personnes au comportement suspect.",
                "Un système de sécurité qui permet de ne faire que des identifications",
                "Un système de sécurité permettant d'autoriser des personnes déterminées",
                "Un système de sécurité empêchant l’accès des personnes autorisées",
                "Aucunes des réponses précédentes"
            ],
            correct: 2,
            explanation: "Un contrôle d'accès électronique gère les autorisations d'accès (badge, code, biométrie) pour des personnes préalablement identifiées et autorisées."
        },
        {
            id: 11,
            question: "En cas d'alarme intrusion, quand doit s'interrompre l'action de l'agent chargé de la levée de doute ?",
            answers: [
                "Dès la découverte de l'effraction",
                "Uniquement en cas de découverte d'un contrevenant sur place",
                "Après la découverte de deux indices minimum confirmant la réalité de l'effraction",
                "Quand le représentant du client en fait la demande",
                "Aucunes des réponses précédentes"
            ],
            correct: 0,
            explanation: "Dès qu'une effraction est avérée, l'agent doit cesser la levée de doute, sécuriser les lieux et donner l'alerte pour éviter tout risque."
        },
        {
            id: 12,
            question: "Constitue une infraction d’atteinte aux systèmes de traitement automatisé des données, le fait de :",
            answers: [
                "Le fait de modifier des données informatiques",
                "D’accéder frauduleusement à une bande de données informatiques",
                "Le fait de supprimer des données informatiques",
                "Le fait d’introduire un virus informatique dans un système de données",
                "Toutes les réponses sont bonnes"
            ],
            correct: 4,
            explanation: "Toutes ces actions constituent des atteintes aux systèmes de traitement automatisé des données (articles 323-1 et suivants du code pénal)."
        },
        {
            id: 13,
            question: "Quel détecteur intrusion sera installé dans une circulation de l'établissement ?",
            answers: [
                "Détection périmétrique",
                "Détection volumétrique",
                "Détection périphérique",
                "Détection sismique",
                "Aucunes des réponses proposées"
            ],
            correct: 1,
            explanation: "Dans une circulation (couloir, hall), on utilise généralement des détecteurs volumétriques (PIR, micro-ondes) qui couvrent un volume d'espace."
        },
        {
            id: 14,
            question: "La CNIL est :",
            answers: [
                "La Commission Nationale des Instances de Liberté",
                "La Commission Nationale de l’Informatique et des Libertés",
                "Le Conseil National sur l’Informatique et les Libertés",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "CNIL signifie Commission Nationale de l'Informatique et des Libertés."
        },
        {
            id: 15,
            question: "Agent de vidéosurveillance sur un site en journée, vous repérez un individu au visage dissimulé dans un local sensible à accès réglementé, que faites-vous ?",
            answers: [
                "Je prends mon AK47 et fais mon échauffement pour attaquer l'ennemi",
                "J'effectue la levée de doute immédiatement pour appréhender l'individu",
                "J'appelle les forces de l'ordre sans plus attendre.",
                "J'informe immédiatement le responsable sécurité du site conformément aux consignes",
                "Aucunes des réponses précédentes"
            ],
            correct: 3,
            explanation: "La réponse sérieuse est d'informer immédiatement le responsable sécurité selon les consignes. Les autres propositions sont incorrectes ou fantaisistes."
        },
        {
            id: 16,
            question: "Quelle est la composition de la chaîne de télé sécurité ?",
            answers: [
                "Détection - Transmission - Réception - Traitement - Intervention",
                "Ecoute - Analyse - Action - Réaction",
                "Déclenchement - Lever de doute - Police - Main courante",
                "Consignes - Veille active - Réception - Levée de doute - Intervention",
                "Aucunes des réponses précédentes"
            ],
            correct: 0,
            explanation: "La chaîne de télé sécurité comprend : Détection, Transmission, Réception, Traitement et Intervention."
        },
        {
            id: 17,
            question: "Vous êtes agent de vidéosurveillance et un des écrans reste noir, il s'est éteint, que faites-vous ?",
            answers: [
                "J'informerais la relève du défaut de fonctionnement pour qu'elle soit réparée pour le prochain week-end.",
                "J'informe ma hiérarchie et contacte la maintenance conformément aux consignes",
                "Je déplace une autre caméra pour pallier le défaut d'image",
                "Je quitte mon PC pour me placer en surveillance sous la caméra défectueuse",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "Tout dysfonctionnement doit être signalé immédiatement à la hiérarchie et à la maintenance selon les procédures."
        },
        {
            id: 18,
            question: "Un système de télésurveillance mis hors veille est-il en état de déclencher l'alarme lors de l'activation d'un détecteur ?",
            answers: [
                "Oui",
                "Non"
            ],
            correct: 1,
            explanation: "Un système 'hors veille' (désarmé) ne déclenche pas d'alarme. Il doit être 'en veille' (armé) pour réagir aux détecteurs."
        },
        {
            id: 19,
            question: "Vous êtes agent APS sur un site équipé d'un système de vidéo surveillance, le responsable logistique du site client vous demande de visionner des images enregistrées relatives à un salarié de sa société, que faites-vous ?",
            answers: [
                "Je refuse de le faire sans l'accord de mon responsable",
                "Je refuse de le faire mais informe mon responsable de cette demande.",
                "Je n'ai pas droit de le faire mais donne le fichier vidéo au responsable du site client",
                "J'accepte de le faire si les faits sont graves et avérés",
                "Aucunes des réponses précédentes"
            ],
            correct: 1,
            explanation: "L'agent doit refuser et rapporter la demande à son responsable hiérarchique. L'accès aux images est strictement encadré."
        },
        {
            id: 20,
            question: "Quel élément majeur fait partie du système de détection intrusion ?",
            answers: [
                "Un détecteur automatique d'incendie",
                "Une barrière infra-rouge active",
                "Une barrière Vauban",
                "Une caméra de vidéo protection",
                "Un sabot de Denver",
                "Aucunes des réponses"
            ],
            correct: 1,
            explanation: "Une barrière infrarouge active (périmétrique) est un composant classique d'un système de détection d'intrusion."
        },
        {
            id: 21,
            question: "Quel texte encadre la vidéo-protection ?",
            answers: [
                "La partie réglementaire du livre 6 du code la sécurité intérieure",
                "La loi du 12 Juillet 1902 modifié",
                "Le décret 607-65 du 19 mars 1971",
                "Le décret 2002-539",
                "Aucune des réponses précédentes"
            ],
            correct: 0,
            explanation: "Le cadre légal principal de la vidéoprotection est fixé par le Livre VI du Code de la Sécurité Intérieure (parties législative et réglementaire)."
        },
        {
            id: 22,
            question: "Vous êtes en poste, en équipe, sur un site industriel en qualité de télésurveilleur et une alarme intrusion se déclenche dans un bâtiment dont vous n'avez pas l'accès, que faites-vous ?",
            answers: [
                "J'appelle le directeur du site client et l'inscrit sur la main courante",
                "Je me rends sur place pour effectuer une levée de doute",
                "N'ayant pas accès au bâtiment je n'ai pas obligation d'intervenir, je note l'incident sur la main courante",
                "J'appelle immédiatement les forces de l'ordre",
                "Aucunes des réponses précédentes"
            ],
            correct: 4,
            explanation: "Aucune des propositions n'est pleinement correcte. La procédure dépend des consignes : généralement, alerter le responsable sécurité/client et/ou les forces de l'ordre si l'accès est impossible."
        },
        {
            id: 23,
            question: "Toute personne intéressée peut-elle demander d’avoir accès aux enregistrements de vidéosurveillance qui la concerne et demander sa destruction ?",
            answers: [
                "Non car les enregistrements doivent rester toujours confidentiels",
                "Non car seuls les opérateurs publics peuvent visionner des images privées",
                "Oui, après en avoir fait la demande auprès du préfet",
                "Oui, sauf si le refus est justifié par les conditions fixées par la loi",
                "Aucunes des autres réponses"
            ],
            correct: 3,
            explanation: "Le RGPD et la loi Informatique et Libertés accordent un droit d'accès et d'effacement, mais des exceptions existent (sûreté, enquête...)."
        },
        {
            id: 24,
            question: "Parmi les éléments suivants, lequel est un principe général de prévention ?",
            answers: [
                "Combattre les risques à la source",
                "Demander à l'homme (ou la femme) de s’adapter à son travail",
                "Laisser les personnes de terrain adapter les consignes",
                "Privilégier les mesures de protection individuelles",
                "Aucunes des autres réponses"
            ],
            correct: 0,
            explanation: "'Combattre les risques à la source' est l'un des 9 principes généraux de prévention du Code du travail."
        },
        {
            id: 25,
            question: "Quand doit-on rédiger notamment impérativement un plan de prévention ?",
            answers: [
                "En cas de travaux dangereux listés dans l’arrêté de 19 Mars 1993",
                "Uniquement sur demande explicite du client",
                "Uniquement lorsque les consignes de sûreté le prévoient",
                "Si vous estimez que l’importance des travaux le nécessite",
                "Aucunes des autres réponses"
            ],
            correct: 0,
            explanation: "Un plan de prévention est obligatoire pour les travaux dangereux figurant dans la liste de l'arrêté du 19 mars 1993."
        },
        {
            id: 26,
            question: "Dans une salle de concert, une personne ivre, qui a un comportement menaçant, trouble la tranquillité des spectateurs :",
            answers: [
                "Je l’amène à l’écart par la force et l’enferme en situation de dégrisement",
                "Dès lors que la personne a franchi le Point d’inspection filtrage, c’est aux organisateurs de s’en occuper",
                "Je dois faire appel à l’OPJ",
                "Je ne peux pas appréhender la personne car elle n’a commis aucun délit puni d’une peine d’emprisonnement",
                "Aucunes des autres réponses"
            ],
            correct: 4,
            explanation: "Aucune des propositions n'est correcte. L'agent doit d'abord tenter de calmer la situation, puis si nécessaire, faire appel aux forces de l'ordre, sans enfermement arbitraire."
        },
        {
            id: 27,
            question: "Le fait d'accéder frauduleusement à des données informatiques issues d’image de vidéo-surveillance constitue l’infraction de :",
            answers: [
                "Dégradations ou détériorations d’un système de traitement de données informatique",
                "Entrave à la libre circulation des biens et des données",
                "Atteintes aux systèmes de traitement automatisé de données",
                "Vol de données informatiques",
                "Aucunes des autres réponses"
            ],
            correct: 2,
            explanation: "C'est une atteinte aux systèmes de traitement automatisé de données (article 323-1 du code pénal)."
        },
        {
            id: 28,
            question: "Un système de vidéoprotection peut proposer plusieurs types de caméras :",
            answers: [
                "Des caméras à vision nocturne",
                "Des caméras à lecture de plaques minéralogiques",
                "Des caméras à 360°",
                "Des caméras fixes",
                "Toutes les réponses précédentes sont exactes"
            ],
            correct: 4,
            explanation: "Tous ces types de caméras (fixes, 360°, lecture de plaques, vision nocturne) peuvent faire partie d'un système de vidéoprotection."
        },
        {
            id: 29,
            question: "Quel est l’objectif de la prévention ?",
            answers: [
                "Protéger l’employeur du risque pénal",
                "Eviter ou limiter les dommages",
                "Améliorer les statistiques concernant les taux d’accidents du travail",
                "Définir les mesures de sûreté",
                "Aucunes des autres réponses"
            ],
            correct: 1,
            explanation: "L'objectif principal de la prévention est d'éviter ou, à défaut, de réduire les dommages pour les personnes, les biens et l'environnement."
        },
        {
            id: 30,
            question: "Pouvez-vous appréhender un individu qui s’est enfuit après avoir commis un vol la semaine dernière sur votre lieu de travail ?",
            answers: [
                "Oui s’il ne ramène pas ce qu’il a volé",
                "Non",
                "Non je ne l’appréhende pas uniquement s’il revient payer l’article",
                "Oui",
                "Aucunes des autres réponses"
            ],
            correct: 1,
            explanation: "Un agent de sécurité ne peut appréhender une personne qu'en flagrant délit (délit en train de se commettre ou venant de se commettre), pas pour un fait ancien."
        },
        {
            id: 31,
            question: "Avant que ne commence une manifestation, les agents composant le service de sécurité d’un grand rassemblement ont principalement pour rôle ?",
            answers: [
                "Procéder à l’inspection des installations ou de la salle",
                "Faire un selfie avec les stars de l’événement",
                "Prévenir les journalistes à l’arrivée des VIP",
                "Orienter les spectateurs dans les bonnes directions",
                "Aucunes des autres réponses"
            ],
            correct: 0,
            explanation: "Avant l'ouverture, les agents vérifient la sûreté et la sécurité des installations (désamiantage, contrôle des accès, vérification du matériel)."
        },
        {
            id: 32,
            question: "Constitue une infraction d’atteinte aux systèmes de traitement automatisés des données, le fait :",
            answers: [
                "De supprimer des données informatiques",
                "D’introduire un virus informatique dans un système de données informatiques",
                "D’accéder frauduleusement à des données informatiques",
                "De modifier des données informatiques",
                "Toutes les réponses sont exactes"
            ],
            correct: 4,
            explanation: "Toutes ces actions constituent des atteintes aux systèmes de traitement automatisé des données (articles 323-1 et suivants du code pénal)."
        },
        {
            id: 33,
            question: "Vous vérifierez à la prise de service le bon fonctionnement des caméras conformément aux consignes :",
            answers: [
                "Vous garderez chaque jour des copies d’images ou vidéos pour vous prémunir de tout reproche",
                "Vous ne vous servirez des caméras qu’en cas d’intrusion, quelles que soient les consignes",
                "Vous n’êtes pas habilité à vous servir de ce système n’ayant pas d’autorisation du CNAPS"
            ],
            correct: 0,
            explanation: "Cette affirmation est fausse. La vérification du bon fonctionnement fait partie des consignes, mais la copie systématique d'images pour usage personnel est interdite."
        },
        {
            id: 34,
            question: "Un agent rondier me demande de supprimer les images du système de vidéosurveillance correspondant à son arrivée en retard sur le site :",
            answers: [
                "Je n’ai pas le droit de le faire, risquant des poursuites pénales et disciplinaires",
                "Etant un bon collègue de travail, sérieux et apprécié de tous, je le fais sans aucun problème",
                "Je lui laisse faire, ne souhaitant pas être impliqué dans cette action",
                "Aucun incident n’ayant été relevé à cet instant, je ne fais que libérer un peu de place sur le disque dur du serveur de stockage",
                "Aucunes des autres réponses"
            ],
            correct: 0,
            explanation: "La falsification, suppression ou altération d'images de vidéosurveillance est une infraction pénale et peut entraîner des sanctions disciplinaires."
        }
    ]
};