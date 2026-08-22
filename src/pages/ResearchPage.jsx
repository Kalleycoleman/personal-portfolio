import { ArrowLeft, Heart, Moon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const researchAsset = (name) => `/assets/research/${name}`

function Factsheet({ items }) {
  return (
    <div className="project-factsheet">
      <p className="eyebrow">Project Factsheet</p>
      <div className="pill-row">
        {items.map((item, index) => (
          <span className={`pill ${index < 2 ? 'pill-heart' : index < 4 ? 'pill-star' : 'pill-moon'}`} key={item}>
            {index < 2 ? <Heart size={14} /> : index < 4 ? <Star size={14} /> : <Moon size={14} />}{item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ResearchPage() {
  return (
    <main className="detail-page research-page page-top">
      <div className="detail-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>

        <article className="profile-section first-profile" id="persuasive-ux">
          <Reveal>
            <p className="eyebrow">Masters Research</p>
            <h1>Persuasive UX</h1>
            <p className="detail-lede">A practical model that helps UX designers positively influence company UX adoption through psychology, mutual gain, and a clear understanding of stakeholders.</p>
            <Factsheet items={['Masters Research', 'University of Pretoria', 'Personal Construct Theory', 'Principles of Persuasion', 'UX Adoption', 'Industry Validation']} />
          </Reveal>
          <div className="story-grid two-up-story">
            <Reveal><h2>A Persuasive UX Model</h2><p>UX adoption in South Africa was behind other technology markets, and designers found company adoption difficult. My research explored psychological methods that could give UX practitioners a practical way to improve adoption.</p></Reveal>
            <Reveal delay={80}><h2>The Results</h2><p>I combined Personal Construct Theory with R. Cialdini’s Principles of Persuasion, then gathered industry evidence through questionnaires. The result was a model that maps stakeholder needs to a suitable persuasion technique. University industry partners showed interest in the tool, and I later validated it in practice across development, product, executive, and user relationships.</p></Reveal>
          </div>
          <Reveal className="research-feature-grid">
            <img src={researchAsset('image 24.png')} alt="Persuasive UX research model" />
            <img src={researchAsset('KColeman - Final UX Persuasion Research Poster 1.png')} alt="Persuasive UX research poster" />
          </Reveal>
        </article>

        <article className="profile-section" id="avatar">
          <Reveal>
            <p className="eyebrow">Honours Thesis</p>
            <h2>Me, Myself and My Avatar</h2>
            <p className="detail-lede">Research into how avatar choices shape player behaviour in immersive online environments.</p>
            <Factsheet items={['Honours Research', 'BCom Informatics', 'Online Communities', 'Behavioural Research', '400+ Participants', 'Final Fantasy XIV']} />
          </Reveal>
          <div className="story-grid two-up-story">
            <Reveal><h3>Who Am I In Front of the Screen?</h3><p>Players can be anyone or anything through an avatar. I investigated whether people behaved like themselves, an idealised self, or a perceived version of the character they selected.</p></Reveal>
            <Reveal delay={80}><h3>The Results</h3><p>Five avatar types emerged: yourself, your ideal self, your ideal partner, an existing character, and an original character. More than 400 Final Fantasy XIV players contributed insights into how those choices affected online behaviour.</p></Reveal>
          </div>
          <Reveal className="avatar-diagram"><img src={researchAsset('FiceCategories 1.png')} alt="Five avatar identity categories" /></Reveal>
        </article>

        <div className="research-topic-grid">
          <Reveal className="research-topic" id="gender-discourse">
            <p className="eyebrow">Research Topic</p>
            <h2>Gender Discursive Struggles in Online Gaming Communities</h2>
            <p>An exploration of identity, discourse, and participation in online gaming spaces, with attention to the experiences created by community norms and interaction.</p>
            <Factsheet items={['Online Gaming', 'Gender Discourse', 'Community Research']} />
          </Reveal>
          <Reveal className="research-topic" id="emotionally-vulnerable" delay={100}>
            <p className="eyebrow">Research Topic</p>
            <h2>UXD for the Emotionally Vulnerable</h2>
            <p>A human-centred investigation into how digital products can better support people when emotion, stress, and vulnerability affect the way an experience is understood.</p>
            <Factsheet items={['Inclusive UX', 'Emotional Design', 'Human Factors']} />
          </Reveal>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
