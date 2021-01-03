import React,{Component}from 'react';
import {Link} from 'react-router-dom';

class SideNavbarContainer extends Component {
    state = {  }
    render() {
      const showBar =this.props.hideBar
      if(showBar===true){
return    <div className="side_bar_nav">
              
<div className="profile_image">
           <div className="profile_name">
               <h1>{this.props.profile_name}</h1>
           </div>
       </div>
       <ul className="menu_list">
         
     <li>
       <Link className="menu_link"  to="/"><span><i class="fas fa-home"></i></span>  Home</Link> 
     </li>
     <li>
    <Link className="menu_link" to="/about_me"> <span><i class="fas fa-user-alt"></i></span> About me</Link>
     </li>
     <li>

   <Link className="menu_link" to="/portfolio"><span><i class="fas fa-briefcase"></i></span> Portfolio</Link>  
     </li>
     <li>
    <Link className="menu_link" to="/contact"><span><i class="fas fa-envelope"></i></span>Blog</Link> 
     </li>
     
     <li className="time_date">
     <span style={{paddingRight:"3px"}}>&copy;</span>{this.props.date}
   </li>
 </ul>


   </div>

      }
        return ( 
            
        <div>
          {showBar}
        </div>
         );
    }
}
 
export default SideNavbarContainer;