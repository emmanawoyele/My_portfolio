import React, { Component } from 'react';



class HomePage extends Component {
    state = {  }

   
    render()
     {
        const menu_opener={
            background: "black",
            position: "absolute",
            right: "0%",
            zIndex: "20",
            padding: "10px",
            top:"0"
        
           
            } 
        return ( 
            <div>
                
       <div className="menu_opener" style={menu_opener} onClick={this.props.menu_opener} >
      <i className="fas fa-bars" style={{fontSize:'30px',color:"white",textAlign:"center"}}></i>
      </div>
            </div>
         );
    }
}
 
export default HomePage;