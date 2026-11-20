import { motion } from 'framer-motion'
import groupPhotoImg from '../assets/experience/group-photo.jpeg'
import ifsWorkshopImg from '../assets/experience/IFS-workshop.jpeg'
import finalPitchImg from '../assets/experience/final-pitch.jpeg'
import awardPhotoImg from '../assets/experience/award-photo.jpeg'

export function ExperienceShowcase() {
  const photos = [
    { src: groupPhotoImg, alt: 'Team Nexora AI' },
    { src: ifsWorkshopImg, alt: 'IFS AI Workshop' },
    { src: finalPitchImg, alt: 'Final Presentation to Judges' },
    { src: awardPhotoImg, alt: 'Receiving Merit Award Recognition' },
  ]

  const badges = [
    { label: '🏆 Merit Award (4th Place)', color: 'badge-award' },
    { label: '⭐ Top 10 Finalist', color: 'badge-finalist' },
    { label: '🤖 Team Nexora AI', color: 'badge-team' },
    { label: '📅 2026', color: 'badge-year' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="exp-minimal-card"
    >
      {/* LEFT SIDE: 2x2 PHOTO GRID (MATCHING REFERENCE DESIGN) */}
      <div className="exp-minimal-grid-left">
        <div className="exp-photo-collage-2x2">
          {photos.map((photo, index) => (
            <div className="exp-photo-item" key={index}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="exp-photo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: BADGES, TITLES, STORY & TECH */}
      <div className="exp-minimal-content-right">
        {/* ROW OF PILL BADGES */}
        <div className="exp-minimal-pill-row">
          {badges.map((b) => (
            <span key={b.label} className={`exp-minimal-pill ${b.color}`}>
              {b.label}
            </span>
          ))}
        </div>

        {/* TITLES */}
        <div className="exp-minimal-header">
          <h3 className="exp-minimal-title">
            AI Innovation Challenge Finalist — Team Nexora AI
          </h3>
          <p className="exp-minimal-subtitle">
            SLIIT CodeFest 2026 AI Innovation Challenge | Powered by IFS
          </p>
        </div>

        {/* NARRATIVE BODY PASSAGE */}
        <p className="exp-minimal-body">
          Developed AI-powered solutions as part of Team Nexora AI, including Nexora AI, an evidence-based Retrieval-Augmented Generation (RAG) document investigation assistant that connects information across multiple sources with citation-backed answers. Advanced to the final round and built an AI Dispatch Desk Agent during the 7-hour hackathon, focusing on intelligent task prioritization, technician matching, and operational optimization. Collaborated on AI system design, evaluation, and final presentation to industry judges.
        </p>

        {/* TECH STACK LINE */}
        <div className="exp-minimal-tech-box">
          <span className="exp-minimal-tech-label">Tech:</span>
          <span className="exp-minimal-tech-text">
            Python · RAG · LLMs · AI Agents · Semantic Search · Embeddings · Prompt Engineering · Git
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceShowcase
