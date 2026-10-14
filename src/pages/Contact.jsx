import { useState } from "react"
import { profile } from "../data/profile"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function Contact() {
  useDocumentMeta(
    "Contact",
    "Contactez Rodrigue Donatien Sawadogo — entrepreneur, développeur web & PWA basé à Ouagadougou, Burkina Faso."
  )
  const [form, setForm] = useState({ name: "", subject: "", message: "" })

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    form.subject || `Contact portfolio — ${form.name || "sans nom"}`
  )}&body=${encodeURIComponent(form.message)}`

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-accent font-medium uppercase tracking-wide text-sm mb-3">Contact</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">Discutons de votre projet</h1>
      <p className="mt-4 text-slate-500 max-w-xl">
        Entreprises, ONG, organisations, partenaires, recruteurs — n'hésitez pas à me contacter.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <span className="text-slate-400 text-sm block mb-1">Email</span>
            <a href={`mailto:${profile.email}`} className="text-lg text-ink hover:text-accent">
              {profile.email}
            </a>
          </div>
          <div>
            <span className="text-slate-400 text-sm block mb-1">Téléphone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-lg text-ink hover:text-accent">
              {profile.phone}
            </a>
          </div>
          <div>
            <span className="text-slate-400 text-sm block mb-2">WhatsApp</span>
            <ul className="space-y-2">
              {profile.whatsapp.map((w) => (
                <li key={w.wa}>
                  <a
                    href={`https://wa.me/${w.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Écrire sur WhatsApp au ${w.display}`}
                    className="inline-flex items-center gap-3 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-ink hover:border-emerald-600 hover:bg-emerald-100 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-emerald-600" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.1 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.1.1.3 0 .5l-.3.4-.3.4c-.1.1-.2.3-.1.5.5.9 1.2 1.6 2 2.1.3.2.8.4 1.1.5.2.1.4 0 .5-.1l.7-.9c.2-.2.3-.2.5-.1l1.8.9c.2.1.3.2.4.3.1.2.1.7-.1 1.3Z" />
                    </svg>
                    <span className="text-lg">{w.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-slate-400 text-sm block mb-1">Localisation</span>
            <span className="text-lg text-ink">{profile.location}</span>
          </div>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailtoHref
          }}
        >
          <div>
            <label className="text-sm text-slate-500" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div>
            <label className="text-sm text-slate-500" htmlFor="subject">
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div>
            <label className="text-sm text-slate-500" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink hover:bg-accent/90 transition-colors"
          >
            Envoyer par email
          </button>
          <p className="text-xs text-slate-400">
            Ouvre votre client email avec le message pré-rempli (pas d'envoi direct depuis le site pour l'instant).
          </p>
        </form>
      </div>
    </section>
  )
}
