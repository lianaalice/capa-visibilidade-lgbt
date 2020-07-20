import React from "react"; 
import "./style.css"; 

const Paragraph = ({classP, text}) => {
    return (
        <p className={classP}>{text}</p>
    )
}

export default Paragraph;