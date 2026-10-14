import { expertiseAreas } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

const details = {
  Technologie: [
    "React, Vite, JavaScript ES6+, HTML5/CSS3, Tailwind CSS",
    "Firebase : Firestore, Auth, Storage, Hosting, Cloud Functions, Security Rules",
    "Progressive Web Apps (PWA), React Router, Framer Motion",
    "Formation : Business Digital School — développement web et applications, niveau 1 (2023–2024)",
    "Cycle complet : conception → développement → test → déploiement → maintenance",
  ],
  Entrepreneuriat: [
    "Fondateur de Minerva Solutions, agence numérique de valorisation locale (formalisation SASU prévue novembre 2026)",
    "Gérant de WBST (menuiserie & agencement, active depuis 2004) — 2025–2026",
    "Cinq formations certifiées en entrepreneuriat, leadership et gestion de micro-entreprise (2018–2021)",
    "Création et direction d'associations de jeunes : APROMEB, AJAP-B, ABCD",
  ],
  "Gestion de projets": [
    "Devis, factures proforma, budgétisation",
    "Dossiers de soumission — marchés publics et privés",
    "Chef d'atelier et chef d'équipe sur le terrain — abris évolutifs pour le NRC, à Bogandé et Boulsa",
    "Organisation d'événement : édition 1 du Festival Vacances culturel de Bogandé (juin 2022)",
  ],
  "Menuiserie & Agencement": [
    "CQP et BQP menuiserie bois (formation 2016–2021 ; CQP 2018, BQP 2021)",
    "Conception de mobilier, assemblage, finition, agencement",
    "Matériaux travaillés : bois massif (Iroko, Samba), panneaux dérivés du bois",
  ],
  "Sport & Technologie": [
    "Digitalisation de compétitions sportives locales",
    "Suivi en direct, statistiques, classements, communication événementielle",
    "Local Live Sport (LLS) — en production, 4 compétitions couvertes (Bogandé, Piéla, Fada N'Gourma), déployé dans 4 régions (phase 1 nationale en test grandeur nature)",
  ],
  "Santé & Technologie": [
    "Licence en sciences infirmières et obstétricales (LSIO), actuellement en L2 — Université et École de Santé Sainte Edwige",
    "Concepts d'applications pour la santé et la formation : InfiniCare Studio (gestion de classe pour instituts de sciences infirmières), E-Learning Biologie Médicale, Nutritive (éducation nutritionnelle)",
    "Ces projets sont à l'état de concept ou de prototype : ils sont présentés comme tels",
  ],
}

export default function Expertise() {
  useDocumentMeta(
    "Expertise",
    "Technologie, entrepreneuriat, gestion de projets, menuiserie & agencement, sport & technologie, santé & technologie — les domaines de compétence de Rodrigue Donatien Sawadogo."
  )
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Expertise</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Domaines de compétence</h1>
      <p className="mt-4 text-slate-500 max-w-2xl">
        Six domaines qui se recoupent plutôt qu'ils ne s'excluent — c'est cette combinaison qui fait la
        valeur du profil.
      </p>

      <div className="mt-14 space-y-12">
        {expertiseAreas.map((area) => (
          <div key={area.title} className="grid md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">{area.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{area.description}</p>
            </div>
            <ul className="md:col-span-2 space-y-2">
              {(details[area.title] ?? []).map((item) => (
                <li key={item} className="text-sm text-slate-700 flex gap-2">
                  <span className="text-accent">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
