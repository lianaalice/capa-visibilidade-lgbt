import React from "react";
import "./style.css";

import Button from "../Button";

const Filters = ({
  filtersResponse,
  filterClick

}) => {
  return (
    <div className="filtersBox">
      {filtersResponse.map((item, index) => ( 
        
        <Button 
        key={`${index + 1} --filter`}
        id={item}
        classBtn={`${item} filter--btn`} 
        onClick={filterClick} 
        text={item} />
      ) )}
      {/* <Button classBtn="purple-hover filter--btn" onClick={filterClick} text="Trabalho" />
      <Button classBtn="green-hover filter--btn" onClick={filterClick} text="Acolhimento" />
      <Button classBtn="blue-hover filter--btn" onClick={filterClick} text="Enem" />
      <Button classBtn="pink-hover filter--btn" onClick={filterClick} text="Tecnologia" />
      <Button classBtn="orange-hover filter--btn" onClick={filterClick} text="Cultura" />
      <Button classBtn="gold-hover filter--btn" onClick={filterClick} text="TODAS" /> */}
    </div>
  );
};

export default Filters;
