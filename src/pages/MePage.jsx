import { ArrowLeft, Heart, Moon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const meAsset = (name) => `/assets/me/${name}`

export default function MePage() {
  return (
    <main className="detail-page me-page page-top">
      <div className="detail-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>
        <article className="profile-section first-profile">
          <Reveal>
            <p className="eyebrow">Get to Know Me</p>
            <h1>About Me</h1>
          </Reveal>

          <div className="me-intro-grid">
            <Reveal>
              <div className="character-factsheet">
                <h2>Character Factsheet</h2>
                <dl>
                  <div><dt>Name</dt><dd>Kalley Coleman</dd></div>
                  <div><dt>Age</dt><dd>32</dd></div>
                  <div><dt>Education</dt><dd>Master’s Degree (MCom Informatics - University of Pretoria)</dd></div>
                  <div><dt>Location</dt><dd>South Africa (Willing to Relocate)</dd></div>
                  <div><dt>Hobbies</dt><dd>Gaming, reading, model kits, horse-riding</dd></div>
                  <div><dt>Favourites</dt><dd>Gojo Satoru, sour candy, Stargate, Neon Genesis Evangelion</dd></div>
                </dl>
                <div className="pill-row">
                  <span className="pill pill-heart"><Heart size={14} />Gamer</span>
                  <span className="pill pill-heart"><Heart size={14} />Animal lover</span>
                  <span className="pill pill-star"><Star size={14} />Traveller</span>
                  <span className="pill pill-star"><Star size={14} />Tech admirer</span>
                  <span className="pill pill-moon"><Moon size={14} />AI optimist</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="me-portrait"><img src={meAsset('20230430_093150 1.png')} alt="Kalley outdoors" /></Reveal>
          </div>

          <Reveal className="me-story">
            <h2>Get to Know Me</h2>
            <p>I&apos;m a UX Designer and Researcher passionate about understanding people, uncovering insights and transforming complexity into experiences that feel intuitive and effortless.</p>
            <p>I’ve had the honour of attending an in-person lecture presented by Prof Ben Schneiderman - one of the ‘fathers’ of UX, and his lecture shaped my UX-thinking.</p>
            <p>Whether I&apos;m leading research initiatives, facilitating usability studies or shaping product experiences, I&apos;m motivated by one question:</p>
            <p className="me-question">How can we make this easier for the people who use it?</p>
            <p>Outside of design, you&apos;ll find me with my horse, my cats, tinkering with model kits, planning my next adventure or diving into a new area of research.</p>
          </Reveal>

          <Reveal className="project-highlights me-highlights">
            <h2>Fun Facts</h2>
            <ul>
              <li>I can not only set up an IV line, but I can administer subcutaneous fluids to cats.</li>
              <li>My horse not only survived a stroke, but is currently thriving.</li>
              <li>I was the best history student in my high school.</li>
              <li>I have been part of a WHO study.</li>
            </ul>
          </Reveal>

          <Reveal className="me-gallery">
            <img src={meAsset('20250905_123810 1.png')} alt="A detailed model from Kalley’s collection" />
            <img src={meAsset('20251130_104750(1) 1.png')} alt="Kalley’s horse" />
            <img src={meAsset('20260819_204515 1.png')} alt="Kalley’s cat resting on a blanket" />
          </Reveal>
        </article>
      </div>
      <SiteFooter />
    </main>
  )
}
