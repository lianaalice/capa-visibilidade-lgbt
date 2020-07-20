import React from "react"; 
import "./style.css"; 

const Input = ({value, placeholder, onChange}) => {
    return (
        <input 
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        />
        
        
    )
}

export default Input;