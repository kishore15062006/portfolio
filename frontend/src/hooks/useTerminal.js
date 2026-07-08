import { useState, useEffect } from 'react'

/**
 * useTerminal: Listens for '/' keypress to toggle terminal
 * Ignores if the active element is an input, textarea, or select
 */
export function useTerminal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore if user is typing in an input field
      const activeElement = document.activeElement
      const isFormElement =
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.tagName === 'SELECT'

      if (isFormElement) return

      // Toggle terminal on "/" key
      if (event.key === '/') {
        event.preventDefault()
        setIsOpen((prev) => !prev)
      }

      // Close on Escape
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return { isOpen, setIsOpen }
}
