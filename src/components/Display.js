import React from "react";
import "./style.css";

function Display(props){
    return(
        <div className="Display">
            <p>{props.result}</p>
        </div>
    );
}

export default Display;