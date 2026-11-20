import type { Project } from '../data/projects'

interface ProjectStoryProps {
  project: Project
  onClose?: () => void
}

export function ProjectStory({ project, onClose }: ProjectStoryProps) {
  return (
    <div className="project-story-card">
      <div className="project-story-header">
        <span className="project-story-num">{project.number}</span>
        <h4 className="project-story-title">{project.title}</h4>
        {onClose && (
          <button
            type="button"
            className="project-story-close"
            onClick={onClose}
            aria-label="Close story"
          >
            ✕
          </button>
        )}
      </div>

      <p className="project-story-desc">{project.description}</p>

      <div className="project-story-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-story-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-story-links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-story-btn"
        >
          GitHub ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-story-btn demo"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectStory
