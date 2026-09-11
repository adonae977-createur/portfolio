import useDocumentMeta from "../hooks/useDocumentMeta"

const professionalCerts = [
  {
    year: "2018",
    title: "CQP — Certificat de Qualification Professionnelle",
    detail: "Menuiserie / bois et métal.",
  },
  {
    year: "2021",
    title: "BQP — Brevet de Qualification Professionnelle",
    detail: "Menuiserie / bois et métal.",
  },
]

const academic = [
  { title: "Baccalauréat, série D" },
  { title: "Études supérieures en Sciences Infirmières et Obstétricales" },
]

export default function Formation() {
  useDocumentMeta(
    "Formation & Certifications",
    "CQP (2018) et BQP (2021) en menuiserie/bois et métal, formation académique complémentaire de Rodrigue Donatien Sawadogo."
  )
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Formation & Certifications</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Parcours de formation</h1>

      <div className="mt-14">
        <h2 className="font-display text-lg font-semibold text-ink">Formation professionnelle</h2>
        <div className="mt-6 space-y-6">
          {professionalCerts.map((c) => (
            <div key={c.title} className="flex gap-6">
              <span className="text-sm text-slate-400 w-14 shrink-0">{c.year}</span>
              <div>
                <p className="font-medium text-ink">{c.title}</p>
                <p className="text-sm text-slate-500">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Formation académique</h2>
        <p className="mt-2 text-sm text-slate-400">
          Dimension complémentaire du profil — pas l'identité professionnelle principale.
        </p>
        <ul className="mt-6 space-y-2">
          {academic.map((a) => (
            <li key={a.title} className="text-sm text-slate-700 flex gap-2">
              <span className="text-accent">—</span>
              <span>{a.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="font-display text-lg font-semibold text-ink">Transmission</h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          WBST a également une dimension de formation pratique et d'accompagnement de jeunes vers le CQP/BQP.
          Conventions et preuves documentaires à ajouter ici lorsqu'elles seront disponibles.
        </p>
      </div>
    </section>
  )
}
