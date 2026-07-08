import SkillCard from '../ui/SkillCard'
import skills from '../../data/skills'
import './SkillsSection.css'

export default function SkillsSection() {
  const skillCategories = [
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend', key: 'backend' },
    { label: 'Database', key: 'database' },
    { label: 'Tools & DevOps', key: 'tools' },
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="section-label">// skills</div>
      <h2 className="section-title">Tech Stack</h2>

      {/* Skills by Category */}
      {skillCategories.map((category) => (
        <div key={category.key} className="skill-category">
          <h3 className="category-label">{category.label}</h3>
          <div className="skills-grid">
            {skills[category.key].map((skill, idx) => (
              <SkillCard key={idx} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}

      {/* Infinite Marquee Section */}
      <div className="skills-marquee-section">
        <h3 className="marquee-label">Constantly Learning</h3>
        <div className="skills-marquee">
          <div className="marquee-content">
            {[...Array(1)].map((_, i) => (
              <div key={i} className="marquee-row">
                {skills.frontend
                  .concat(skills.backend)
                  .concat(skills.tools)
                  .map((skill, idx) => (
                    <span key={idx} className="marquee-skill">
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} />
                      )}
                      {skill.name}
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
