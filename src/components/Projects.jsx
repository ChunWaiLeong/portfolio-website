import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Academic Projects</p>
      <h2>Featured projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <div className="project-summary">
              <p>{project.description}</p>

              <ul className="tag-list" aria-label={`${project.title} tech stack`}>
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>

            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="project-actions">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
