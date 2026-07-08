/**
 * experience.js - Timeline entries for work, education, and projects
 */

const experience = [
  {
    id: 1,
    type: 'work', // "work" | "education" | "project"
    company: 'TODO: Company Name',
    role: 'TODO: Full Stack Developer Intern',
    period: 'TODO: Jan 2024 – Present',
    location: 'TODO: City, India',
    bullets: [
      'TODO: Built a REST API with Spring Boot handling X daily requests',
      'TODO: Developed React dashboard reducing manual reporting time by 40%',
      'TODO: Designed MySQL schema with 10+ normalised tables',
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'Git'],
  },
  {
    id: 2,
    type: 'project',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    period: 'TODO: Aug 2023 – Dec 2023',
    location: 'Remote',
    bullets: [
      'TODO: Built and deployed a full-stack e-commerce application',
      'TODO: Implemented JWT authentication with role-based access control',
      'TODO: Integrated Stripe payment gateway for real transactions',
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Stripe'],
  },
  {
    id: 3,
    type: 'education',
    company: 'TODO: University Name',
    role: 'TODO: B.E. / B.Tech in Computer Science',
    period: 'TODO: 2021 – 2025',
    location: 'TODO: City, India',
    bullets: [
      'TODO: Relevant courses: Data Structures, DBMS, Operating Systems, Web Development',
      'TODO: CGPA: X.X / 10',
      'TODO: Notable achievement or club',
    ],
    tech: [],
  },
]

export default experience
