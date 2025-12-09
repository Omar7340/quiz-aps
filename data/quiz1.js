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
                "L'article 63 du code pénal",
                "L'article 73 du code pénal",
                "L'article 122-7 du code pénal",
                "L'article 223-6 du code pénal"
            ],
            correct: 3,
            explanation: "L'article 223-6 du code pénal traite spécifiquement de la non-assistance à personne en danger."
        },
        {
            id: 2,
            question: "Les acteurs de la sécurité privée doivent respecter la confidentialité des informations dont ils ont eu connaissance dans le cadre de leur activité :",
            answers: [
                "Dans le respect d'un délai de 5 ans",
                "Sauf en cas d'accord préalable de leur ancien employeur",
                "Sous réserve des cas prévus ou autorisés par la loi (ex : procédure judiciaire)",
                "Dans tous les cas",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "La confidentialité est une obligation professionnelle, sauf dans les cas prévus ou autorisés par la loi."
        },
        {
            id: 3,
            question: "Quelles sont les conditions relatives à la défense, devant être réunies pour pouvoir invoquer la légitime défense ?",
            answers: [
                "Indispensable, proportionnée à l'attitude de l'agresseur, différée en cas d'hésitation",
                "Nécessaire, dans le même temps, proportionnée à la gravité de l'atteinte",
                "Actuelle, dirigée contre l'agresseur, imminente",
                "Aucune des autres réponses",
                "Instinctive, sans violence, après sommations"
            ],
            correct: 1,
            explanation: "La légitime défense nécessite trois conditions : nécessaire, simultanée et proportionnée."
        },
        {
            id: 4,
            question: "En fin de contrat, que devez-vous faire de votre carte professionnelle matérialisée ?",
            answers: [
                "La détruire",
                "Aucune des autres réponses",
                "La rendre obligatoirement à l'employeur",
                "La rendre au CNAPS",
                "La conserver"
            ],
            correct: 2,
            explanation: "La carte professionnelle doit être restituée à l'employeur en fin de contrat."
        },
        {
            id: 5,
            question: "Agent de prévention et de sécurité en poste de filtrage:",
            answers: [
                "Je suis habilité à effectuer une fouille de personne dans certains cas",
                "Je peux effectuer un relevé d'identité, si les consignes ou le règlement intérieur le prévoient",
                "Aucune des autres réponses",
                "Je suis habilité à effectuer un interrogatoire dans certains cas",
                "Je suis habilité à effectuer un contrôle d'identité dans certains cas"
            ],
            correct: 4,
            explanation: "Un APS peut effectuer un contrôle d'identité dans les conditions prévues par la loi et le règlement intérieur."
        },
        {
            id: 6,
            question: "Pour avoir accès à une formation aux métiers de la sécurité privée, un candidat doit obtenir auprès de la C.L.A.C :",
            answers: [
                "Un agrément signé par le préfet",
                "Une autorisation préalable ou provisoire",
                "Une prescription d'entrée en stage",
                "Aucune des autres réponses",
                "Une attestation de compétence"
            ],
            correct: 1,
            explanation: "La C.L.A.C (Commission Locale d'Agrément et de Contrôle) délivre une autorisation préalable ou provisoire."
        },
        {
            id: 7,
            question: "La formation pour le renouvellement de la carte professionnelle (MAC), est à la charge :",
            answers: [
                "De l'entreprise du site sur lequel je suis en poste",
                "Des centres de formation accrédités",
                "De mon employeur, conformément à l'accord de branche",
                "Aucune des autres réponses",
                "Du CNAPS via le Fonds de Modernisation Sociale"
            ],
            correct: 2,
            explanation: "La formation MAC est à la charge de l'employeur selon l'accord de branche de la sécurité privée."
        },
        {
            id: 8,
            question: "Je suis en situation de pouvoir agir immédiatement contre une atteinte physique d'une personne:",
            answers: [
                "Je n'agis pas. Dans tous les cas, ce sont aux forces de l'ordre d'intervenir",
                "Je n'agis jamais sauf si je suis autorisé à porter d'une arme.",
                "J'agis s'il n'y a pas de risque pour moi ou pour autrui",
                "J'agis même s'il y a risque pour moi, c'est mon devoir d'APS",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Un APS peut intervenir pour protéger les personnes, mais doit évaluer les risques pour lui-même et autrui."
        },
        {
            id: 9,
            question: "Le port et transport d'arme sans agrément spécifique, de type générateurs aérosols et arme à impulsion électrique de contact :",
            answers: [
                "Aucune des autres réponses",
                "Est autorisé",
                "Est interdit par la loi sauf en cas de légitime défense",
                "Constitue une contravention passible d'une peine d'emprisonnement",
                "Constitue une infraction qualifiée de délit, passible d'une peine d'un an d'emprisonnement et de 15000 euros d'amende"
            ],
            correct: 4,
            explanation: "Le port sans autorisation d'armes de catégorie D est un délit sanctionné par l'article L. 317-8 du CSI."
        },
        {
            id: 10,
            question: "Je suis agent de prévention et de sécurité, intervenant en sous-traitance, pour une autre entreprise de sécurité, quelle tenue dois-je porter ?",
            answers: [
                "Peu importe la tenue, seule la carte professionnelle compte",
                "La tenue de mon entreprise",
                "Aucune des autres réponses",
                "La tenue de l'entreprise qui détient le contrat",
                "Je dois porter ma tenue mais avec les insignes et les logos de l'entreprise qui détient le contrat"
            ],
            correct: 2,
            explanation: "Aucune des autres réponses n’est correcte, car la réglementation impose une tenue conforme aux obligations légales (numéro, mention “sécurité privée”, insignes), sans exiger spécifiquement la tenue de l’une ou l’autre entreprise."
        },
        {
            id: 11,
            question: "Qu'est ce qui constitue un cas de présomption en légitime défense ?",
            answers: [
                "Se défendre en cas d'agression verbale",
                "Se défendre en cas de vol à l'arraché commis avec violence",
                "Aucune des autres réponses",
                "Se défendre en cas de dispute",
                "Se défendre en cas d'agression mentale"
            ],
            correct: 1,
            explanation: "La présomption de légitime défense s'applique notamment en cas de vol avec violence (article 122-6 CP)."
        },
        {
            id: 12,
            question: "Selon le code pénal, est assimilé à une arme :",
            answers: [
                "Aucune des autres réponses",
                "Uniquement les armes de fonction",
                "Tout objet représentant un danger",
                "Uniquement les armes en état de fonctionnement",
                "Tout objet présentant une ressemblance avec une arme de nature à créer une confusion pour menacer de tuer ou blesser"
            ],
            correct: 4,
            explanation: "L'article 132-75 du CP assimile à une arme tout objet utilisé pour menacer de tuer ou blesser."
        },
        {
            id: 13,
            question: "En vertu de l'article R 613-8 du CSI, l'agent de sécurité peut être agréé à la palpation s'il :",
            answers: [
                "Justifie de cinq années d'exercice professionnel",
                "Justifie de trois années d'exercice professionnel",
                "Justifie de deux années d'exercice professionnel",
                "Aucunes des réponses",
                "Justifie d'une moralité ou d'un comportement compatible avec l'exercice des missions pour lesquelles l'agrément est demandé"
            ],
            correct: 4,
            explanation: "L'agrément à la palpation nécessite une vérification de moralité et de compétence."
        },
        {
            id: 14,
            question: "Quel est le casier judiciaire que consulte le CNAPS pour délivrer l'Autorisation Préalable ou la Carte Professionnelle ?",
            answers: [
                "Bulletin N°2",
                "Bulletin N°1",
                "Bulletin N°4",
                "Aucune des autres réponses",
                "Bulletin N°3"
            ],
            correct: 0,
            explanation: "Le CNAPS consulte le bulletin n°2 du casier judiciaire pour vérifier l'absence de condamnations incompatibles."
        },
        {
            id: 15,
            question: "Quels sont les trois éléments constitutifs de l'infraction ?",
            answers: [
                "L'élément légal, constitutionnel, normal",
                "L'élément coupable, intentionnel, moral",
                "Aucune des autres réponses",
                "L'élément légal, matériel, moral",
                "L'élément pénal, matériel, moral"
            ],
            correct: 3,
            explanation: "Une infraction requiert : un élément légal (texte), un élément matériel (fait), un élément moral (intention)."
        },
        {
            id: 16,
            question: "Dans le cas où l'agent n'a pas passé sa formation MAC à la date anniversaire du renouvellement de la carte professionnelle :",
            answers: [
                "Il doit obligatoirement repasser l'intégralité de la formation",
                "Il peut travailler avec une confirmation d'inscription au MAC attestée par un centre de formation agréé",
                "Il a 12 mois pour passer la formation MAC mais il n'a plus le droit de travailler",
                "Aucune des autres réponses",
                "Il a 12 mois pour travailler et passer la formation avant sa perte définitive"
            ],
            correct: 2,
            explanation: "Une attestation d'inscription au MAC permet de continuer à travailler pendant le délai de régularisation."
        },
        {
            id: 17,
            question: "Quelles sont les principales missions de la Gendarmerie ?",
            answers: [
                "Aucune des autres réponses",
                "La dissuasion, la prévention, la protection et l'intervention",
                "Assurer uniquement les contrôles routiers de dépassement de vitesse",
                "La surveillance uniquement des villes",
                "La surveillance uniquement des campagnes"
            ],
            correct: 1,
            explanation: "Les missions de la Gendarmerie sont multiples : sécurité, prévention, protection, intervention."
        },
        {
            id: 18,
            question: "Un APS autorisé au port d'arme, peut-il détenir l'arme de service à son domicile ?",
            answers: [
                "Oui, à condition de l'enfermer dans un coffre fort",
                "Oui, avec autorisation de son employeur",
                "Non, en aucun cas",
                "Oui, il est titulaire d'une autorisation de port d'armes",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "L'arme de service doit rester sous la responsabilité de l'employeur et ne peut être détenue au domicile."
        },
        {
            id: 19,
            question: "La légitime défense, c'est :",
            answers: [
                "Le droit de se défendre ou de défendre autrui contre une agression physique injuste",
                "Riposter violement peu importe la gravité de l'agression",
                "Aucune des autres réponses",
                "Le droit de se faire justice soi-même",
                "Le droit de se défendre physiquement suite à une agression verbale"
            ],
            correct: 0,
            explanation: "La légitime défense permet de repousser une agression actuelle et injuste contre soi ou autrui."
        },
        {
            id: 20,
            question: "Conformément au code de la sécurité intérieure, quel est le régime administratif d'acquisition et de détention d'une arme de catégorie D ?",
            answers: [
                "Armes soumises à autorisation pour l'acquisition et à la détention",
                "Armes soumises à déclaration pour l'acquisition et la détention",
                "Aucune des autres réponses",
                "Armes et matériels dont l'acquisition et la détention sont libres",
                "Armes interdites à l'acquisition et à la détention"
            ],
            correct: 3,
            explanation: "Les armes de catégorie D (bombes lacrymogènes, etc.) sont en vente et détention libres pour les majeurs."
        },
        {
            id: 21,
            question: "Quelles sont les caractéristiques du casier judiciaire ?",
            answers: [
                "Le casier judiciaire contient les condamnations pénales d'une même personne. Il existe 2 types de bulletins",
                "Aucune des autres réponses",
                "Le casier judiciaire contient les condamnations civiles d'une même personne. Il existe 4 types de bulletins",
                "Le casier judiciaire contient les condamnations pénales d'une même personne",
                "Le casier judiciaire contient les condamnations pénales et civiles d'une même personne"
            ],
            correct: 3,
            explanation: "Le casier judiciaire recense les condamnations pénales. Il existe 3 bulletins (n°1, n°2, n°3)."
        },
        {
            id: 22,
            question: "La carte professionnelle peut être retirée si le titulaire :",
            answers: [
                "Change d'employeur",
                "Change de site d'affectation",
                "Déménage dans une autre région",
                "Fait l'objet d'une inscription sur le bulletin n°2 de son casier judiciaire",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "Une inscription au bulletin n°2 pour des faits incompatibles avec la profession peut entraîner le retrait de la carte."
        },
        {
            id: 23,
            question: "Si vous réussissez à l'examen final du CQP-APS, vous pourrez demander la carte professionnelle :",
            answers: [
                "Agent Private Security",
                "Agent de Protection et de Sécurité",
                "Agent Privé de Sécurité",
                "Aucune des autres réponses",
                "Agent de Prévention et de Sécurité"
            ],
            correct: 4,
            explanation: "Le CQP-APS (Certificat de Qualification Professionnelle) permet d'obtenir la carte d'Agent de Prévention et de Sécurité."
        },
        {
            id: 24,
            question: "La demande de renouvellement de ma carte professionnelle doit être présentée :",
            answers: [
                "6 mois avant sa date d'expiration",
                "Aucune des autres réponses",
                "Au moins 4 mois avant sa date d'expiration",
                "Au moins 3 mois avant sa date d'expiration",
                "Au moins 1 mois avant sa date d'expiration"
            ],
            correct: 3,
            explanation: "Le renouvellement doit être demandé au moins 3 mois avant l'expiration de la carte."
        },
        {
            id: 25,
            question: "Il est interdit aux personnes exerçant une activité de sécurité privée :",
            answers: [
                "De se livrer à une surveillance sur des lieux recevant du public",
                "Aucune des autres réponses",
                "De s'immiscer dans le déroulement d'un conflit du travail",
                "De se livrer à une surveillance contre le vol à l'étalage",
                "De se livrer à une surveillance dans un stade"
            ],
            correct: 2,
            explanation: "Les agents de sécurité ne doivent pas intervenir dans les conflits du travail (article L. 611-1 du CSI)."
        },
        {
            id: 26,
            question: "Quel article du code pénal traitent du « vol » ?",
            answers: [
                "L'article 311-1 du code pénal",
                "L'article 226-1 du code pénal",
                "L'article 53 du code pénal",
                "L'article 223-6 du code pénal"
            ],
            correct: 0,
            explanation: "L'article 311-1 CP définit le vol comme la soustraction frauduleuse de la chose d'autrui."
        },
        {
            id: 27,
            question: "Quelle situation est-elle une abstention volontaire de combattre un sinistre ?",
            answers: [
                "Le fait de ne pas avoir effectué la levée de doute avant le déclenchement de l'alarme incendie",
                "Le fait de s'abstenir de porter assistance à une personne ayant chuté dans un escalier",
                "Le fait de fuir face à un incendie sans avoir fait alerter les services de secours",
                "Aucune des autres réponses",
                "Le fait de ne pas faire déplacer un véhicule garé sur l'emplacement réservé aux véhicules des pompiers"
            ],
            correct: 2,
            explanation: "Ne pas alerter les secours en cas d'incendie constitue une abstention volontaire de combattre un sinistre."
        },
        {
            id: 28,
            question: "En poste dans un magasin, le directeur me demande de surveiller une caissière qu'il soupçonne de ne pas respecter ses horaires de pause :",
            answers: [
                "Je refuse de le faire car c'est un délégué du personnel du client",
                "Je le fais mais exige de disposer de la vidéo pour disposer des preuves",
                "Je refuse car il m'est interdit de m'immiscer dans le déroulement d'un événement se rapprochant à un possible conflit de travail",
                "Je le fais et prends bien soin de l'indiquer sur la main courante",
                "Aucunes des autres réponses"
            ],
            correct: 2,
            explanation: "La surveillance des employés dans le cadre de conflits potentiels est interdite aux agents de sécurité."
        },
        {
            id: 29,
            question: "Le respect de la vie privée est traité dans :",
            answers: [
                "L'article 9 du code pénal",
                "L'article 9 du code civil",
                "L'article 226-1 du code pénal",
                "L'article 226-1 du code civil"
            ],
            correct: 1,
            explanation: "L'article 9 code civil \"Chacun a droit au respect de sa vie privée.\"."
        },
        {
            id: 30,
            question: "En vertu de l'article L226-1 du Code de la sécurité intérieure définissant le périmètre de protection, quel acteur est chargé de la mise en œuvre des mesures de contrôle ?",
            answers: [
                "L'agent de sécurité",
                "L'agent de Police Municipale",
                "Le Maire de la commune",
                "Les gendarmes adjoints"
            ],
            correct: 0,
            explanation: "L'agent de sécurité est chargé de mettre en œuvre les mesures de contrôle dans le périmètre de protection."
        },
        {
            id: 31,
            question: "Quelles sont les différentes formes de libertés publiques?",
            answers: [
                "Politique",
                "Individuelle",
                "Syndicale",
                "Civile",
                "Toutes les réponses sont bonnes"
            ],
            correct: 4,
            explanation: "Les libertés publiques englobent les libertés politiques, individuelles, syndicales et civiles."
        },
        {
            id: 32,
            question: "Une arme à feu d'épaule à un coup par canon (type fusil de chasse est classé en catégorie?",
            answers: [
                "B",
                "Aucune des réponses",
                "D",
                "C",
                "A"
            ],
            correct: 3,
            explanation: "Les fusils de chasse à un coup sont classés en catégorie C (soumise à déclaration)."
        },
        {
            id: 33,
            question: "Est une arme par destination:",
            answers: [
                "Tout objet pouvant causer des dommages",
                "Tout objet conçu pour usage professionnel",
                "Tout objet non conçu pour menacer, tuer ou blesser mais utilisé comme tel",
                "Tout objet conçu pour tuer ou blesser",
                "Aucune des autres réponse"
            ],
            correct: 2,
            explanation: "Une arme par destination est un objet détourné de son usage normal pour servir d'arme."
        },
        {
            id: 34,
            question: "Un agent de Prévention et de Sécurité d'un service interne doit:",
            answers: [
                "Porter une tenue réglementaire",
                "Toutes les réponses sont exactes",
                "Disposer d'une carte professionnelle délivrée par la CLAC",
                "Se soumettre au code de déontologie",
                "Se soumettre à l'application du livre VI"
            ],
            correct: 1,
            explanation: "Un APS en service interne doit respecter toutes ces obligations réglementaires."
        },
        {
            id: 35,
            question: "Agent rondier intervenant, je viens d'apprendre par lettre recommandée que j'ai perdu mon permis de conduire:",
            answers: [
                "Étant en fonction d'agent de sécurité, je reste habilité à conduire uniquement pour mon activité de sécurité privée",
                "Je demande à un ami disposant du permis de me conduire sur les lieux d'intervention",
                "Je m'inscris à un stage de récupération de points et continue à tenir mon poste de rondier intervenant",
                "Je dois prévenir mon employeur pour mettre en place une solution transitoire",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "La perte du permis de conduire doit être signalée immédiatement à l'employeur pour adaptation du poste."
        },
        {
            id: 36,
            question: "Un agent de sécurité a le droit de porter un « TASER »",
            answers: [
                "Aucune des autres réponses",
                "Le port et l'utilisation sont interdits",
                "Sous conditions d'une autorisation du maire",
                "Sous condition qu'il détienne une carte professionnelle à jour",
                "Sous condition qu'il réalise une prestation sur un site dangereux"
            ],
            correct: 1,
            explanation: "Les TASER sont classés en catégorie B et interdits aux agents de sécurité privée."
        },
        {
            id: 37,
            question: "Agent rondier intervention, je dispose d'un véhicule d'entreprise équipé d'un gyrophare orange:",
            answers: [
                "Aucune des autres réponses",
                "C'est interdit sauf en situation d'urgence attentat",
                "C'est absolument interdit",
                "C'est autorisé uniquement à l'intérieur des sites surveillés, si les consignes le prévoient",
                "C'est autorisé même sur la voie publique"
            ],
            correct: 3,
            explanation: "Les gyrophares oranges sont autorisés uniquement à l'intérieur des sites privés pour signaler des interventions."
        },
        {
            id: 38,
            question: "Un revolver chambré pour un calibre 38 est une arme de catégorie:",
            answers: [
                "A",
                "D",
                "B",
                "C",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Les revolvers de calibre .38 sont classés en catégorie B (armes soumises à autorisation)."
        },
        {
            id: 39,
            question: "Le fait de commettre des violences sur autrui entrainant un ITT de plus de 8 jours est une infraction qualifiée de:",
            answers: [
                "Crime passible d'emprisonnement",
                "Aucune des autres réponses",
                "Rappel à la loi passible d'emprisonnement",
                "Contravention passible d'emprisonnement",
                "Délit possible d'emprisonnement"
            ],
            correct: 4,
            explanation: "Les violences avec ITT > 8 jours constituent un délit (article 222-11 CP)."
        },
        {
            id: 40,
            question: "Au titre de l'article R631-15 du livre VI du CSI, les employeurs ont obligation:",
            answers: [
                "D'effectuer une déclaration unique d'embauche",
                "De vérifier que leurs employés sont titulaires d'autorisation préfectorale d'exercer",
                "De contrôler la classification de leurs employés",
                "De s'assurer de l'adéquation des qualifications professionnelles de leurs employés avec leurs missions confiées",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "L'employeur doit vérifier que les qualifications correspondent aux missions confiées."
        },
        {
            id: 41,
            question: "Que contient le casier judiciaire B3?",
            answers: [
                "Aucune des autres réponses",
                "Rien de particulier le bulletin n°3 comporte les condamnations correctionnelles et criminelles",
                "Le bulletin n°3 comporte toutes les décisions de justice (peines de prison, amende….)",
                "Le bulletin n°3 comporte uniquement les condamnations les plus graves"
            ],
            correct: 3,
            explanation: "Le bulletin n°3 comporte uniquement les condamnations les plus graves."
        },
        {
            id: 42,
            question: "Quelle sanction disciplinaire n'est pas applicable à un agent de sécurité suite à un manquement au code de déontologie?",
            answers: [
                "Un avertissement",
                "Une interdiction d'exercer la profession à titre définitif",
                "Aucune des autres réponses",
                "Un blâme",
                "Une interdiction d'exercer la profession à titre temporaire"
            ],
            correct: 1,
            explanation: "L'interdiction définitive d'exercer est une sanction administrative, non disciplinaire."
        },
        {
            id: 43,
            question: "Laquelle de ces propositions constitue une infraction?",
            answers: [
                "Le fait de ne pas agir contre une personne qui menace avec une arme",
                "Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé",
                "Aucune des autres réponses",
                "Le fait de ne pas remplir correctement la main courante",
                "Le fait d'arriver en léger retard à sa prise de poste sans avoir prévenu"
            ],
            correct: 1,
            explanation: "La non-assistance à personne en danger (article 223-6 CP) est une infraction pénale."
        },
        {
            id: 44,
            question: "Comment appelle-t-on réglementairement un Agent de Prévention et de Sécurité qui travaille avec un chien?",
            answers: [
                "Un agent canin de sécurité",
                "Un agent de sécurité cynophile",
                "Un conducteur de chien",
                "Aucune des autres réponses",
                "Un maître chien"
            ],
            correct: 1,
            explanation: "Le terme réglementaire est 'agent de sécurité cynophile'."
        },
        {
            id: 45,
            question: "Je dispose de deux contrats à temps plein dans deux entreprises de sécurité privée différentes:",
            answers: [
                "Je n'ai pas le droit sauf si je dispose de deux cartes professionnelles",
                "J'ai parfaitement le droit si je préviens les deux employeurs",
                "Je n'ai pas le droit de cumuler deux emplois à temps plein",
                "J'ai parfaitement le droit puisque je ne dispose pas de temps légal de travail journalier",
                "Aucune des autres réponses"
            ],
            correct: 2,
            explanation: "Le cumul de deux emplois à temps plein est interdit (dépassement du temps de travail légal)."
        },
        {
            id: 46,
            question: "Constitue une rébellion le fait d'opposer une résistance violente",
            answers: [
                "Lors d'une agression contre sa personne",
                "Pour repousser de nuit l'entrée dans un lieu habité",
                "Aucune des autres réponses",
                "A un représentant des forces de l'ordre agissant dans l'exercice de ses fonctions",
                "Dans un cas de légitime défense des biens"
            ],
            correct: 3,
            explanation: "La rébellion consiste à résister violemment à un agent public dans l'exercice de ses fonctions (article 433-6 CP)."
        },
        {
            id: 47,
            question: "Une arme d'épaule à répétition automatique relevant du matériel de guerre est une arme de catégorie:",
            answers: [
                "A",
                "B",
                "D",
                "Aucune des autres réponses",
                "C"
            ],
            correct: 0,
            explanation: "Les armes automatiques relevant du matériel de guerre sont classées en catégorie A (interdites)."
        },
        {
            id: 48,
            question: "Je suis en situation de pouvoir agir immédiatement contre une atteinte à l'intégrité physique d'une personne:",
            answers: [
                "J'agis s'il n'y a pas de risque pour moi ou pour autrui",
                "J'agis même s'il y a risque pour moi, c'est mon devoir d'APS",
                "Je n'agis pas. Dans tous les cas, ce sont aux forces de l'ordre d'intervenir",
                "Je n'agis jamais sauf si je suis autorisé à porter une arme",
                "Aucune des autres réponses"
            ],
            correct: 0,
            explanation: "Un APS doit évaluer les risques avant d'intervenir pour protéger autrui."
        },
        {
            id: 49,
            question: "Le vol avec arme est qualifié de:",
            answers: [
                "Aucune des autres réponses",
                "Délit qualifié",
                "Crime terroriste",
                "Crime",
                "Délit aggravé"
            ],
            correct: 4,
            explanation: "Le vol avec arme est un délit aggravé (article 311-4 CP)."
        },
        {
            id: 50,
            question: "Les agents de sécurité employés par un bailleur d'immeuble à usage d'habitation peuvent être armés:",
            answers: [
                "D'un pistolet",
                "D'un bâton de défense de type TONFA",
                "D'une grande lacrymogène ayant un capacité inférieure à 100ml",
                "Aucune des autres réponses",
                "D'un revolver"
            ],
            correct: 1,
            explanation: "Seules les bâtons de défense sont autorisées pour ce type de surveillance."
        },
        {
            id: 51,
            question: "Le directeur de l'établissement où je suis en poste me demande de prendre un colis à l'accueil pour le déposer dans un service interne pendant ma ronde",
            answers: [
                "Aucune des autres réponses",
                "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire",
                "Je le fais, puisque cela ne me détourne pas de mon circuit de ronde",
                "Je ne le fais pas, car je n'ai pas de chariot adapté à la mission",
                "Je le fais, puisque le principe d'exclusivité ne s'applique qu'à mon entreprise"
            ],
            correct: 1,
            explanation: "Le principe d'exclusivité interdit aux agents de sécurité d'effectuer des tâches étrangères à leur mission."
        },
        {
            id: 52,
            question: "Que risque un employeur qui a conclu un contrat de travail avec un agent de sécurité, non titulaire de la carte professionnelle?",
            answers: [
                "1 an d'emprisonnement et 15 000 euros d'amende",
                "Aucune des autres réponses",
                "2 ans d'emprisonnement et 30 000 euros d'amende",
                "L'employeur ne risque rien",
                "1 an d'emprisonnement et 2 000 euros d'amende"
            ],
            correct: 2,
            explanation: "Embaucher un agent sans carte professionnelle est sanctionné par l'article L. 622-13 du CSI."
        },
        {
            id: 53,
            question: "Dans quelle situation seriez vous reconnu coupable d'atteinte à la liberté d'aller et venir?",
            answers: [
                "En empêchant un spectateur de concert de monter sur scène pour obtenir un selfie",
                "Aucune des autres réponses",
                "En immobilisant un individu coupable de violence avec arme sur une personne inconsciente au sol",
                "En enfermant à clé dans une salle de démarque une personne refusant de reconnaître un vol dont vous êtes persuadé",
                "En incitant une personne victime d'un malaise à attendre les secours après avoir reçu la confirmation de leur arrivée"
            ],
            correct: 3,
            explanation: "Enfermer une personne contre son gré constitue une séquestration (atteinte à la liberté individuelle)."
        },
        {
            id: 54,
            question: "Un agent de sécurité exerçant ses fonctions dans une grande surface peut-il appréhender un individu qui y entre avec un matraque et tente d'agresser une caissière?",
            answers: [
                "Oui, car il sera dans le cadre de l'état de nécessité, prévu dans l'article 122-7 du code pénal",
                "Il peut juste l'aborder mais il ne peut pas l'appréhender en vertu de l'art 73 du CPP",
                "Il peut seulement consigner sa matraque ou son poignard",
                "Non car il n'y a pas d'infraction prévu pour ce type de fait"
            ],
            correct: 0,
            explanation: "L'état de nécessité permet d'appréhender une personne pour prévenir un danger imminent."
        },
        {
            id: 55,
            question: "Ai-je le droit d'appliquer la légitime défense?",
            answers: [
                "Oui, seulement en cas d'attaque injustifiée, réelle et actuelle",
                "Oui, en tant qu'individu dans toute situation",
                "Aucune des autres réponses",
                "Non, sauf en tant qu'APS durant mes vacations",
                "Non, seules les forces de l'ordre peuvent l'appliquer"
            ],
            correct: 0,
            explanation: "La légitime défense s'applique à toute personne face à une agression injuste, actuelle et réelle."
        },
        {
            id: 56,
            question: "L'article 311-1 du code pénal définit le vol comme:",
            answers: [
                "La substitution d'un objet par une personne physique",
                "Le fait par une personne de détourner au préjudice d'un tiers",
                "Un acte assimilable à l'escroquerie",
                "La soustraction frauduleuse de la chose d'autrui",
                "Aucune des autres réponses"
            ],
            correct: 3,
            explanation: "L'article 311-1 CP définit le vol comme 'la soustraction frauduleuse de la chose d'autrui'."
        },
        {
            id: 57,
            question: "Un agent de prévention et de sécurité peut-il, au regard du livre VI du CSI:",
            answers: [
                "Tenir le standard téléphonique du client à plein temps",
                "Effectuer des prestations de propreté et de nettoyage",
                "Vérifier visuellement le bon fonctionnement des machines outils du site",
                "Aucune des autres réponses",
                "Poster un pli urgent à la poste sur demande du client"
            ],
            correct: 3,
            explanation: "Le principe d'exclusivité interdit toute activité étrangère à la mission de sécurité."
        },
        {
            id: 58,
            question: "Parmi ces infractions, laquelle porte atteinte aux intérêts fondamentaux de la nation?",
            answers: [
                "La violation de domicile",
                "L'abus de droit public",
                "La rébellion",
                "Le sabotage",
                "La délation"
            ],
            correct: 3,
            explanation: "Le sabotage (article 411-9 CP) porte atteinte aux intérêts fondamentaux de la nation."
        },
        {
            id: 59,
            question: "Qu'est-ce qu'une arme de catégorie A1?",
            answers: [
                "Aucune des autres réponses",
                "Arme interdite à l'acquisition et à la détention",
                "Arme soumise à enregistrement",
                "Arme soumise à déclaration",
                "Arme soumise à autorisation"
            ],
            correct: 1,
            explanation: "Les armes de catégorie A1 sont interdites à l'acquisition et à la détention."
        },
        {
            id: 60,
            question: "Dans le cadre de son activité, l'agent de sécurité privée porte:",
            answers: [
                "Aucune des autres réponses",
                "Un uniforme avec un minimum 2 insignes distinctifs placés de façon à être toujours visibles",
                "Une tenue particulière qui doit toujours être conforme aux exigences des services d'incendie",
                "Un uniforme avec au minimum 2 insignes distinctifs placés de façon à ne pas être visibles",
                "Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des forces de l'ordre"
            ],
            correct: 4,
            explanation: "La tenue ne doit pas prêter à confusion avec les uniformes des forces publiques."
        },
        {
            id: 61,
            question: "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention:",
            answers: [
                "Aucune des autres réponses",
                "D'une attestation de l'employeur",
                "D'un badge au nom de la société qui emploie",
                "D'un contrat de travail",
                "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C"
            ],
            correct: 4,
            explanation: "La carte professionnelle dématérialisée est la preuve de l'agrément pour exercer."
        },
        {
            id: 62,
            question: "Au titre de quel article de Loi un agent de prévention et de sécurité peut-il appréhender un individu?",
            answers: [
                "Article 53 du code de procédure pénal",
                "Article 223-1 du code pénal",
                "Aucune des autres réponses",
                "Article 122-5 du code pénal",
                "Article R661-1 du code pénal"
            ],
            correct: 2,
            explanation: "L'article 73 du CPP permet l'appréhension par un agent de sécurité en cas de flagrant délit."
        },
        {
            id: 63,
            question: "Auprès de qui les APS doivent-ils être en mesure de présenter leur carte professionnelle?",
            answers: [
                "Uniquement le CNAPS, les forces de l'ordre, le client et mandant",
                "Personne c'est confidentiel",
                "Uniquement le CNAPS, les forces de l'ordre, les pompiers, le mandant",
                "Uniquement le CNAPS et les forces de l'ordre",
                "Uniquement le CNAPS"
            ],
            correct: 0,
            explanation: "L'APS doit pouvoir présenter sa carte au CNAPS, aux FDO, au client et au mandant."
        },
        {
            id: 64,
            question: "Quelle situation est considérée comme un cas d'aggravation de l'infraction de vol? Le fait de commettre un vol:",
            answers: [
                "Aucune des autres réponses",
                "Dans un magasin après s'être laissé enfermer volontairement à la fermeture des portes",
                "En s'enfuyant après le larcin",
                "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique",
                "Dans un magasin après avoir rendu inopérantes les caméras de surveillance"
            ],
            correct: 3,
            explanation: "Le vol avec usurpation de personne depositaire de l'autorité publique est une circonstance aggravante (article 311-4 CP)."
        }
    ]
};