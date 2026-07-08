import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import './HeroSection.css'

export default function HeroSection() {
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleScrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      {/* Aurora Background - requires ReactBits */}
      {/* Replace with actual Aurora component when jsrepo is installed */}
      <div className="hero-bg-placeholder"></div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.p className="hero-label" variants={itemVariants}>
          Full Stack Developer
        </motion.p>

        {/* Main Name */}
        <motion.h1 className="hero-name" variants={itemVariants}>
          KISHORE
        </motion.h1>

        {/* Tech Stack Pills */}
        <motion.div className="hero-tech-pills" variants={itemVariants}>
          <span className="tech-pill">React</span>
          <span className="tech-pill">Spring Boot</span>
          <span className="tech-pill">MySQL</span>
          <span className="tech-pill">MongoDB</span>
        </motion.div>

        {/* Tagline */}
        <motion.p className="hero-tagline" variants={itemVariants}>
          I build fast, scalable, secure Full Stack Applications with clean React UIs on the frontend,
          robust Spring Boot APIs with JWT Authentication and Authorization on the backend, powered by MySQL or MongoDB.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <button
            className="btn btn-primary"
            onClick={handleScrollToProjects}
          >
            View My Work →
          </button>
          <a href="/Kishore-P-Resume.pdf" download className="btn btn-secondary">
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className={`hero-scroll-arrow ${!showArrow ? 'hidden' : ''}`}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
