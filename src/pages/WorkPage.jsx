import { ArrowLeft, ChevronDown, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const workAsset = (name) => `/assets/work/${name}`

const facts = [
  ['The Problem', 'A legacy enterprise platform had an outdated experience, excessive task-completion times, and interfaces designed by non-users.'],
  ['The Solution', 'Research, close developer alignment, more than 70 redesigned screens, structured usability testing, and a scalable UX practice.'],
  ['The Results', '40% fewer clicks, a 70% improvement in usability, 50% faster task completion, team growth, and major new client projects.'],
]

export default function WorkPage() {
  return (
    <main className="work-page page-top">
      <section className="case-hero content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h1>Fraxes.AI <span>(Formerly Intenda PTY LTD)</span></h1>
          <div className="pill-row">
            <span className="pill pill-heart"><Heart size={15} />Lead UX Designer</span>
            <span className="pill pill-heart"><Heart size={15} />2022–2026</span>
          </div>
          <p className="case-lede">
            I was hired as the sole UX Designer to revamp a legacy enterprise metadata-management platform called Fraxes/Legoz. Across three redesigns, the product tangibly improved user expectations, experience, and performance.
          </p>
        </Reveal>
      </section>

      <section className="case-summary content-width">
        <Reveal><h2>Highlights</h2></Reveal>
        <div className="fact-grid">
          {facts.map(([title, body], index) => (
            <Reveal key={title} delay={index * 80} className="fact-card">
              <Star size={20} />
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-section content-width">
        <Reveal className="case-copy-block">
          <p className="eyebrow">Setting the stage</p>
          <h2>Building trust before building screens</h2>
          <p>
            My first brief was effectively: make wireframes drawn by a business analyst “pretty” and reduce the clicks. I decided the work needed more than a visual refresh—it needed stakeholder trust and a proper UX process.
          </p>
          <p>
            I met daily with front- and back-end developers to understand the limits of the proprietary platform, then worked with product owners and users to uncover goals and frustrations. Workshops helped me understand data sources, entities, and objects before redesigning more than 70 screens.
          </p>
        </Reveal>
        <Reveal className="wide-media" delay={100}>
          <img src={workAsset('Data Objects v2 1 1.png')} alt="Fraxes data objects interface" />
          <img src={workAsset('data-objects-v2-remade (1) 1.png')} alt="Redesigned Fraxes data objects interface" />
          <img src={workAsset('Object Builder Error Log 1 1.png')} alt="Fraxes object builder error log" />
        </Reveal>
      </section>

      <section className="case-band">
        <div className="content-width split-case">
          <Reveal>
            <p className="eyebrow">The solution</p>
            <h2>Three versions, each grounded in evidence</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Version 1 established the product foundation and earned trust through practical improvements. Version 2 modernised the experience with new navigation, multi-tasking dashboards, and holistic system management. Version 3 explored how AI design technologies could strengthen—not replace—the team’s UX process.
            </p>
          </Reveal>
        </div>
        <div className="content-width screenshot-row">
          <Reveal><img src={workAsset('Changelog BulkGrid 1 1.png')} alt="Changelog grid interface" /></Reveal>
          <Reveal delay={80}><img src={workAsset('DI Studio - Workflow 6 1.png')} alt="Data Intelligence workflow" /></Reveal>
          <Reveal delay={160}><img src={workAsset('fraxses-DataSourcesAlt2 1.png')} alt="Fraxes data sources interface" /></Reveal>
        </div>
      </section>

      <section className="case-section content-width data-intelligence">
        <Reveal className="case-copy-block">
          <p className="eyebrow">Data Intelligence</p>
          <h2>Making complex ontologies understandable</h2>
          <p>
            Data Intelligence was a joint project with Deloitte to manage complex data ontologies in an understandable, readable way. I learned the language of ontologies, terms, and domains, then worked closely with Deloitte stakeholders to turn intricate user stories into an approachable system.
          </p>
          <p>The product is planned for commercial release in 2026.</p>
        </Reveal>
        <Reveal className="featured-media" delay={100}>
          <img src={workAsset('DI Builder - Terms 1 1.png')} alt="Data Intelligence term builder" />
        </Reveal>
      </section>

      <section className="results-section content-width">
        <Reveal>
          <p className="eyebrow">The results</p>
          <h2>Useful change, measured in real work</h2>
        </Reveal>
        <div className="metrics-grid">
          <Reveal className="metric"><strong>40%</strong><span>overall reduction in clicks</span></Reveal>
          <Reveal className="metric" delay={80}><strong>70%</strong><span>improvement in usability</span></Reveal>
          <Reveal className="metric" delay={160}><strong>50%</strong><span>reduction in task time</span></Reveal>
        </div>
        <Reveal className="next-case">
          <Link to="/about/work">Explore more of my work <ChevronDown /></Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  )
}
