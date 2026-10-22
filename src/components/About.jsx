import SectionHeading from './SectionHeading'
import Icon from './Icon'

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading number="01" label="About" title="A little about me" />
      <div className="about-grid">
        <div className="about-main panel">
          <span className="card-kicker">THE BACKGROUND</span><h3>Learning by building.</h3>
          <p className="section-copy">I am a final-year Software Engineering student at Swinburne University with an interest in web development and software engineering. I have experience building academic projects using .NET, Vue.js, PHP, MySQL, C#, and React.</p>
        </div>
        <div className="about-focus panel"><Icon name="code" /><span className="card-kicker">DEVELOPMENT FOCUS</span><h3>From frontend<br /> to backend.</h3><p>Web development & software engineering</p></div>
        <div className="about-stack panel"><span className="card-kicker">BUILT WITH</span><p>.NET <span>/</span> React <span>/</span> Vue.js<br />PHP <span>/</span> MySQL <span>/</span> C#</p></div>
      </div>
    </section>
  )
}

export default About
