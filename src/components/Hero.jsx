const linkedInUrl = 'https://www.linkedin.com/in/chunwaileong/'
const GitHubUrl = 'https://github.com/ChunWaiLeong'

function Hero() {
  return (
    <section id="hero" className="section hero-section">
      <p className="eyebrow">Final-Year Software Engineering Student</p>
      <h1>Hi, I&apos;m Chun Wai Leong (Wesley)</h1>
      <p className="section-copy">
        Seeking Graduate Software Engineer opportunities.
      </p>
      <div className="hero-actions">
        <a className="button" href="#projects">
          View Projects
        </a>
        <a className="button secondary-button" href="/ChunWaiLeong_Resume.pdf" download>
          Resume
        </a>
        <a
          className="button secondary-button"
          href={GitHubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button secondary-button"
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Hero
