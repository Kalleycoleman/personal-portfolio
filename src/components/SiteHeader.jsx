import { useEffect, useRef, useState } from 'react'
import { BookOpen, GraduationCap, Heart, Linkedin, Menu, Phone, Search, UserRound, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const linkedIn = 'https://www.linkedin.com/in/kalley-coleman/'

const menuGroups = [
  {
    icon: <BookOpen size={19} />,
    title: 'Work',
    href: '/work',
    links: [
      ['Building Some Legoz', '/work#building-some-legoz'],
      ['Videoplay and Chill', '/work#videoplay'],
      ['Mukuru Magic', '/work#mukuru-magic'],
      ['Vroom Vroom', '/work#vroom-vroom'],
    ],
  },
  {
    icon: <Search size={19} />,
    title: 'Research',
    href: '/research',
    links: [
      ['Persuasive UX', '/research#persuasive-ux'],
      ['Me, Myself and My Avatar', '/research#avatar'],
      ['Gender Discursive Struggles in Online Gaming Communities', '/research#gender-discourse'],
      ['UXD for the Emotionally Vulnerable', '/research#emotionally-vulnerable'],
    ],
  },
  {
    icon: <GraduationCap size={19} />,
    title: 'Lecturing',
    href: '/lecturing',
    links: [
      ['Inscape', '/lecturing#inscape'],
      ['University of Pretoria', '/lecturing#university-of-pretoria'],
    ],
  },
]

function MenuContents({ onNavigate }) {
  return (
    <nav className="portfolio-menu" aria-label="Portfolio navigation">
      <Link className="portfolio-menu-home" to="/" onClick={onNavigate}>
        <Heart size={20} fill="currentColor" />Home
      </Link>
      {menuGroups.map((group) => (
        <div className="portfolio-menu-group" key={group.title}>
          <Link className="portfolio-menu-heading" to={group.href} onClick={onNavigate}>
            {group.icon}<span>{group.title}</span>
          </Link>
          <div className="portfolio-menu-links">
            {group.links.map(([label, href]) => (
              <Link key={label} to={href} onClick={onNavigate}>{label}</Link>
            ))}
          </div>
        </div>
      ))}
      <Link className="portfolio-menu-heading portfolio-menu-me" to="/me" onClick={onNavigate}>
        <UserRound size={19} /><span>Me</span>
      </Link>
    </nav>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef(null)

  const toggleBrandMenu = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setMobileOpen((value) => !value)
    } else {
      setOpen((value) => !value)
    }
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  useEffect(() => {
    const handlePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <header ref={headerRef} className="site-header">
      <div className="brand-wrap">
        <button
          className="brand-mark"
          type="button"
          aria-label={open ? 'Close portfolio navigation' : 'Open portfolio navigation'}
          aria-expanded={open || mobileOpen}
          aria-controls="desktop-portfolio-menu"
          onClick={toggleBrandMenu}
        >
          <Heart size={21} fill="currentColor" />
        </button>
        <Link to="/" className="brand" aria-label="Kalley Coleman home">Kalley Coleman</Link>
        <div id="desktop-portfolio-menu" className={`desktop-portfolio-menu ${open ? 'is-open' : ''}`}>
          <MenuContents onNavigate={() => setOpen(false)} />
        </div>
      </div>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link className="icon-link" to="/work" aria-label="View my work" data-tip="Work"><BookOpen size={21} /></Link>
        <a className="icon-link" href="/#contact" aria-label="Contact Kalley" data-tip="Contact"><Phone size={21} /></a>
        <a className="icon-link" href={linkedIn} target="_blank" rel="noreferrer" aria-label="Kalley Coleman on LinkedIn" data-tip="LinkedIn"><Linkedin size={21} /></a>
      </nav>

      <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
        {mobileOpen ? <X /> : <Menu />}
      </button>

      <div className={`mobile-panel ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <MenuContents onNavigate={() => setMobileOpen(false)} />
        <div className="mobile-panel-footer">
          <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </header>
  )
}
