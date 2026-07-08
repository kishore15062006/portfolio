/**
 * projects.js - Array of portfolio projects with full details
 * Each project object should include slug for routing
 */

const projects = [
  {
    slug: 'Attendance-Management-System',
    title: 'IT-Helpdesk Attendance Management System',
    shortDesc: 'A full-stack attendance management system for IT-Helpdesk employees, built with React, Spring Boot, and MySQL',
    fullDesc:
      '',
    problem: 'Solves Manual Attendance Management',
    solution: 'Web-based system with real-time attendance tracking, reporting, and admin dashboard',
    challenge:
      'Implementing real-time updates and ensuring data consistency across concurrent users',
    tech: [
      'React',
      'Spring Boot',
      'MySQL',
      'JWT',
      'Spring Security'
    ],
    category: 'Full Stack',
    screenshot: '/projectSS/IThelpdeskattendanceSS.png',
    gifPreview: '/projects/attendance.gif',
    liveUrl: 'https://it-helpdesk-attendance.netlify.app/',
    githubUrl: 'https://github.com/kishore15062006/IT_Helpdesk_Attendance',
    featured: false,
    endpoints: [
    ],
  },
  // {
  //   slug: 'Farm Management Portal',
  //   title: 'Farm Management Portal',
  //   shortDesc:
  //     'WebSocket-powered group chat with message history stored in MySQL',
  //   fullDesc: 'TODO',
  //   problem: 'TODO',
  //   solution: 'TODO',
  //   challenge:
  //     'TODO: Handling concurrent WebSocket connections and message ordering',
  //   tech: ['React', 'Spring Boot', 'WebSocket', 'STOMP', 'MySQL'],
  //   category: 'Full Stack',
  //   screenshot: '/projects/chat.png',
  //   gifPreview: '/projects/chat.gif',
  //   liveUrl: 'TODO',
  //   githubUrl: 'TODO',
  //   featured: true,
  //   endpoints: [
  //     'WS /ws/chat',
  //     'GET /api/messages/history/:roomId',
  //     'POST /api/rooms/create',
  //   ],
  // },
  {
    slug: 'online-course-learning-system',
    title: 'Online Course Learning System',
    shortDesc:
      'Full-stack LMS with role-based dashboards, quizzes, and progress tracking — Spring Boot API + MySQL',
    fullDesc:
      'A full-stack learning management system enabling students to browse and enroll in courses, complete lessons and quizzes, track progress, and leave reviews, while admins manage courses, monitor students, and view analytics through a dedicated dashboard. Built with JWT-secured REST APIs on the backend and a role-based React frontend.',
    problem:
      'Educators and learners need a unified platform to manage course content, track learning progress, and monitor engagement, but most solutions either lack proper role separation or fail to scale cleanly across student and admin workflows.',
    solution:
      'Built a Spring Boot backend with JWT access and refresh token authentication, exposing REST APIs for courses, enrollment, quizzes, reviews, cart/checkout, and admin analytics. The React frontend uses Redux Toolkit for state management and role-based protected routes to separate student and admin experiences.',
    challenge:
      'Designing a secure, seamless JWT refresh flow so that expired access tokens are automatically renewed and failed requests are retried without disrupting the user session.',
    tech: ['React', 'Redux Toolkit', 'Spring Boot', 'MySQL', 'JPA', 'JWT'],
    category: 'Full Stack',
    screenshot: '/projectSS/lmsSS.png',
    gifPreview: '',
    liveUrl: 'TODO',
    githubUrl: 'TODO',
    featured: false,
    endpoints: [
      'POST /api/auth/login',
      'POST /api/auth/refresh',
      'GET /api/courses',
      'POST /api/enrollment',
      'GET /api/admin/analytics',
    ],
  },
  {
    slug: 'farmer-to-consumer-marketplace',
    title: 'Farmer-to-Consumer Marketplace Platform',
    shortDesc:
      'Multi-role agriculture marketplace with JWT auth, order tracking, and admin analytics — Spring Boot + MySQL',
    fullDesc:
      'A full-stack agriculture marketplace connecting farmers directly with buyers, and delivery agents through a secure, role-based system. Farmers can list products, buyers can browse and order in real time, delivery agents can track and update deliveries, and admins can moderate the platform through a dedicated analytics dashboard.',
    problem:
      'Farmers often lack direct access to buyers and rely on middlemen, reducing their margins, while consumers have limited visibility into where their produce comes from and no reliable way to order fresh products directly from local farms.',
    solution:
      'Built a full-stack marketplace with Spring Boot REST APIs secured by JWT authentication and role-based access control across three user roles. Implemented product listings, real-time ordering, delivery tracking, commission-based payments, and analytics dashboards, all backed by a normalized MySQL schema with 9 core entities.',
    challenge:
      'Designing a role-based access system and database schema that cleanly supported three distinct user roles (Farmer, Buyer, Delivery Agent) with different permissions, dashboards, and data relationships, without duplicating logic across roles.',
    tech: [
      'React',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'TailwindCSS',
    ],
    category: 'Full Stack',
    screenshot: '/projectSS/UzhavarProSS.png',
    gifPreview: '/projects/marketplace.gif',
    liveUrl: 'TODO',
    githubUrl: 'TODO',
    featured: true,
    endpoints: [
      'POST /api/auth/register',
      'POST /api/auth/login',
      'GET /api/products',
      'POST /api/orders',
      'GET /api/analytics/admin/dashboard-stats',
    ],
  },
]

export default projects
