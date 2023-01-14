import HeroStyle from './Hero.module.scss';

function Hero() {
  return (
    <div className={HeroStyle.Hero}>
       <div class="container text-center">
          <div class="row align-items-center">
              <div class="col">
                    <h1 className={HeroStyle.intro}>
                     I am a software engineer with a year experience recognized as a effective and practical developer, experienced in leading cross-functional teams in atime-pressured setting to complete projects on schedule and within budget.
                     </h1>
                 <div className={HeroStyle.btn_container}>
                   <a href='/projects' className={HeroStyle.project_link}>View Project</a>
                   <button className={HeroStyle.resume_btn}>Resume</button>
                 </div>
              </div>
              <div class="col">
               <img src={require("../../assets/ProfilePic.png")} alt ="dev" className={HeroStyle.hero_img}/>
             </div>
        </div>
      </div>
    </div>  
  );
}

export default Hero;
