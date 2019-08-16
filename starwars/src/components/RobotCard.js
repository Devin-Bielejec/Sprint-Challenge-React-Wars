import React from "react";
import styled from "styled-components";
import { Card } from "./CharacterCard";

const Robot = styled(Card)`
    color: brown;
`

const RobotCard = (props) => {
    const name = props.character.name;
    const gender = props.character.gender;
    const hairColor = props.character["hair_color"];
    const eyeColor = props.character["eye_color"];

    return(
        <Robot>
            <div className="image">
                <img src="../images/Robot.jpg"></img>
            </div>
            <h1>{name}</h1>
            <h3>{`I am a handsome ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</h3>
            <p></p>
        </Robot>
    )
}
export { RobotCard };
