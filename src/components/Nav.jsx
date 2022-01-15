import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul className = "nav">
                    <li className="nav-item"><Link className="nav-Link" to="/">Pradinis</Link></li>
                    <li className="nav-item"><Link className="nav-Link" to="/favourites">Favourites</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;