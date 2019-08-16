import React from "react";
import { FemaleCard } from "./FemaleCard";

const CharacterList = (props) => {
    console.log(props.characters);
    const characters = props.characters;

    return(
        <div>
            {characters.map( (character) => {
                if (props.character.gender === "male"){
                    return <MaleCard character={character}/>
                } else if (props.character.gender  === "female") {
                    return <FemaleCard character={character}/>
                } else {
                    return <Robot character={character}/>
                }
                
            })}
        </div>
    )
}

export { CharacterList };