import { timeline } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function Experience() {
  useDocumentMeta(
    "Expériences",
    "Parcours professionnel de Rodrigue Donatien Sawadogo : WBST, certifications CQP/BQP, Sirba Live Score, Minerva Solutions."
  )
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Expériences</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Parcours</h1>

      <ol className="mt-14 relative border-s border-slate-200 space-y-10">
        {timeline.map((item) => (
          <li key={item.title} className="ms-6">
            <span className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-accent" />
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.year}</p>
            <h2 className="mt-1 font-display font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
