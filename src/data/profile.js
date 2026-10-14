// Contenu factuel du profil. Toute donnée non confirmée est marquée "À VÉRIFIER"
// conformément à la règle éditoriale du projet : ne jamais inventer.
// Source principale : CV de Rodrigue Donatien Sawadogo (état civil volontairement non publié).

export const profile = {
  name: "Rodrigue Donatien Sawadogo",
  shortName: "Rodrigue",
  location: "Ouagadougou, Burkina Faso",
  profession: "Menuisier professionnel · Développeur Web & applications · Chef d'entreprise",
  tagline:
    "Entrepreneur · Développeur Web & PWA · Sport & Technologie · Menuiserie & Agencement · Étudiant en sciences infirmières",
  positioning:
    "Un profil volontairement multidisciplinaire : entrepreneuriat, technologie, gestion de projet, savoir-faire technique et connaissance du terrain.",
  heroLead:
    "Je conçois, je développe et je construis des projets réels — des plateformes numériques déployées en production aux ouvrages de menuiserie sur mesure — tout en poursuivant une licence en sciences infirmières (L2).",
  email: "adonae977@gmail.com", // confirmé par le CV
  phone: "+226 78 48 15 06", // numéro confirmé par le CV (le CV en liste trois)
  languages: ["Français", "Anglais", "Espagnol", "Mooré", "Gourmantchéma"],
  driving: "Permis de conduire catégorie C — trois ans de conduite à plein temps à Ouagadougou",
  cvAvailable: false,
  photoAvailable: false,
  links: {
    github: null, // À VÉRIFIER
    linkedin: null, // À VÉRIFIER
  },
}

export const expertiseAreas = [
  {
    title: "Technologie",
    description:
      "Développement web et PWA de bout en bout — React, Firebase, Vite — du concept au déploiement en production.",
  },
  {
    title: "Entrepreneuriat",
    description:
      "Fondateur de Minerva Solutions (formalisation SASU prévue en novembre 2026), gérant de WBST, porteur de projets numériques et commerciaux.",
  },
  {
    title: "Gestion de projets",
    description:
      "Devis, factures proforma, dossiers de soumission, marchés publics et privés, coordination d'équipes.",
  },
  {
    title: "Menuiserie & Agencement",
    description:
      "CQP et BQP en menuiserie bois (formation 2016–2021). Conception, fabrication, finition — bois massif (Iroko, Samba), panneaux dérivés.",
  },
  {
    title: "Sport & Technologie",
    description:
      "Digitalisation de compétitions sportives locales — suivi en direct, statistiques, communication événementielle.",
  },
  {
    title: "Santé & Technologie",
    description:
      "Étudiant en licence de sciences infirmières (L2) et développeur : des concepts d'applications pour la santé et la formation, nés de ce double regard.",
  },
]

// Impact sport : bandeau de la page d'accueil. Chaque chiffre vient de l'étude de cas
// Local Live Sport (CV et déclarations de Rodrigue) — à garder cohérent avec projects.js.
export const sportImpact = {
  title: "Au service du sport local",
  intro:
    "Local Live Sport (LLS) est la plateforme de suivi des compétitions sportives locales conçue et mise en ligne par Minerva Solutions. Lancée à Bogandé, elle est actuellement en test grandeur nature — phase 1 nationale (2026).",
  stats: [
    { value: "4", label: "régions du Burkina Faso couvertes" },
    { value: "5", label: "provinces : Fada N'Gourma, Ouagadougou, Bogandé, Boulsa, Piéla" },
    { value: "≈ 20", label: "jeunes volontaires mobilisés sur le terrain" },
    { value: "4", label: "compétitions couvertes : MARACANA BO.VA.C.S 2026 et MARACANA Platini Service (Bogandé), MARACANA de la résilience et de la cohésion sociale (Piéla), Coupe jeunesse citoyenne (Fada N'Gourma)" },
  ],
  projectSlug: "sirba-live-score",
}

// Parcours académique (complémentaire au profil professionnel).
export const academicPath = [
  {
    period: "2015 – 2020",
    title: "Baccalauréat série D",
    place: "Lycée Privé Ramodgwendé",
  },
  {
    period: "2021 – 2022",
    title: "Licence — niveau L2, Sciences économiques et de gestion (SEG)",
    place: "Université Thomas-Sankara, UFR/SEG",
  },
  {
    period: "2025 – 2027",
    title: "Licence LSIO — Sciences infirmières et obstétricales",
    place: "Université et École de Santé Sainte Edwige",
    note: "En cours — actuellement en deuxième année (L2).",
  },
]
export const earlierDiplomas = "CEP (2010) — BEPC (2014, Collège de Bogandé)"

export const professionalTraining = [
  {
    period: "2016 – 2021",
    title: "CQP et BQP — menuiserie bois",
    place: "Entreprise Wend Benedo Services et Travaux (WBST), Bogandé",
    note: "CQP obtenu en 2018, BQP obtenu en 2021.",
  },
  {
    period: "2023 – 2024",
    title: "Développement web et applications — niveau 1 (junior)",
    place: "Business Digital School",
  },
]

export const entrepreneurialTraining = [
  {
    period: "Mai 2018",
    title: "Formation des jeunes en éducation financière",
    place: "Ministère de la jeunesse, de la formation et de l'insertion professionnelles",
  },
  { period: "2019", title: "Leadership des jeunes", place: "ONG TIN TUA" },
  { period: "2020", title: "Formation sur l'entrepreneuriat des jeunes", place: "Haut-commissariat de la Gnagna" },
  {
    period: "2021",
    title: "Compétences de base en entrepreneuriat",
    place: "Programme « Cultivons l'esprit d'entreprise » (CLE)",
  },
  {
    period: "Mars 2021",
    title: "Gestion et développement de micro-entreprise",
    place: "Ministère de la jeunesse et de la promotion de l'entrepreneuriat",
  },
]

// Fonctions et responsabilités (professionnelles et associatives), de la plus récente à la plus ancienne.
export const responsibilities = [
  {
    period: "2026 — en cours",
    role: "Fondateur",
    org: "Minerva Solutions",
    detail:
      "Agence numérique de valorisation locale (SASU en cours de création, formalisation prévue en novembre 2026). Conception et mise en ligne de la plateforme Local Live Sport pour le sport local, lancée à Bogandé et déployée dans 4 régions du Burkina Faso — phase 1 nationale en test grandeur nature.",
  },
  {
    period: "2025 – 2026",
    role: "Gérant",
    org: "Entreprise WBST (Wend Benedo Services et Travaux)",
    detail:
      "Gestion administrative, chef d'atelier, formateur et chef d'équipe sur le terrain — confection d'abris de type évolutif au profit de personnes déplacées internes, pour le NRC à Bogandé et Boulsa.",
  },
  {
    period: "2022",
    role: "Président du BE",
    org: "Association ABCD",
    detail:
      "Création de l'association et organisation de l'édition 1 du Festival Vacances culturel de Bogandé (juin 2022).",
  },
  {
    period: "2021",
    role: "Président du BE",
    org: "Association AJAP-B",
    detail: "Création de l'association.",
  },
  {
    period: "2021",
    role: "Chargé des relations extérieures",
    org: "Association APROMEB",
    detail: "Création de l'association.",
  },
]

export const timeline = [
  {
    year: "2004",
    title: "Création de WBST (Wend Benedo Services et Travaux)",
    detail: "Entreprise active depuis 2004, formalisée en 2017 — menuiserie bois, métallique, agencement, mobilier.",
  },
  {
    year: "2016 – 2021",
    title: "Formation CQP / BQP en menuiserie bois",
    detail: "Formation au sein de WBST à Bogandé — CQP obtenu en 2018, BQP obtenu en 2021.",
  },
  {
    year: "2018 – 2021",
    title: "Formations en entrepreneuriat, leadership et gestion",
    detail:
      "Cinq attestations : éducation financière des jeunes (2018), leadership des jeunes (2019), entrepreneuriat des jeunes (2020), compétences de base en entrepreneuriat — programme CLE (2021), gestion et développement de micro-entreprise (2021).",
  },
  {
    year: "2021 – 2022",
    title: "Création d'associations de jeunes",
    detail:
      "APROMEB et AJAP-B (2021), puis ABCD (2022) dont il préside le bureau exécutif et organise l'édition 1 du Festival Vacances culturel de Bogandé (juin 2022).",
  },
  {
    year: "2023 – 2024",
    title: "Business Digital School — développement web et applications",
    detail: "Niveau 1, développement web et app junior.",
  },
  {
    year: "2025 – 2026",
    title: "Gérant de WBST — abris évolutifs pour le NRC",
    detail:
      "Gestion administrative, direction d'atelier et encadrement d'équipes sur le terrain, à Bogandé et Boulsa, pour des abris destinés à des personnes déplacées internes.",
  },
  {
    year: "2026",
    title: "Local Live Sport (LLS) — du lancement à Bogandé au test national",
    detail:
      "Plateforme de suivi des compétitions sportives locales, utilisée pour couvrir quatre compétitions locales (MARACANA BO.VA.C.S 2026 et MARACANA Platini Service à Bogandé, MARACANA de la résilience et de la cohésion sociale à Piéla, Coupe jeunesse citoyenne à Fada N'Gourma), déployée dans 4 régions — phase 1 nationale en cours de test grandeur nature.",
  },
  {
    year: "2025 – 2027",
    title: "Licence en sciences infirmières et obstétricales — L2 en cours",
    detail: "Université et École de Santé Sainte Edwige, menée en parallèle des activités entrepreneuriales et de développement.",
  },
  {
    year: "En cours",
    title: "Développement de WifiZone Manager",
    detail: "PWA Minerva Solutions pour la gestion et la vente de tickets wifi par les gérants de zones wifi au Burkina Faso — publication sur Google Play prévue après le passage au plan Firebase Blaze (déc. 2026).",
  },
  {
    year: "Nov. 2026 (prévu)",
    title: "Formalisation de Minerva Solutions en SASU",
    detail: "Structuration juridique de l'activité de solutions numériques, actuellement opérée sous la couverture légale de WBST.",
  },
]
