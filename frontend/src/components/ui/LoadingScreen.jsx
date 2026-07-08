import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoadingScreen.css'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem('portfolio-loaded')
    
    if (hasVisited) {
      // Skip loading screen on repeat visits
      setVisible(false)
    } else {
      // Show for 1500ms on first visit
      const timer = setTimeout(() => {
        setVisible(false)
        sessionStorage.setItem('portfolio-loaded', 'true')
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <div className="loading-content">
            {/* SVG with initials - Replace "FS" with your actual initials */}
            <svg
              className="loading-initials"
              viewBox="0 0 200 200"
              width="120"
              height="120"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="80"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="700"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
              >
                FS
              </text>
            </svg>

            {/* Progress bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
