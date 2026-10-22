import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading number="05" label="Education" title="Academic background" />
      <div className="education-grid">

      <div className="timeline-card">
        <div className="timeline-marker" aria-hidden="true"></div>
        <div>
          <h3>Bachelor of Engineering (Software)</h3>
          <p className="card-subtitle">Swinburne University of Technology</p>
          <p>Expecting to graduate in June 2027</p>
        </div>
      </div>

      <div className="timeline-card">
        <div className="timeline-marker" aria-hidden="true"></div>
        <div>
          <h3>Diploma of Information & Technology (Software)</h3>
          <p className="card-subtitle">Asia Pacific University</p>
          <p>Graduated on 2023</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Education
