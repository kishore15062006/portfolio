import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import projects from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const navigate = useNavigate()
  const { slug } = useParams()

  // Find the project
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  // Get previous and next project
  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1]
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0]

  if (!project) {
    return (
      <div className="not-found">
        <h1>Project not found</h1>
        <button onClick={() => navigate('/#projects')}>
          Back to Projects
        </button>
      </div>
    )
  }

  const getMethodColor = (method) => {
    if (method.startsWith('GET')) return 'method-get'
    if (method.startsWith('POST')) return 'method-post'
    if (method.startsWith('PUT')) return 'method-put'
    if (method.startsWith('DELETE')) return 'method-delete'
    return ''
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        {/* Back Button */}
        <button
          className="back-button"
          onClick={() => navigate('/#projects')}
        >
          ← Back to Projects
        </button>

        {/* Header */}
        <div className="project-header">
          <div className="project-tech-tags">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-desc">{project.shortDesc}</p>
          <div className="project-action-buttons">
            {project.liveUrl !== 'TODO' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <ExternalLink size={18} /> View Live Demo
              </a>
            )}
            {project.githubUrl !== 'TODO' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
              >
                <Github size={18} /> View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Main Screenshot */}
        <div className="project-screenshot">
          <img
            src={project.screenshot}
            alt={project.title}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23333" width="1200" height="600"/%3E%3C/svg%3E'
            }}
          />
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          <div className="info-box">
            <h3 className="info-title">The Problem</h3>
            <p className="info-text">{project.problem}</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">My Solution</h3>
            <p className="info-text">{project.solution}</p>
          </div>
          <div className="info-box">
            <h3 className="info-title">What I Learned</h3>
            <p className="info-text">{project.challenge}</p>
          </div>
        </div>

        {/* API Endpoints (if available) */}
        {project.endpoints && project.endpoints.length > 0 && (
          <div className="endpoints-section">
            <h2 className="endpoints-title">API Endpoints</h2>
            <div className="endpoints-list">
              {project.endpoints.map((endpoint, idx) => {
                const [method, path] = endpoint.split(' ')
                return (
                  <div key={idx} className={`endpoint ${getMethodColor(method)}`}>
                    <span className="endpoint-method">{method}</span>
                    <span className="endpoint-path">{path}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="project-navigation">
          <button
            className="nav-project-btn"
            onClick={() => navigate(`/projects/${prevProject.slug}`)}
          >
            <ChevronLeft size={20} />
            <div>
              <span className="nav-label">Previous</span>
              <span className="nav-project-name">{prevProject.title}</span>
            </div>
          </button>
          <button
            className="nav-project-btn"
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
          >
            <div>
              <span className="nav-label">Next</span>
              <span className="nav-project-name">{nextProject.title}</span>
            </div>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </main>
  )
}
