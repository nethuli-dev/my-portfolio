import { useRef } from 'react'
import './App.css'


const projects = [
  {
    id: 'lifelink',
    number: '01',
    title: 'LifeLink',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'A full-stack platform focused on donor registration and eligibility management, with intelligent workflows and integrated application features.',
    technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'Python'],
    symbol: '✳',
  },
  {
    id: 'sahaaya',
    number: '02',
    title: 'Sahaaya',
    category: 'SOFTWARE DEVELOPMENT',
    description:
      'A software development project demonstrating the process of transforming an idea into a functional digital solution.',
    technologies: ['Update your technologies'],
    symbol: '◇',
  },
  {
    id: 'pacman-ai',
    number: '03',
    title: 'Pacman AI Assignment',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'An AI assignment exploring intelligent search and problem-solving strategies, including state representation, search algorithms, and heuristic-based decision-making.',
    technologies: ['Python', 'AI Search', 'Heuristics'],
    symbol: '◉',
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
  },
  {
    id: 'movie-rental',
    number: '07',
    title: 'Movie Rental System',
    category: 'SOFTWARE ENGINEERING',
    description:
      'A movie rental application project focused on developing a software solution for managing movie-related rental operations.',
    technologies: ['Update your technologies'],
    symbol: '▣',
  },
  {
    id: 'greenhouse',
    number: '08',
    title: 'Greenhouse Project',
    category: 'TECHNOLOGY PROJECT',
    description:
      'A project exploring technology-based solutions in a greenhouse environment. Add your specific features and implementation details here.',
    technologies: ['Update your technologies'],
    symbol: '✿',
  },
  
  
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
  },
  
]

const skills = [
  { name: 'Python', category: 'PROGRAMMING' },
  { name: 'Machine Learning', category: 'ARTIFICIAL INTELLIGENCE' },
  { name: 'Artificial Intelligence', category: 'ARTIFICIAL INTELLIGENCE' },
  { name: 'Generative AI', category: 'ARTIFICIAL INTELLIGENCE' },
  { name: 'React', category: 'FRONTEND' },
  { name: 'TypeScript', category: 'FRONTEND' },
  { name: 'JavaScript', category: 'PROGRAMMING' },
  { name: 'C#', category: 'PROGRAMMING' },
  { name: 'ASP.NET Core', category: 'BACKEND' },
  { name: 'PostgreSQL', category: 'DATABASES' },
  { name: 'Git & GitHub', category: 'DEVELOPMENT TOOLS' },
  { name: 'Data Analysis', category: 'DATA' },
]

function App() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          N<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's Connect <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-grid"></div>

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            AI UNDERGRADUATE
            <span className="availability-divider">/</span>
            SRI LANKA
          </div>

          <p className="hero-eyebrow">
            HELLO, I'M NETHULI NATHARA
          </p>

          <h1>
            Building
            <br />
            <span className="text-outline">Intelligent</span>
            <br />
            <span className="text-gradient">Possibilities.</span>
          </h1>

          <p className="hero-description">
            Exploring Artificial Intelligence, Machine Learning,
            and software engineering to transform creative ideas
            into meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#about" className="button-secondary">
              Discover More <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>ARTIFICIAL INTELLIGENCE</span>
            <span>SOFTWARE ENGINEERING</span>
            <span>CREATIVE TECHNOLOGY</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="tech-orbit orbit-outer"></div>
          <div className="tech-orbit orbit-middle"></div>
          <div className="tech-orbit orbit-inner"></div>

          <div className="orbit-node node-one"></div>
          <div className="orbit-node node-two"></div>
          <div className="orbit-node node-three"></div>

          <div className="core-glow">
            <div className="core-inner">
              <span className="core-symbol">N.</span>
              <span className="core-caption">AI / TECH</span>
            </div>
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

          <div className="visual-coordinate">
            6.9271° N / 79.8612° E
          </div>
        </div>

        <div className="scroll-hint">
          <span className="scroll-line"></span>
          SCROLL TO EXPLORE
        </div>

        <span className="hero-index">PORTFOLIO / 2026</span>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-label">
          <span>01</span> ABOUT ME
        </div>

        <div className="about-layout">
          <div className="about-heading">
            <h2>
              Curious by nature.
              <br />
              <span className="text-gradient">Driven by technology.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm an AI undergraduate passionate about exploring
              how intelligent technologies can solve real-world
              problems and create meaningful experiences.
            </p>

            <p className="about-body">
              My interests include Artificial Intelligence,
              Machine Learning, Generative AI, and full-stack
              development. I enjoy experimenting with new ideas,
              building projects, collaborating with others, and
              continuously developing my technical skills.
            </p>

            <a href="#contact" className="text-link">
              Let's create something meaningful <span>↗</span>
            </a>
          </div>
        </div>

        <div className="about-bottom">
          <div className="about-fact">
            <span className="fact-symbol">AI</span>
            <span className="fact-label">MY FIELD OF STUDY</span>
          </div>

          <div className="about-fact">
            <span className="fact-symbol">∞</span>
            <span className="fact-label">ALWAYS LEARNING</span>
          </div>

          <div className="about-fact">
            <span className="fact-symbol">01</span>
            <span className="fact-label">IDEA AT A TIME</span>
          </div>
        </div>
      </section>

     
{/* PROJECTS */}
<section className="section projects-section" id="projects">
  <div className="section-label">
    <span>02</span> SELECTED WORK
  </div>

  <div className="section-heading-row">
    <h2>
      Ideas into
      <br />
      <span className="text-gradient">real projects.</span>
    </h2>

    <p>
      Explore my development journey through artificial intelligence,
      software engineering, academic assignments, and creative
      technology projects.
    </p>
  </div>

  {/* HORIZONTAL PROJECT NAVIGATION */}
  <div className="project-navigation">
    <div className="project-navigation-label">
      EXPLORE PROJECTS
    </div>

    <div className="project-navigation-links">
      {projects.map((project) => (
        <a
          key={project.id}
          href={`#project-${project.id}`}
          className="project-nav-link"
        >
          <span>{project.number}</span>
          {project.title}
        </a>
      ))}
    </div>
  </div>

  {/* PROJECT CAROUSEL */}
  <div className="project-carousel-wrapper">
    <div className="project-carousel-heading">
      <span>PROJECT COLLECTION / 07</span>

      <div className="project-carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label="Scroll projects left"
          onClick={() => {
            document
              .getElementById('project-carousel')
              ?.scrollBy({
                left: -400,
                behavior: 'smooth',
              })
          }}
        >
          ←
        </button>

        <button
          type="button"
          className="carousel-arrow"
          aria-label="Scroll projects right"
          onClick={() => {
            document
              .getElementById('project-carousel')
              ?.scrollBy({
                left: 400,
                behavior: 'smooth',
              })
          }}
        >
          →
        </button>
      </div>
    </div>

    <div
      className="project-carousel"
      id="project-carousel"
    >
      {projects.map((project) => (
        <article
          className="project-slide"
          id={`project-${project.id}`}
          key={project.id}
        >
          <div className="project-card-top">
            <span>
              {project.number} / PROJECT
            </span>

            <span className="project-arrow">↗</span>
          </div>

          <div className="project-art">
            <div className="project-art-glow"></div>

            <span className="project-symbol">
              {project.symbol}
            </span>

            <span className="project-art-caption">
              DIGITAL EXPERIMENT / {project.number}
            </span>
          </div>

          <div className="project-info">
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card-footer">
            <span>PORTFOLIO / 2026</span>
            <span>{project.number} — 07</span>
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

      {/* EXPERIENCES */}
      <section
        className="section experience-section"
        id="experience"
      >
        <div className="section-label">
          <span>03</span> EXPERIENCES & ACHIEVEMENTS
        </div>

        <div className="section-heading-row">
          <h2>
            Beyond the
            <br />
            <span className="text-gradient">classroom.</span>
          </h2>

          <p>
            Competitions, collaborative projects, and challenges
            that help me grow as a problem solver and future
            AI engineer.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >
              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-main">
                <span className="experience-event">
                  {experience.event}
                </span>

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

              <div className="experience-result">
                <span>HIGHLIGHT</span>
                <strong>{experience.result}</strong>
                <small>{experience.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-label">
          <span>04</span> TECHNICAL EXPERTISE
        </div>

        <div className="section-heading-row">
          <h2>
            My technology
            <br />
            <span className="text-gradient">toolkit.</span>
          </h2>

          <p>
            Languages, frameworks, and technologies I work with
            and continue to explore.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="skill-information">
                <strong>{skill.name}</strong>
                <span>{skill.category}</span>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-grid"></div>

        <div className="section-label">
          <span>05</span> CONTACT
        </div>

        <p className="contact-eyebrow">
          HAVE A PROJECT OR AN IDEA?
        </p>

        <h2>
          Let's build
          <br />
          <span className="text-gradient">what's next.</span>
        </h2>

        <p className="contact-description">
          I'm always interested in connecting with people,
          exploring opportunities, and discussing technology.
          Let's start a conversation.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="button-primary contact-button"
        >
          Get In Touch <span>↗</span>
        </a>

        <div className="contact-footer">
          <span>© 2026 NETHULI NATHARA</span>
          <span>DESIGNED WITH CURIOSITY.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </section>
    </main>
  )
}

export default App
