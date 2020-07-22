import React from "react";
import "./style.css";

import Title from "../../../components/Title";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Filters from "../../../components/Filters";

const SearchBar = ({
  onClickSearch,
  onChange,
  value,
  filtersResponse, 
  filterClick
}) => {
  return (
    <section className="searchSection">
      <Title
        Tag="h2"
        content="Visibilidade() => { Buscas }"
        className="searchTitle"
      />
      <div className="searchBox">
        <Input
          value={value}
          onChange={onChange}
          className="searchInput"
          placeholder="Busque por projetos aqui"
        />
        <Button text="Procurar" classBtn="searchBtn" onClick={onClickSearch} />
      </div>
      <Filters
      filtersResponse={filtersResponse}
      filterClick={filterClick}
      />
    </section>
  );
};

export default SearchBar;
