import React, {Component} from "react"; 
import "./style.css";

import NavBar from "../../templates/NavBar";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

class MoreAbout extends Component {
    state = {

    }

    render() {
        return (
            <body>
                <NavBar />
                <Header />
            <main>
                <h1>Saiba++</h1>
            </main>
                <Footer />
            </body>
        )
    }
}

export default MoreAbout;