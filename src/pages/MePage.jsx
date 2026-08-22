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
                  <div><dt>Class</dt><dd>UX Designer, Researcher, Lecturer</dd></div>
                  <div><dt>Based in</dt><dd>South Africa</dd></div>
                  <div><dt>Experience</dt><dd>7+ years</dd></div>
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

          <Reveal className="project-highlights me-highlights">
            <h2>Highlights</h2>
            <ul>
              <li>I bring a user-driven mindset to work and everyday life.</li>
              <li>I have played video games since Warcraft 3 and enjoy Final Fantasy XV, Arknights, and Honkai: Star Rail.</li>
              <li>I spend as much free time as possible with my cats and my horse.</li>
              <li>I love travelling, visiting family overseas, and planning the next destination.</li>
            </ul>
          </Reveal>

          <Reveal className="me-story">
            <h2>Get to Know Me</h2>
            <p>Hello! Thank you for checking out my portfolio. Outside of work, I apply my user-driven approach to everyday life so that people who interact with me leave with a positive experience.</p>
            <p>I have been playing video games for as long as I can remember, starting with Warcraft 3. I enjoy a wide variety of games, especially Final Fantasy XV, Arknights, and Honkai: Star Rail. I am also an avid animal lover and spend whatever free time I can with my cats and my horse.</p>
            <p>I love travelling and visiting family overseas. I have explored much of Europe, and South Korea is next on my list.</p>
            <p>I believe technology should improve people’s lives. Figma Agent and I co-designed this portfolio, then a front-end developer and Vercel brought it to life. I actively research how and why AI is being used in design today. Want to know more? Let’s connect :)</p>
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
