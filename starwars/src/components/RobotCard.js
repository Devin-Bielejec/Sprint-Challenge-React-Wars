import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Img } from "./CharacterCard";
import axios from "axios";

const Robot = styled(Card)`
    color: brown;
`

const RobotCard = (props) => {
    const name = props.character.name;
    const gender = props.character.gender;
    const hairColor = props.character["hair_color"];
    const eyeColor = props.character["eye_color"];

    //set a default one, getting the other one from Upsplash API
    const [pic, setPic] = useState(false);

    useEffect( () => {
        axios.get("https://source.unsplash.com/1600x900/?robot")
        .then(res => setPic(res.request.responseURL))
        .catch(err => console.log(`Error: ${err}`))
    }, [pic])

    return(
        <Robot>
            <div className="image">
                <Img src={pic}></Img>
            </div>
            <h1>{name}</h1>
            <h3>{`I am a handsome ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</h3>
            <p></p>
        </Robot>
    )
}
export { RobotCard };
