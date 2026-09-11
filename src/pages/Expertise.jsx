import { expertiseAreas } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

const details = {
  Technologie: [
    "React, Vite, JavaScript ES6+, HTML5/CSS3, Tailwind CSS",
    "Firebase : Firestore, Auth, Storage, Hosting, Cloud Functions, Security Rules",
    "Progressive Web Apps (PWA), React Router, Framer Motion",
    "Cycle complet : conception → développement → test → déploiement → maintenance",
  ],
  Entrepreneuriat: [
    "Fondateur de Minerva Solutions (formalisation SASU prévue novembre 2026)",
    "Implication dans la direction de WBST (menuiserie & agencement, depuis 2004)",
    "Recherche de partenaires et développement commercial",
  ],
  "Gestion de projets": [
    "Devis, factures proforma, budgétisation",
    "Dossiers de soumission — marchés publics et privés",
    "Coordination d'équipes et suivi de projets",
  ],
  "Menuiserie & Agencement": [
    "CQP menuiserie/bois et métal (2018), BQP menuiserie/bois et métal (2021)",
    "Conception de mobilier, assemblage, finition, agencement",
    "Matériaux travaillés : bois massif (Iroko, Samba), panneaux dérivés du bois",
  ],
  "Sport & Technologie": [
    "Digitalisation de compétitions sportives locales",
    "Suivi en direct, statistiques, classements, communication événementielle",
    "Sirba Live Score — en production, plusieurs éditions du tournoi MARACANA BO.VA.C.S",
  ],
}

export default function Expertise() {
  useDocumentMeta(
    "Expertise",
    "Technologie, entrepreneuriat, gestion de projets, menuiserie & agencement, sport & technologie — les domaines de compétence de Rodrigue Donatien Sawadogo."
  )
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Expertise</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Domaines de compétence</h1>
      <p className="mt-4 text-slate-500 max-w-2xl">
        Cinq domaines qui se recoupent plutôt qu'ils ne s'excluent — c'est cette combinaison qui fait la
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
