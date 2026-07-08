import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTerminal } from '../../hooks/useTerminal'
import './Terminal.css'

export default function Terminal() {
  const { isOpen, setIsOpen } = useTerminal()
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: 'Welcome to the portfolio terminal.',
    },
    {
      type: 'output',
      text: "Type 'help' to see available commands.",
    },
    {
      type: 'output',
      text: '',
    },
  ])
  const [commandInput, setCommandInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showHint, setShowHint] = useState(true)
  const terminalBodyRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Hide hint after 5 seconds
  useEffect(() => {
    if (showHint && !isOpen) {
      const timer = setTimeout(() => setShowHint(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showHint, isOpen])

  // Handle command execution
  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    // Add command to history
    setHistory((prev) => [...prev, { type: 'input', text: `$ ${cmd}` }])

    if (commandHistory[commandHistory.length - 1] !== cmd) {
      setCommandHistory((prev) => [...prev, cmd])
    }
    setHistoryIndex(-1)
    setCommandInput('')

    // Parse and execute command
    if (trimmedCmd === '' || trimmedCmd === ' ') {
      return
    }

    if (trimmedCmd === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Available commands:',
        },
        {
          type: 'output',
          text: '  about      — About me',
        },
        {
          type: 'output',
          text: '  projects   — View projects',
        },
        {
          type: 'output',
          text: '  skills     — Show skills',
        },
        {
          type: 'output',
          text: '  contact    — Contact info',
        },
        {
          type: 'output',
          text: '  resume     — Download resume',
        },
        {
          type: 'output',
          text: '  github     — Open GitHub',
        },
        {
          type: 'output',
          text: '  whoami     — Who am I?',
        },
        {
          type: 'output',
          text: '  stack      — Tech stack',
        },
        {
          type: 'output',
          text: '  clear      — Clear terminal',
        },
        {
          type: 'output',
          text: '  exit       — Close terminal',
        },
        {
          type: 'output',
          text: '',
        },
      ])
    } else if (trimmedCmd === 'about') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'TODO: Full Stack Developer from [YourCity], India.',
        },
        {
          type: 'output',
          text: 'Passionate about building scalable applications with React & Spring Boot.',
        },
        {
          type: 'output',
          text: '',
        },
      ])
      setIsOpen(false)
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else if (trimmedCmd === 'projects') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Navigating to projects...',
        },
        {
          type: 'output',
          text: '',
        },
      ])
      setIsOpen(false)
      setTimeout(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else if (trimmedCmd === 'skills') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Frontend: React, JavaScript, HTML5, CSS3',
        },
        {
          type: 'output',
          text: 'Backend: Java, Spring Boot, Spring Security',
        },
        {
          type: 'output',
          text: 'Database: MySQL, JPA / Hibernate',
        },
        {
          type: 'output',
          text: 'Tools: Git, Docker, Postman, VS Code',
        },
        {
          type: 'output',
          text: '',
        },
      ])
    } else if (trimmedCmd === 'contact') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Navigating to contact...',
        },
        {
          type: 'output',
          text: '',
        },
      ])
      setIsOpen(false)
      setTimeout(() => {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else if (trimmedCmd === 'resume') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Downloading resume...',
        },
        {
          type: 'output',
          text: '',
        },
      ])
      // Trigger download
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else if (trimmedCmd === 'github') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Opening GitHub...',
        },
        {
          type: 'output',
          text: '',
        },
      ])
      window.open('https://github.com/yourusername', '_blank')
    } else if (trimmedCmd === 'whoami') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'Full Stack Developer | React + Spring Boot | Tiruppur, TN, India',
        },
        {
          type: 'output',
          text: '',
        },
      ])
    } else if (trimmedCmd === 'stack') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: '╔══════════════════════╗',
        },
        {
          type: 'output',
          text: '║   MY TECH STACK      ║',
        },
        {
          type: 'output',
          text: '╠══════════════════════╣',
        },
        {
          type: 'output',
          text: '║  ⚛  React           ║',
        },
        {
          type: 'output',
          text: '║  🍃  Spring Boot     ║',
        },
        {
          type: 'output',
          text: '║  🐬  MySQL           ║',
        },
        {
          type: 'output',
          text: '╚══════════════════════╝',
        },
        {
          type: 'output',
          text: '',
        },
      ])
    } else if (trimmedCmd === 'clear') {
      setHistory([])
    } else if (trimmedCmd === 'exit' || trimmedCmd === 'q') {
      setIsOpen(false)
    } else if (trimmedCmd === 'easter') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          text: 'You found the easter egg! Most visitors just scroll... you ran commands. I like you.',
        },
        {
          type: 'output',
          text: '',
        },
      ])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'error',
          text: `Command not found: ${cmd}. Type 'help' for available commands.`,
        },
        {
          type: 'output',
          text: '',
        },
      ])
    }
  }

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(commandInput)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = historyIndex + 1
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex)
        setCommandInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = historyIndex - 1
      if (newIndex >= 0) {
        setHistoryIndex(newIndex)
        setCommandInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setCommandInput('')
      }
    }
  }

  return (
    <>
      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="terminal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="terminal-window"
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Title Bar */}
              <div className="terminal-title-bar">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">portfolio — bash</span>
              </div>

              {/* Body */}
              <div className="terminal-body" ref={terminalBodyRef}>
                {history.map((entry, idx) => (
                  <div key={idx} className={`terminal-line terminal-${entry.type}`}>
                    {entry.text}
                  </div>
                ))}

                {/* Input */}
                <div className="terminal-input-row">
                  <span className="terminal-prompt">$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="terminal-input"
                    spellCheck="false"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Hint */}
      {!isOpen && showHint && (
        <motion.div
          className="terminal-hint"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 4.5 }}
        >
          Press <kbd>/</kbd> for terminal
        </motion.div>
      )}
    </>
  )
}
