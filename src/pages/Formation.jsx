import useDocumentMeta from "../hooks/useDocumentMeta"
import {
  profile,
  professionalTraining,
  entrepreneurialTraining,
  academicPath,
  earlierDiplomas,
} from "../data/profile"

function Entry({ period, title, place, note }) {
  return (
    <div className="card flex gap-6 p-4 md:p-5">
      <span className="text-sm text-slate-400 w-28 shrink-0">{period}</span>
      <div>
        <p className="font-medium text-ink">{title}</p>
        {place && <p className="text-sm text-slate-500">{place}</p>}
        {note && <p className="mt-1 text-xs uppercase tracking-wide text-accent">{note}</p>}
      </div>
    </div>
  )
}

export default function Formation() {
  useDocumentMeta(
    "Formation & Certifications",
    "CQP et BQP en menuiserie bois, formation en développement web, attestations en entrepreneuriat et leadership, parcours académique de Rodrigue Donatien Sawadogo."
  )
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="eyebrow">Formation & Certifications</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Parcours de formation</h1>

      <div className="mt-14">
        <h2 className="font-display text-lg font-semibold text-ink">Formation professionnelle et numérique</h2>
        <div className="mt-6 space-y-6">
          {professionalTraining.map((c) => (
            <Entry key={c.title} {...c} />
          ))}
        </div>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Formations en entrepreneuriat et leadership</h2>
        <p className="mt-2 text-sm text-slate-400">Cinq attestations délivrées par des institutions publiques et associatives.</p>
        <div className="mt-6 space-y-6">
          {entrepreneurialTraining.map((c) => (
            <Entry key={c.title} {...c} note="Attestation" />
          ))}
        </div>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Parcours académique</h2>
        <p className="mt-2 text-sm text-slate-400">
          Dimension complémentaire du profil — l'identité professionnelle reste le numérique, l'entrepreneuriat et le terrain.
        </p>
        <div className="mt-6 space-y-6">
          {academicPath.map((a) => (
            <Entry key={a.title} {...a} />
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">{earlierDiplomas}</p>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Langues et permis</h2>
        <p className="mt-3 text-sm text-slate-700">
          <span className="text-slate-400">Langues parlées : </span>
          {profile.languages.join(", ")}
        </p>
        <p className="mt-2 text-sm text-slate-700">{profile.driving}</p>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Transmission</h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          WBST a également une dimension de formation pratique et d'accompagnement de jeunes vers le CQP/BQP.
          Rodrigue y a exercé comme formateur et chef d'équipe sur le terrain (2025–2026). Conventions et preuves
          documentaires à ajouter ici lorsqu'elles seront disponibles.
        </p>
      </div>
    </section>
  )
}
