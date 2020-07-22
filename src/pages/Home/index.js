import React, { Component } from "react";
import "./style.css";

import api from "../../services/api"

import NavBar from "../../templates/NavBar";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

import AboutBox from "../../components/AboutBox";
import YoutubeSection from "./YoutubeSection";
import BixaSapaTrans from "./BixaSapaTrans";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";



class Home extends Component {
    constructor(props){
    super(props)
    
    this.state = {
        onChange: "",
        data: [],
        filters: [
            "Educação",
            "Trabalho",
            "Acolhimento",
            "Enem",
            "Tecnologia",
            "Cultura", 
            "TODAS"
        ],
        error: ""
    };
}


  getApi = async () => {
    const res = await api.get("/");
    this.setState({data: res.data});
 }


 componentDidMount() {
     this.getApi()    
  }


  onChange = (e) => {
    const value = e.target.value;
    this.setState({onChange: value})
  };

  onClick = async () => {
    const { onChange, data } = this.state;

    if (onChange && data.length) {
        try { 
            const searchResult = await data.filter(item => 
            item.type.toLowerCase().includes(onChange.toLowerCase())) 
        
            this.setState({onChange: "", error: "", data: searchResult}) 
        } catch (err) {
            this.setState({error:"Nada foi encontrado na busca", onChange: "" })
        }
    }   else {
            this.setState({error:"digite algo para procurar", onChange: "" })
    }
  };


  handleFilters = (e) => {
    const {data} = this.state;
    const value = e.target.id.toLowerCase();
    if(value === "todas") {
        this.setState({data, error:""})
        return;
    }
    const result = data.filter((item) => {
        return item.type.toLowerCase().includes(value);
    })

    console.log( "result do data-filter: " ,result)
    if (result.length === 0) {
        this.setState({
            data: [], 
            error:"não foram encontrados projetos"
        })
    }   else {
        this.setState({
            data: result,
            error: ""
        })
    }

  }


  render() {
    const { data , error , filters } = this.state;

    return (
      <body>
        <NavBar />
        <Header />
        <main className="main--containers">
          <div className="firstSections--container">
            <AboutBox />
            <YoutubeSection />
          </div>
          <BixaSapaTrans />
          <div className="lastSections--container">
            <SearchBar 
            onClickSearch={this.onClick}
            onChange={this.onChange}
            filterClick={this.handleFilters}
            filtersResponse={filters}
            />
            <ProjectCard
            cardData= {data}
            error={error}
            />
          </div>
        </main>
        <Footer />
      </body>
    );
    }
  }


export default Home;
