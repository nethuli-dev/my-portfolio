import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategoriesData, type SkillCategory } from '../data/skills'

export function SkillsMap() {
  const [activeCategory, setActiveCategory] = useState<string>('languages')

  const currentCategory = skillCategoriesData.find((cat) => cat.id === activeCategory) || skillCategoriesData[0]

  return (
    <div className="skills-modern-wrapper">
      {/* CATEGORY BUTTONS / TABS */}
      <div
        className="skills-tabs-container"
        role="tablist"
        aria-label="Skill Categories"
      >
        {skillCategoriesData.map((category: SkillCategory) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${category.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveCategory(category.id)}
              className={`skills-tab-btn ${isActive ? 'active' : ''}`}
            >
              <span className="skills-tab-icon">{category.icon}</span>
              <span className="skills-tab-label">{category.label}</span>
            </button>
          )
        })}
      </div>

      {/* SKILLS DISPLAY GRID WITH FRAMER MOTION ANIMATION */}
      <div
        id={`tabpanel-${currentCategory.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentCategory.id}`}
        className="skills-grid-wrapper"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="skills-cards-grid"
          >
            {currentCategory.skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.035,
                    ease: 'easeOut',
                  }}
                  className="skill-card-modern"
                >
                  <div
                    className="skill-icon-wrap"
                    style={{ color: skill.color }}
                  >
                    <IconComponent className="skill-tech-icon" />
                  </div>
                  <span className="skill-name-text">{skill.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SkillsMap
