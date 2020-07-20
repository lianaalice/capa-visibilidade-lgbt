import React from "react"; 
import "./style.css"; 

const Title = ({ Tag, content, className}) => {
    return (
        <Tag className={className}> {content} </Tag>
    )
}

export default Title;