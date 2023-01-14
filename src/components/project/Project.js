import ProjectCard from "./ProjectCard"
import ProjectData from "./ProjectData"
import './Project.scss';

function Project() {
  return (
    <div className="Container  projects-container">
       <p className='text-center'>MY PROJECTS</p>
          <div class="projects">
               {ProjectData.map((project)=>{
                 return (
                  <ProjectCard
                     project={project}
                  />
               );})}
          </div>
   </div>
  );
}

export default Project;
