// data/quiz2.js - Quiz UV5 Sécurité Incendie
const quizConfig = {
  "quizConfig": {
    "id": "quiz2",
    "title": "UV5 Sécurité Incendie",
    "description": "QCM sur la prévention incendie, les classes de feu, les extincteurs et les comportements à adopter.",
    "timeEstimate": "20 minutes",
    "questions": [
      {
        "id": 1,
        "question": "La classe de feu F concerne :",
        "answers": [
          "Aucune des autres réponses",
          "Les feux de dépôts graisseux servant d’auxiliaires de cuisson",
          "Les feux de liquides incombustibles",
          "Les feux de forêt",
          "Rien car cette classe n’existe pas"
        ],
        "correct": 1,
        "explanation": "La classe F concerne les feux d’auxiliaires de cuisson (huiles et graisses)."
      },
      {
        "id": 2,
        "question": "L’air est composé à environ 21% :",
        "answers": [
          "De gaz rares",
          "Aucune des autres réponses",
          "D’oxygène",
          "D’azote",
          "De dioxyde de carbone"
        ],
        "correct": 2,
        "explanation": "L'air contient environ 21% d'oxygène, le reste étant principalement de l'azote."
      },
      {
        "id": 3,
        "question": "En cas de départ de feu, quelle doit être l’attitude de l’agent de sécurité ?",
        "answers": [
          "Aucune des autres réponses",
          "Tenter l’extinction du départ de feu",
          "Ouvrir les portes et les fenêtres avant d’évacuer",
          "Attendre l’arrivée des pompiers pour évacuer",
          "Récupérer toute mes affaires avant d’évacuer"
        ],
        "correct": 1,
        "explanation": "L'agent de sécurité doit tenter d'éteindre le feu naissant s'il est formé et équipé pour le faire, dans la limite de sa formation et des moyens disponibles."
      },
      {
        "id": 4,
        "question": "Quel élément fait partie du triangle du feu ?",
        "answers": [
          "La combustion",
          "Le refroidissement",
          "La conduction",
          "Le combinant",
          "Aucune des autres réponses"
        ],
        "correct": 3,
        "explanation": "Le triangle du feu comprend : le combustible, le comburant (oxygène) et l'énergie d'activation (source de chaleur). 'Combinant' est une erreur de formulation pour 'comburant'."
      },
      {
        "id": 5,
        "question": "Lors de la mise en place d’un permis-feu, quelles consignes sont importantes à confier à l’exécutant ?",
        "answers": [
          "Aveugler les ouvertures, interstices, fissures,…",
          "Toutes ces consignes sont à prendre en compte",
          "Prendre toute disposition pour éviter le déclenchement du système de détection incendie",
          "Surveiller les projections incandescentes et les points de chute pendant le travail",
          "Dégager largement la zone de travail de tout matériel combustible ou inflammable"
        ],
        "correct": 1,
        "explanation": "Toutes ces consignes font partie des mesures de sécurité à respecter lors de travaux par points chauds sous permis-feu."
      },
      {
        "id": 6,
        "question": "Quel peut être l’un des dangers des fumées ?",
        "answers": [
          "L’opacité",
          "La fluidité",
          "Aucune, elles ne sont pas dangereuses",
          "Leur couleur",
          "Aucune des autres réponses"
        ],
        "correct": 0,
        "explanation": "Les fumées réduisent la visibilité (opacité), intoxiquent et peuvent être chaudes, représentant un danger majeur."
      },
      {
        "id": 7,
        "question": "Une des causes de départ de feu peut être ?",
        "answers": [
          "Les causes humaines",
          "Aucune des autres réponses",
          "Les causes perdues",
          "Les causes surnaturelles",
          "Les causes législatives"
        ],
        "correct": 0,
        "explanation": "Les négligences, imprudences ou actes volontaires humains sont une cause fréquente de départ de feu."
      },
      {
        "id": 8,
        "question": "Des travaux par points chauds ont lieux dans votre établissement. Le service de sécurité quitte l’établissement qui n’est donc plus sous sa surveillance à partir de 21H. A quelle heure maximum les travaux doivent-ils cesser ?",
        "answers": ["19h", "17h", "20h", "21h", "18h"],
        "correct": 0,
        "explanation": "Les travaux par points chauds doivent cesser au moins 2 heures avant la fin de la surveillance pour permettre une surveillance post-travail et éviter tout risque de reprise de feu."
      },
      {
        "id": 9,
        "question": "Un extincteur à CO2 est-il un extincteur à pression auxiliaire ?",
        "answers": [
          "Oui s’il est muni d’un anémomètre",
          "Oui",
          "Non s’il est rechargeable",
          "Non",
          "Aucune des autres réponses"
        ],
        "correct": 3,
        "explanation": "Un extincteur à CO2 est généralement à pression permanente (la pression est toujours présente), pas à pression auxiliaire (où un gaz propulseur est libéré au moment de l'utilisation)."
      },
      {
        "id": 10,
        "question": "Qu’est ce qui caractérise un extincteur CO2 ?",
        "answers": [
          "Sa couleur",
          "Sa forme ronde",
          "Son tromblon",
          "Son manomètre",
          "Aucune des autres réponses"
        ],
        "correct": 2,
        "explanation": "L'extincteur CO2 est caractérisé par son tromblon (bec diffusant large et isolant) qui évite les projections de neige carbonique."
      },
      {
        "id": 11,
        "question": "Quelle est la distance d’attaque préconisée d’un extincteur à eau ?",
        "answers": [
          "De 6 à 7 mètres",
          "De 2 à 3 mètres",
          "Environ 1 mètre",
          "Aucune des autres réponses",
          "De 3 à 4 mètres"
        ],
        "correct": 4,
        "explanation": "La distance d'attaque recommandée pour un extincteur à eau est généralement de 3 à 4 mètres pour une efficacité optimale."
      },
      {
        "id": 12,
        "question": "Un extincteur à CO2 est-il un extincteur à pression permanente ?",
        "answers": [
          "Oui s’il est muni d’un densimètre",
          "Aucune des autres réponses",
          "Oui",
          "Non s’il est rechargeable",
          "Non"
        ],
        "correct": 2,
        "explanation": "Un extincteur à CO2 est un extincteur à pression permanente : le CO2 est stocké sous pression et sert à la fois d'agent extincteur et de propulseur."
      },
      {
        "id": 13,
        "question": "A quoi sert l’alarme générale sélective ?",
        "answers": [
          "A informer les pompiers",
          "Aucune des autres réponses",
          "A prévenir une catégorie de personne",
          "A informer le PC pour effectuer une levée de doute",
          "A prévenir le directeur"
        ],
        "correct": 2,
        "explanation": "Une alarme générale sélective permet d'alerter uniquement certaines zones ou certains responsables en première intention, sans déclencher l'évacuation totale immédiate."
      },
      {
        "id": 14,
        "question": "Que signifie le terme R.I.A ?",
        "answers": [
          "Robinet d’incident arrimé",
          "Robinet d’intervention alimenté",
          "Aucune des autres réponses",
          "Robinet d’incident armé",
          "Robinet d’incendie armé"
        ],
        "correct": 4,
        "explanation": "R.I.A. signifie Robinet d'Incendie Armé. C'est un point d'eau sous pression équipé d'un dévidoir et d'une lance pour la lutte contre l'incendie."
      },
      {
        "id": 15,
        "question": "Est-il possible qu’un feu s’éteigne en supprimant un des éléments du triangle du feu ?",
        "answers": [
          "Oui, si les conditions météorologique sont favorables",
          "Aucune des autres réponses",
          "Non",
          "Non, sans le savoir-faire d’un expert métier",
          "Oui"
        ],
        "correct": 4,
        "explanation": "Oui, l'extinction consiste justement à supprimer un des trois éléments du triangle du feu : le combustible, le comburant ou la chaleur."
      },
      {
        "id": 16,
        "question": "Vous effectuez une ronde, un ouvrier d’une société extérieure réalise des travaux par points chauds. A priori vous n’avez ni consignes, ni permis-feu. Que faites-vous ?",
        "answers": [
          "Je verbalise l’ouvrier contrevenant",
          "Je contacte le PCS pour vérification et selon consigne je fais cesser les travaux",
          "Aucune des autres réponses",
          "Je passe mon chemin pour laisser l’ouvrier faire son travail",
          "Je contact mon PC sécurité pour demander la conduite à tenir"
        ],
        "correct": 4,
        "explanation": "La priorité est de remonter l'information au poste de commandement sécurité (PC) pour obtenir des instructions et faire cesser les travaux si nécessaire."
      },
      {
        "id": 17,
        "question": "Quels sont les éléments indispensables à la combustion ?",
        "answers": [
          "Une propagation, un carburant, un combustible",
          "Aucune des autres réponses",
          "Un combustible, un comburant, une énergie d’activation",
          "Du vent, une étincelle, une matière ininflammable",
          "Du liquide, du vent, du carburant"
        ],
        "correct": 2,
        "explanation": "Les trois éléments du triangle du feu sont : un combustible, un comburant (oxygène) et une source d'énergie d'activation (étincelle, chaleur...)."
      },
      {
        "id": 18,
        "question": "Combien y a-t-il de classes de feu ?",
        "answers": [
          "Aucune des autres réponses",
          "Cinq",
          "Une",
          "Deux",
          "six"
        ],
        "correct": 4,
        "explanation": "Il existe 6 classes de feu : A (solides), B (liquides), C (gaz), D (métaux), F (auxiliaires de cuisson) et les feux électriques (souvent classés séparément avant mise hors tension)."
      },
      {
        "id": 19,
        "question": "Le feu d’origine électrique est un feu de classe :",
        "answers": [
          "A",
          "Aucune des autres réponses",
          "E",
          "C",
          "B"
        ],
        "correct": 1,
        "explanation": "Il n'existe plus de classe 'E' officielle en Europe. Un feu électrique est traité selon la nature du matériau en feu après coupure du courant."
      },
      {
        "id": 20,
        "question": "Qu’est-ce qu’un ERP ?",
        "answers": [
          "Établissement Recevant le Plus grand nombre",
          "Établissement Recevant le Président",
          "Établissement Recevant du Public",
          "Aucune des autres réponses",
          "Établissement Recevant du Personnel"
        ],
        "correct": 2,
        "explanation": "ERP signifie Établissement Recevant du Public. Ce sont des bâtiments accessibles au public (commerces, hôtels, écoles, etc.)."
      },
      {
        "id": 21,
        "question": "Quelle est la fonction de l’E.C.S ?",
        "answers": [
          "Aucune des autres réponses",
          "De collecter les informations provenant des DAI et DM",
          "De collecter les informations provenant des détecteurs volumétriques",
          "De fournir de l’Eau Conditionnée Suffisante",
          "De mettre en sécurité le bâtiment"
        ],
        "correct": 1,
        "explanation": "L'ECS (Équipement de Contrôle et de Signalisation) centralise les informations des Détecteurs Automatiques d'Incendie (DAI) et des Dispositifs Manuel (DM) et gère les fonctions de sécurité."
      },
      {
        "id": 22,
        "question": "Combien de types de pressions différentes trouve-t-on sur un extincteur ?",
        "answers": [
          "Quatre",
          "Aucune des autres réponses",
          "Deux",
          "Un",
          "Aucun"
        ],
        "correct": 2,
        "explanation": "On distingue principalement deux types : les extincteurs à pression permanente et les extincteurs à pression auxiliaire (ou cartouche)."
      },
      {
        "id": 23,
        "question": "Qu’est-ce qu’un IGH ?",
        "answers": [
          "Immeuble de Grande Hauteur",
          "Aucune des autres réponses",
          "Immeuble de Groupement Habilité",
          "Installation de Grande Hauteur",
          "Installation Grandement Habitée"
        ],
        "correct": 0,
        "explanation": "IGH signifie Immeuble de Grande Hauteur. Ce sont des bâtiments dont le plancher bas du dernier niveau est situé à plus de 50 mètres du niveau du sol utile pour les sapeurs-pompiers."
      },
      {
        "id": 24,
        "question": "Vous intervenez sur un feu d’armoire électrique, quelle précaution devez-vous prendre auparavant ?",
        "answers": [
          "Contacter préalablement le fournisseur d’électricité",
          "Mettre un appareil respiratoire isolant",
          "Couper le courant",
          "Aucune des autres réponses",
          "Vérifier que l’extincteur utilisé est à jet plein"
        ],
        "correct": 2,
        "explanation": "La priorité absolue est de couper le courant (si possible sans risque) avant toute intervention sur un feu d'origine électrique, pour éviter l'électrocution."
      }
    ]
  }
};