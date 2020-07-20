import React, {Component} from "react"; 
import "./style.css";

import NavBar from "../../templates/NavBar";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

import AboutBox from "../../components/AboutBox";

class Home extends Component {
    state = {

    }

    render() {

        return (
            <body>
                <NavBar />
                <Header />
            <main>
                <AboutBox />
            </main>
                <Footer />
            </body>
        )
    }
}

export default Home;