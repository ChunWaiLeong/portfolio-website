import projects from '../data/projects'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

const projectTypeLabels = {
  personal: 'Personal Project',
  academic: 'Academic Project',
  client: 'Client Project',
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading number="03" label="Projects" title="Selected work">Ideas turned into working software.</SectionHeading>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card panel ${project.featured ? 'featured-project' : ''}`} key={project.title}>
            {project.image && <img className="project-image" src={project.image} alt={project.imageAlt || `${project.title} preview`} loading="lazy" />}
            <div className="project-topline"><span className="card-kicker">{project.featured ? 'Featured Project' : projectTypeLabels[project.type] || 'Project'}</span><span className="project-number">{String(index + 1).padStart(2, '0')}</span></div>
            <div className="project-body">
              <div className="project-summary">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} tech stack`}>
                  {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <div className="project-details">
                <p className="card-kicker">KEY FEATURES</p>
                <ul className="feature-list">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
            </div>
            <div className="project-actions">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                GitHub <Icon name="external" />
              </a>

              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                  Live Demo <Icon name="external" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
