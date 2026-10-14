import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/expertise", label: "Expertise" },
  { to: "/experiences", label: "Expériences" },
  { to: "/projets", label: "Projets" },
  { to: "/formation", label: "Formation" },
  { to: "/galerie", label: "Galerie" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 px-3 md:px-6 pt-3">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/85 border-slate-200 shadow-lg shadow-ink/10"
            : "bg-white/60 border-white/60 shadow-sm"
        }`}
      >
        <nav className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6" aria-label="Navigation principale">
          <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-accent font-display text-sm font-semibold group-hover:bg-accent group-hover:text-ink transition-colors"
            >
              RS
            </span>
            <span className="font-display font-semibold tracking-tight text-ink hidden sm:block">R. D. Sawadogo</span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-full px-3 py-1.5 transition-colors ${
                      isActive
                        ? "bg-ink text-white font-medium"
                        : "text-slate-600 hover:bg-accent-soft/60 hover:text-ink"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-ink text-white" : "bg-accent text-ink hover:bg-ink hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-ink hover:bg-slate-100"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <ul id="menu-mobile" className="md:hidden border-t border-slate-200 px-4 py-3 space-y-1">
            {[...links, { to: "/contact", label: "Contact" }].map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-2.5 text-base ${
                      isActive ? "bg-ink text-white font-medium" : "text-slate-700 hover:bg-accent-soft/60"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
