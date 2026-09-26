// Statuts autorisés : "PRODUCTION" | "DEVELOPPEMENT" | "PROTOTYPE" | "CONCEPT" | "A_VERIFIER"
// Un statut reflète l'état réel connu — jamais une supposition.

export const statusLabels = {
  PRODUCTION: "En production",
  DEVELOPPEMENT: "En développement",
  PROTOTYPE: "Prototype / MVP",
  CONCEPT: "Concept",
  A_VERIFIER: "À vérifier",
}

export const projects = [
  {
    slug: "sirba-live-score",
    title: "Local Live Sport (LLS)",
    category: "Sport & Technologie",
    status: "PRODUCTION",
    summary:
      "PWA de suivi de compétitions de football locales en temps réel — scores, buts, cartons, classements, statistiques, actualités.",
    tech: ["React 18", "Vite 5", "Firebase (Firestore, Auth, Hosting, Storage)", "Cloud Functions", "PWA / FCM"],
    url: "https://sirba-live.web.app/",
    featured: true,
    priority: 1,
    caseStudy: {
      contexte:
        "Les compétitions de football locales à Bogandé et dans les provinces environnantes se suivaient de façon informelle, sans plateforme centralisée pour les résultats, les scores en direct ou les statistiques.",
      besoin:
        "Rapprocher les compétitions locales des supporters grâce au numérique : suivi en direct fiable, résultats, statistiques et communication autour des rencontres.",
      solution:
        "Une PWA développée avec React et Firebase couvrant scores en direct, buts, cartons, changements, classements, statistiques d'équipes, actualités et notifications push (FCM).",
      role:
        "Conception, développement full-stack, architecture Firestore, déploiement et maintenance continue — de la modélisation des données aux Cloud Functions de notification.",
      resultats:
        "Application en production, utilisée sur plusieurs éditions du tournoi MARACANA BO.VA.C.S à Bogandé, avec une couverture active sur 4 régions et 5 provinces (Fada N'Gourma, Ouagadougou, Bogandé, Boulsa, Piéla) et environ 20 volontaires mobilisés sur le terrain pour la remontée d'informations.",
      preuves: "Application publique : sirba-live.web.app",
    },
  },
  {
    slug: "bovacs-2026",
    title: "Tournoi MARACANA BO.VA.C.S 2026",
    category: "Sport & Technologie",
    status: "PRODUCTION",
    summary:
      "3ᵉ édition du tournoi de Bogandé : Local Live Sport (LLS) utilisé par le comité d'organisation pour le suivi des matchs, la publication des résultats et des actualités, et la communication avec les supporters.",
    tech: ["Local Live Sport (LLS)"],
    featured: true,
    priority: 2,
    caseStudy: {
      contexte:
        "3ᵉ édition du tournoi MARACANA BO.VA.C.S, organisée à Bogandé par un comité d'organisation dédié.",
      besoin:
        "Donner au comité d'organisation un outil de suivi des matchs, de publication des résultats et actualités, et de communication avec les supporters et les partenaires.",
      solution:
        "Déploiement de Local Live Sport (LLS) comme solution numérique officielle du tournoi, couvrant l'ensemble des phases de la compétition.",
      role: "Développeur et fournisseur de la solution numérique du tournoi.",
      resultats:
        "Suivi des matchs et des différentes phases, publication de résultats et d'actualités, production de contenus digitaux et valorisation de partenaires. Un chiffre de 13 contrats de sponsoring signés avec des entreprises locales a été évoqué — marqué À VÉRIFIER tant qu'une preuve documentaire n'est pas fournie.",
      preuves: "À VÉRIFIER — captures d'écran et communiqués du comité d'organisation à joindre.",
    },
  },
  {
    slug: "wbst",
    title: "WBST — Wend Benedo Services et Travaux",
    category: "Entrepreneuriat / Menuiserie & Agencement",
    status: "A_VERIFIER",
    statusNote: "Activité réelle depuis 2004 — présentation détaillée en attente de visuels et documents à publier.",
    summary:
      "Entreprise de menuiserie bois, métallique et agencement (2004, formalisée en 2017) : mobilier, aménagement intérieur et extérieur, mobilier scolaire, marchés publics et privés.",
    tech: [],
    featured: true,
    priority: 3,
    caseStudy: {
      contexte: "Entreprise familiale de menuiserie et travaux, active depuis 2004, formalisée en 2017.",
      besoin:
        "Structurer, développer et faire connaître les activités de menuiserie bois, métallique et d'agencement, tout en répondant à des marchés publics et privés.",
      solution:
        "Implication dans la gestion d'activités, la coordination d'équipes, la préparation de documents professionnels (devis, factures proforma, dossiers de soumission) et le développement commercial.",
      role:
        "Implication dans la direction et le développement de l'entreprise aux côtés d'autres intervenants — gestion, coordination, formation et accompagnement de jeunes vers le CQP/BQP.",
      resultats:
        "Marchés publics et privés menés dans les secteurs de la menuiserie et de l'agencement ; dimension de transmission et de formation professionnelle active.",
      preuves: "À VÉRIFIER — documents et références à joindre.",
    },
  },
  {
    slug: "nrc-bogande",
    title: "Projet WBST × Norwegian Refugee Council (NRC)",
    category: "Menuiserie & Agencement",
    status: "A_VERIFIER",
    statusNote: "Réalisation de l'entreprise WBST — responsabilités personnelles à préciser avant publication détaillée.",
    summary:
      "Participation de WBST à un projet du NRC à Bogandé : structures bois et bâches pour environ 720 abris destinés à des personnes déplacées internes.",
    tech: [],
    featured: true,
    priority: 4,
    caseStudy: {
      contexte:
        "Programme du Norwegian Refugee Council (NRC) à Bogandé, portant sur environ 720 abris/tentes destinés à des personnes déplacées internes.",
      besoin:
        "Fournir des ossatures et structures bois pour les abris, dans un contexte humanitaire avec contraintes de terrain, de délais et de coordination entre intervenants.",
      solution:
        "Intervention de WBST : préparation d'ossatures et structures bois, coordination avec les maçons, installation des bâches, organisation des équipes et contrôle qualité.",
      role:
        "Participation de terrain au sein de l'équipe WBST — travail d'ossatures bois, coordination avec les maçons, gestion des matériaux, interaction avec les bénéficiaires. Cette réalisation appartient à WBST et aux intervenants du projet, pas à une responsabilité individuelle exclusive.",
      resultats: "Environ 720 abris concernés par le projet, selon les informations communiquées par WBST.",
      preuves: "À VÉRIFIER — documents ou convention NRC/WBST à joindre si disponibles.",
    },
  },
  {
    slug: "minerva-alert",
    title: "Minerva Alert",
    category: "Technologie / Entrepreneuriat",
    status: "DEVELOPPEMENT",
    summary:
      "Plateforme de centralisation des appels d'offres publics et privés (Burkina Faso, extension UEMOA envisagée) — recherche, filtrage, catégorisation, modération.",
    tech: ["React", "Vite", "Firebase (Firestore, Auth, Hosting)", "PWA"],
    url: "https://minerva-7a5c3.web.app",
    featured: true,
    priority: 5,
    caseStudy: {
      contexte:
        "Au Burkina Faso, les appels d'offres publics et privés restent dispersés entre plusieurs canaux (avis papier, pages Facebook, alertes email payantes comme J360, sites d'institutions), sans plateforme centralisée facile à consulter et à vérifier.",
      besoin:
        "Centraliser, vérifier et qualifier les opportunités professionnelles (appels d'offres, cotations, manifestations d'intérêt, recrutements, formations, financements, partenariats) pour les entreprises et professionnels du Burkina Faso, avec un contrôle de fiabilité avant toute publication.",
      solution:
        "Reconstruction complète de la plateforme en React et Firebase (Firestore, Auth, Hosting) : recherche et filtrage par secteur, inscription entreprise avec validation manuelle par l'administrateur, publication de marchés avec modération obligatoire, compteurs globaux alimentés côté serveur, installation PWA, et une assistante de veille dédiée qui recherche, nettoie, vérifie et note chaque opportunité (score de pertinence et score de validité distincts) avant de la proposer à validation — jamais de publication automatique.",
      role:
        "Conception du modèle de données, développement full-stack, règles de sécurité Firestore par rôle, workflow de modération entreprise/annonce, et conception de l'assistant de veille des opportunités.",
      resultats:
        "Plateforme en ligne avec inscription, authentification, publication et modération fonctionnelles de bout en bout, testées sur un cycle complet entreprise → admin. Installation PWA confirmée sur appareils réels. Intégration d'une source d'alertes J360 avec digest hebdomadaire automatisé. Migration vers le plan Firebase Blaze et les Cloud Functions (statistiques serveur, expiration automatique, alertes email) prévue fin septembre 2026.",
      preuves: "Application publique : minerva-7a5c3.web.app",
    },
  },
  {
    slug: "wifizone-manager",
    title: "WifiZone Manager",
    category: "Technologie / Entrepreneuriat",
    status: "DEVELOPPEMENT",
    summary:
      "PWA pour Minerva Solutions aidant les gérants de zones wifi (wifizones) au Burkina Faso à créer, imprimer, distribuer et suivre la vente de tickets wifi, avec achat à distance par mobile money.",
    tech: ["React", "Vite", "Firebase (Firestore, Auth)", "PWA"],
    featured: true,
    priority: 6,
    caseStudy: {
      contexte:
        "Dans les zones wifi (wifizones) du Burkina Faso, les tickets d'accès sont aujourd'hui vendus sur place et écrits à la main sur des tickets papier découpés — un système coûteux pour le gérant et contraignant pour les clients, qui doivent se déplacer physiquement pour acheter leur accès.",
      besoin:
        "Permettre aux gérants de wifizones de créer, imprimer et suivre la vente de tickets numériques, et aux clients d'acheter leur accès à distance par mobile money — y compris les utilisateurs peu familiers du numérique.",
      solution:
        "PWA React et Firebase avec vitrine dédiée par wifizone, création de tickets, comptes clients avec programme de fidélité, achat par mobile money via un agrégateur de paiement (Orange Money en priorité), et modèle d'abonnement pour les gérants plutôt qu'une commission par transaction.",
      role:
        "Conception produit et technique — modèle de données, choix de l'agrégateur de paiement et de la région d'hébergement — et développement en cours.",
      resultats:
        "Projet en développement actif, propriété de Minerva Solutions SASU. L'authentification par SMS pour les numéros du Burkina Faso est en attente du passage au plan Firebase Blaze (prévu décembre 2026), préalable à la publication sur Google Play.",
      preuves: "Dépôt de code privé — démonstration à joindre une fois disponible.",
    },
  },
  {
    slug: "wend-benedo-bois",
    title: "Wend-Benedo-Bois",
    category: "Technologie / Menuiserie",
    status: "A_VERIFIER",
    summary: "Site vitrine présentant l'activité de menuiserie et les réalisations en bois.",
    tech: ["React", "Vite", "PWA", "Netlify"],
    featured: false,
    priority: 7,
  },
  {
    slug: "gestion-classe-infirmiers",
    title: "Application de gestion de classe — Sciences infirmières",
    category: "Technologie",
    status: "A_VERIFIER",
    summary: "Web App / PWA destinée à faciliter la gestion et le suivi des activités d'une classe d'étudiants en soins infirmiers.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Auth"],
    featured: false,
    priority: 8,
  },
  {
    slug: "elearning-biologie",
    title: "E-Learning Biologie Médicale",
    category: "Technologie",
    status: "CONCEPT",
    summary: "PWA éducative de révision interactive pour étudiants en sciences de la santé — quiz, apprentissage gamifié.",
    tech: ["React", "Firebase"],
    featured: false,
    priority: 9,
  },
  {
    slug: "yiriwa",
    title: "Yiriwa",
    category: "Technologie / Entrepreneuriat",
    status: "PROTOTYPE",
    statusNote: "Page d'accueil livrée ; développement ultérieur non confirmé.",
    summary:
      "Portail B2B pour le Burkina Faso dédié aux appels d'offres, annonces professionnelles et mises en relation d'affaires (inspiré de J360) — statistiques animées, recherche avancée par onglets, badges réservés PME.",
    tech: ["HTML/CSS/JS"],
    featured: false,
    priority: 10,
  },
  {
    slug: "bijouterie-lankoande",
    title: "E-commerce Bijouterie Lankoandé",
    category: "Technologie",
    status: "A_VERIFIER",
    summary: "Site vitrine / catalogue marchand avec prise de commande directe via WhatsApp.",
    tech: [],
    featured: false,
    priority: 11,
  },
  {
    slug: "retro-racing",
    title: "Retro Racing",
    category: "Technologie",
    status: "A_VERIFIER",
    summary: "Jeu vidéo web — course cycliste rétro jouable dans le navigateur.",
    tech: ["JavaScript"],
    featured: false,
    priority: 12,
  },
]

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.priority - b.priority)
