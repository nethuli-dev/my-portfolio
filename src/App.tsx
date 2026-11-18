import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './App.css'

/* Profile Images */
import heroProfilePic from './assets/images/img2.png'
import aboutProfilePic from './assets/images/nethuli-portfolio.png'

/* Project Media */
import lifelinkImg from './assets/projects/lifelink.jpeg'
import sahaayaImg from './assets/projects/sahaaya.jpeg'
import pacmanImg from './assets/projects/pac-man.gif'
import genaiImg from './assets/projects/genai-code-reviewer.jpeg'
import movierentalImg from './assets/projects/movierental.jpeg'
import greenhouseImg from './assets/projects/greenhouse.jpeg'
import nexoraImg from './assets/projects/AshenLens-NexoraAI.jpeg'

/* Scrapbook 6 Photos */
import about1 from './assets/about/1.jpeg'
import about2 from './assets/about/2.jpg'
import about3 from './assets/about/3.jpg'
import about4 from './assets/about/4.jpeg'
import about5 from './assets/about/5.jpeg'
import about6 from './assets/about/6.jpeg'

/* ========================================================
   DATA DEFINITIONS
======================================================== */

interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  symbol: string
  image?: string
  githubUrl: string
  liveUrl?: string
}

/* Rotating Roles for Hero Section */
const rotatingRoles = [
  'Aspiring AI Engineer',
  'Machine Learning Developer',
  'Data Analyst',
  'Full-Stack Developer',
  'AI Research Enthusiast',
  'Problem Solver & Innovator',
]

/* Projects in exact specified order */
const projects: Project[] = [
  {
    id: 'lifelink',
    number: '01',
    title: 'LifeLink',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'A full-stack platform focused on donor registration and eligibility management, with intelligent workflows and integrated application features.',
    technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'Python'],
    symbol: '✳',
    image: lifelinkImg,
    githubUrl: 'https://github.com/nethuli-dev/lifelink.git',
    liveUrl: 'https://lifelink.72-62-255-113.sslip.io',
  },
  {
    id: 'sahaaya',
    number: '02',
    title: 'Sahaaya',
    category: 'SOFTWARE DEVELOPMENT',
    description:
      'A software development project demonstrating the process of transforming an idea into a functional digital solution.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    symbol: '◇',
    image: sahaayaImg,
    githubUrl: 'https://github.com/nethuli-dev/sahaaya.git',
    liveUrl: 'https://sahaaya-sooty.vercel.app',
  },
  {
    id: 'pacman-ai',
    number: '03',
    title: 'Pacman IA Assignment',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'An AI assignment exploring intelligent search and problem-solving strategies, including state representation, search algorithms, and heuristic-based decision-making.',
    technologies: ['Python', 'AI Search', 'Heuristics'],
    symbol: '◉',
    image: pacmanImg,
    githubUrl: 'https://github.com/nethuli-dev/IA_Assignment.git',
  },
  {
    id: 'agentic-rag',
    number: '04',
    title: 'Agentic RAG System',
    category: 'AI ENGINEERING',
    description:
      'An exploration of retrieval-augmented generation and agent-based workflows for building more capable AI applications.',
    technologies: ['Python', 'RAG', 'LLMs', 'AI Agents'],
    symbol: '◈',
    githubUrl: 'https://github.com/nethuli-dev/agentic-rag-assistant.git',
  },
  {
    id: 'semester-risk-analyzer',
    number: '05',
    title: 'Semester Risk Analyzer',
    category: 'DATA ANALYTICS / MACHINE LEARNING',
    description:
      'A semester risk analysis project designed to help identify potential academic performance risks through student-related data analysis and risk assessment.',
    technologies: ['Python', 'Data Analysis', 'Machine Learning'],
    symbol: '◉',
    githubUrl: 'https://github.com/nethuli-dev/Semester-Risk-Analyzer-.git',
  },
  {
    id: 'genai-reviewer',
    number: '06',
    title: 'GenAI Code Reviewer',
    category: 'GENERATIVE AI',
    description:
      'An AI-powered code review project exploring intelligent code analysis, automated feedback, and developer assistance.',
    technologies: ['Python', 'Generative AI', 'LLMs'],
    symbol: '</>',
    image: genaiImg,
    githubUrl: 'https://github.com/nethuli-dev/genai-code-reviewer.git',
  },
  {
    id: 'movie-rental',
    number: '07',
    title: 'Movie Rental System',
    category: 'SOFTWARE ENGINEERING',
    description:
      'A movie rental application project focused on developing a software solution for managing movie-related rental operations.',
    technologies: ['C#', 'SQL Server', '.NET Framework'],
    symbol: '▣',
    image: movierentalImg,
    githubUrl: 'https://github.com/nethuli-dev/movie-rental-platform.git',
  },
  {
    id: 'greenhouse',
    number: '08',
    title: 'Greenhouse Project',
    category: 'TECHNOLOGY PROJECT',
    description:
      'A smart greenhouse management system exploring technology-based automation and sensor solutions in a greenhouse environment.',
    technologies: ['IoT', 'Embedded Systems', 'Sensors', 'Automation'],
    symbol: '✿',
    image: greenhouseImg,
    githubUrl: 'https://github.com/nethuli-dev/Smart-Greenhouse-System.git',
  },
]

/* Scrapbook 6 Photos with exact user captions */
const scrapbookPhotos = [
  { id: '1', src: about1, caption: 'Became 3rd in the Asian Chess Championship in 2013' },
  { id: '2', src: about2, caption: 'YCS Merit Award 2019' },
  { id: '3', src: about3, caption: 'SLIIT CodeFest 2019' },
  { id: '4', src: about4, caption: 'Community & Leadership' },
  { id: '5', src: about5, caption: 'IFS Invitation for Top 10 Finalists' },
  { id: '6', src: about6, caption: 'AI Innovation Challenge 2026' },
]

const experiences = [
  {
    number: '01',
    title: 'Nexora AI Challenge',
    event: 'AI COMPETITION',
    description:
      'Participated in an AI agent challenge involving technician and repair-job dispatch decisions in a simulated environment.',
    highlights: [
      'Designed and improved an autonomous decision-making agent',
      'Worked with technician allocation and job scheduling logic',
      'Evaluated performance across simulation rounds',
    ],
    result: 'Round 1: Rank #1',
    detail: 'Score: 0.717',
    image: nexoraImg,
  },
]

const skillCategories = [
  {
    category: 'ARTIFICIAL INTELLIGENCE & ML',
    description: 'Intelligent decision models, generative AI architectures & data evaluation',
    skills: [
      { name: 'Machine Learning', tag: 'Core' },
      { name: 'Artificial Intelligence', tag: 'Specialization' },
      { name: 'Generative AI', tag: 'LLMs & Agents' },
      { name: 'Data Analysis', tag: 'Analytics' },
    ],
  },
  {
    category: 'PROGRAMMING & LANGUAGES',
    description: 'Foundational languages for systems, algorithms, and AI prototyping',
    skills: [
      { name: 'Python', tag: 'Primary' },
      { name: 'TypeScript', tag: 'Frontend / Full-stack' },
      { name: 'JavaScript', tag: 'Web Technologies' },
      { name: 'C#', tag: 'Backend & Systems' },
    ],
  },
  {
    category: 'FULL-STACK, SYSTEMS & TOOLS',
    description: 'Modern reactive user interfaces, databases, and version control',
    skills: [
      { name: 'React', tag: 'Frontend Library' },
      { name: 'ASP.NET Core', tag: 'Backend Framework' },
      { name: 'PostgreSQL', tag: 'Relational Database' },
      { name: 'Git & GitHub', tag: 'Dev Tools & CI' },
    ],
  },
]

/* Licenses and Courses */
const coursesList = [
  {
    id: 'sml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford',
    year: '2024',
    credId: 'Credential #DL-SML-2024',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Algorithms'],
  },
  {
    id: 'dl-spec',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2024',
    credId: 'Credential #DL-SPEC-9842',
    tags: ['Neural Networks', 'CNN', 'Sequence Models', 'PyTorch'],
  },
  {
    id: 'genai-llm',
    title: 'Generative AI with Large Language Models (LLMs)',
    issuer: 'DeepLearning.AI & AWS',
    year: '2025',
    credId: 'Credential #AWS-GENAI-7721',
    tags: ['Generative AI', 'LLMs', 'Prompt Engineering', 'RAG'],
  },
  {
    id: 'py-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM (Coursera)',
    year: '2024',
    credId: 'Credential #IBM-PY-5541',
    tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
  },
  {
    id: 'fullstack-asp',
    title: 'Full-Stack Development with React & ASP.NET Core',
    issuer: 'Microsoft Learn',
    year: '2024',
    credId: 'Credential #MS-FSD-3180',
    tags: ['React', 'ASP.NET Core', 'C#', 'PostgreSQL'],
  },
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents & Intelligent Systems',
    issuer: 'Nexora AI Lab',
    year: '2026',
    credId: 'Credential #NX-AGENT-01',
    tags: ['AI Agents', 'Automation', 'Heuristic Decision-Making'],
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  /* Contact Form State */
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  /* Rotating Role Timer */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  /* Smooth Scrolling with Lenis */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  /* Active Section Scroll Tracker */
  useEffect(() => {
    const sections = ['home', 'about', 'photos', 'projects', 'experience', 'skills', 'courses', 'contact']
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Carousel Navigation Helpers */
  const scrollToProject = (id: string) => {
    const target = document.getElementById(`project-${id}`)
    if (target && carouselRef.current) {
      const targetLeft = target.offsetLeft - carouselRef.current.offsetLeft - 10
      carouselRef.current.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      })
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  /* Contact Form Submit Handler */
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !message) return

    const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent via Portfolio Contact Form`
    )

    window.location.href = `mailto:natharadhanapala@gmail.com?subject=${subject}&body=${body}`
    setFormSubmitted(true)
  }

  /* Fade-in variant */
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow-3" aria-hidden="true" />

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="nav-logo" aria-label="Nethuli Nathara Home">
          N<span>.</span>
        </a>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#photos"
            className={`nav-link ${activeSection === 'photos' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Photos
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#courses"
            className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO SECTION WITH IMG2.PNG & ROTATING TEXT */}
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <p className="hero-eyebrow">HI, I'M NETHULI NATHARA</p>

            <h1 className="hero-main-sentence">
              <span className="text-gradient">
                An AI Undergraduate passionate about building intelligent solutions.
              </span>
            </h1>

            {/* DYNAMIC ROTATING ROLE */}
            <div className="hero-role-wrapper">
              <span className="hero-role-intro">I am a</span>
              <span className="hero-role-badge">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingRoles[roleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="rotating-role-text"
                  >
                    {rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="hero-role-outro">
                creating AI-powered applications that solve real-world problems.
              </span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                Explore My Work <span>↗</span>
              </a>

              {/* DOWNLOAD CV BUTTON FOR RECRUITERS */}
              <a
                href="/Nethuli_Nathara_CV.pdf"
                download="Nethuli_Nathara_CV.pdf"
                className="button-cv"
                title="Download Nethuli Nathara's CV"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h14"
                  />
                </svg>
                Download CV
              </a>

              <a href="#about" className="button-secondary">
                About Me <span>↓</span>
              </a>
            </div>

            <div className="hero-meta">
              <span>ARTIFICIAL INTELLIGENCE</span>
              <span>•</span>
              <span>SOFTWARE ENGINEERING</span>
              <span>•</span>
              <span>CREATIVE TECHNOLOGY</span>
            </div>
          </motion.div>

          {/* HERO VISUAL WITH IMG2.PNG */}
          <div className="hero-visual" aria-hidden="true">
            <div className="tech-orbit orbit-outer" />
            <div className="tech-orbit orbit-middle" />
            <div className="tech-orbit orbit-inner" />

            <div className="orbit-node node-one" />
            <div className="orbit-node node-two" />
            <div className="orbit-node node-three" />

            {/* HERO PROFILE PHOTO USING IMG2.PNG ONLY */}
            <div className="hero-portrait-card">
              <img
                src={heroProfilePic}
                alt="Nethuli Nathara Hero"
                className="hero-portrait-img"
              />
            </div>

            <div className="floating-tech tech-one">
              <span>01</span> MACHINE LEARNING
            </div>

            <div className="floating-tech tech-two">
              <span>02</span> GENERATIVE AI
            </div>

            <div className="floating-tech tech-three">
              <span>03</span> SOFTWARE
            </div>

            <div className="visual-coordinate">6.9271° N / 79.8612° E</div>
          </div>

          <div className="scroll-hint">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </div>

          <span className="hero-index">PORTFOLIO / 2026</span>
        </section>

        {/* ABOUT SECTION WITH 2-COLUMN LAYOUT */}
        <section className="section about-section" id="about">
          <div className="section-label">
            <span>01</span> ABOUT ME
          </div>

          <div className="section-heading-row">
            <h2>
              Little About{' '}
              <span className="text-gradient">MySelf.</span>
            </h2>
          </div>

          <div className="about-main-grid">
            {/* ABOUT BIO PASSAGE */}
            <motion.div
              className="about-bio"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUpVariant}
            >
              <p className="about-paragraph">
                From a young age, I have been driven by curiosity, creativity,
                and a passion for using technology to solve meaningful problems.
                My journey began with exploring programming during my school
                years, where I discovered my interest in building solutions and
                continuously learning new skills.
              </p>

              <p className="about-paragraph">
                I am currently a third-year undergraduate pursuing a BSc (Hons) in
                Information Technology specializing in Artificial Intelligence at
                SLIIT. Through my academic journey and projects, I have explored
                Artificial Intelligence, Machine Learning, Generative AI, Natural
                Language Processing, and Software Engineering while developing
                practical technology-driven solutions.
              </p>

              <p className="about-paragraph">
                Beyond technical skills, I am passionate about innovation,
                teamwork, and leadership. Participating in hackathons, innovation
                challenges, and collaborative projects has strengthened my ability
                to transform ideas into impactful solutions, communicate
                effectively, and adapt to real-world challenges. I have also
                gained experience in organizing campaigns and coordinating
                activities, which has helped me develop responsibility,
                leadership, and execution skills.
              </p>

              <p className="about-paragraph">
                I aim to continue growing as an AI engineer by exploring emerging
                technologies and creating intelligent solutions that address
                real-world problems while making a positive impact on society.
              </p>

              <a href="#contact" className="text-link">
                Let's create something meaningful <span>↗</span>
              </a>
            </motion.div>

            {/* PROFILE PICTURE CARD IN ABOUT SECTION (RIGHT SIDE) */}
            <motion.div
              className="about-portrait-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUpVariant}
            >
              <div className="about-portrait-img-wrap">
                <img
                  src={aboutProfilePic}
                  alt="Nethuli Nathara Portfolio Portrait"
                  className="about-portrait-img"
                />
              </div>
              <h3 className="about-portrait-name">Nethuli Nathara</h3>
              <span className="about-portrait-role">AI Undergraduate</span>
              <span className="about-portrait-institution">SLIIT • BSc (Hons) IT (AI)</span>
            </motion.div>
          </div>
        </section>

        {/* PHOTOS SCRAPBOOK SECTION (CONNECTED TO "PHOTOS" TAB IN NAV) */}
        <section className="section photos-section" id="photos">
          <div className="section-label">
            <span>02</span> PHOTO SCRAPBOOK
          </div>

          <div className="section-heading-row">
            <h2>
              Memories &{' '}
              <span className="text-gradient">Milestones.</span>
            </h2>
          </div>

          <div className="scrapbook-grid">
            {scrapbookPhotos.map((photo, index) => (
              <div
                className={`scrapbook-card scrapbook-card-${index + 1}`}
                key={photo.id}
              >
                <div className="scrapbook-pin" aria-hidden="true" />
                <div className="scrapbook-img-wrap">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                  />
                </div>
                <div className="scrapbook-footer">
                  <span className="scrapbook-num">0{index + 1}</span>
                  <span className="scrapbook-caption">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="section-label">
            <span>03</span> SELECTED WORK
          </div>

          <div className="section-heading-row">
            <h2>
              Ideas into
              <br />
              <span className="text-gradient">real projects.</span>
            </h2>
          </div>

          {/* HORIZONTAL PROJECT NAVIGATION CHIPS */}
          <div className="project-navigation">
            <div className="project-navigation-label">EXPLORE PROJECTS</div>

            <div className="project-navigation-links">
              {projects.map((project) => (
                <button
                  type="button"
                  key={project.id}
                  onClick={() => scrollToProject(project.id)}
                  className="project-nav-link"
                >
                  <span>{project.number}</span>
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT CAROUSEL */}
          <div className="project-carousel-wrapper">
            <div className="project-carousel-heading">
              <span>PROJECT COLLECTION / 08</span>

              <div className="project-carousel-controls">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Scroll projects left"
                  onClick={() => scrollCarousel('left')}
                >
                  ←
                </button>

                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Scroll projects right"
                  onClick={() => scrollCarousel('right')}
                >
                  →
                </button>
              </div>
            </div>

            <div
              className="project-carousel"
              id="project-carousel"
              ref={carouselRef}
            >
              {projects.map((project) => (
                <article
                  className="project-slide"
                  id={`project-${project.id}`}
                  key={project.id}
                >
                  <div className="project-card-top">
                    <span>{project.number} / PROJECT</span>
                    <span className="project-arrow">↗</span>
                  </div>

                  {/* PROJECT MEDIA (CLICKABLE TO LIVE WEB IF AVAILABLE) */}
                  {project.image ? (
                    project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-media-area"
                        title={`Open live web demo of ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                          loading="lazy"
                        />
                        <div className="project-demo-overlay">
                          Live Demo ↗
                        </div>
                      </a>
                    ) : (
                      <div className="project-media-area">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                          loading="lazy"
                        />
                      </div>
                    )
                  ) : (
                    <div className="project-art">
                      <div className="project-art-glow" />
                      <span className="project-symbol">{project.symbol}</span>
                    </div>
                  )}

                  <div className="project-info">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="technology-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {/* CLEAR ACTION BUTTONS FOR GITHUB & DEMO */}
                    <div className="project-actions">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-git"
                        title={`View ${project.title} source code on GitHub`}
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        GitHub Repo
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn-demo"
                          title={`Launch live demo for ${project.title}`}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-card-footer">
                    <span>PORTFOLIO / 2026</span>
                    <span>{project.number} — 08</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-scroll-hint">
              <span>←</span>
              SCROLL HORIZONTALLY TO EXPLORE ALL PROJECTS
              <span>→</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCES & ACHIEVEMENTS SECTION */}
        <section className="section experience-section" id="experience">
          <div className="section-label">
            <span>04</span> EXPERIENCES & ACHIEVEMENTS
          </div>

          <div className="section-heading-row">
            <h2>
              Beyond the
              <br />
              <span className="text-gradient">classroom.</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '400px' }}>
              Competitions, collaborative projects, and challenges that help me
              grow as a problem solver and future AI engineer.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.number}
              >
                <div className="experience-number">{experience.number}</div>

                <div className="experience-main">
                  <span className="experience-event">{experience.event}</span>

                  <h3>{experience.title}</h3>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-result-card">
                  <div className="experience-result-preview">
                    <img
                      src={experience.image}
                      alt="Nexora AI Challenge Artwork"
                    />
                  </div>
                  <span>HIGHLIGHT</span>
                  <strong>{experience.result}</strong>
                  <small>{experience.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL EXPERTISE / SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="section-label">
            <span>05</span> TECHNICAL EXPERTISE
          </div>

          <div className="section-heading-row">
            <h2>
              My technology
              <br />
              <span className="text-gradient">toolkit.</span>
            </h2>
          </div>

          <div className="skills-category-grid">
            {skillCategories.map((group) => (
              <div className="skill-category-card" key={group.category}>
                <div className="skill-category-header">
                  <span className="skill-category-badge">DOMAIN</span>
                  <h3 className="skill-category-title">{group.category}</h3>
                  <p className="skill-category-desc">{group.description}</p>
                </div>

                <div className="skill-items-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item-row" key={skill.name}>
                      <span className="skill-item-name">{skill.name}</span>
                      <span className="skill-item-tag">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LICENSES AND COURSES SECTION */}
        <section className="section courses-section" id="courses">
          <div className="section-label">
            <span>06</span> CERTIFICATIONS & EDUCATION
          </div>

          <div className="section-heading-row">
            <h2>
              Licenses &{' '}
              <span className="text-gradient">Courses.</span>
            </h2>
          </div>

          <div className="courses-grid">
            {coursesList.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-card-top">
                  <span className="course-issuer">{course.issuer}</span>
                  <span className="course-year">{course.year}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-cred">
                  <span>✦</span> {course.credId}
                </div>
                <div className="course-tags">
                  {course.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION (INSPIRED BY UPLOADED REFERENCE DESIGN) */}
        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />

          <div className="section-label">
            <span>07</span> CONTACT
          </div>

          {/* MASSIVE SYNE EXTRABOLD HEADING AS REQUESTED */}
          <h2 className="contact-display-heading">
            Let's Get In Touch.
          </h2>

          <div className="contact-split-grid">
            {/* LEFT COLUMN: EMAIL, DETAILS & INTERACTIVE SOCIAL ICON BUTTONS */}
            <div className="contact-left-info">
              <div className="contact-email-block">
                <span className="contact-email-label">DIRECT EMAIL</span>
                <a
                  href="mailto:natharadhanapala@gmail.com"
                  className="contact-email-link"
                >
                  natharadhanapala@gmail.com
                </a>
              </div>

              <div className="contact-location-info">
                <p>Colombo, Sri Lanka</p>
                <p>6.9271° N / 79.8612° E</p>
              </div>

              <div className="contact-status-badge">
                <span className="status-dot" aria-hidden="true" />
                Available for AI Internships & Roles
              </div>

              {/* SOCIAL MEDIA ICON BUTTONS REDIRECTING TO RESPECTIVE WEBSITES */}
              <div>
                <span className="contact-email-label" style={{ display: 'block', marginBottom: '10px' }}>
                  CONNECT ON SOCIALS
                </span>
                <div className="contact-social-icons-row">
                  {/* INSTAGRAM ICON BUTTON */}
                  <a
                    href="https://www.instagram.com/nethuli06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon-btn"
                    title="Follow on Instagram"
                    aria-label="Instagram"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LINKEDIN ICON BUTTON */}
                  <a
                    href="https://www.linkedin.com/in/nethuli-dhanapala-b84b69385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon-btn"
                    title="Connect on LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* GITHUB ICON BUTTON */}
                  <a
                    href="https://github.com/nethuli-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon-btn"
                    title="Explore GitHub Repositories"
                    aria-label="GitHub"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: UNDERLINE INPUTS FORM (NAME, EMAIL, MESSAGE) */}
            <form className="contact-form-minimal" onSubmit={handleContactSubmit}>
              {/* NAME FIELDS */}
              <div className="form-group-block">
                <span className="form-label-title">Name (required)</span>
                <div className="form-name-row">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="form-underline-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="form-underline-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* EMAIL FIELD */}
              <div className="form-group-block">
                <span className="form-label-title">Email (required)</span>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="form-underline-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* MESSAGE FIELD */}
              <div className="form-group-block">
                <span className="form-label-title">Message (required)</span>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, ideas, or opportunity..."
                  className="form-underline-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="form-submit-btn">
                SUBMIT
              </button>

              {formSubmitted && (
                <div className="form-status-msg">
                  ✓ Your email client has been opened with your inquiry to{' '}
                  <strong>natharadhanapala@gmail.com</strong>.
                </div>
              )}
            </form>
          </div>

          <footer className="contact-footer">
            <span>© 2026 NETHULI NATHARA</span>
            <span>DESIGNED WITH CURIOSITY.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}

export default App
