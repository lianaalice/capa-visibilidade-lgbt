import React from "react"; 
import "./style.css";  

import Logo from "../../components/Logo";
import { Link } from "react-router-dom"; 

const NavBar = () => {
    return (
        <nav className="navBar--container">
            <Logo /> 
            <ul className="navBar--boxList">
            <Link to="/"><li className="navBar--listItem">Home</li></Link>
            <Link to="/saibamais"><li className="navBar--listItem">Saiba ++</li></Link>
            </ul>

        </nav>
    )
}

export default NavBar;