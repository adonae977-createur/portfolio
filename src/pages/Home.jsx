import { Link } from "react-router-dom"
import { profile, expertiseAreas, sportImpact } from "../data/profile"
import { featuredProjects } from "../data/projects"
import StatusBadge from "../components/StatusBadge"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-accent font-medium tracking-wide uppercase text-xs mb-6 backdrop-blur">
            {profile.location}
          </p>
          <h1 className="text-gradient font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl pb-1">
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
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink shadow-lg shadow-accent/30 hover:bg-white transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/15 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Positionnement */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">Positionnement</p>
        <p className="font-display text-2xl md:text-3xl text-ink max-w-3xl leading-snug">
          {profile.positioning}
        </p>
      </section>

      {/* Impact sport */}
      <section className="bg-accent-soft/40 border-y border-accent/20">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-5">
            <img
              src="/images/lls-logo.webp"
              alt="Logo de Local Live Sport"
              width="72"
              height="72"
              className="h-16 w-16 md:h-[72px] md:w-[72px] rounded-full shadow-sm"
            />
            <div>
              <p className="text-accent font-medium uppercase tracking-wide text-sm mb-1">Sport & Technologie</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">{sportImpact.title}</h2>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">{sportImpact.intro}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sportImpact.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/90 border border-accent/20 p-5 shadow-sm">
                <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-2 text-sm text-slate-600 leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
          <Link
            to={`/projets/${sportImpact.projectSlug}`}
            className="mt-8 inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            Lire l'étude de cas Local Live Sport →
          </Link>
        </div>
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
              <div key={area.title} className="card card-hover p-6">
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
          {featuredProjects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projets/${p.slug}`}
              className={`group card card-hover p-6 ${
                i === 0
                  ? "md:col-span-2 !border-accent/50 !bg-accent-soft/30 md:p-8"
                  : ""
              }`}
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
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            Un projet à construire ensemble ?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Entreprises, ONG, organisations, partenaires : discutons de votre besoin.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-ink shadow-lg shadow-accent/30 hover:bg-white transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  )
}
