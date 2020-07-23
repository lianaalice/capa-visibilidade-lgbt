import React from "react";
import "./style.css";

import Title from "../Title";
import Paragraph from "../Paragraph";

import { Link } from "react-router-dom";

const HomeAboutBox = () => {
  return (
    <section className="aboutBox--container">
      <Title
        Tag="h1"
        className="mainTitle"
        content="Capa da Visibilidade LGBTQIA++"
      />
      <Paragraph
        classP="aboutBox--content"
        text="Esse web-site tem a ideia de dar visibilidade à projetos sociais que apoiem e incentivem pessoas gays, lésbicas, bissexuais, transgêneros, travestis, queer, intersexuais, assexuais dentre outras que estejam em situação de vulnerabilidade e/ou buscando oportunidades para aprender coisas novas, sustentar-se e viver no Brasil. 
LGBTQIA++  => { cores em meio a um mundo acostumado ao preto e branco }..."
      />
      <Link className="aboutLink" to="/saibamais">Saiba ++ </Link>

    </section>
  );
};

export default HomeAboutBox;
