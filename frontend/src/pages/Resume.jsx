import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import './Resume.css'

export default function Resume() {
  const navigate = useNavigate()
  const resumeUrl = '/Kishore-P-Resume.pdf'

  return (
    <div className="resume-page">
      {/* Header */}
      <header className="resume-header">
        <div className="resume-header-left">
          <button onClick={() => navigate(-1)} className="back-btn" aria-label="Go Back">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
        
        <div className="resume-header-center">
          <h1>My Resume</h1>
        </div>

        <div className="resume-header-right">
          <a href={resumeUrl} download className="download-btn" aria-label="Download Resume">
            <Download size={18} />
            <span>Download</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="resume-content">
        {/* PDF Viewer for Desktop */}
        <div className="pdf-viewer-container">
          <iframe 
            src={`${resumeUrl}#toolbar=0`}
            title="Kishore P Resume"
            className="pdf-iframe"
          />
        </div>

        {/* Fallback layout for mobile devices / small screens */}
        <div className="resume-fallback">
          <div className="fallback-icon">
            <FileText size={48} />
          </div>
          <h2>Kishore P - Resume</h2>
          <p>
            For the best reading experience on mobile devices, please open the PDF directly or download it below.
          </p>
          <div className="fallback-actions">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View PDF Fullscreen
            </a>
            <a href={resumeUrl} download className="btn btn-secondary">
              Download PDF Resume
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
