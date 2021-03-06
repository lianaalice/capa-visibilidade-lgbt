import React from "react"; 
import "./style.css"; 

const Button = ({onClick, text, classBtn}) => {
    return (
        <button className={`${classBtn} btn`} onClick={onClick}>{text}</button>
    )
}

export default Button;