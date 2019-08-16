import React from "react";
import styled from "styled-components";

const Card = styled.section`
    border: 2px solid white;

    width: 50%;
    margin: 2% auto;

    ${props => (props.gender === "male") ? `color: black` : null}
    ${props => (props.gender === "female") ? `color: red` : null}
    ${props => (props.gender === "n/a") ? `color: brown` : null}
}
`


const CharacterCard = (props) => {
    const name = props.character.name;
    console.log(props.character);

    return(
        <Card gender={props.character.gender} name={name}>
            <div>
                <img src={}></img>
            </div>
            <h1>{name}</h1>
            <h3>{`I am a handsome ${props.character.gender} with gorgeous ${props.character["hair_color"]} and beautiful ${props.character["eye_color"]} eyes.`}</h3>
            <p></p>
        </Card>
    )
}

export { CharacterCard, Card };