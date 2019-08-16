import React from "react";
import { CharacterCard } from "./CharacterCard";

const CharacterList = (props) => {
    console.log(props.characters);
    const characters = props.characters;

    return(
        <div>
            {characters.map( (char) => {
                return <CharacterCard character={char}/>
            })}
        </div>
    )
}

export default CharacterList;