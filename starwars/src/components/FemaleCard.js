import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Img, Title } from "./CharacterCard";
import femalePic from "../images/female.jpg";
import axios from "axios";

const Female = styled(Card)`
    color: red;
    border-radius: 75px;
    border: 1px dashed red;
    box-shadow: -10px -10px;
`
const FemaleTitle = styled(Title)`
    font-family: cursive;
`



const FemaleCard = (props) => {
    const name = props.character.name;
    const gender = props.character.gender;
    const hairColor = props.character["hair_color"];
    const eyeColor = props.character["eye_color"];

    //set a default one, getting the other one from Upsplash API
    const [pic, setPic] = useState(false);

    useEffect( () => {
        axios.get("https://source.unsplash.com/1600x900/?female,face")
        .then(res => setPic(res.request.responseURL))
        .catch(err => console.log(`Error: ${err}`))
    }, [pic])

    return(
        <Female>
            <Img src={pic}></Img>
            <FemaleTitle>{name}</FemaleTitle>
            <h3>{`I am a handsome ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</h3>
            <p></p>
        </Female>
    )
}
export { FemaleCard };
