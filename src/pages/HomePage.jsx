import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Bookmark, Heart, Moon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

const asset = (folder, name) => `/assets/${folder}/${name}`

const traits = [
  ['heart', '7+ Years Experience'],
  ['heart', 'Tech-Admirer'],
  ['heart', 'Research Aficionado'],
  ['star', 'Data-UX Expert'],
  ['star', 'Professional Usability Tester'],
]

const skills = [
  ['heart', 'Figma'], ['heart', 'Gemini'], ['heart', 'Jira'], ['heart', 'Confluence'],
  ['star', 'Eye-Tracking'], ['star', 'Usability Testing'], ['star', 'User Interviews'],
  ['moon', 'UX Adoption'], ['moon', 'Design and Development Collaboration'], ['moon', 'Requirements Analysis'],
]

const projects = [
  {
    title: 'Building Some Legoz',
    summary: 'Improving a major enterprise metadata platform over three versions, reducing task time, improving usability, and growing UX adoption.',
    image: asset('alt-home-3', 'image 11.png'),
    tone: 'lilac',
    href: '/work',
  },
  {
    title: 'Everyone Gets a Job!',
    summary: 'Stepping in to teach a UX Research course at Inscape and helping students turn new skills into industry-ready work.',
    image: asset('alt-home-3', 'image 21.png'),
    secondImage: asset('alt-home-3', 'image 22.png'),
    tone: 'rose',
    href: '/lecturing#inscape',
  },
  {
    title: 'Vroom Vroom!',
    summary: 'Evaluating BMW’s internal employee systems with eye-tracking and usability testing to guide valuable redesign decisions.',
    image: asset('alt-home-3', 'image 8.png'),
    secondImage: asset('alt-home-3', 'image 9.png'),
    tone: 'blue',
    href: '/work#vroom-vroom',
  },
  {
    title: 'Videoplay and Chill',
    summary: 'Testing a video-streaming platform to find weak points, gather insights, and help onboard more than 850k subscribers.',
    image: asset('alt-home-3', 'Dashboard 3 - Natasha Gaze Point 1.png'),
    tone: 'mist',
    href: '/work#videoplay',
  },
]

function Pill({ icon, children }) {
  const Icon = icon === 'star' ? Star : icon === 'moon' ? Moon : Heart
  return <span className={`pill pill-${icon}`}><Icon size={15} />{children}</span>
}

export default function HomePage() {
  const portfolioRef = useRef(null)
  const [portfolioActive, setPortfolioActive] = useState(false)

  useEffect(() => {
    const element = portfolioRef.current
    if (!element) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setPortfolioActive(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-28% 0px -48% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`home-page ${portfolioActive ? 'portfolio-active' : ''}`}>
      <section className="hero-section page-top" id="about">
        <div className="hero-images" aria-label="Portraits of Kalley at work and outdoors">
          <Reveal className="hero-image hero-image-left" delay={60}>
            <img src={asset('alt-home-1', 'IMG-20260327-WA0027 1.png')} alt="Kalley taking part in a filmed interview" />
          </Reveal>
          <Reveal className="hero-image hero-image-centre" delay={140}>
            <img src={asset('alt-home-1', '20250411_114954 2.png')} alt="Kalley standing among spring flowers" />
          </Reveal>
          <Reveal className="hero-image hero-image-right" delay={220}>
            <img src={asset('alt-home-1', '20190927_114225 1.png')} alt="Kalley testing augmented-reality glasses" />
          </Reveal>
        </div>

        <Reveal className="hero-copy" delay={150}>
          <h1>Hello!</h1>
          <p className="hero-name">My Name is Kalley</p>
          <p className="hero-kicker">Let me introduce myself:</p>
          <div className="pill-row hero-pills">
            {traits.map(([icon, text]) => <Pill key={text} icon={icon}>{text}</Pill>)}
          </div>
          <p className="hero-description">
            I’m a UX Designer, Researcher, and Lecturer on a mission to keep digital experiences human-centered in the age of automation.
            My niche is untangling complex data systems and turning them into clear, intuitive, and satisfying interfaces.
            I specialize in building strong relationships across product, development, and leadership teams, ensuring complex systems remain effortless for the people using them.
          </p>
        </Reveal>
        <a className="scroll-cue" href="#skills" aria-label="Scroll to skills"><span />Scroll to explore</a>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="skills-grid content-width">
          <Reveal>
            <div className="section-heading-row">
              <h2>Expertise and Capabilities</h2>
            </div>
            <div className="pill-row skills-pills">
              {skills.map(([icon, text]) => <Pill key={text} icon={icon}>{text}</Pill>)}
            </div>
            <p className="expertise-copy">
              I combine user research, strategic thinking &amp; human-centered design to create intuitive experiences for complex digital products. Over the past several years I&apos;ve worked across research, usability testing, enterprise software and digital product design, helping teams make better decisions through evidence rather than assumption. My approach combines analytical thinking with empathy, allowing me to bridge the gap between user needs, business objectives and technical realities.
            </p>
            <div className="photo-collage">
              <img src={asset('alt-home-2', '20190807_094640 1.png')} alt="Sketching an interface on paper" />
              <img src={asset('alt-home-2', '20190723_124749 1.png')} alt="UX flow sketched on a whiteboard" />
              <img src={asset('alt-home-2', '20200206_094811 2.png')} alt="UX research lab and presentation area" />
              <img src={asset('alt-home-2', '20190802_124540 2.png')} alt="Affinity mapping with sticky notes" />
            </div>
          </Reveal>

          <Reveal delay={120} className="process-column" id="process">
            <div className="section-heading-row">
              <h2>An Evidence Based Design Approach</h2>
            </div>
            <img className="process-image" src={asset('alt-home-2', 'quick steps 1.png')} alt="Kalley’s iterative UX design process" />
            <img className="process-image research-process" src={asset('alt-home-2', 'Ux process 1.png')} alt="Kalley’s UX research process" />
          </Reveal>
        </div>
      </section>

      <section ref={portfolioRef} className="portfolio-section section-pad" id="work">
        <div className="content-width">
          <Reveal>
            <div className="section-heading-row partners-title">
              <h2>Some Places I’ve Worked With</h2>
            </div>
            <div className="partner-strip" aria-label="Selected clients and collaborators">
              <img src={asset('alt-home-3', 'image 4.png')} alt="University of Pretoria" />
              <img src={asset('alt-home-3', 'image 5.png')} alt="Inscape" />
              <img className="bmw-logo" src="/assets/bmw-logo.png" alt="BMW" />
              <img src={asset('alt-home-3', 'image 2.png')} alt="Mukuru" />
              <img src={asset('alt-home-3', 'image 3.png')} alt="Deloitte" />
              <img src={asset('alt-home-3', 'image 23.png')} alt="Vodacom" />
            </div>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <Link className={`project-card project-${project.tone}`} to={project.href}>
                  <div className="project-copy">
                    <h3><Bookmark size={23} />{project.title}</h3>
                    <p>{project.summary}</p>
                    <span>View more <ArrowUpRight size={16} /></span>
                  </div>
                  <div className="project-media">
                    <img src={project.image} alt="" />
                    {project.secondImage && <img className="project-media-secondary" src={project.secondImage} alt="" />}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="all-work-link">
            <Link to="/work">View All My Work <ArrowUpRight /></Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
