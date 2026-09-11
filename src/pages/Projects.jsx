import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import StatusBadge from "../components/StatusBadge"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function Projects() {
  useDocumentMeta(
    "Projets",
    "Tous les projets de Rodrigue Donatien Sawadogo, avec leur statut réel : Sirba Live Score, Minerva Alert, WBST et plus."
  )
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Projets</h1>
      <p className="mt-4 text-slate-500 max-w-2xl">
        Statut affiché pour chaque projet, sans exception — production, développement, prototype ou concept.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projets/${p.slug}`}
            className="group rounded-xl border border-slate-200 p-6 hover:border-accent/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display font-semibold text-ink group-hover:text-accent transition-colors">
                {p.title}
              </h2>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{p.category}</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
