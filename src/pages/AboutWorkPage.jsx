import { ArrowLeft, Heart, Search, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const caseAsset = (name) => `/assets/case-study/${name}`

export default function AboutWorkPage() {
  return (
    <main className="about-work-page page-top">
      <section className="article-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>
        <Reveal className="article-header">
          <p className="eyebrow">About work</p>
          <h1>Research-led design for systems people rely on.</h1>
          <p>Selected stories from enterprise software, usability research, and UX education.</p>
        </Reveal>

        <article className="article-section" id="fraxes">
          <Reveal>
            <p className="eyebrow">Lead UX Designer · 2022–2026</p>
            <h2><Star size={28} /> Fraxes.AI</h2>
            <p className="article-lede">
              I joined as the sole UX Designer to redesign a legacy metadata-management platform. Each iteration balanced user feedback, modern UX standards, and the familiarity enterprise users needed to work confidently.
            </p>
          </Reveal>
          <div className="article-grid">
            <Reveal>
              <h3>The problem</h3>
              <p>Basic and complex workflows took too long, the experience felt outdated, and non-users were making interface decisions without a shared design process.</p>
            </Reveal>
            <Reveal delay={80}>
              <h3>The solution</h3>
              <p>I aligned stakeholders and developers, gathered user feedback, built more than 70 screens, and established structured usability testing across iterative releases.</p>
            </Reveal>
            <Reveal delay={160}>
              <h3>The results</h3>
              <p>Fewer clicks, faster tasks, stronger usability, a growing UX team, and new projects with clients including Deloitte and the Department of Defence.</p>
            </Reveal>
          </div>
          <Reveal className="article-media-grid">
            <img src={caseAsset('IMG-20260327-WA0027 1.png')} alt="UX research and filming setup" />
            <img src={caseAsset('20200206_100525 1.png')} alt="Collaborative UX planning session" />
          </Reveal>
        </article>

        <article className="article-section" id="videoplay">
          <Reveal>
            <p className="eyebrow">Sand Dollar Design</p>
            <h2><Heart size={28} fill="currentColor" /> Videoplay</h2>
            <p className="article-lede">
              After graduating as an intern at Sand Dollar Design, I helped evaluate and improve Vodacom’s video-streaming application before new features reached a live audience.
            </p>
          </Reveal>
          <div className="article-grid" id="research">
            <Reveal>
              <h3>The research</h3>
              <p>Using the University of Pretoria’s UX Lab, we combined usability testing with Tobii eye-tracking to capture both behaviour and attention.</p>
            </Reveal>
            <Reveal delay={80}>
              <h3>My role</h3>
              <p>I created test scenarios, facilitated eye-tracking sessions, analysed findings, compiled the report, and presented recommendations at Vodacom HQ.</p>
            </Reveal>
            <Reveal delay={160}>
              <h3>The result</h3>
              <p>After the recommended changes were implemented, Videoplay served more than 850,000 subscribers over the following three years.</p>
            </Reveal>
          </div>
          <Reveal className="eye-tracking-gallery">
            <img src={caseAsset('Dashboard 3 - Natasha 1.png')} alt="Videoplay usability test recording" />
            <img src={caseAsset('Dashboard 3 - Natasha Gaze Point 1.png')} alt="Videoplay eye-tracking gaze-point analysis" />
            <img src={caseAsset('image 19.png')} alt="Videoplay eye-tracking heatmap" />
          </Reveal>
        </article>

        <article className="article-section teaching-section" id="lecturing">
          <Reveal>
            <p className="eyebrow">UX education</p>
            <h2><Search size={28} /> Teaching research by doing</h2>
            <p className="article-lede">
              At Inscape, I stepped in to teach UX Research and translated professional practice into clear, hands-on learning—helping students build confidence and industry-ready portfolios.
            </p>
          </Reveal>
          <Reveal className="teaching-callout">
            <span>Research is not a phase.</span>
            <strong>It is how good teams keep learning.</strong>
          </Reveal>
        </article>
      </section>

      <SiteFooter />
    </main>
  )
}
