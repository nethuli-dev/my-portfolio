import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  issuedDate: string
  credUrl: string
  category: string
  tags: string[]
}

const certificationsList: CertificationItem[] = [
  {
    id: 'ai-agentic',
    title: 'AI Agentic Design Patterns with AutoGen',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Nov 2025',
    credUrl: 'https://www.deeplearning.ai/',
    category: 'AI AGENTS',
    tags: ['AutoGen', 'Multi-Agent Systems', 'LLMs'],
  },
  {
    id: 'ai-agents-langgraph',
    title: 'AI Agents in LangGraph',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Oct 2025',
    credUrl: 'https://www.deeplearning.ai/',
    category: 'AGENTIC FRAMEWORKS',
    tags: ['LangGraph', 'AI Agents', 'RAG'],
  },
  {
    id: 'genai-llm',
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI & AWS',
    issuedDate: 'Sep 2025',
    credUrl: 'https://www.coursera.org/learn/generative-ai-with-llms',
    category: 'GENERATIVE AI',
    tags: ['LLMs', 'Prompt Engineering', 'Fine-Tuning'],
  },
  {
    id: 'prompt-engineering',
    title: 'Pair Programming with a Large Language Model',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Aug 2025',
    credUrl: 'https://www.deeplearning.ai/',
    category: 'DEVELOPER AI',
    tags: ['Prompt Engineering', 'Code Gen', 'Python'],
  },
  {
    id: 'ml-spec',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    issuedDate: 'Jun 2025',
    credUrl: 'https://www.coursera.org/specializations/machine-learning-introduction',
    category: 'SPECIALIZATION',
    tags: ['Supervised ML', 'Neural Networks', 'Decision Trees'],
  },
  {
    id: 'sml',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    issuedDate: 'Apr 2025',
    credUrl: 'https://www.coursera.org/learn/machine-learning',
    category: 'MACHINE LEARNING',
    tags: ['Regression', 'Classification', 'Scikit-Learn'],
  },
  {
    id: 'adv-ml',
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford Online',
    issuedDate: 'Apr 2025',
    credUrl: 'https://www.coursera.org/learn/advanced-learning-algorithms',
    category: 'DEEP LEARNING',
    tags: ['Neural Networks', 'TensorFlow', 'Trees'],
  },
  {
    id: 'unsupervised-ml',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford Online',
    issuedDate: 'May 2025',
    credUrl: 'https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning',
    category: 'REINFORCEMENT LEARNING',
    tags: ['Clustering', 'Recommenders', 'RL'],
  },
  {
    id: 'py-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM via Coursera',
    issuedDate: 'Feb 2025',
    credUrl: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
    category: 'DATA SCIENCE',
    tags: ['Python', 'Pandas', 'NumPy'],
  },
  {
    id: 'fullstack-asp',
    title: 'Full-Stack Development with React & ASP.NET Core',
    issuer: 'Microsoft Learn',
    issuedDate: 'Dec 2024',
    credUrl: 'https://learn.microsoft.com/',
    category: 'FULL-STACK',
    tags: ['React', 'ASP.NET Core', 'PostgreSQL'],
  },
]

// Duplicate list to achieve continuous seamless loop
const duplicatedList = [...certificationsList, ...certificationsList]

export function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [halfWidth, setHalfWidth] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isManualMoving, setIsManualMoving] = useState<boolean>(false)

  const rawX = useMotionValue(0)
  const smoothX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 })

  // Measure half-width for seamless infinite scroll
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setHalfWidth(trackRef.current.scrollWidth / 2)
      }
    }
    measure()
    const timer = setTimeout(measure, 300)
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(timer)
    }
  }, [])

  // Continuous auto-scroll loop
  useEffect(() => {
    if (halfWidth === 0 || isManualMoving) return

    let animationFrameId: number
    const step = () => {
      const speed = isHovered ? 0.25 : 1.4
      const nextPos = rawX.get() - speed

      if (Math.abs(nextPos) >= halfWidth) {
        rawX.jump(0)
      } else {
        rawX.set(nextPos)
      }

      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [halfWidth, isHovered, isManualMoving, rawX])

  // Prev / Next manual controls
  const handleScroll = (direction: 'prev' | 'next') => {
    if (halfWidth === 0) return
    setIsManualMoving(true)
    const cardOffset = 340
    let target = rawX.get() + (direction === 'next' ? -cardOffset : cardOffset)

    if (target > 0) {
      target = -halfWidth + cardOffset
    } else if (Math.abs(target) >= halfWidth) {
      target = 0
    }

    animate(rawX, target, {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      onComplete: () => {
        setTimeout(() => setIsManualMoving(false), 1200)
      },
    })
  }

  return (
    <section
      ref={containerRef}
      id="courses"
      className="certifications-sector w-full font-sans py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative w-full">
        {/* TOP ROW: SYSTEM BADGES PILL + HEADING + PREV/NEXT BUTTONS */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 relative w-full z-20 flex-shrink-0">
          <div className="relative max-w-xl">
            {/* BADGE PILL LIKE TARGET SITE */}
            <div className="cert-badge-pill inline-block border rounded-full px-4 py-1.5 text-xs font-bold mb-4 shadow-sm">
              System Badges
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
              Professional Credentials
              {/* CURVED SVG UNDERLINE IN GOLDEN HOUR */}
              <svg
                className="absolute -bottom-2 left-0 w-44 h-2 text-[#FFC107]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </h2>

            <p className="mt-4 text-gray-500 text-sm md:text-base font-medium max-w-md">
              Verified certifications, specializations, and completed licenses in
              AI, Agentic architectures, deep learning, and software systems.
            </p>
          </div>

          {/* CONTROLS LIKE TARGET SITE */}
          <div className="flex items-center gap-3 mb-1">
            <button
              type="button"
              onClick={() => handleScroll('prev')}
              className="cert-nav-btn p-4 rounded-full border shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Credentials Left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('next')}
              className="cert-nav-btn p-4 rounded-full border shadow-sm transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll Credentials Right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* OVERHEAD WAVY DASHED LINE LIKE TARGET SITE */}
        <div
          className="relative w-full py-8 overflow-visible cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            className="absolute top-[36px] left-0 w-full h-4 pointer-events-none z-0 hidden md:block"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M -50,8 Q 200,16 450,4 Q 700,-4 950,8 Q 1200,16 1450,4 Q 1700,-4 1950,8 Q 2200,16 2450,4 Q 2700,-4 2950,8 Q 3200,16 3450,4 Q 3700,-4 3950,8 Q 4200,16 4450,4 Q 4700,-4 4950,8 Q 5200,16 5450,4 Q 5700,-4 5950,8 L 20000,8"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 8"
              style={{ x: smoothX }}
            />
          </svg>

          {/* SCROLLING TRACK */}
          <motion.div
            ref={trackRef}
            style={{ x: smoothX }}
            className="flex gap-6 w-max pl-2 select-none"
          >
            {duplicatedList.map((course, index) => {
              const num = (index % certificationsList.length) + 1
              const serial = num < 10 ? `0${num}` : `${num}`

              return (
                <div
                  key={`${course.id}-${index}`}
                  className="group w-[275px] sm:w-[310px] h-[230px] flex-shrink-0 [perspective:1000px]"
                >
                  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* =========================================
                        FRONT FACE OF 3D BADGE
                    ========================================== */}
                    <div className="cert-card-front absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2rem] p-1.5 flex flex-col items-center transition-all duration-500 shadow-sm hover:shadow-[0_20px_45px_rgba(255,193,7,0.18)]">
                      {/* TOP METALLIC HOLE-PUNCH PIN */}
                      <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] absolute top-3 border border-gray-300 z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full opacity-20" />
                      </div>

                      {/* INNER FRONT CARD */}
                      <div className="cert-card-inner w-full h-full rounded-[1.4rem] mt-6 p-5 flex flex-col justify-between transition-colors duration-500">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#b8860b]">
                              {course.category}
                            </span>
                            <span className="text-xs font-bold font-serif italic text-gray-400">
                              {serial}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight mb-1 leading-snug line-clamp-2">
                            {course.title}
                          </h3>
                        </div>

                        <div className="border-t border-gray-200/60 pt-3 mt-3 flex justify-between items-end">
                          <div>
                            <p className="text-gray-400 text-[9px] font-bold tracking-tight uppercase">
                              Issued System Node
                            </p>
                            <p className="text-gray-700 text-xs font-semibold truncate max-w-[170px]">
                              {course.issuer}
                            </p>
                          </div>
                          <span className="text-[10px] text-gray-400 font-mono font-semibold">
                            {course.issuedDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =========================================
                        BACK FACE OF 3D BADGE (FLIPPED SECURED NODE)
                    ========================================== */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 via-[#1A1A1A] to-black border border-gray-800 rounded-[2rem] p-5 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.4)] text-white">
                      {/* TOP BADGE */}
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                          {/* SHIELD CHECK ICON IN GOLDEN HOUR */}
                          <svg
                            className="w-4 h-4 text-[#FFC107]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-gray-400 font-bold uppercase">
                          Secured Node
                        </span>
                      </div>

                      {/* CENTER VERIFICATION DETAILS */}
                      <div className="my-auto text-center px-1">
                        <p className="text-[9px] text-[#FFC107] font-mono mb-1 uppercase tracking-wider">
                          Verification Object
                        </p>
                        <h4 className="text-xs text-white font-semibold line-clamp-2 mb-3">
                          {course.title}
                        </h4>

                        <a
                          href={course.credUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1A1A1A] px-4 py-2 rounded-xl text-xs font-extrabold hover:bg-amber-400 transition-colors duration-300 shadow-md shadow-amber-900/30 select-none cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Credential</span>
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* BOTTOM VERIFIED STATUS */}
                      <div className="flex justify-between items-center text-[9px] font-mono text-gray-400 border-t border-gray-800 pt-2">
                        <span>SYS ID: #{serial}</span>
                        <span className="text-[#FFC107] font-bold flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse" />
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default CertificationsSection
