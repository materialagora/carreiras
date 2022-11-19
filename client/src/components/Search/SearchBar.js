import React, { useState } from "react";
 import "./SearchBar.css";
import HeroesJson from "../../HeroesJson.json";
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons/lib";

function SearchBar() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [test, setTex] = useState();
   
  
  
  function AutoCompleteInput(valorAtual) {
    
    setSearchCharacter(valorAtual.name)
      let arrayMeu2 = valorAtual
      setTex(arrayMeu2)
    console.log(test)
  }

  return (
   
    <div className="SearchBar">  
      <div className="BoxInput">
        <IconContext.Provider value={{ color: "#cccccc", size: "30px"}}>
        <GoSearch />
        <input
          id="searchInput"
          type="text"
          placeholder="Pesquisa herois"
          value={searchCharacter}
          onChange={(event) => {
            setSearchCharacter(event.target.value);
          }}
          className="searchInput"
        />
        </IconContext.Provider>
      </div>
      <div className="dataResult">
        {HeroesJson.data
          .filter((value) => {
            if (searchCharacter == "") {
              return value;
              
            } else if (
              value.name.toLowerCase().includes(searchCharacter.toLowerCase())
            ) {
              return value;
            }
          })
          .map((valorAtual, index) => {
            return (
              
                <div className="dataItem" key={index} onClick={() => AutoCompleteInput(valorAtual)}>
                <img className="dataImagen"src={valorAtual.images.sm} />
                <div className="boxInfo">
                <p className="dataText"> nome : {valorAtual.name}</p>
                <p className="dataText"> slug : {valorAtual.slug}</p>
                <p className="dataText"> intelligence : {valorAtual.powerstats.intelligence}</p>
                <p className="dataText"> strength : {valorAtual.powerstats.strength}</p>
                </div>
                </div>
               
            );
          })}
      </div>
       
      
    </div>
  );
}

export default SearchBar;
