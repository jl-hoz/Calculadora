import React from "react";
import "./style.css";

function Button(props){
    return ( 
        <div onClick={() => props.handleClick(props.children)}>
            <p className={props.children === "="  ? "ButtonHeight Button" : (props.children === "0" ? "ButtonWidth Button" : "Button")}>{props.children}</p>
        </div>
    );
}

export default Button;