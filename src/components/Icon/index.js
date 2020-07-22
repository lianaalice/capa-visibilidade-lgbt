import React from "react"; 
import "./style.css"; 

const Icon = ({iconAlt, iconSrc}) => {
    return (
        <img className="icon" src={iconSrc} alt={iconAlt} />
    )
}

export default Icon;