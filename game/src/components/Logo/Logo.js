import React from "react";
import "./Logo.css"

const Logo = props => (
    <div className ="card" onClick={ex => props.clickEvent(ex.target.src)}>
        <img className="card-img-top card-height" src={props.name} alt="" />
    </div>
);

export default Logo;