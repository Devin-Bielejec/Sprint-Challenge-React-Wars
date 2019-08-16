import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { CharacterList } from "./components/CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    axios
    .get("https://swapi.co/api/people/")
    .then(res => {

      console.log(res);
      setCharacters(res.data.results);

    })
    .catch(err => console.log(`Error: ${err}`));
    

  }, []);

  console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;

/* 

Component where I map over people to display cards
-will need props.people

Component - create the card
-will need props.person

*/
