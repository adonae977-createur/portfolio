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
