import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { CharacterList } from "./components/CharacterList";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 5rem;
  &:hover{
    color: red;
  }
`

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    axios
    .get("https://swapi.co/api/people/")
    .then(res => {

      setCharacters(res.data.results);

    })
    .catch(err => console.log(`Error: ${err}`));
    

  }, []);

  return (
    <div className="App">
      <PageTitle className="Header">React Wars</PageTitle>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;

