import './SkillsCard.scss';


export default function SkillsCard( { skill }) {
  const { id, title  } = skill
  
  return (
    <div className="d-flex justify-content-center align-items-center skill-card-container" id={id}>
        <div class="card skill-card">
          {title}
        </div>
    </div>
  );
}
