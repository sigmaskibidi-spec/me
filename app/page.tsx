'use client'

import { useEffect, useState } from 'react'

const projects = [
  { number: '01', title: 'Ritual Coffee', type: 'Brand system', color: 'coral', mark: 'R' },
  { number: '02', title: 'Forma House', type: 'Digital experience', color: 'blue', mark: 'F' },
  { number: '03', title: 'Noma Objects', type: 'Art direction', color: 'lime', mark: 'N' },
]

const services = [
  ['01', 'Identity', 'Strategy, naming, visual systems'],
  ['02', 'Digital', 'Websites, products, interactions'],
  ['03', 'Campaigns', 'Creative direction, content, launch'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('in-view')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <nav className="nav">
        <button className="logo" onClick={() => goTo('top')} aria-label="Back to top">
          NORTH<span>®</span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => goTo('work')}>Work</button>
          <button onClick={() => goTo('studio')}>Studio</button>
          <button onClick={() => goTo('contact')}>Contact</button>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span />Independent creative studio · 2026</div>
        <h1>
          <span className="line"><span>Ideas with</span></span>
          <span className="line italic"><span>direction.</span></span>
        </h1>
        <div className="hero-bottom">
          <p>We build bold identities and digital experiences for people shaping what comes next.</p>
          <button className="round-button" onClick={() => goTo('work')} aria-label="See selected work">
            <svg viewBox="0 0 24 24"><path d="M12 4v16M5 13l7 7 7-7" /></svg>
          </button>
        </div>
        <div className="shape shape-one" /><div className="shape shape-two" />
      </section>

      <section className="ticker" aria-label="Our disciplines">
        <div className="ticker-track">
          {[0, 1].map(n => <div className="ticker-set" key={n}><span>Strategy</span><i>✦</i><span>Identity</span><i>✦</i><span>Digital</span><i>✦</i><span>Campaigns</span><i>✦</i></div>)}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading reveal">
          <p>Selected work</p><p>2024—2026</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <article className="project reveal" key={project.title} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`project-image ${project.color}`}>
                <span className="project-mark">{project.mark}</span>
                <div className="project-stamp">NORTH<br />STUDIO</div>
                <button className="project-arrow" aria-label={`View ${project.title}`}>↗</button>
              </div>
              <div className="project-info">
                <h2>{project.title}</h2><p>{project.type}</p><span>{project.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" id="studio">
        <p className="eyebrow reveal">Small by design. Big in ambition.</p>
        <h2 className="reveal">We turn <em>curiosity</em> into clear, memorable work that moves at the speed of culture.</h2>
        <div className="statement-meta reveal">
          <p>Based everywhere<br />Working worldwide</p>
          <p>Available for select<br />projects in 2026</p>
        </div>
      </section>

      <section className="services section">
        <div className="section-heading reveal"><p>What we do</p><p>Capabilities</p></div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <div className="service reveal" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top reveal">
          <p>Have a project in mind?</p>
          <a href="mailto:hello@north.studio">Let’s make<br /><em>something good.</em> ↗</a>
        </div>
        <div className="footer-bottom">
          <div className="logo footer-logo">NORTH<span>®</span></div>
          <p>Instagram &nbsp; LinkedIn &nbsp; Behance</p>
          <p>© 2026 North Studio</p>
        </div>
      </footer>
    </main>
  )
}
