import './SkillCard.css'

export default function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      {icon && <img src={icon} alt={name} className="skill-icon" />}
      <span className="skill-name">{name}</span>
    </div>
  )
}
