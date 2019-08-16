import React from "react";
import styled from "styled-components";

const Card = styled.section`
    border: 2px solid white;
`


const CharacterCard = (props) => {
    const name = props.name;

    return(
        <Card>
            <h1>{name}</h1>
        </Card>
    )
}

export default CharacterCard;