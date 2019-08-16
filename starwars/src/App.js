import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState();

  useEffect( () => {
    const getCharacters = () => {
      axios
      .get("https://swapi.co/api/people/")
      .then(res => {

        console.log(res);
        setCharacters(res.data.results);

      });
    }

    getCharacters();

  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
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
