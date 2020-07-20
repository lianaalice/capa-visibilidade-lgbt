import React from "react";
import "./style.css";

import Button from "../Button";

const Filters = ({
  clickCulture,
  clickEducation,
  clickEnem,
  clickHelp,
  clickTech,
  clickWork,
}) => {
  return (
    <div className="filtersBox">
      <Button classBtn="red filter--btn" onClick={clickEducation} text="Educação" />
      <Button classBtn="purple filter--btn" onClick={clickWork} text="Trabalho" />
      <Button classBtn="green filter--btn" onClick={clickHelp} text="Acolhimento" />
      <Button classBtn="blue filter--btn" onClick={clickEnem} text="Enem" />
      <Button classBtn="pink filter--btn" onClick={clickTech} text="Tecnologia" />
      <Button classBtn="orange filter--btn" onClick={clickCulture} text="Cultura" />
    </div>
  );
};

export default Filters;
