import React from "react";
import styled from "styled-components";
import { Card, Img } from "./CharacterCard";
import femalePic from "../images/female.jpg";

const Female = styled(Card)`
    color: red;
`



const FemaleCard = (props) => {
    const name = props.character.name;
    const gender = props.character.gender;
    const hairColor = props.character["hair_color"];
    const eyeColor = props.character["eye_color"];

    return(
        <Female>
            <Img src={femalePic}></Img>
            <h1>{name}</h1>
            <h3>{`I am a handsome ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</h3>
            <p></p>
        </Female>
    )
}
export { FemaleCard };
