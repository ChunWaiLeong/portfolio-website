function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#hero" aria-label="Portfolio home">
        Chun Wai Leong
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
