import { statusLabels } from "../data/projects"

const styles = {
  PRODUCTION: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  DEVELOPPEMENT: "bg-sky-50 text-sky-700 ring-sky-600/20",
  PROTOTYPE: "bg-amber-50 text-amber-700 ring-amber-600/20",
  CONCEPT: "bg-slate-100 text-slate-600 ring-slate-500/20",
  A_VERIFIER: "bg-white text-slate-500 ring-slate-400/30 border-dashed",
}

export default function StatusBadge({ status, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status] ?? styles.A_VERIFIER} ${className}`}
    >
      {statusLabels[status] ?? status}
    </span>
  )
}
