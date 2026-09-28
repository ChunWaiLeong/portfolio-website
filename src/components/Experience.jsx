import experiences from "../data/experiences"

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2>Professional experience</h2>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <div className="experience-header">
              <div>
                <h3>{experience.title}</h3>
                <p className="card-subtitle">{experience.company}</p>
              </div>
              <p className="date-badge">{experience.dates}</p>
            </div>

            <ul className="feature-list">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
