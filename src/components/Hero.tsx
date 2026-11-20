import { motion, AnimatePresence, type Variants } from 'framer-motion'
import heroProfilePic from '../assets/images/img2.png'

interface HeroProps {
  roleIndex: number
  rotatingRoles: string[]
  fadeUpVariant: Variants
}

export function Hero({ roleIndex, rotatingRoles, fadeUpVariant }: HeroProps) {
  return (
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

        {/* EQUALLY SIZED ACTION BUTTONS */}
        <div className="hero-buttons">
          <a href="#projects" className="button-primary">
            Explore My Work <span>↗</span>
          </a>

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
  )
}

export default Hero
