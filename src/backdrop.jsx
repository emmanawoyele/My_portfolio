import React from "react"
const Backdrop=(props)=>(
    props.show?<div onClick={props.menu_opener}className="backdrop"></div>:null
    )
    
    export default Backdrop