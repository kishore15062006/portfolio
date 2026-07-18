import TimelineItem from '../ui/TimelineItem'
import experience from '../../data/experience'
import './ExperienceSection.css'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-label">// experience</div>
      <h2 className="section-title">Work Experience</h2>

      <div className="timeline">
        {experience.map((item, idx) => (
          <TimelineItem key={item.id} item={item} isEven={idx % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
