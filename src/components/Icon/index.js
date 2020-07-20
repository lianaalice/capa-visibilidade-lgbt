import React from "react"; 
import "./style.css"; 

const Icon = ({iconAlt, iconSrc}) => {
    return (
        <img src={iconSrc} alt={iconAlt} />
    )
}

export default Icon;