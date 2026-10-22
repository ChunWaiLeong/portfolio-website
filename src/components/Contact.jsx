import Icon from './Icon'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="eyebrow"><span>07 /</span> Contact</p>
      <h2>Let&apos;s work together</h2>
      <p className="section-copy">
        I am open to graduate software engineer, software developer, and related
        opportunities. I&apos;d be happy to connect.
      </p>
      <a className="button" href="mailto:leongchunwai311@gmail.com">
        Email Me <Icon name="mail" />
      </a>
      <a className="contact-email" href="mailto:leongchunwai311@gmail.com">leongchunwai311@gmail.com</a>
      <div className="contact-socials">
        <a href="https://github.com/ChunWaiLeong" target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" /></a>
        <a href="https://www.linkedin.com/in/chunwaileong/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a>
      </div>
    </section>
  )
}

export default Contact
