import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects"
import StatusBadge from "../components/StatusBadge"
import useDocumentMeta from "../hooks/useDocumentMeta"

const sections = [
  { key: "contexte", label: "Contexte" },
  { key: "besoin", label: "Besoin" },
  { key: "solution", label: "Solution" },
  { key: "role", label: "Mon rôle" },
  { key: "resultats", label: "Résultats" },
  { key: "preuves", label: "Preuves" },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useDocumentMeta(project?.title, project?.summary)

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-display text-2xl font-semibold text-ink">Projet introuvable</h1>
        <Link to="/projets" className="mt-4 inline-block text-accent hover:underline">
          ← Retour aux projets
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Link to="/projets" className="text-sm text-accent hover:underline">
        ← Tous les projets
      </Link>

      <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">{project.title}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-sm uppercase tracking-wide text-slate-400">{project.category}</p>

      {project.statusNote && (
        <p className="mt-4 text-sm text-slate-500 border-l-2 border-accent/40 pl-4">{project.statusNote}</p>
      )}

      <p className="mt-8 text-lg text-slate-700 leading-relaxed">{project.summary}</p>

      {project.tech?.length > 0 && (
        <div className="mt-8">
          <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink hover:bg-accent/90 transition-colors"
        >
          Voir le site →
        </a>
      )}

      {project.caseStudy && (
        <div className="mt-16 border-t border-slate-200 pt-12 space-y-10">
          <h2 className="font-display text-xl font-semibold text-ink">Étude de cas</h2>
          {sections.map(({ key, label }) => {
            const content = project.caseStudy[key]
            if (!content) return null
            const isFlagged = content.includes("À VÉRIFIER") || content.includes("À vérifier")
            return (
              <div key={key}>
                <p className="text-xs uppercase tracking-wide text-accent font-medium mb-2">{label}</p>
                <p className={`leading-relaxed ${isFlagged ? "text-slate-400 italic" : "text-slate-700"}`}>
                  {content}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {!project.caseStudy && (
        <p className="mt-12 text-sm text-slate-400">
          Étude de cas détaillée (contexte, rôle, résultats, preuves) à venir dans une prochaine étape.
        </p>
      )}
    </section>
  )
}
