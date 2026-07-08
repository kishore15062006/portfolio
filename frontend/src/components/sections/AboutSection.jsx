import { motion } from 'framer-motion'
import './AboutSection.css'
import myPhoto from '../../assets/Myimg.webp'

export default function AboutSection() {
  const stats = [
    { number: '1', label: 'Year Experience' },
    { number: '4', label: 'Projects' },
    { number: '50+', label: 'REST APIs' },
    { number: '80%', label: 'Completion' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="section about-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-label">// about</div>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-content">
        {/* Left Column */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <div className="profile-image">
            <div className="image-placeholder">
              <img src={myPhoto} alt="Kishore Profile" />
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                variants={itemVariants}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I'm Kishore, a Full Stack Developer from Tiruvannamalai, India. I'm
            passionate about building real products that solve real-world problems — from
            designing the database schema to shipping the pixel-perfect UI.
          </p>

          <p>
            My stack of choice is React on the frontend and Spring Boot on the
            backend, with MySQL or MongoDB for handling the data. I like that I can take an idea all
            the way from API design to deployed product with maximum efficiency and performance.
          </p>

          <p>
            I'm seeking a full-time role where I can build real products,
            learn from experienced engineers, and keep growing my skills in creating scalable,
            reliable software.
          </p>

          {/* Quick Info */}
          <div className="quick-info">
            <div className="info-row">
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Coimbatore, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">kishore@15062006gmail.com</span>
              </div>
            </div>
            <div className="info-row">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Tech CSBS</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available</span>
                <span className="info-value">Immediately</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="interests">
            <span className="interest-tag">Open Source</span>
            <span className="interest-tag">System Design</span>
            <span className="interest-tag">Web Performance</span>
            <span className="interest-tag">Problem Solving</span>
            <span className="interest-tag">Continuous Learning</span>
            <span className="interest-tag">Hackathons</span>
            <span className="interest-tag">Tech Community</span>
            <span className="interest-tag">Building Products</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
