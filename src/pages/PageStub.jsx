export default function PageStub({ title, note }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink">{title}</h1>
      <p className="mt-4 text-slate-500 max-w-xl">
        {note ?? "Section en construction — contenu détaillé à venir dans une prochaine étape."}
      </p>
    </section>
  )
}
