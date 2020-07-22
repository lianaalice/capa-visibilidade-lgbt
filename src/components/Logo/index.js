import React from "react";
import "./style.css";

import logoSrc from "../../assets/logo.png";
import { Link } from "react-router-dom";



const Logo = () => {

  return (
    <Link to="/">
      <img
        className="navLogo"
        src={logoSrc}
        alt="logotipo de guarda-chuva cujo corpo são as letras L G B T"
      />
    </Link>
  );
};

export default Logo;
