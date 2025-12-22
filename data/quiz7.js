// data/quiz3.js - UV12 - Electronique, Événementiel, Industriel
const quizConfig = {
    id: "quiz3",
    title: "UV12 - Electronique, Événementiel, Industriel",
    description: "Questionnaire sur la sécurité électronique, événementielle et industrielle : ORSEC, SEVESO, vidéoprotection, risques, plans, réglementations.",
    timeEstimate: "40-50 minutes",
    icon: "fa-industry",
    questions: [
        {
            id: 1,
            question: "Que dois-je faire lors du déclenchement du plan ORSEC ?",
            answers: [
                "Appliquer les consignes et plans d’intervention prévus",
                "Déclencher l’évacuation générale des bâtiments",
                "Aucune des autres réponses",
                "Éteindre tous les systèmes, rentrer chez soi et attendre la levée du plan",
                "Fuir, sinon se confiner et combattre les éléments naturels en dernier recours"
            ],
            correct: 0,
            explanation: "Lors du déclenchement du plan ORSEC, l'agent de sécurité doit appliquer les consignes et plans d'intervention spécifiques prévus pour le site."
        },
        {
            id: 2,
            question: "Quel est le document applicable sur un site SEVESO qui concerne l’APS en poste ?",
            answers: [
                "Le plan de participation aux réserves territoriales",
                "Le plan de précaution des risques techniques",
                "Le plan de préparation des règlements terrestres",
                "Aucune des autres réponses",
                "Le plan d’opération interne ou équivalent"
            ],
            correct: 4,
            explanation: "Sur un site SEVESO, l'APS doit connaître et appliquer le Plan d'Opération Interne (POI) ou son équivalent, qui définit les procédures en cas d'accident."
        },
        {
            id: 3,
            question: "L’évaluation des risques professionnels est répertoriée dans :",
            answers: [
                "Le document de santé et de protection des salariés",
                "Le document des dangers",
                "Aucune des autres réponses",
                "Le document des risques",
                "Le document unique"
            ],
            correct: 4,
            explanation: "Le Document Unique d'Évaluation des Risques Professionnels (DUERP) regroupe l'évaluation des risques pour la santé et la sécurité des salariés."
        },
        {
            id: 4,
            question: "Quelle est la composition de la chaîne de télé-sécurité ?",
            answers: [
                "Observation- réglementation- validation- action",
                "Détection- transmission- réception- traitement-intervention",
                "Déclenchement- lever de doute- police- main courante",
                "Veille- repérage- preuve- formalisation",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "La chaîne de télé-sécurité comprend : la détection, la transmission, la réception, le traitement et l'intervention."
        },
        {
            id: 5,
            question: "Le responsable logistique du site vous demande de visionner des images de vidéosurveillance enregistrées relatives à un salarié de sa société, que faites-vous ?",
            answers: [
                "Je refuse de le faire mais informe mon responsable de cette demande",
                "J’accepte de le faire si les faits sont graves et avérés",
                "Aucune des autres réponses",
                "Je n’ai pas le droit de le faire mais donne le fichier vidéo au responsable du site client",
                "Je refuse de le faire sans l’accord au moins oral du CNAPS"
            ],
            correct: 0,
            explanation: "L'accès aux images est strictement réglementé. L'agent doit refuser et signaler la demande à son responsable hiérarchique."
        },
        {
            id: 6,
            question: "Le responsable hygiène et sécurité m’impose de porter une charlotte, une blouse et des sur-chaussures pour pénétrer une zone de fabrication alimentaire :",
            answers: [
                "Je dois respecter les consignes d’hygiène du site client",
                "Aucune des autres réponses",
                "Je refuse devant garder apparents les insignes de sécurité privée",
                "Je refuse n’ayant pas le droit d’y rentrer",
                "Je dispose d’une autorisation ATEX pour y pénétrer et je n’ai pas à les porter"
            ],
            correct: 0,
            explanation: "L'agent doit respecter les consignes spécifiques d'hygiène et de sécurité du site client, y compris le port d'équipements dédiés."
        },
        {
            id: 7,
            question: "Quels peuvent être les acteurs autres que le public d’un événement qui nécessite une attention particulière en matière de sûreté ?",
            answers: [
                "Toutes les réponses précédentes",
                "Les organisateurs",
                "Les journalistes de la presse",
                "Les personnes accréditées (VIP)",
                "Les artistes et personnels rattachés"
            ],
            correct: 0,
            explanation: "Tous ces acteurs (organisateurs, journalistes, VIP, artistes, personnels) peuvent nécessiter une attention particulière en termes de sûreté et de protocole."
        },
        {
            id: 8,
            question: "Parmi ces éléments, quels sont les facteurs aggravant du risque de gestion de l’événement ?",
            answers: [
                "Des billets vendus au dernier moment sans places réservées",
                "Des billets vendus au dernier moment avec places réservées",
                "Des billets pré-vendus en totalité longtemps à l’avance sans places réservées",
                "Des billets pré-vendus en totalités longtemps à l’avance avec places réservées",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "La vente au dernier moment sans places réservées aggrave les risques de désordre, de sur-fréquentation et de gestion des flux."
        },
        {
            id: 9,
            question: "Le fait d’accéder frauduleusement à des données informatiques issues d’images de vidéosurveillance constitue l’infraction de :",
            answers: [
                "Dégradation ou détériorations d’un système de traitement de données informatiques",
                "Atteintes aux systèmes de traitement automatisé de données",
                "Aucune des autres réponses",
                "Vol de données informatiques",
                "Entrave à la libre circulation des biens et des données"
            ],
            correct: 1,
            explanation: "C'est une atteinte aux systèmes de traitement automatisé de données (article 323-1 du code pénal)."
        },
        {
            id: 10,
            question: "Parmi les éléments suivants, lequel est un principe général de prévention ?",
            answers: [
                "Laisser les personnels de terrain adapter les consignes",
                "Combattre les risques à la source",
                "Privilégier les mesures de protection individuelles",
                "Demander à l’homme (ou la femme) de s’adapter à son travail",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "Combattre les risques à la source est l'un des 9 principes généraux de prévention définis par le Code du travail."
        },
        {
            id: 11,
            question: "Quel est l’un des rôles de la CNIL ?",
            answers: [
                "Autoriser le port d’armes numériques",
                "Délivrer les cartes d’agrément Vidéo-protecteur",
                "Protéger la vie privée et les libertés publiques",
                "Lutter contre la Cyberdéfense",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "La CNIL (Commission Nationale de l'Informatique et des Libertés) veille à la protection des données personnelles et des libertés individuelles."
        },
        {
            id: 12,
            question: "Que signifie l’acronyme PIF dans le cadre d’un système de sécurité lors d’un événement ?",
            answers: [
                "Passage interdit à la foule",
                "Permis d’inspection et de fouille",
                "Aucune des autres réponses",
                "Point ou poste d’inspection filtrage",
                "Poste itinérant de filtrage"
            ],
            correct: 3,
            explanation: "PIF signifie Point d'Inspection et de Filtrage, là où sont effectués les contrôles d'accès (palpations, inspection visuelle des bagages)."
        },
        {
            id: 13,
            question: "Qui est concerné au premier chef sur un site client par le plan de prévention ?",
            answers: [
                "L’entreprise utilisatrice et l’entreprise extérieure",
                "L’entreprise utilisatrice et la Mairie",
                "L’entreprise extérieure et l’inspecteur du travail",
                "Aucune des autres réponses",
                "L’entreprise sous-traitante et la Préfecture"
            ],
            correct: 0,
            explanation: "Le plan de prévention est élaboré conjointement par l'entreprise utilisatrice (client) et l'entreprise extérieure (prestataire) lors de travaux."
        },
        {
            id: 14,
            question: "Lors de l’inspection d’un bagage, si une personne refuse de se dessaisir d’objets pouvant devenir des armes par destination (bouteille en verre, canette, casque,…)",
            answers: [
                "L’agent doit lui refuser l’accès à la manifestation conformément aux consignes spécifiques du site",
                "L’agent doit systématiquement faire intervenir un OPJ",
                "L’agent ne peut lui autoriser l’accès que si les objets sont enveloppés dans un sac plastique transparent « thermo-soudé »",
                "L’agent doit contraindre par la force la personne à se dessaisir des objets",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Conformément aux consignes, si la personne refuse de se séparer d'objets interdits, l'agent doit lui refuser l'accès."
        },
        {
            id: 15,
            question: "À quoi correspond une crash barrière ?",
            answers: [
                "Un système de barrière type passage à niveau pour bloquer les accès",
                "Un test en laboratoire de la résistance des barrières",
                "Aucune des autres réponses",
                "Des barrières de sécurité équipées de pieds empêchant le renversement",
                "L’action de lancer des barrières sur des véhicules voulant forcer les accès"
            ],
            correct: 3,
            explanation: "Une crash barrière est une barrière de sécurité renforcée, dotée de pieds ou d'un système d'ancrage pour résister aux chocs et aux poussées."
        },
        {
            id: 16,
            question: "Quels sont les produits qui nécessitent un pictogramme de sécurité ?",
            answers: [
                "Un produit dangereux pour la santé",
                "Toutes les réponses précédentes",
                "Un gaz sous pression",
                "Un produit corrosif",
                "Un produit comburant"
            ],
            correct: 1,
            explanation: "Tous les produits chimiques dangereux (toxiques, corrosifs, inflammables, comburants, etc.) doivent porter un pictogramme de danger."
        },
        {
            id: 17,
            question: "Qui fournit aux agents de sécurité les équipements de protection individuelle ?",
            answers: [
                "L’entreprise cliente",
                "L’employeur",
                "Le salarié",
                "Aucune des autres réponses",
                "L’INRS"
            ],
            correct: 1,
            explanation: "C'est à l'employeur de fournir gratuitement les EPI adaptés aux risques et de veiller à leur bon usage."
        },
        {
            id: 18,
            question: "Quels sont les faits autorisés et donc non passibles de poursuite en matière d’utilisation d’images de vidéoprotection ?",
            answers: [
                "Aucune des autres réponses",
                "Le fait de ne conserver les images que pendant un mois maximum sauf procédure judiciaire en cours",
                "Le fait de permettre leur accès à des personnes non habilitées",
                "Le fait d’utiliser des images à d’autres fins que celles autorisées",
                "Le fait de falsifier l’enregistrement"
            ],
            correct: 1,
            explanation: "La conservation des images est limitée à un mois maximum, sauf nécessité dans le cadre d'une procédure judiciaire ou administrative."
        },
        {
            id: 19,
            question: "Quel équipement fait partie d’un système de vidéosurveillance ?",
            answers: [
                "Le camescope",
                "Le magnétophone",
                "L’appareil photo",
                "Aucune des autres réponses",
                "La caméra"
            ],
            correct: 4,
            explanation: "La caméra est l'élément central d'un système de vidéosurveillance ou vidéoprotection."
        },
        {
            id: 20,
            question: "Dans une salle de concert, une personne ivre, qui a un comportement menaçant, trouble la tranquillité des spectateurs :",
            answers: [
                "Je l’emmène à l’écart par la force et l’enferme en situation de dégrisement",
                "Je dois faire appel à l’OPJ",
                "Dès lors que la personne a franchi le PIF, c’est aux organisateurs de s’en occuper",
                "Je ne peux pas appréhender la personne car elle n’a commis délit puni d’une peine d’emprisonnement",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "L'agent doit d'abord tenter de calmer la situation, puis si nécessaire, faire appel aux forces de l'ordre, sans enfermement arbitraire."
        },
        {
            id: 21,
            question: "Les organisateurs de manifestation sportives, récréatives ou culturelles à but lucratif, sont tenus (R211-22 du CSI)",
            answers: [
                "D'en faire la déclaration aux maires ou aux préfets de police, si la manifestation peut atteindre plus de 1500 personnes",
                "D'en faire la déclaration aux maires si la manifestation peut atteindre plus de 300 personnes et aux Préfets si elle dépasse 1500 personnes",
                "D'en faire la déclaration uniquement si elles sont sur la liste des événements exposés",
                "Aucune des autres réponses",
                "D'en faire la déclaration au Préfet de région au moins un an avant l'événement"
            ],
            correct: 0,
            explanation: "La déclaration se fait auprès du maire et auprès du préfet (ou préfet de police) pour plus de 1500 personnes."
        },
        {
            id: 22,
            question: "À quoi correspond un losange blanc aux contours rouge avec une flamme sur un emballage ?",
            answers: [
                "Un produit polluant pour l’environnement",
                "Un produit toxique",
                "Aucune des autres réponses",
                "Un produit inflammable",
                "Un produit corrosif"
            ],
            correct: 3,
            explanation: "Ce pictogramme (flamme) signale un produit inflammable."
        },
        {
            id: 23,
            question: "Lorsque des véhicules sont susceptibles de pénétrer au sein du périmètre de protection (L226-1 du CSI), la loi peut également en subordonner l’accès à l’inspection visuelle du contenu du véhicule :",
            answers: [
                "Aucune des autres réponses",
                "Sans le consentement de son conducteur, par un agent de prévention et de sécurité",
                "Avec le consentement de son conducteur, par un agent de prévention et de sécurité, placé sous l’autorité d’un OPJ",
                "Sans le consentement de son conducteur, par un agent de prévention et de sécurité mais sous le contrôle d’un OPJ",
                "Avec le consentement de son conducteur par un agent de prévention et de sécurité"
            ],
            correct: 2,
            explanation: "L'inspection visuelle du véhicule nécessite le consentement du conducteur et peut être réalisée par un APS placé sous l'autorité d'un OPJ."
        },
        {
            id: 24,
            question: "Toute personne intéressée peut-elle demander d’avoir accès aux enregistrements des vidéosurveillance qui la concerne et de demander sa destruction ?",
            answers: [
                "Non, car seuls les opérateurs publics peuvent visionner les images privées",
                "Aucune des autres réponses",
                "Non, car les enregistrements restent confidentiels",
                "Oui, après en avoir fait la demande auprès du préfet",
                "Oui, sauf si le refus est justifié par les conditions fixées par la Loi"
            ],
            correct: 4,
            explanation: "Toute personne a un droit d'accès aux images la concernant et peut en demander l'effacement, sous réserve des limitations prévues par la loi (sûreté, enquête...)."
        },
        {
            id: 25,
            question: "Qu’est-ce qu’une ICPE ?",
            answers: [
                "Une installation classifiée pour la prévention des événements",
                "Aucunes des autres réponses",
                "Une installation classée pour la protection de l’environnement",
                "Un installation classifié pour la prévention de l’état",
                "Une installation classée pour la protection des espaces verts"
            ],
            correct: 2,
            explanation: "ICPE signifie Installation Classée pour la Protection de l'Environnement, soumise à une réglementation spécifique."
        },
        {
            id: 26,
            question: "Quand doit-on rédiger un plan de prévention ?",
            answers: [
                "Dès lors que la durée prévisible des travaux est au moins égale à 400 heures sur une période d’un an",
                "Uniquement sur un site classé SEVESO",
                "Jamais si le sous-traitant dispose de toutes les qualifications requises",
                "Aucune des autres réponses",
                "En cas de travaux que le chef de poste estime dangereux"
            ],
            correct: 0,
            explanation: "Un plan de prévention est obligatoire lorsque des travaux dangereux sont réalisés par une entreprise extérieure et que leur durée prévisible atteint 400 heures sur 12 mois."
        },
        {
            id: 27,
            question: "Le contrôle d’accès électronique est :",
            answers: [
                "Un système de sécurité empêchant l’accès à des personnes autorisées",
                "Aucune des autres réponses",
                "Un système de sécurité permettant de ne faire que des identifications",
                "Un système de sécurité permettant de détecter les personnes au comportement suspect",
                "Un système de sécurité permettant d’autoriser l’accès à des personnes déterminées"
            ],
            correct: 4,
            explanation: "Un contrôle d'accès électronique gère les autorisations d'accès (badge, code, biométrie) pour des personnes préalablement identifiées."
        },
        {
            id: 28,
            question: "Toute personne peut-elle demander d’avoir accès aux enregistrements de vidéosurveillance qui la concerne ?",
            answers: [
                "Oui après en avoir fait la demande auprès du préfet",
                "Selon le bon vouloir du responsable de l’installation de vidéosurveillance car il n’est pas obligé de le faire",
                "Non car les enregistrements restent toujours confidentiels",
                "Oui car cet accès est de droit, sous certaines conditions",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Le droit d'accès aux images est un droit reconnu, mais il est encadré et peut être refusé pour des motifs légitimes (sûreté, enquête)."
        },
        {
            id: 29,
            question: "Constitue une infraction d’atteinte aux systèmes de traitement automatisé des données, le fait :",
            answers: [
                "De modifier des données informatiques",
                "Toutes les réponses sont exactes",
                "D’accéder frauduleusement à des données informatiques",
                "De supprimer des données informatiques",
                "D’introduire un virus informatique dans un système de données informatiques"
            ],
            correct: 1,
            explanation: "Toutes ces actions constituent des atteintes aux systèmes de traitement automatisé des données (articles 323-1 et suivants du code pénal)."
        },
        {
            id: 30,
            question: "Qu’est-ce qui caractérise un risque ?",
            answers: [
                "Les sanctions pénales prévues",
                "Le nombre de blessures",
                "La gravité et la probabilité d’occurrence (fréquence)",
                "Le nombre de victimes",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Un risque est caractérisé par la combinaison de la gravité du dommage potentiel et de la probabilité (fréquence) qu'il se produise."
        },
        {
            id: 31,
            question: "Quelle est la principale différence entre une caméra IP et une caméra analogique ?",
            answers: [
                "La durée de vie de la caméra",
                "La façon dont le signal est transmis",
                "Aucune des autres réponses",
                "La possibilité de distinguer le visage des personnes observées",
                "La taille de l’image et sa précision"
            ],
            correct: 1,
            explanation: "La différence principale réside dans la transmission du signal : numérique (IP) via un réseau, contre analogique pour les caméras traditionnelles."
        },
        {
            id: 32,
            question: "Agent de vidéosurveillance sur un site en journée, vous repérez un individu au visage dissimulé dans un local sensible à accès réglementé, que faites-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Je déclenche l’alarme générale d’évacuation des bâtiments",
                "J’effectue la levée de doute immédiatement pour appréhender l’individu",
                "J’informe immédiatement le responsable sécurité du site conformément aux consignes",
                "J’appelle les forces de l’ordre sans plus attendre"
            ],
            correct: 3,
            explanation: "La première action est de suivre les consignes du site, qui prévoient généralement d'alerter immédiatement le responsable sécurité."
        },
        {
            id: 33,
            question: "La CNIL est :",
            answers: [
                "La Commission Nationale de l’Information et des Libertés",
                "Aucune des autres réponses",
                "La Commission Nationale des Instances de Libertés",
                "Le Conseil National sur l’Informatique et les Libertés",
                "Le Comité National des Institutions pour les Libertés"
            ],
            correct: 1,
            explanation: "CNIL signifie Commission Nationale de l'Informatique et des Libertés."
        },
        {
            id: 34,
            question: "Rondier d'astreinte à votre domicile, le télésurveilleur vous contacte la nuit suite à un déclenchement d’alarme intrusion chez un client : que faites-vous ?",
            answers: [
                "Aucune des autres réponses",
                "Je donne mon mot de passe pour m’authentifier et me rends sur place pour effectuer la levée de doute",
                "Je pense qu’il s’agit d’un dysfonctionnement et économise une ronde de nuit à mon entreprise, j’irai demain à la première heure de ma prise de fonction",
                "J’envoie les forces de l’ordre pour effectuer la levée de doute, n’étant pas habilité",
                "Je mets à jour l’outil de la main courante électronique et attends les consignes"
            ],
            correct: 1,
            explanation: "En tant que rondier d'astreinte, la procédure standard est de se rendre sur place après authentification pour effectuer une levée de doute."
        },
        {
            id: 35,
            question: "À quoi peut servir un PPI/POI/PER ?",
            answers: [
                "Aucune des autres réponses",
                "À planifier les opérations de maintien de l’ordre",
                "À prévoir la mobilisation des services de secours publics",
                "À coordonner les moyens internes des installations classées",
                "À protéger les installations recevant du public"
            ],
            correct: 2,
            explanation: "Ces plans (Plan Particulier d'Intervention, Plan d'Opération Interne, Plan d'Évacuation et de Rassemblement) servent à organiser la réponse interne et la mobilisation des secours publics en cas d'incident majeur."
        },
        {
            id: 36,
            question: "Quel est l’objectif général de la prévention ?",
            answers: [
                "Améliorer les statistiques concernant les taux d’accident du travail",
                "Aucune des autres réponses",
                "Éviter ou limiter les dommages",
                "Protéger l’employeur du risque pénal",
                "Définir les mesures de sûreté"
            ],
            correct: 2,
            explanation: "L'objectif principal de la prévention est d'éviter ou, à défaut, de réduire les dommages pour les personnes, les biens et l'environnement."
        },
        {
            id: 37,
            question: "Comment sont désignés les grands événements exposés à un risque exceptionnel de menace terroriste ?",
            answers: [
                "Par le Préfet suite aux déclaration obligatoires des organisateurs",
                "Aucune des autres réponses",
                "Par les organisateurs dans le dossier d’analyse des risques",
                "Par décret conformément au L 211-11-1 du CSI",
                "Par le Ministre de l’Intérieur en fonction des derniers événements"
            ],
            correct: 3,
            explanation: "Ces événements sont désignés par décret, conformément à l'article L. 211-11-1 du Code de la Sécurité Intérieure."
        },
        {
            id: 38,
            question: "L’autorité de police peut imposer la présence d’un service d’ordre à l’organisateur d’une manifestation sportive ?",
            answers: [
                "Aucune des autres réponses",
                "Oui, pour les manifestations de plus de 500 personnes",
                "Oui, si elle estime insuffisantes les mesures envisagées par les organisateurs",
                "Non, si la manifestation est inférieure à 1500 personnes",
                "Non si l’état d’urgence attentat n’est pas décrété"
            ],
            correct: 2,
            explanation: "L'autorité de police (préfet, maire) peut imposer un service d'ordre si elle juge les mesures de sécurité de l'organisateur insuffisantes."
        },
        {
            id: 39,
            question: "Quand doit-on rédiger impérativement un plan de prévention ?",
            answers: [
                "Si vous estimez que l’importance des travaux le nécessite",
                "Uniquement sur demande explicite du client",
                "Uniquement lorsque les consignes de sûreté le prévoient",
                "Aucune des autres réponses",
                "En cas de travaux dangereux listés dans l’arrêté du 19 mars 1993"
            ],
            correct: 4,
            explanation: "Un plan de prévention est obligatoire pour les travaux dangereux figurant dans la liste de l'arrêté du 19 mars 1993."
        },
        {
            id: 40,
            question: "Quel est le risque majeur de clôturer un site pour une manifestation culturelle ?",
            answers: [
                "Engorgement important à l’entrée du site",
                "Rendre l’évacuation plus difficile",
                "Aucune des autres réponses",
                "Aucun, la clôture supprime tous les risques",
                "Provoquer les attroupements à l’extérieur du site"
            ],
            correct: 1,
            explanation: "La clôture peut rendre l’évacuation plus difficile si la gestion des flux d'entrée est mal organisée."
        },
        {
            id: 41,
            question: "Un agent SSIAP vient au PC de vidéosurveillance vous demande de lui montrer des images d’un bâtiment pour contrôler la présence des extincteurs trop éloignés, que faites-vous ?",
            answers: [
                "J’accepte car il s’agit de risque d’incendie",
                "J’accepte car le site est calme et si aucun risque potentiel n’est prévisible à cet instant",
                "Je refuse sans avoir un document écrit du client",
                "Je refuse, le système n’est pas fait pour cela",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Le SSIAP doit vérifier les extincteurs pendant sa ronde."
        },
        {
            id: 42,
            question: "Agent en poste, dans une enceinte où se déroule une manifestation culturelle au sens du R211-25 du CSI, vous n’avez pas dans vos missions :",
            answers: [
                "À porter assistance et secours aux personnes en péril",
                "Aucune des autres réponses",
                "À être prêt à intervenir pour éviter qu’un différend ne dégénère en rixe",
                "À rassembler les groupes antagonistes pour mieux les contrôler",
                "À veiller au maintien de la vacuité des itinéraires et des sorties de secours"
            ],
            correct: 3,
            explanation: "L'agent de sécurité ne doit pas rassembler des groupes antagonistes, ce qui pourrait aggraver la situation. Il doit au contraire les séparer."
        },
        {
            id: 43,
            question: "Dans lequel de ces textes la vidéoprotection est-elle encadrée ?",
            answers: [
                "Le décret 2014-007 du 20 février 2014",
                "La partie Législative du livre VI du code de la sécurité intérieure",
                "La convention Collective Nationale Prévention et Sécurité",
                "Aucune des autres réponses",
                "Le Guide APSAD des installations électroniques"
            ],
            correct: 1,
            explanation: "Le cadre légal principal de la vidéoprotection se trouve dans le Livre VI du Code de la Sécurité Intérieure (partie législative)."
        },
        {
            id: 44,
            question: "Un système de vidéoprotection peut proposer plusieurs types de caméras :",
            answers: [
                "Des caméras à vision nocturne",
                "Toutes les réponses précédentes sont exactes",
                "Des caméras à lecture de plaques minéralogiques",
                "Des caméras à 360°",
                "Des caméras fixes"
            ],
            correct: 1,
            explanation: "Tous ces types de caméras (fixes, 360°, lecture de plaques, vision nocturne) peuvent faire partie d'un système de vidéoprotection."
        },
        {
            id: 45,
            question: "Le schéma d’installation de la vidéoprotection permet :",
            answers: [
                "De compléter le système de surveillance incendie",
                "De garantir aux forces de l’ordre la bonne réalisation de la mission de sûreté",
                "De capter, de transmettre, de stocker, de visionner les images",
                "D’installer, de maintenir et de mettre à disposition des prestataires les images",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Le schéma technique décrit l'ensemble de la chaîne fonctionnelle : capture, transmission, stockage et consultation des images."
        },
        {
            id: 46,
            question: "Un APS effectue une ronde dans la chaufferie gaz, il peut y rentrer si :",
            answers: [
                "Il dispose d’une radio fabriquée après le 1 juillet 2017",
                "Il dispose d’un émetteur multifréquence",
                "Il dispose d’une pastille de détection de gaz homologuée",
                "Il dispose d’un matériel antidéflagrant",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Pour pénétrer dans une atmosphère potentiellement explosive (ATEX), l'agent doit être équipé de matériel antidéflagrant certifié."
        },
        {
            id: 47,
            question: "À quoi correspond l’adresse suivante sur un E.C.S adressable : D.A.I – T.G.B.T ?",
            answers: [
                "À une alarme feu dans le local électrique",
                "À une alarme intrusion dans le local chaufferie",
                "Aucune des autres réponses",
                "À une alarme feu dans le local technique",
                "À une alarme intrusion dans le local de la base informatique"
            ],
            correct: 0,
            explanation: "Dans un système adressable, 'D.A.I – T.G.B.T' désigne généralement un Détecteur Automatique d'Incendie situé dans le Tableau Général Basse Tension (local électrique)."
        },
        {
            id: 48,
            question: "Quels sont notamment les effets secondaires du courant électrique sur l’homme ?",
            answers: [
                "Aucune des autres réponses",
                "Une sensation d’euphorie",
                "Des troubles cardiovasculaires et des lésions veineuses",
                "De troubles digestifs",
                "Une force musculaire décuplée"
            ],
            correct: 2,
            explanation: "Les effets principaux de l'électrisation sont les brûlures, les troubles cardiaques (fibrillation) et les lésions des tissus et des vaisseaux."
        },
        {
            id: 49,
            question: "Le plan ORSEC est :",
            answers: [
                "Aucune des autres réponses",
                "Un plan de circulation des riverains lors des événements culturels ou festifs",
                "Un plan de limitation des déplacements dans le cadre du plan Vigipirate « Urgence attentat »",
                "Un plan d’organisation des secours coordonné par le Préfet",
                "Un plan d’intervention coordonné des forces de l’ordre publiques et privées"
            ],
            correct: 3,
            explanation: "Le plan ORSEC (Organisation de la Réponse de Sécurité Civile) est un plan départemental de secours, déclenché et coordonné par le Préfet."
        },
        {
            id: 50,
            question: "Quel est le risque principal lors d’un rassemblement sportif ?",
            answers: [
                "Les tentatives d’introduction des VIP dans la zones privatives",
                "Les débordements des supporters",
                "Ne pas disposer d’agents féminins pour pratiquer les palpations",
                "La fraude aux faux billets",
                "Aucune des autres réponses"
            ],
            correct: 1,
            explanation: "Le principal risque est lié aux mouvements de foule et aux débordements violents entre supporters (hooliganisme)."
        },
        {
            id: 51,
            question: "Parmi ces installations classées, laquelle n’est pas classée SEVESO ou à risque ?",
            answers: [
                "Traitement des déchets d’amiante",
                "Usine chimique",
                "Production de gaz",
                "Dépôt de matières incombustibles",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Un dépôt de matières incombustibles (comme du sable) ne présente pas les mêmes risques majeurs que les sites SEVESO (chimie, gaz, déchets dangereux)."
        },
        {
            id: 52,
            question: "Un lieu ou un événement exposé à un risque d’actes terroristes à raison de sa nature et de l’ampleur de sa fréquentation, peut par la Loi du 30/10/17 être institué :",
            answers: [
                "Périmètre de protection au sein duquel l’accès et la circulation des personnes sont réglementés",
                "Périmètre de sûreté dont l’accès et la circulation des personnes sont restreints",
                "Aucune des autres réponses",
                "Périmètre de sécurité pour lequel les conditions d’exercice des agents sont limitées",
                "Périmètre d’urgence dans lequel des conditions d’usage des armes sont étendues"
            ],
            correct: 0,
            explanation: "La loi du 30 octobre 2017 permet de créer des 'périmètres de protection' où l'accès et la circulation sont réglementés pour faire face à la menace terroriste."
        }
    ]
};
