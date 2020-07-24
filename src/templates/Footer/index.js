import React from "react"; 
import "./style.css"; 

import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Logo from "../../components/Logo";

import GitHub from "../../assets/github.png";
import Email from "../../assets/email.png";
import Linkedin from "../../assets/linkedin.png";
import Reprograma from "../../assets/reprograma.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer--container">
                <Logo />
                <div className="footerBox--section">

                    <ul className="footer--listBox">
                        <li className="footer--listItem"> <a className="link--decoration" href="https://linkedin.com/in/liana-alice/" target="_blank" rel="noopener noreferrer"> <img className="footerIcons" src={Linkedin} alt="linkedin icon" />    Linkedin</a></li>
                        <li className="footer--listItem"><a className="link--decoration" href="https://github.com/lianaalice" target="_blank" rel="noopener noreferrer"><img className="footerIcons" src={GitHub} alt="github icon"/>    GitHub</a></li>
                        <li className="footer--listItem"><img className="footerIcons" src={Email} alt="email icon"/> lyannalisse@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <ul className="footerNav">
                        <Link className="navBar--listItem" to="/" ><li>Home</li> </Link>
                        <Link className="navBar--listItem" to="/saibamais"><li>Saiba ++ </li> </Link>
                    </ul>
                </div>
                <div>
               <Title Tag="h4" content="Conheça a Reprograma" className="footerBox--title" />
                    <a className="link--decoration" href="https://reprograma.com.br" target="_blank" rel="noopener noreferrer"><img className="footerIcons" src={Reprograma} alt="reprograma icon" />  <Paragraph text="{Reprograma}" classP="footerText" /></a>
                </div>
            </div>
            <div className="footer--secondContainer">
                <Paragraph text="feito em react por liana alice em meio à pandemia concluindo (infelizmente) o m de maravilhosa que foi A bootcamp da {reprograma}" classP="footerText" />
            </div>
        </footer>
    )
}

export default Footer;