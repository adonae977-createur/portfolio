import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-white font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-400">{profile.location}</p>
        </div>

        <div className="text-sm space-y-1">
          <p className="text-slate-400 uppercase tracking-wide text-xs mb-2">Contact</p>
          <p>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
          </p>
          <p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {profile.phone}
            </a>
          </p>
        </div>

        <div className="text-sm text-slate-400">
          <p className="uppercase tracking-wide text-xs mb-2 text-slate-500">Ce site</p>
          <p>Conçu et développé par {profile.shortName} — React, Vite, Tailwind, Firebase Hosting.</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
      </div>
    </footer>
  )
}
