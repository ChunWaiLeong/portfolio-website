import Icon from './Icon'

function Hero() {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <p className="availability"><span aria-hidden="true" /> Seeking Software Engineer internship/placement opportunities</p>
        <p className="hero-intro">Hi, I&apos;m Wesley <span>— Chun Wai Leong</span></p>
        <h1>Thoughtful code.<br /><span>Practical solutions.</span></h1>
        <p className="hero-description">Final-year Software Engineering student focused on full-stack development. Building web applications from the interface to the database.</p>
        <div className="hero-actions">
          <a className="button" href="#projects">View Projects <Icon /></a>
          <a className="button secondary-button" href="/ChunWaiLeong_Resume.pdf" download>Resume <Icon name="download" /></a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/ChunWaiLeong" target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" /></a>
          <a href="https://www.linkedin.com/in/chunwaileong/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-cross art-cross-one">+</div><div className="art-cross art-cross-two">+</div>
        <div className="art-orbit"><div className="art-core"><Icon name="code" /></div></div>
        <span className="art-label">INTERFACE / LOGIC / DATA</span>
      </div>
      <div className="hero-footnote"><span>SOFTWARE ENGINEERING & FULL-STACK DEVELOPMENT</span><a href="#about">Get to know me <span aria-hidden="true">↓</span></a></div>
    </section>
  )
}

export default Hero
