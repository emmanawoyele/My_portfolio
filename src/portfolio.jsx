import React from "react"
function Portfolio(props) {
    return(
        <div className='main' >
            <div className="about_me" >
           <div className="aboutMe">
               <div className="profile_title">
               <h1>Portfolio</h1>
               </div>
           <div className="profile_icon"><i class="fas fa-briefcase"></i></div>
           </div>
       </div>
           <div className="portfolio_heading "  >
               <ul onClick={props.clickHandler}>{props.portfolio_header}</ul>
           </div>
           <div className="project_container">
         {props.projectComp}
           </div>
           
        </div>
    )
    
}

export default Portfolio