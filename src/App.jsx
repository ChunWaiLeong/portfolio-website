import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <footer className="site-footer"><span>Wesley <span className="footer-dot">/</span> Chun Wai Leong</span><a href="#hero">Back to top ↑</a></footer>
    </>
  )
}

export default App
