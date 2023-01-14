import './ProjectCard.scss';


export default function ProjectCard( { project }) {
  const { id, title , desc ,  image, tools } = project
  
  return (
    <div className="ProjectCard" id={id}>
        <div class="card">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
            <div>
               <button>{tools.javascript}</button>
               <button>{tools.cssFramework}</button>
               <button>{tools.api}</button>
            </div>
          </div>
        </div>
    </div>
  );
}
