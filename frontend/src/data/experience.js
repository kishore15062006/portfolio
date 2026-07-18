/**
 * experience.js - Timeline entries for work and personal projects
 */

const experience = [
  {
    id: 1,
    type: 'work',
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'June 2025 – Present',
    location: 'Coimbatore, India',
    bullets: [
      'Developed production-grade software projects end to end, managing requirements, design, development, testing, and deployment phases independently.',
      'Developed a full-stack agriculture marketplace built with React, Spring Boot, and MySQL, connecting farmers with buyers and delivery agents through a secure, role-based system across three user roles (Farmer, Buyer, Delivery Agent).',
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
  },
  {
    id: 2,
    type: 'work',
    company: 'Software Developer Intern',
    role: 'Software Developer Intern',
    period: 'April – May 2026',
    location: '',
    bullets: [
      'Assisted in building and testing full-stack features for a live web application, working with REST APIs, database integration, and Agile development practices under senior developer guidance.',
    ],
    tech: ['REST APIs', 'Spring Boot', 'MySQL', 'Agile'],
  },
  {
    id: 3,
    type: 'project',
    company: 'Personal Projects',
    role: 'Full Stack Developer',
    period: '2024 – Present',
    location: '',
    bullets: [
      'IT-Helpdesk Attendance Management System — Full-stack attendance tracking system for IT-Helpdesk employees with role-based access control built with React, Spring Boot, and MySQL.',
      'Online Course Learning System — Feature-complete LMS with role-based dashboards, quizzes, progress tracking, and JWT-secured REST APIs built with React, Redux Toolkit, Spring Boot, and MySQL.',
      'Farmer-to-Consumer Marketplace Platform — Multi-role agriculture marketplace with real-time ordering, delivery tracking, and admin analytics powered by Spring Boot, Spring Security, and MySQL.',
    ],
    tech: ['React', 'Redux Toolkit', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
  },
]

export default experience
