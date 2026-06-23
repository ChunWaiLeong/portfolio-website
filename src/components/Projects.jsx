import projects from '../data/projects'

function getSecondaryAction(project) {
  if (project.demoUrl) {
    return {
      label: 'Live Demo',
      url: project.demoUrl,
    }
  }

  if (project.screenshotsUrl) {
    return {
      label: 'Project Screenshots',
      url: project.screenshotsUrl,
    }
  }

  return null
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Academic Projects</p>
      <h2>Selected work</h2>
      <div className="project-grid">
        {projects.map((project) => {
          const secondaryAction = getSecondaryAction(project)

          return (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="tag-list" aria-label={`${project.title} tech stack`}>
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {secondaryAction && (
                  <a
                    className="secondary-project-action"
                    href={secondaryAction.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryAction.label}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
