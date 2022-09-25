import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <div className="navigation">
                <Link to="/" className="nav portfolio">PORTFOLIO</Link>
                <Link to="/resume" className="nav resume">RESUME</Link>
            </div>
        </div>
    )
}

export default Navbar