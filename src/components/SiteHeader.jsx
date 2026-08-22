import { useEffect, useState } from 'react'
import { BookOpen, Heart, Linkedin, Menu, Phone, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const linkedIn = 'https://www.linkedin.com/in/kalley-coleman/'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Kalley Coleman — home">
        <span className="brand-mark"><Heart size={21} fill="currentColor" /></span>
        <span>Kalley Coleman</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link className="icon-link" to="/work" aria-label="View my work" data-tip="Work">
          <BookOpen size={21} />
        </Link>
        <a className="icon-link" href="/#contact" aria-label="Contact Kalley" data-tip="Contact">
          <Phone size={21} />
        </a>
        <a
          className="icon-link"
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
          aria-label="Kalley Coleman on LinkedIn"
          data-tip="LinkedIn"
        >
          <Linkedin size={21} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/work" onClick={() => setOpen(false)}>Selected work</Link>
          <Link to="/about/work" onClick={() => setOpen(false)}>About work</Link>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href={linkedIn} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>LinkedIn ↗</a>
        </nav>
        <p>UX design, research, and teaching — with people kept firmly at the centre.</p>
      </div>
    </header>
  )
}
