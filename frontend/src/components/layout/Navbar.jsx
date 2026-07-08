import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Github, FileText } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import AvailabilityBadge from '../ui/AvailabilityBadge'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false)
  }, [location])

  // Detect active section based on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsDrawerOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = ['about', 'projects', 'skills', 'experience', 'contact']

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left: Logo */}
      <div className="navbar-logo" onClick={handleLogoClick} role="button" tabIndex={0}>
        <div className="logo-initials">FS</div>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="navbar-links desktop-only">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleNavClick(link)}
            className={`nav-link ${activeSection === link ? 'active' : ''}`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="navbar-actions">
        <AvailabilityBadge />
        <ThemeToggle />
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-btn"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github size={18} />
        </a>
        <Link
          to="/resume"
          className="nav-btn resume-btn"
        >
          <FileText size={16} />
          <span>Resume</span>
        </Link>

        {/* Mobile: Hamburger Menu */}
        <button
          className="hamburger-btn mobile-only"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle menu"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <motion.div
          className="navbar-drawer"
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 400 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`drawer-link ${activeSection === link ? 'active' : ''}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
