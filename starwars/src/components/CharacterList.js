import React from "react";
import { FemaleCard } from "./FemaleCard";
import { MaleCard } from "./MaleCard";
import { RobotCard } from "./RobotCard";
import styled from "styled-components";

const Display = styled.section`
    display: flex;
    flex-flow: row wrap;
`

const CharacterList = (props) => {
    console.log(props.characters);
    const characters = props.characters;

    return(
        <Display>
            {characters.map( (character) => {
                if (character.gender === "male"){
                    return <MaleCard character={character}/>
                } else if (character.gender  === "female") {
                    return <FemaleCard character={character}/>
                } else {
                    return <RobotCard character={character}/>
                }
                
            })}
        </Display>
    )
}

export { CharacterList };