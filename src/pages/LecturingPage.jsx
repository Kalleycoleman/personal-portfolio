import { ArrowLeft, Heart, Moon, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'

function Factsheet({ items }) {
  return (
    <div className="project-factsheet">
      <p className="eyebrow">Lecturing Factsheet</p>
      <div className="pill-row">
        {items.map((item, index) => (
          <span className={`pill ${index < 2 ? 'pill-heart' : index < 5 ? 'pill-star' : 'pill-moon'}`} key={item}>
            {index < 2 ? <Heart size={14} /> : index < 5 ? <Star size={14} /> : <Moon size={14} />}{item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function LecturingPage() {
  return (
    <main className="detail-page lecturing-page page-top">
      <div className="detail-shell content-width">
        <Link className="back-link" to="/"><ArrowLeft size={18} />Back home</Link>

        <article className="profile-section first-profile" id="inscape">
          <Reveal>
            <p className="eyebrow">UX Education</p>
            <h1>Inscape</h1>
            <p className="detail-lede">I presented Inscape’s User Experience Research course to eight students and mentored them through structured research processes, from interviews and questionnaires to source evaluation and thesis writing.</p>
            <Factsheet items={['Lecturer', 'UX Research', 'Competitor Analysis', 'Thesis Writing', 'Mentoring', 'UI Design']} />
          </Reveal>
          <div className="story-grid two-up-story">
            <Reveal><h2>Duties</h2><p>I worked with a department head to strengthen the coursework using current academic and industry practice. Individual mentorship sessions focused on understanding each student’s mindset, research topic, and the support needed to move their work forward.</p></Reveal>
            <Reveal delay={80}><h2>Outcomes</h2><p>All eight UX Research students graduated and found employment in UX-appropriate roles. Improvements in grades and assessment quality led to an invitation to help facilitate UI design courses in another diploma.</p></Reveal>
          </div>
          <Reveal className="project-highlights">
            <h3>Highlights</h3>
            <ul><li>Enhanced coursework with current industry research practice.</li><li>Mentored students through complete research projects.</li><li>Helped every student graduate and move into a relevant UX role.</li></ul>
          </Reveal>
        </article>

        <article className="profile-section" id="university-of-pretoria">
          <Reveal>
            <p className="eyebrow">Department of Informatics</p>
            <h2>University of Pretoria</h2>
            <p className="detail-lede">I facilitated information systems modules from first year through postgraduate level, combining lectures, tutorials, practical sessions, consultation, assessment, and UX Lab management.</p>
            <Factsheet items={['Lecturer', 'Tutor', 'Human Computer Interaction', 'Information Systems Design', 'UX Lab Management', 'Assessment']} />
          </Reveal>
          <div className="story-grid two-up-story">
            <Reveal><h3>Duties</h3><p>Subjects included critical thinking, information systems modelling, and human computer interaction. I managed access to eye-tracking for student projects, set and graded assessments, and provided consultation hours for clarification and additional instruction.</p></Reveal>
            <Reveal delay={80}><h3>Outcomes</h3><p>Exposure to human computer interaction in earlier modules helped increase enrolment in the postgraduate course. Students maintained strong attendance and described the lectures as logical, understandable, and approachable.</p></Reveal>
          </div>
          <Reveal className="teaching-statement"><span>Make complex ideas logical.</span><strong>Give students the confidence to use them.</strong></Reveal>
        </article>
      </div>
      <SiteFooter />
    </main>
  )
}
