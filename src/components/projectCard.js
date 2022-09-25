import React from "react";
import "../styles/project.css"

function Card(props){
    return (
        <div className="project card">
            <div className="project image">
                <a href = {`${props.link}`}>
                    <img src ={`${props.image}`} alt={`${props.imageAlt}`} ></img>
                </a>
            </div>
            <div className="project description">
                <p>{props.description}</p>
            </div>
        </div>
    )   
}

export default Card