import SectionHeading from './SectionHeading'

const categories = [
  {
    title: 'Backend development', label: '01',
    skills: ['C#', 'ASP.NET Core MVC', 'ASP.NET Core Web API', 'Entity Framework Core', 'Python', 'Flask', 'PHP', 'Laravel', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Frontend development', label: '02',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js 3', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Databases', label: '03',
    skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Azure SQL', 'SQLAlchemy', 'Database Migrations'],
  },
  {
    title: 'Cloud & DevOps', label: '04',
    skills: ['AWS EC2', 'AWS RDS', 'AWS ECR', 'AWS S3', 'AWS IAM', 'AWS Systems Manager', 'AWS CloudWatch', 'Azure App Service', 'Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Vercel'],
  },
  {
    title: 'Testing & development tools', label: '05',
    skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Swagger / OpenAPI', 'Pytest', 'Playwright', 'xUnit', 'Jira', 'WiX Toolset'],
  },
  {
    title: 'Other technologies', label: '06',
    skills: ['Java', 'Kotlin', 'Android Development', 'Machine Learning', 'Scikit-learn', 'ESP32', 'IoT'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading number="02" label="Skills" title="Technologies I use">The tools behind the work.</SectionHeading>
      <div className="skills-grid">
        {categories.map((category) => <article className="skill-card panel" key={category.title}>
          <span className="card-kicker">{category.label}</span><h3>{category.title}</h3>
          <ul className="skills-list">{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </article>)}
      </div>
    </section>
  )
}

export default Skills
