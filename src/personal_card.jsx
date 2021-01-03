import React, { Component } from 'react';
function PersonalCard(props) {
    return(
        <div className="profile_title_des">
            <h1>Information</h1>
           <ul>
               <li><span className="text">Name</span>:<span className="value">Emmanuel Awoyele</span></li>
               <li><span className="text">Email</span>:<span className="value">emmanawoyele@gmail.com</span></li>
               <li><span className="text">Phone</span>:<span className="value">07867483624</span></li>               
               <li><span className="text">Location</span>:<span className="value">East Sussex</span></li>
               
             </ul>   
        </div>
    )
    
}

export default PersonalCard