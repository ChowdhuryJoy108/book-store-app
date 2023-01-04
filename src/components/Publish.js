
import React from "react";
import "./Publish.css"

const Publish = (props) => {
   const {image} = props.publication
   
    
    console.log(props.publication)
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" style={{width:"100%", height:"250px"}} src={image} alt=""/>
    
  </div>
    );
};

export default Publish;