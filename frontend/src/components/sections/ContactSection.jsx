import { useState, useRef } from 'react'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import axios from 'axios'
import './ContactSection.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export default function ContactSection() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      await axios.post(`${API_URL}/api/contact`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      setSent(true)
      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setError(
        'Failed to send message. Please email me directly at kishore15062006@gmail.com'
      )
      console.error('Contact form error:', err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-label">// contact</div>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-content">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p className="contact-subtext">
            Open to full-time roles. Let's talk.
          </p>

          <div className="availability-card">
            <div className="availability-dot"></div>
            <div>
              <p className="availability-status">Available for opportunities</p>
              <p className="availability-detail">
                Starting immediately
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <a href="mailto:kishore15062006@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>kishore15062006@gmail.com</span>
            </a>

            <div className="contact-item">
              <MapPin size={20} />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>

            <a
              href="https://github.com/kishore15062006"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Github size={20} />
              <span>github.com/kishore15062006</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kishore15062006/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Linkedin size={20} />
              <span>linkedin.com/in/kishore15062006/</span>
            </a>
          </div>

          <p className="response-time">
            I usually respond within 24 hours
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            >
              <option>Job Opportunity</option>
              <option>Freelance Project</option>
              <option>Collaboration</option>
              <option>Just saying hi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="What's on your mind?"
              rows="5"
              minLength="20"
              required
            ></textarea>
          </div>

          {/* Messages */}
          {sent && (
            <div className="form-message success">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="form-message error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
