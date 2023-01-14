import SkillsCard from "./SkillsCard"
import SkillsData from "./SkillsData"
import SkillsStyle from './Skills.module.scss';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

function Skills() {
  return (
    <>
   <Navbar />
    <div className={SkillsStyle.skills_container}>
          <div className={SkillsStyle.skillsBox_container}>
             <div className={SkillsStyle.skills_box1}></div>
                <h1 className={SkillsStyle.skills_header}>MY SKILLS</h1>
             <div className={SkillsStyle.skills_box2}></div>
          </div> 
          
          <div className={SkillsStyle.skills}>
               {SkillsData.map((skill)=>{
                 return (
                  <SkillsCard
                     skill={skill}
                  />
               );})}
          </div>
   </div>
    <Footer />
   </>
  );
}

export default Skills;
