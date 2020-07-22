import React from "react";
import "./style.css"

import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";


const YoutubeSection = () => {
  return ( 
  <section >
    <Title Tag="h2" content="Bota a cara ao sol Bi" className="sectionTitle"/>
    <Paragraph 
    classP="sectionParagraph" 
    text= "Cidadania => Tire a capa da invisibilidade e conheça um pouco melhor a realidade LGBT"  
      />
   <div className="cards--container"> 
    <div className="card">
      <Title Tag="h3" content="#naoemimimi"/>
      <iframe
        width="410"
        height="320"
        src="https://www.youtube.com/embed/6Xr2TFK5smc"
        frameborder="1"
        title="nao é mimimi"
        allowfullscreen
      ></iframe>
      <Paragraph classP="cardParagraph" text="Para conhecer melhor o grupo Mães pela Diversidade" />
      <a href="https://maespeladiversidade.org.br/" rel="noopener noreferrer" target="_blank">Clique aqui</a>
    </div>
    <div className="card">
      <Title Tag="h3" content="O que é transfobia??"/>
      <iframe
        width="410"
        height="320"
        src="https://www.youtube.com/embed/srimY0YtfrA"
        frameborder="0"
        title="o que é transfobia?"
        allowFullScreen
      ></iframe>
      <Paragraph classP="cardParagraph" text="Para conhecer melhor o trabalho e o trabalho feito por Cidadania Trans"/>
      <a href="https://www.cidadaniatrans.com/" rel="noopener noreferrer" target="_blank">Clique aqui</a>
    </div>
    </div>
    </section>
  )
    }
export default YoutubeSection;
