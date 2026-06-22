function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div>
        <p className="eyebrow">Resume</p>
        <h2>Resume at a glance</h2>
        <p className="section-copy">
          A concise summary of my education, technical skills, and project
          experience is available as a downloadable PDF.
        </p>
      </div>

      <a className="button resume-button" href="/ChunWaiLeong_Resume.pdf" download>
        Download Resume
      </a>
    </section>
  )
}

export default Resume
