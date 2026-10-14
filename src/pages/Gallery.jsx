import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import useDocumentMeta from "../hooks/useDocumentMeta"
import { gallery, galleryCategories } from "../data/gallery"
import { projects } from "../data/projects"

function Lightbox({ index, onClose, onMove }) {
  const item = gallery[index]
  const closeRef = useRef(null)
  const project = item.projectSlug ? projects.find((p) => p.slug === item.projectSlug) : null

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") onMove(1)
      else if (e.key === "ArrowLeft") onMove(-1)
      else if (e.key === "Tab") {
        // garde le focus dans la boîte de dialogue
        const focusables = document.querySelectorAll("[data-lightbox] button, [data-lightbox] a")
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onMove])

  return (
    <div
      data-lightbox
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[100] bg-ink/95 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm text-slate-300">
          {index + 1} / {gallery.length}
        </p>
        <button
          ref={closeRef}
          onClick={onClose}
          className="rounded-md px-3 py-1.5 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Fermer ✕
        </button>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center px-2 md:px-14 relative">
        <button
          aria-label="Photo précédente"
          onClick={(e) => {
            e.stopPropagation()
            onMove(-1)
          }}
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 w-10 h-10 text-white text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ‹
        </button>
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain rounded-md"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          aria-label="Photo suivante"
          onClick={(e) => {
            e.stopPropagation()
            onMove(1)
          }}
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 w-10 h-10 text-white text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ›
        </button>
      </div>

      <div className="px-6 py-4 text-center text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm md:text-base">{item.caption}</p>
        {project && (
          <Link
            to={`/projets/${project.slug}`}
            onClick={onClose}
            className="mt-1 inline-block text-sm text-accent hover:underline"
          >
            Voir le projet : {project.title} →
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Gallery() {
  useDocumentMeta(
    "Galerie",
    "Réalisations de Rodrigue Donatien Sawadogo en images : Local Live Sport, abris évolutifs, menuiserie, événements culturels et sportifs, vie associative."
  )
  const [current, setCurrent] = useState(null)
  const lastTrigger = useRef(null)

  const open = (i, el) => {
    lastTrigger.current = el
    setCurrent(i)
  }
  const close = useCallback(() => {
    setCurrent(null)
    setTimeout(() => lastTrigger.current?.focus(), 0)
  }, [])
  const move = useCallback((d) => setCurrent((c) => (c === null ? c : (c + d + gallery.length) % gallery.length)), [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Réalisations</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Galerie</h1>
      <p className="mt-4 text-slate-500 max-w-2xl">
        Des images du terrain : application, chantiers, atelier, événements et vie associative. Touchez ou cliquez une photo pour
        l'agrandir.
      </p>

      {galleryCategories.map((cat) => {
        const items = gallery.map((g, i) => ({ ...g, i })).filter((g) => g.category === cat.id)
        if (!items.length) return null
        return (
          <div key={cat.id} className="mt-16">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-ink">{cat.title}</h2>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">{cat.intro}</p>
            <ul className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3">
              {items.map((g) => (
                <li key={g.id}>
                  <button
                    onClick={(e) => open(g.i, e.currentTarget)}
                    className="group block w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`Agrandir : ${g.caption}`}
                  >
                    <div className={`${g.aspect === "portrait" ? "aspect-[3/4]" : g.aspect === "square" ? "aspect-square" : "aspect-[4/3]"} overflow-hidden ${g.pad ? "bg-white" : "bg-slate-100"}`}>
                      <img
                        src={g.src}
                        alt={g.alt}
                        width={g.width}
                        height={g.height}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                          g.contain ? (g.pad ? "object-contain p-4" : "object-contain") : g.aspect === "portrait" ? "object-cover object-top" : "object-cover"
                        }`}
                      />
                    </div>
                    <p className="p-3 text-xs md:text-sm text-slate-600 leading-snug">{g.caption}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      })}

      {current !== null && <Lightbox index={current} onClose={close} onMove={move} />}
    </section>
  )
}
