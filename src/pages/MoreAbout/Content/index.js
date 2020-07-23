import React from "react";
import "./style.css";

import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const Content = () => {
  return (
    <section className="aboutSection">
      <article className="aboutArticle" >
        <Title
          Tag="h1"
          className="aboutArticle--title"
          content= {`LGBTQIA++ ${'\n\r'} { cores em meio ao mundo acostumado com preto e branco }`}
        />
        {/* quebra de linha nao funciona  */}
        <Paragraph
          classP="aboutArticle--p"
          text="Possuir uma sexualidade ou gênero diversos do que é considerado “normal”  na sociedade em que vivemos é lutar contra a corrente de águas que descem por uma cachoeira. Seja na família,  nas amizades, na religião, cultura ou no trabalho optar por assumir-se como se é torna a vida mais complicada e faz com que perdamos oportunidades e apoio das pessoas que acreditamos que iriam nos apoiar. Decepções."
        />
        <Paragraph
          classP="aboutArticle--p"
          text="O estado de “bem-estar” social precisa de um setState(). (Piadinha boba com a função de Javascript que muda de estado no código). "
        />
        <Paragraph
          classP="aboutArticle--p"
          text="O mundo que vivemos hoje é outro e as pautas políticas que muites chamam de identitárias tem ganhado as páginas de jornais, os vídeos de youtube, telas de cinema, netflixes ou githubs. As multiplas formas de existir vem chocando o mundo com sua força e urgência e  graças à conexão global da internet percebemos que  existimos e número maior do que imaginamos, descobrimos que não estamos sós."
        />
        <Paragraph
          classP="aboutArticle--p"
          text="Hoje movimento negro se faz ouvir; o movimento das mulheres se faz ouvir; o movimento LGBT + se faz ouvir."
        />
        <Paragraph
          classP="aboutArticle--p"
          text="Mas apesar de tudo isso seguimos sendo um grupo marginalizado. LGBTs  seguem sendo expulses de casa, da escola ou do ambiente de trabalho ao assumir a sexualidade ou gênero, ou passando por violências, preconceitos e constrangimentos que não recaem sobre as pessoas que se auto-rotulam como “normais”.  A exclusão, o ódio e o medo segue recaindo sobre os corpos que destoam da normatividade."
        />
        <Paragraph
          classP="aboutArticle--p"
          text="Capa da Visibilidade surge como um site para que sejamos vistas / vistes / vistos, para que encontremos espaços de apoio e acolhimento em meio a um país que ainda precisa de muitas mudanças e melhoras.  Diferentemente da capa do Harry Potter, estamos cansades de nos esconder, cansades de não poder existir ou ter nossa história abafada nos contos de principes e princesas do mundo a fora. Vamos divulgar os projetos que apoiem a diversidade e a pluralidade humana."
        />
        <Paragraph
          classP="aboutArticle--p"
          text="Chegou a hora do arco-íris ter vez, voz e cor. Ocupar os espaços. Transformar a realidade em magia."
        />
      </article>
      <article className="aboutArticle">
      <Title
          Tag="h2"
          className="aboutArticle--title"
          content= {`Agradecimentos ${'\n\r'} & Futuro do projeto`}
        />

      <Paragraph
          classP="aboutArticle--p"
          text="Gostaria de agradecer muito à {Reprograma} pelo apoio que me deu durante esses 5 meses de bootcamp no qual aprendi demais e conheci mulheres maravilhosas. À professora Mellina Yonashiro e a todas minhas colegas pelo apoio durante essa semana de elaboração do projeto. Ao Eduardo Persch por me ajudar na construção do logotipo e banner do site e às pessoas que alimentaram a página freepic.com de onde eu tirei a maioria dos fundos de tela do site"
        />
              <Paragraph
          classP="aboutArticle--p"
          text="Caso alguém tenha interesse em participar do projeto fiquem a vontade para entrar em contato comigo, sejam outras desenvolvedoras, ou designers ou criadoras de conteúdo para a página."
        />
              <Paragraph
          classP="aboutArticle--p"
          text="Este site foi o Mínimo Produto Viável com ideias, conteúdos, design e funcionalidades que pude elaborar nessas últimas semanas, mas é meu desejo seguir trabalhando nele e criar novos conteúdos para aumentar ainda mais a visibilidade dessa capa. Beijas pra vcs."
        />
      </article>
    </section>
  );
};

export default Content;
