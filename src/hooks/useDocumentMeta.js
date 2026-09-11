import { useEffect } from "react"

/**
 * Met à jour le <title> et la meta description au montage d'une page.
 * Laisse le titre/description par défaut (définis dans index.html) intacts
 * sur les pages qui n'appellent pas ce hook.
 */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) {
      document.title = `${title} — Rodrigue Donatien Sawadogo`
    }

    let tag = document.querySelector('meta[name="description"]')
    const previousDescription = tag?.getAttribute("content")
    if (description) {
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", "description")
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", description)
    }

    return () => {
      document.title = previousTitle
      if (tag && previousDescription) tag.setAttribute("content", previousDescription)
    }
  }, [title, description])
}
