import { Link } from "react-router-dom"
import { profile, expertiseAreas } from "../data/profile"
import { featuredProjects } from "../data/projects"
import StatusBadge from "../components/StatusBadge"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            {profile.location}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
            {profile.tagline}
          </p>
          <p className="mt-6 text-slate-400 max-w-2xl leading-relaxed">
            {profile.heroLead}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projets"
              className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink hover:bg-accent/90 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Positionnement */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Positionnement</p>
        <p className="font-display text-2xl md:text-3xl text-ink max-w-3xl leading-snug">
          {profile.positioning}
        </p>
      </section>

      {/* Expertise preview */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Domaines d'expertise</h2>
            <Link to="/expertise" className="text-sm text-accent hover:underline hidden md:inline">
              Voir le détail →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-slate-200 p-6 hover:border-accent/40 transition-colors">
                <h3 className="font-display font-semibold text-ink mb-2">{area.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets phares */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Réalisations phares</h2>
          <Link to="/projets" className="text-sm text-accent hover:underline hidden md:inline">
            Tous les projets →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/projets/${p.slug}`}
              className="group rounded-xl border border-slate-200 p-6 hover:border-accent/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-ink group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <StatusBadge status={p.status} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{p.category}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            Un projet à construire ensemble ?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Entreprises, ONG, organisations, partenaires : discutons de votre besoin.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-ink hover:bg-accent/90 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  )
}
