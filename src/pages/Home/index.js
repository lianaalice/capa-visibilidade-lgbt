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
        inputValue: "",
        data: [],
        dataFilter: [],
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
    const response = await api.get("/projects"); 
    this.setState({data: response.data, dataFilter: response.data });
 }


 componentDidMount() {
     this.getApi()    
  }


  onChange = (e) => {
    const value = e.target.value;
    this.setState({inputValue: value})
  };

  onClick = async () => {
    const { inputValue, data } = this.state;
    

    if (inputValue && data.length) {
        try { 
            const searchResult = await data.filter(item => 
            item.type.toLowerCase().includes(inputValue.toLowerCase()) || item.from.toLowerCase().includes(inputValue.toLowerCase()) ) 
        
            this.setState({inputValue: "", error: "", dataFilter: searchResult}) 
        } catch (err) {
            this.setState({error:"Nada foi encontrado na sua busca", inputValue: "", dataFilter: [] })
        }
    }   else {
            this.setState({error:"digite algo para fazer a pesquisa", inputValue: "" , dataFilter: [] })
    }
  };


  handleFilters = (e) => {
    const { data } = this.state;
    const value = e.target.innerText.toLowerCase();
    if(value === "todas") {
        this.setState({dataFilter: data, error:""})
        return;
    }
    const result = data.filter((item) => {
        return item.type.toLowerCase().includes(value);
    })

    if (result.length === 0) {
        this.setState({
            dataFilter: [], 
            error:"não foram encontrados projetos"
        })
    }   else {
        this.setState({
            dataFilter: result,
            error: ""
        })
    }

  }


  render() {
    const { dataFilter , error , filters, inputValue } = this.state;

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
            <div className="bgOpacity">
            <SearchBar 
            onClickSearch={this.onClick}
            onChange={this.onChange}
            value={inputValue}
            filterClick={this.handleFilters}
            filtersResponse={filters}
            />
            <ProjectCard
            cardData= {dataFilter}
            error={error}
            />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    );
    }
  }


export default Home;
