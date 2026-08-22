import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <h2>Let’s design better user experiences together <Heart size={30} fill="currentColor" /></h2>
        <div className="footer-links">
          <span>Contact details coming soon</span>
          <span>Résumé coming soon</span>
          <a href="https://www.linkedin.com/in/kalley-coleman/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="footer-nav">
        <p>Site Navigation</p>
        <Link to="/">About Me</Link>
        <Link to="/about/work">About Work</Link>
        <Link to="/#process">About Research</Link>
        <Link to="/#about">About Lecturing</Link>
      </div>
      <p className="footer-note">Designed for clarity. Built with care.</p>
    </footer>
  )
}
