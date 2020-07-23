import React, {Component} from "react"; 
import "./style.css";

import NavBar from "../../templates/NavBar";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

import Content from "./Content";

class MoreAbout extends Component {
    state = {

    }

    render() {
        return (
            <body>
                <NavBar />
                <Header />
            <main>
                <Content />
            </main>
                <Footer />
            </body>
        )
    }
}

export default MoreAbout;