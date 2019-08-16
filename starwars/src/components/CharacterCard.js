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

export { Card };