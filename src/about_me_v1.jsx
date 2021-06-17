
function About(props){
  
 
    return( 
        <div>
              <div className="main"> 
       <div className="about_me" >
           <div className="aboutMe">
               <div className="profile_title">
               <h1>About Me</h1>
               </div>
           <div className="profile_icon"><i class="fas fa-user-alt"></i></div>
           </div>
       </div>
       <div className="profile-des">
          <div className="profile_title_des">
              <h1>FrontEnd Developer</h1>
              <p> I'm a Self-Taught Developer And a Passionate Learner With
            The Ability To Create Responsive Websites Using HTML,
             CSS, And Javascript and React.
            I'm Comfortable To Work In 
            a team Or Individually.
           
          </p>
          
           </div>
          <div>
          {props.p}
              </div> 
          </div>
          
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17181B" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,176C384,171,480,85,576,48C672,11,768,21,864,26.7C960,32,1056,32,1152,58.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
        </div>
        
  )
     
    
}
export default About