import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import projects from '../../data/projects'
import './ProjectsSection.css'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Full Stack', 'Frontend', 'Backend']

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  )

  // Separate featured and regular projects
  const featuredProject = filteredProjects.find((p) => p.featured)
  const regularProjects = featuredProject
    ? filteredProjects.filter((p) => p.slug !== featuredProject.slug)
    : filteredProjects

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header">
        <div className="section-label">// projects</div>
        <h2 className="section-title">Featured Work</h2>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Featured Project (if exists) */}
      {featuredProject && (
        <div className="featured-project-card">
          <div className="featured-image">
            <img
              src={featuredProject.screenshot}
              alt={featuredProject.title}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23333" width="800" height="400"/%3E%3C/svg%3E'
              }}
            />
          </div>
          <div className="featured-info">
            <div className="featured-tech">
              {featuredProject.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="featured-desc">{featuredProject.shortDesc}</p>
            <p className="featured-full-desc">{featuredProject.fullDesc}</p>
            <div className="featured-buttons">
              {featuredProject.liveUrl !== 'TODO' && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-btn"
                >
                  Live Demo →
                </a>
              )}
              {featuredProject.githubUrl !== 'TODO' && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-btn secondary"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Regular Projects Grid */}
      <AnimatePresence mode="wait">
        <div className="projects-grid">
          {regularProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimatePresence>
    </section>
  )
}
