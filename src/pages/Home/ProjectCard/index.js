import React from "react"; 
import "./style.css";

import Paragraph from "../../../components/Paragraph";

const ProjectCard = ({cardData, error}) => {
    return ( 
        <section >
            <Paragraph text={error} />
    {cardData.map(item => (
            <div key={`${item.id}--card`} className="card--container" >
                <ul className="boxList"> 
                    <li className="itemList"> {item.type} </li>
                    <li className="itemList"> {item.name} </li> 
                    <li className="itemList"> {item.from} </li>
                    <li className="itemList"> <a className="link" href={item.link} alt={item.link} target="_blank" rel="noopener noreferrer">Link para Página Online</a> </li>
                </ul>
                    <section className="descriptionBox">
                        <Paragraph classP="descriptionData" text={item.description} />
                    </section>
            </div>
    ))}
        </section>
    
    )
}

export default ProjectCard;