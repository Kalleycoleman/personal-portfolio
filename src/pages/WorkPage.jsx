import { ArrowLeft, Heart, Moon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const workAsset = (name) => `/assets/work/${name}`
const caseAsset = (name) => `/assets/case-study/${name}`

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

function Highlights({ children }) {
  return (
    <Reveal className="project-highlights">
      <h3>Highlights</h3>
      {children}
    </Reveal>
  )
}

export default function WorkPage() {
  return (
    <main className="detail-page work-page page-top">
      <div className="detail-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>

        <article className="profile-section first-profile" id="building-some-legoz">
          <Reveal>
            <p className="eyebrow">Fraxes.AI, formerly Intenda PTY LTD</p>
            <h1>Building Some ‘Legoz’</h1>
            <p className="detail-lede">
              I was hired as the company’s sole UX Designer to revamp Fraxes/Legoz, a legacy enterprise metadata management platform. Three major versions improved user expectations, experience, and performance while preserving the familiarity enterprise users needed.
            </p>
            <Factsheet items={['Lead UX Designer', '2022 to 2026', 'Enterprise UX', 'Usability Testing', 'UX Adoption', 'AI Assisted Design']} />
          </Reveal>

          <Highlights>
            <ul>
              <li>40% reduction in clicks across core processes.</li>
              <li>70% improvement in usability after the first redesign.</li>
              <li>50% reduction in task time through modern components and navigation.</li>
              <li>Growth from one UX designer to a three-person design team.</li>
            </ul>
          </Highlights>

          <div className="story-grid">
            <Reveal><h2>Setting the Stage</h2><p>My first brief was to make wireframes drawn in Microsoft Publisher look better and reduce the clicks. The real need was broader: earn stakeholder trust, understand the proprietary platform, and introduce a dependable UX process.</p></Reveal>
            <Reveal delay={80}><h2>The Problem</h2><p>Complex and basic workflows took too long, the interface felt outdated, and people who did not use the system were shaping the experience. Users needed a modern product without losing the mental models they relied on every day.</p></Reveal>
            <Reveal delay={160}><h2>The Solution</h2><p>I worked daily with developers, product owners, and users, ran workshops around data sources and objects, advocated for structured usability testing, and redesigned more than 70 screens. Version 2 added stronger navigation, multitasking, dashboards, and a company-wide design guide. Version 3 explored how AI design tools could support the team’s process.</p></Reveal>
          </div>

          <Reveal className="version-gallery">
            <figure><img src={workAsset('Object Builder Error Log 1 1.png')} alt="Legoz version 1 object builder" /><figcaption>Legoz, Version 1</figcaption></figure>
            <figure><img src={workAsset('Data Objects v2 1 1.png')} alt="Legoz version 2 data objects" /><figcaption>Legoz, Version 2</figcaption></figure>
            <figure><img src={workAsset('data-objects-v2-remade (1) 1.png')} alt="Legoz version 3 data objects" /><figcaption>Legoz, Version 3</figcaption></figure>
          </Reveal>

          <div className="detail-split">
            <Reveal>
              <h2>Data Intelligence</h2>
              <p>A joint project with Deloitte turned complex data ontologies, terms, and domains into an understandable product. Close stakeholder collaboration translated specialised concepts and user stories into an interface people could use confidently.</p>
            </Reveal>
            <Reveal delay={100} className="framed-media"><img src={workAsset('DI Builder - Terms 1 1.png')} alt="Data Intelligence term builder" /></Reveal>
          </div>
        </article>

        <article className="profile-section" id="videoplay">
          <Reveal>
            <p className="eyebrow">Sand Dollar Design and Vodacom</p>
            <h2>Videoplay and Chill</h2>
            <p className="detail-lede">I helped evaluate new features for Vodacom’s popular video streaming service before they reached a live audience.</p>
            <Factsheet items={['UX Designer', '2019', 'Eye Tracking', 'Usability Testing', 'Tobii Pro', 'Research Reporting']} />
          </Reveal>
          <Highlights><p>After our recommendations were implemented, Videoplay remained in service for three years and served more than 850,000 subscribers.</p></Highlights>
          <div className="story-grid">
            <Reveal><h3>The Problem</h3><p>Videoplay had developed new features and needed clear evidence about usability before launch.</p></Reveal>
            <Reveal delay={80}><h3>The Solution</h3><p>I created the test scenario, facilitated usability and eye-tracking sessions, analysed gaze plots and heat maps, compiled the findings, and presented recommendations at Vodacom HQ.</p></Reveal>
            <Reveal delay={160}><h3>The Results</h3><p>The report paired every identified frustration with behavioural evidence and a practical recommendation, giving the product team a focused path to release.</p></Reveal>
          </div>
          <Reveal className="research-gallery three-up">
            <img src={caseAsset('Dashboard 3 - Natasha 1.png')} alt="Videoplay usability test recording" />
            <img src={caseAsset('Dashboard 3 - Natasha Gaze Point 1.png')} alt="Videoplay gaze point analysis" />
            <img src={caseAsset('image 19.png')} alt="Videoplay eye-tracking heatmap" />
          </Reveal>
        </article>

        <article className="profile-section" id="mukuru-magic">
          <Reveal>
            <p className="eyebrow">Sand Dollar Design and Mukuru</p>
            <h2>Mukuru Magic</h2>
            <p className="detail-lede">Our team designed and tested a mobile money transfer experience through short research, wireframing, critique, and usability testing sprints.</p>
            <Factsheet items={['UX Designer', '2019 to 2020', 'Competitor Research', 'Wireframing', 'Usability Testing', 'Financial Services']} />
          </Reveal>
          <Highlights><p>The resulting application helped Mukuru grow into a leading African remittance service, supporting millions of customers and hundreds of millions of transactions.</p></Highlights>
          <div className="story-grid">
            <Reveal><h3>The Problem</h3><p>The design and testing phases had an unusually short timeline, and a separate development company would implement the final experience.</p></Reveal>
            <Reveal delay={80}><h3>The Solution</h3><p>I researched Mama Money, Hello Paisa, and Wise, then helped create and combine wireframes for the Send Money workflow. When the 2020 lockdown threatened testing, the team reorganised and completed the scheduled sessions safely.</p></Reveal>
            <Reveal delay={160}><h3>The Results</h3><p>Testing exposed implementation inconsistencies, prototype bugs, and confusing support and documentation flows. The findings shaped the released application and its core workflows.</p></Reveal>
          </div>
          <Reveal className="research-gallery four-up">
            <img src="/assets/alt-home-2/20190807_094640 1.png" alt="Mukuru design workshop" />
            <img src={caseAsset('Screenshot_20200327-135459 1.png')} alt="Mukuru mobile application screen" />
            <img src={caseAsset('IMG_5879 1.png')} alt="Mukuru usability testing" />
            <img src={caseAsset('Screenshot_20200327-154456 1.png')} alt="Mukuru mobile transfer screen" />
          </Reveal>
        </article>

        <article className="profile-section" id="vroom-vroom">
          <Reveal>
            <p className="eyebrow">University of Pretoria UX Labs and BMW</p>
            <h2>Vroom Vroom</h2>
            <p className="detail-lede">BMW asked the UX Labs to evaluate internal systems whose users reported inefficient, unintuitive workflows.</p>
            <Factsheet items={['UX Researcher', '2018 to 2019', 'Eye Tracking', 'Test Facilitation', 'Questionnaires', 'Enterprise Systems']} />
          </Reveal>
          <Highlights><p>The local team presented our findings to BMW’s German headquarters, and the collaboration continued with further internal system evaluations.</p></Highlights>
          <div className="story-grid">
            <Reveal><h3>The Problem</h3><p>Daily-use systems contained overwhelming data, unfamiliar icons, broken interaction expectations, and workflows that demanded excessive training.</p></Reveal>
            <Reveal delay={80}><h3>The Solution</h3><p>I created realistic test scenarios with BMW employees, facilitated three days of sessions with new and expert users, and combined questionnaires with eye-tracking evidence.</p></Reveal>
            <Reveal delay={160}><h3>The Results</h3><p>The evaluation revealed problems such as hidden search actions, keyboard behaviour that did not work, unfamiliar icons, and mixed-language content. The report gave the core development team clear evidence and recommendations.</p></Reveal>
          </div>
          <Reveal className="research-gallery three-up">
            <img src={caseAsset('IMG-20260327-WA0027 1.png')} alt="Kalley presenting the BMW UX Labs collaboration" />
            <img src={caseAsset('image 18.png')} alt="BMW eye-tracking evaluation" />
            <img src={caseAsset('image 19.png')} alt="BMW usability findings" />
          </Reveal>
        </article>
      </div>
      <SiteFooter />
    </main>
  )
}
