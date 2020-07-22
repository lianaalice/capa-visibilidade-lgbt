import React from "react";
import "./style.css";

import Icon from "../../../components/Icon";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import bookIcon from "../../../assets/book-icon.png";
import helpIcon from "../../../assets/help-icon.png";
import workIcon from "../../../assets/work-icon.png";

const BixaSapaTrans = () => {
  return (
    <section className="section--container">
        <Title Tag="h2" content="Realidades BixaSapaTrans & Projetos para destacar" className="bixaTitle" />
        <div className="content--container">
      <Title Tag="h3" content="Oportunidade na Educação" className="contentTitle" />
      <div className="contentBox--container">
        <Icon iconSrc={bookIcon} iconAlt="icone com um livro" />
        <Paragraph
          text="A ideia é evidenciar espaços gratuítos que dão suporte para o desinvolvimento educacional de LGBTs. Segundo a “Pesquisa Nacional Sobre o Ambiente Educacional no Brasil 2016”, feita pela ABGLT, 73% dos alunos LGBT+ já sofreram agressões verbais devido sua orientação sexual e 68% por conta de sua identidade de gênero. A maioria das escolas não têm projetos que tratem de machismo e LGBTfobia, o que aumenta a evasão escolar."
          classP="contentBox--paragraph"
        />
      </div>
      <Title Tag="h3" content="Oportunidade de Trabalho" className="contentTitle" />
      <div className="contentBox--container">
        <Icon
          iconSrc={workIcon}
          iconAlt="icone com um ferramentas - trabalho"
        />

        <Paragraph text="Mostrar ferramentas onde empresas que pensam e reforçam a diversidade em seu ambiente de trabalho divulgam suas vagas. Segundo pesquisa feita pelas empresas Linkedin e Opinion Box em 2019: 35% dos entrevistados LGBT+ afirmaram ter sofrido algum tipo de discriminação no ambiente de trabalho. O preconceito faz com que muitas pessoas não se assumam, e outras acabem por ter de abandonar o trabalho. 90% das travestis e mulheres trans tem de recorrer ao trabalho com prostituição segundo dados da ANTRA." classP="contentBox--paragraph" />
      </div>
      <Title Tag="h3" content="Espaços de Acolhimento" className="contentTitle" />
      <div className="contentBox--container">
        <Icon iconSrc={helpIcon} iconAlt="icone com mãos - ajuda" />
  <Paragraph text={`Divulgar espaços, iniciativas e casas de acolhimento para população LGBTQIA+! Junto ao machismo e ao racismo, a LGBTfobia é uma das maiores causas de violência no mundo. Segundo a ONG Grupo Gay da Bahia é registrado um assassinato de LGBT a cada 25 horas e segundo a ONG Transgender Europe o Brasil é o país que mais mata travestis e transexuais no mundo. Um dos problemas mais comuns enfrentados é a violência familiar, sendo muitas LGBTs expulsas de suas casas e tornando-se moradoras de rua, e as vezes perdendo completamente o contato familiar.`} classP="contentBox--paragraph" />
      </div>
        </div>
    </section>
  );
};

export default BixaSapaTrans;
