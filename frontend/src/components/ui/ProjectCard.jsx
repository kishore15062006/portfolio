import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const navigate = useNavigate()
  const [imageUrl, setImageUrl] = useState(project.screenshot)

  const handleImageEnter = () => {
    if (project.gifPreview) {
      setImageUrl(project.gifPreview)
    }
  }

  const handleImageLeave = () => {
    setImageUrl(project.screenshot)
  }

  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`)
  }

  return (
    <motion.div
      className="project-card"
      onClick={handleCardClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Area */}
      <div
        className="project-image-area"
        onMouseEnter={handleImageEnter}
        onMouseLeave={handleImageLeave}
      >
        <img
          src={imageUrl}
          alt={project.title}
          className="project-image"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"%3E%3Crect fill="%23333" width="400" height="200"/%3E%3C/svg%3E'
          }}
        />
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDesc}</p>

        {/* Tech Tags */}
        <div className="project-tech-tags">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="tech-tag">+{project.tech.length - 3}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="project-buttons">
          {project.liveUrl !== 'TODO' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-btn live-btn"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl !== 'TODO' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-btn code-btn"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
