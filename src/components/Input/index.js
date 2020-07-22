import React from "react"; 
import "./style.css"; 

const Input = ({value, placeholder, onChange, className}) => {
    return (
        <input 
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        className={className}
        />
        
        
    )
}

export default Input;