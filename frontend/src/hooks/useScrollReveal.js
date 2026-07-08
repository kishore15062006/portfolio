import { useEffect, useRef } from 'react'

/**
 * useScrollReveal: Adds an IntersectionObserver that toggles 'visible' class
 * on elements with 'reveal' class as they enter the viewport.
 * Combine with CSS .reveal { opacity: 0; transform: translateY(40px) }
 *                  .reveal.visible { opacity: 1; transform: translateY(0) }
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Optionally unobserve after revealing
          // observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
