# 🎯 Full-Stack Portfolio Website

A complete, production-ready personal portfolio website built with **React 19 + Spring Boot 4.1** for showcasing a Full Stack Developer's projects, skills, and experience.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-19.2.6-blue?logo=react)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.0-green?logo=spring)

## ✨ Features

### Frontend
- 🎨 **Dark/Light Theme Toggle** - Built with React Context + CSS variables
- 📱 **Fully Responsive** - Mobile-first design for all screen sizes
- ⚡ **Smooth Animations** - Framer Motion + CSS animations + Intersection Observer
- 🔄 **SPA Routing** - React Router DOM v6 with project detail pages
- 📊 **Interactive Sections** - Hero, About, Projects, Skills, Experience, Contact
- 🎯 **Project Filtering** - Filter projects by category
- 🎮 **Secret Terminal** - Developer Easter egg (press "/" to open)
- 📥 **Contact Form** - Email form with backend validation
- 🎭 **Loading Screen** - Beautiful initial page load animation
- 📍 **Skill Marquee** - Animated scrolling skill badges

### Backend
- 🌐 **REST API** - `/api/contact` endpoint for form submissions
- 🗄️ **MySQL Database** - JPA/Hibernate ORM with auto-schema
- 🔐 **CORS Configured** - Frontend-backend communication enabled
- ✅ **Validation** - Server-side validation for all inputs
- 🏥 **Health Check** - `/api/contact/health` endpoint
- 📝 **Request Logging** - All submissions saved to database

## 📂 Project Structure

```
portfolio/
├── frontend/                    # React Vite application
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   │   ├── ui/              # Button, Badge, Card components
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   └── sections/        # Home page sections
│   │   ├── pages/               # Page components (Home, ProjectDetail)
│   │   ├── context/             # React Context (Theme)
│   │   ├── hooks/               # Custom hooks
│   │   ├── data/                # Portfolio data (projects, skills)
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles + theme variables
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend/                     # Spring Boot application
│   ├── src/main/java/com/example/demo/
│   │   ├── config/              # Spring configuration
│   │   ├── controller/          # REST API endpoints
│   │   ├── model/               # JPA entities
│   │   ├── repository/          # Data access layer
│   │   ├── service/             # Business logic
│   │   └── DemoApplication.java # Main class
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml                  # Maven dependencies
│
└── SETUP_GUIDE.md              # Detailed setup instructions
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Java 21
- MySQL 8.0+

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
→ Frontend available at **http://localhost:5173**

### 2. Backend Setup
```bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE portfolio_db;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';

# Update credentials in backend/src/main/resources/application.properties

cd backend
mvnw spring-boot:run
```
→ Backend available at **http://localhost:8080**

## 🎨 Customization

### Update Your Portfolio Data
Edit files in `frontend/src/data/`:
- `projects.js` - Add your projects
- `skills.js` - Add your skills
- `experience.js` - Add your work experience

### Update Content Sections
Edit component files in `frontend/src/components/sections/`:
- `HeroSection.jsx` - Your name, title, headline
- `AboutSection.jsx` - Bio, stats, interests
- `ContactSection.jsx` - Email, contact info

### Add Assets
```
frontend/public/
├── resume.pdf               # Your resume
├── profile.jpg              # Your profile photo
└── projects/
    └── project-name/
        ├── screenshot.jpg
        └── preview.gif
```

### Customize Theme
Edit CSS variables in `frontend/src/index.css`:
```css
:root[data-theme="dark"] {
  --color-bg: #0f0f0f;
  --color-accent: #60a5fa;
  --color-text-primary: #ffffff;
  /* ... customize colors ... */
}
```

## 🌐 API Documentation

### Contact Form Endpoint
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss..."
}
```

**Response (200):**
```json
{
  "status": "success",
  "message": "Message received. Thank you!"
}
```

### Health Check
```http
GET /api/contact/health
```

## 📊 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Frontend** | React | 19.2.6 |
| | Vite | Latest |
| | React Router | v6 |
| | Framer Motion | 10.16.4 |
| | Axios | 1.6.2 |
| | Lucide Icons | 0.294.0 |
| **Backend** | Spring Boot | 4.1.0 |
| | Java | 21 |
| | MySQL | 8.0+ |
| | JPA/Hibernate | 6.4.0 |
| | Lombok | Latest |

## 📝 Features Details

### Frontend Features
- ✅ **Responsive Design** - Works on mobile, tablet, desktop
- ✅ **Dark/Light Mode** - Theme toggle with localStorage persistence
- ✅ **Smooth Animations** - CSS transitions + Framer Motion
- ✅ **Scroll Animations** - Intersection Observer API
- ✅ **Route-based Pages** - Project detail pages with routing
- ✅ **Project Filtering** - Filter by category
- ✅ **SEO Ready** - Semantic HTML structure
- ✅ **Accessible** - ARIA labels, keyboard navigation

### Backend Features
- ✅ **REST API** - RESTful design patterns
- ✅ **Database Persistence** - JPA/Hibernate integration
- ✅ **Input Validation** - Server-side validation
- ✅ **CORS Support** - Frontend-backend communication
- ✅ **Error Handling** - Proper HTTP status codes
- ✅ **Logging** - Request/response logging
- ✅ **Hot Reload** - Spring DevTools enabled

## 🚢 Deployment

### Frontend (Vercel)
```bash
# Push to GitHub
git push origin main

# Connect Vercel to repo
# Set environment variable: VITE_API_URL=https://your-api.com
# Deploy!
```

### Backend (AWS/GCP/DigitalOcean)
```bash
# Build JAR
mvnw clean package -DskipTests

# Deploy JAR to server
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

## 🔒 Security Checklist

- [ ] Update MySQL password
- [ ] Update CORS origins for production
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Add rate limiting to contact endpoint
- [ ] Enable Spring Security for sensitive endpoints
- [ ] Validate all user inputs

## 🐛 Troubleshooting

### Frontend
- **Port 5173 in use:** `npm run dev -- --port 3000`
- **CORS errors:** Check `VITE_API_URL` in `.env`
- **Dark mode not working:** Clear localStorage

### Backend
- **MySQL connection failed:** Check credentials in `application.properties`
- **Port 8080 in use:** Edit `server.port` in `application.properties`
- **Tables not created:** Ensure MySQL is running and `ddl-auto=update`

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed troubleshooting.

## 📚 Documentation

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Complete setup and customization guide
- [Frontend README](./frontend/README.md) - React-specific documentation
- [Backend README](./backend/HELP.md) - Spring Boot documentation

## 🎯 What's Next?

### Recommended Enhancements
- [ ] Add email notifications (Spring Mail)
- [ ] Implement authentication (Spring Security)
- [ ] Add blog section
- [ ] Set up analytics (Google Analytics)
- [ ] Add newsletter signup
- [ ] Implement search functionality
- [ ] Add admin dashboard

### Optional Features
- Google Analytics integration
- Email notification service
- Admin panel for message management
- SEO metadata optimization
- PWA support
- Image optimization

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

If you encounter issues:
1. Check the [SETUP_GUIDE.md](./SETUP_GUIDE.md)
2. Review the troubleshooting section
3. Check browser console for errors
4. Review backend logs

## ✅ Deployment Checklist

Before going live:
- [ ] All portfolio data updated
- [ ] Profile image added
- [ ] Resume PDF uploaded
- [ ] Project screenshots added
- [ ] Contact form tested
- [ ] Dark/light mode working
- [ ] Responsive design verified
- [ ] Database backups configured
- [ ] HTTPS enabled
- [ ] CORS origins updated
- [ ] Staging environment tested

---

**Built with ❤️ using React + Spring Boot**

Ready to showcase your portfolio? Let's go! 🚀
