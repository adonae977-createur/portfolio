import { timeline, responsibilities } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function Experience() {
  useDocumentMeta(
    "Expériences",
    "Parcours professionnel et associatif de Rodrigue Donatien Sawadogo : Minerva Solutions, Local Live Sport, WBST, associations de jeunes."
  )
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="eyebrow">Expériences</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Fonctions et responsabilités</h1>
      <p className="mt-4 text-slate-500">Postes tenus dans des entreprises et des associations, du plus récent au plus ancien.</p>

      <div className="mt-10 space-y-6">
        {responsibilities.map((r) => (
          <article key={`${r.org}-${r.period}`} className="card card-hover p-6">
            <p className="text-xs uppercase tracking-wide text-slate-400">{r.period}</p>
            <h2 className="mt-1 font-display font-semibold text-ink">
              {r.role} — {r.org}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{r.detail}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl font-semibold text-ink">Parcours</h2>
      <ol className="mt-10 relative border-s border-slate-200 space-y-10">
        {timeline.map((item) => (
          <li key={item.title} className="ms-6">
            <span className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent-soft" />
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.year}</p>
            <h3 className="mt-1 font-display font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
