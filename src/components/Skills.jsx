const skills = [
  'C#',
  'ASP.NET Core MVC',
  'Entity Framework Core',
  'Vue.js',
  'PHP',
  'MySQL',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Git',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">Skills</p>
      <h2>Technologies I use</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
