import useDocumentMeta from "../hooks/useDocumentMeta"

const categories = [
  { title: "Sirba Live Score", note: "Captures d'écran de l'application — à venir." },
  { title: "MARACANA BO.VA.C.S 2026", note: "Photos du tournoi — à venir." },
  { title: "WBST — Réalisations", note: "Mobilier, agencement, chantiers — à venir." },
  { title: "Projet NRC", note: "Photos de terrain — à venir, sous réserve d'autorisation." },
]

export default function Gallery() {
  useDocumentMeta("Galerie", "Réalisations et projets de Rodrigue Donatien Sawadogo en images.")
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Réalisations</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Galerie</h1>
      <p className="mt-4 text-slate-500 max-w-2xl">
        Section prête à recevoir les visuels réels (captures, photos de chantiers et d'événements).
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {categories.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-dashed border-slate-300 aspect-video flex flex-col items-center justify-center text-center p-6 bg-slate-50"
          >
            <p className="font-display font-semibold text-ink">{c.title}</p>
            <p className="mt-2 text-sm text-slate-400">{c.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
