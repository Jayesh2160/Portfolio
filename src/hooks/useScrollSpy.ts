import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset: number = 150): string {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top of the page, activate the first ID (usually 'hero')
      if (window.scrollY < 50) {
        setActiveId(ids[0] || "")
        return
      }

      // Check if scrolled near the bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (isAtBottom) {
        setActiveId(ids[ids.length - 1] || "")
        return
      }

      const scrollPosition = window.scrollY + offset

      for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id)
            return
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [ids, offset])

  return activeId
}
