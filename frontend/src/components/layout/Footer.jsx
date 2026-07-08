import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Left */}
        <div className="footer-col">
          <span className="footer-text">
            KISHORE P
          </span>
        </div>

        {/* Center */}
        <div className="footer-col footer-center">
          <span className="footer-text footer-muted">
            Built with React · Spring Boot · Framer Motion
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-col footer-right">
          <a
            href="https://github.com/kishore15062006"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kishore15062006"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kishore15062006@gmail.com"
            className="footer-icon-link"
            aria-label="Email"  
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span className="footer-muted">
          © {currentYear} Kishore. Designed & developed with attention to detail.
        </span>
      </div>
    </footer>
  )
}
