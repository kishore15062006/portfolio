import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import ScrollToTop from './components/ui/ScrollToTop'
import Terminal from './components/ui/Terminal'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import './App.css'

function AppContent() {
  useScrollReveal()
  const location = useLocation()
  const isResumePage = location.pathname === '/resume'

  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <Terminal />
      {!isResumePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {!isResumePage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
