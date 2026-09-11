import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/expertise", label: "Expertise" },
  { to: "/experiences", label: "Expériences" },
  { to: "/projets", label: "Projets" },
  { to: "/formation", label: "Formation" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="font-display font-semibold tracking-tight text-ink" onClick={() => setOpen(false)}>
          R. D. Sawadogo
        </NavLink>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `transition-colors hover:text-accent ${isActive ? "text-accent font-medium" : "text-slate-600"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-slate-200 bg-canvas px-6 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1 text-base ${isActive ? "text-accent font-medium" : "text-slate-700"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
