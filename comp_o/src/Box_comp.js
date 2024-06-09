import React from "react";

function Box(props){
    return(
        <div className="box">
            <p className="name">{props.name}</p>
            <p>{props.dept}</p>
            <p>{props.position}</p>
        </div>
    )
}

export default Box