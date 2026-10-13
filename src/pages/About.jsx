import { profile } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function About() {
  const languages = profile.languages.map((l) => l.toLowerCase())
  useDocumentMeta(
    "À propos",
    "Entrepreneur, développeur web & PWA et homme de terrain — parcours de Rodrigue Donatien Sawadogo, entre technologie, gestion de projets, sport local et menuiserie."
  )
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">À propos</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">
        Entrepreneur, développeur, homme de terrain
      </h1>

      <div className="mt-10 space-y-6 text-lg text-slate-700 leading-relaxed">
        <p>
          Je suis {profile.name}, basé à {profile.location} : menuisier professionnel, développeur web et
          applications, chef d'entreprise. Mon profil est
          volontairement multidisciplinaire : je ne me présente pas uniquement comme développeur, mais comme
          quelqu'un qui combine entrepreneuriat, technologie, gestion de projet, savoir-faire technique et
          connaissance du terrain.
        </p>
        <p>
          Côté numérique, je conçois et développe des sites web, applications web et Progressive Web Apps —
          principalement avec React, Firebase et l'écosystème JavaScript moderne. Je gère l'ensemble du cycle :
          conception, développement, déploiement et maintenance, comme sur{" "}
          <span className="text-ink font-medium">Local Live Sport (LLS)</span>, la plateforme de suivi des
          compétitions sportives locales lancée à Bogandé, support de la 3ᵉ édition du tournoi MARACANA BO.VA.C.S
          et déployée aujourd'hui dans quatre régions du Burkina Faso.
        </p>
        <p>
          Côté entrepreneurial, je porte <span className="text-ink font-medium">Minerva Solutions</span>, agence
          numérique de valorisation locale (formalisation en SASU prévue en novembre 2026, actuellement opérée sous
          la couverture légale de <span className="text-ink font-medium">WBST</span>). Je suis par ailleurs gérant
          de WBST (Wend Benedo Services et Travaux), entreprise de menuiserie active depuis 2004, où j'ai été formé
          au CQP puis au BQP en menuiserie bois, et où j'ai dirigé l'atelier et encadré des équipes sur le terrain
          pour des abris destinés à des personnes déplacées internes.
        </p>
        <p>
          Mon engagement est aussi associatif : j'ai contribué à créer trois associations de jeunes (APROMEB,
          AJAP-B, ABCD) et organisé la première édition du Festival Vacances culturel de Bogandé en juin 2022. Je
          parle {languages.slice(0, -1).join(", ")} et {languages[languages.length - 1]}.
        </p>
        <p>
          Cette double expérience — numérique et terrain — façonne ma façon de travailler : je préfère
          construire des choses réelles, documentées et vérifiables, plutôt que d'afficher des promesses. Sur ce
          portfolio comme ailleurs, un projet en développement est présenté comme tel, un concept comme un
          concept — jamais comme plus abouti qu'il ne l'est.
        </p>
      </div>
    </section>
  )
}
