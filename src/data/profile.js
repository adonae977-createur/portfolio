// Contenu factuel du profil. Toute donnée non confirmée est marquée "À VÉRIFIER"
// conformément à la règle éditoriale du projet : ne jamais inventer.

export const profile = {
  name: "Rodrigue Donatien Sawadogo",
  shortName: "Rodrigue",
  location: "Ouagadougou, Burkina Faso",
  tagline:
    "Entrepreneur · Développeur Web & PWA · Gestion de projets · Sport & Technologie · Menuiserie & Agencement",
  positioning:
    "Un profil volontairement multidisciplinaire : entrepreneuriat, technologie, gestion de projet, savoir-faire technique et connaissance du terrain.",
  heroLead:
    "Je conçois, je développe et je construis des projets réels — des plateformes numériques déployées en production aux ouvrages de menuiserie sur mesure.",
  email: "adonae977@gmail.com", // repris de la fiche Minerva Solutions — à confirmer pour usage portfolio personnel
  phone: "+226 78 48 15 06", // repris de la fiche Minerva Solutions — à confirmer pour usage portfolio personnel
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
      "Fondateur de Minerva Solutions (formalisation SASU prévue en novembre 2026), porteur de projets numériques et commerciaux.",
  },
  {
    title: "Gestion de projets",
    description:
      "Devis, factures proforma, dossiers de soumission, marchés publics et privés, coordination d'équipes.",
  },
  {
    title: "Menuiserie & Agencement",
    description:
      "CQP (2018) et BQP (2021) en menuiserie/bois et métal. Conception, fabrication, finition — bois massif (Iroko, Samba), panneaux dérivés.",
  },
  {
    title: "Sport & Technologie",
    description:
      "Digitalisation de compétitions sportives locales — suivi en direct, statistiques, communication événementielle.",
  },
]

export const timeline = [
  {
    year: "2004",
    title: "Création de WBST (Wend Benedo Services et Travaux)",
    detail: "Entreprise active depuis 2004, formalisée en 2017 — menuiserie bois, métallique, agencement, mobilier.",
  },
  {
    year: "2018",
    title: "CQP — Menuiserie/bois et métal",
    detail: "Certificat de Qualification Professionnelle obtenu.",
  },
  {
    year: "2021",
    title: "BQP — Menuiserie/bois et métal",
    detail: "Brevet de Qualification Professionnelle obtenu.",
  },
  {
    year: "En cours",
    title: "Développement de Local Live Sport (LLS)",
    detail: "PWA de suivi de compétitions de football en temps réel — en production depuis plusieurs éditions du tournoi MARACANA BO.VA.C.S.",
  },
  {
    year: "2026",
    title: "Digitalisation du tournoi MARACANA BO.VA.C.S 2026 (3ᵉ édition, Bogandé)",
    detail: "Local Live Sport (LLS) déployé pour le comité d'organisation : suivi des matchs, résultats, actualités, communication.",
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
