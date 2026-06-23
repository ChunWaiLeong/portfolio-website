const experiences = [
  {
    title: 'Backend Web Developer Intern',
    company: 'Industry Placement',
    dates: 'Sept 2023 - Dec 2023',
    responsibilities: [
      'Developed and maintained backend web application functionality.',
      'Worked with databases and server-side development.',
      'Collaborated with developers in a professional software environment.',
    ],
  },
  {
    title: 'Retail Team Member',
    company: 'Australia Post',
    dates: 'Nov 2024 - Present',
    responsibilities: [
      'Assisted customers with postal and retail services.',
      'Handled transactions and daily store operations.',
      'Developed communication, teamwork, and customer service skills.',
    ],
  },
]

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
