import React from "react";
import "./style.css";

import Title from "../Title";
import Paragraph from "../Paragraph";
import Button from "../Button";

import { Link } from "react-router-dom";

const AboutBox = () => {
  return (
    <section className="aboutBox--container">
      <Title
        Tag="h1"
        className="mainTitle"
        content="Capa da Visibilidade <br> LGBTQIA++"
      />
      <Paragraph
        classP="aboutBox--Content"
        text="Esse web-site tem a ideia de dar visibilidade à projetos sociais que apoiem e incentivem pessoas gays, lésbicas, bissexuais, transgêneros, travestis, queer, intersexuais, assexuais dentre outras que estejam em situação de vulnerabilidade e/ou buscando oportunidades para aprender coisas novas, sustentar-se e viver no Brasil. 
LGBTQIA++  => { cores em meio a um mundo acostumado ao preto e branco }..."
      />
      <Button
        text="Saiba ++"
        classBtn="aboutBox--btn"
        onClick={ <Link to="/saibamais" />}
      />
    </section>
  );
};

export default AboutBox;
