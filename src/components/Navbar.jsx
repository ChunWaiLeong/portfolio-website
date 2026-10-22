import { useEffect, useState } from 'react'

const destinations = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Resume', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) setActive(visible[0].target.id)
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 })
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#hero" aria-label="Chun Wai Leong — portfolio home" onClick={() => setOpen(false)}>
          <span className="brand-symbol" aria-hidden="true">w<span>.</span></span><span>Wesley Leong</span>
        </a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}>
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '+'}</span>
        </button>
        <nav id="main-navigation" className={open ? 'is-open' : ''} aria-label="Main navigation" onKeyDown={(event) => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle').focus() } }}>
          {destinations.map((label) => <a key={label} href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
