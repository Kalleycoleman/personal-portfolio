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

function FullStory({ children }) {
  return (
    <Reveal className="full-story-wrap">
      <details className="full-story">
        <summary>
          <strong>Read the full case study</strong>
        </summary>
        <div className="full-story-content">{children}</div>
      </details>
    </Reveal>
  )
}

export default function WorkPage() {
  return (
    <main className="detail-page work-page page-top">
      <div className="detail-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>

        <Reveal className="work-disclaimer">
          <strong>Disclaimer:</strong> A lot of my work falls under non-disclosure agreements due to being proprietary software. Therefore only some screenshots can be shown and have been intentionally obfuscated. Please contact me to view more.
        </Reveal>

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
              <p className="availability-note">Not yet commercially available.</p>
            </Reveal>
            <Reveal delay={100} className="framed-media"><img src={workAsset('DI Builder - Terms 1 1.png')} alt="Data Intelligence term builder" /></Reveal>
          </div>

          <FullStory>
            <section>
              <h3>Setting the Stage</h3>
              <p>I was hired as the sole UX Designer of the company to revamp a legacy enterprise metadata management platform called Fraxes/Legoz. Throughout my time at the company, the platform underwent three versions, or redesigns, which each tangibly improved user expectations, experience, and performance. Each iteration was based on user feedback, research, and alignment with modern UX and UI standards while keeping user satisfaction and familiarity high.</p>
            </section>
            <section>
              <h3>The Problem</h3>
              <p>The Fraxes system suffered from unnecessary task-completion time for both complex and basic workflows, an outdated user experience, and non-users designing the user experience.</p>
              <p>My first task as UX Designer was: “Here are some wireframes drawn by the business analyst. Make them pretty and reduce the clicks.” The wireframes were created in Microsoft Publisher. I certainly had my work cut out for me. I decided I would first need to make the new design “pretty,” but that I would also need to gain the trust of all involved stakeholders so that I could properly apply UX principles. My Master’s research on using principles of persuasion to influence company UX adoption would be coming in very handy.</p>
            </section>
            <section>
              <h3>The Solution</h3>
              <p>A full-scale product redesign began. This was known as Version 1. To gain trust, I started communicating daily with back-end and front-end developers to understand the capability of our code, as the company used a proprietary platform developed in-house. There was a time crunch and I did not want to promise designs that would overextend our current development capabilities.</p>
              <p>I also arranged meetings with product owners and users to determine their goals and frustrations. I rallied for structured usability testing and heuristic evaluation once the redesign was completed, and I was promised a week of testing. I joined workshops to understand the intricacies of data sources, entities, and data objects so I could better understand my users’ work. With this information in hand, I began work on more than 70 screens.</p>
            </section>
            <section>
              <h3>The Results</h3>
              <p>Version 1 reduced one to three clicks per process, resulting in a 40% reduction overall, and produced a 70% improvement in usability compared with the previous design. Evidence included SUS scores, task quality and completion-time comparisons, questionnaires, and validation after the system went live. A new member was added to my team, and the redesign helped attract additional clients and projects.</p>
              <p>The biggest achievement of Version 1 was the opportunity to collaborate with Deloitte on an intelligent data-ontology management system. That work inspired Version 2 and the creation of a second system, Data Intelligence. Version 2 began with competitor analysis, stakeholder alignment, and increased UX trust. It reduced task time by 50% for various processes, introduced navigation that made data easier to access, supported multitasking and dashboards, and established a company-wide design guide.</p>
              <p>Version 3 focused on how new AI design technologies, including Claude Design and Figma Make/Agent, could fit into our process. The team grew to three members, explored where AI would be useful, began UX prompt engineering, tested preliminary designs, and compiled an updated design guide. This was where I left the Legoz project, with the groundwork in place for the current design team to continue.</p>
            </section>
            <section>
              <h3>Data Intelligence</h3>
              <p>The Data Intelligence system was a joint project with Deloitte that strives to manage complex data ontologies in an understandable, easily readable way. I learned about data ontologies, terms, domains, and how to model them effectively so I could create a design users would find delightful. I worked closely with Deloitte stakeholders to understand the nuances of these concepts and the user stories around them. It was a challenging, rewarding project planned for commercial release in 2026.</p>
            </section>
          </FullStory>
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
          <Reveal className="research-gallery two-up">
            <img src={caseAsset('Dashboard 3 - Natasha 1.png')} alt="Videoplay usability test recording" />
            <img src={caseAsset('Dashboard 3 - Natasha Gaze Point 1.png')} alt="Videoplay gaze point analysis" />
          </Reveal>
          <FullStory>
            <section><h3>The Problem</h3><p>Videoplay had developed new features for its video-streaming service and needed to understand whether people could use them successfully before launch. The product team needed behavioural evidence, not assumptions, to identify where the experience caused hesitation, confusion, or failure.</p></section>
            <section><h3>The Solution</h3><p>I created a realistic test scenario, facilitated usability and eye-tracking sessions, and observed how participants moved through the proposed features. I analysed recordings, gaze plots, and heat maps to connect what participants said with what they actually attended to on screen. I then compiled the findings and presented the recommendations at Vodacom HQ.</p></section>
            <section><h3>The Results</h3><p>The final report paired each usability frustration with clear behavioural evidence and a practical recommendation, giving the product team a focused path to release. After the recommendations were implemented, Videoplay remained in service for three years and served more than 850,000 subscribers.</p></section>
          </FullStory>
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
          <FullStory>
            <section>
              <h3>The Problem</h3>
              <p>The design and testing phases had an unusually short timeline. A separate development company would also be responsible for implementing the final experience, so our requirements and handover material had to be especially clear.</p>
              <p>The team needed to understand an unfamiliar financial-services space, design the core Send Money workflow, and test it quickly enough for the findings to remain useful to development.</p>
            </section>
            <section>
              <h3>The Solution</h3>
              <p>I researched competing money-transfer services, including Mama Money, Hello Paisa, and Wise, to understand the established patterns and expectations in the market. I then helped create, critique, and combine wireframes for the Send Money workflow.</p>
              <p>We worked in short sprints that moved between research, wireframing, critique, and usability testing. This let the team respond to feedback quickly and provide the external development team with useful, current handover material.</p>
              <p>When the 2020 lockdown threatened the research plan, we reorganised the work so that the scheduled usability-testing sessions could still be completed safely.</p>
            </section>
            <section>
              <h3>The Results</h3>
              <p>Testing uncovered implementation inconsistencies, prototype bugs, and confusing support and documentation flows before those issues could become established product behaviour.</p>
              <p>The findings shaped the released application and its core money-transfer workflows. The resulting application helped Mukuru grow into a leading African remittance service that supports millions of customers and hundreds of millions of transactions.</p>
            </section>
          </FullStory>
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
          <FullStory>
            <section>
              <h3>The Problem</h3>
              <p>BMW employees relied on several internal systems every day, but users described their workflows as inefficient and unintuitive. The interfaces presented overwhelming amounts of data and required extensive training before employees could use them confidently.</p>
              <p>Familiar interaction expectations did not always work, icons were difficult to understand, important actions were easy to miss, and some content appeared in mixed languages.</p>
            </section>
            <section>
              <h3>The Solution</h3>
              <p>I worked with BMW employees to create realistic test scenarios based on the tasks they performed in their day-to-day work. I then facilitated three days of sessions with both new and expert users.</p>
              <p>Questionnaires captured participants’ expectations and perceptions, while usability observations and eye-tracking evidence showed where attention went, what people missed, and exactly where workflows broke down.</p>
            </section>
            <section>
              <h3>The Results</h3>
              <p>The evaluation identified concrete issues, including hidden search actions, keyboard behaviour that did not work as expected, unfamiliar icons, mixed-language content, and interactions that demanded unnecessary training.</p>
              <p>Our report connected those findings to clear evidence and practical recommendations for the core development team. BMW’s local team presented the work to its German headquarters, and the collaboration continued with evaluations of further internal systems.</p>
            </section>
          </FullStory>
        </article>
      </div>
      <SiteFooter />
    </main>
  )
}
