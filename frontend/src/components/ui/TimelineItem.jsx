import { motion } from 'framer-motion'
import './TimelineItem.css'

export default function TimelineItem({ item, isEven }) {
  return (
    <motion.div
      className={`timeline-item ${isEven ? 'even' : ''}`}
      initial={{
        x: isEven ? 60 : -60,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Timeline Dot */}
      <div className="timeline-dot"></div>

      {/* Card */}
      <div className="timeline-card">
        {/* Type Badge */}
        {item.type && (
          <div className={`timeline-type-badge type-${item.type}`}>
            {item.type}
          </div>
        )}

        {/* Company */}
        <h3 className="timeline-company">{item.company}</h3>

        {/* Role */}
        <p className="timeline-role">{item.role}</p>

        {/* Period & Location */}
        <div className="timeline-meta">
          <span>{item.period}</span>
          {item.location && <span>•</span>}
          {item.location && <span>{item.location}</span>}
        </div>

        {/* Bullets */}
        <ul className="timeline-bullets">
          {item.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        {/* Tech Tags */}
        {item.tech && item.tech.length > 0 && (
          <div className="timeline-tech">
            {item.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
