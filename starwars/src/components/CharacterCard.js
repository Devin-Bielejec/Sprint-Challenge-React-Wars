import React from "react";
import styled from "styled-components";

const Card = styled.section`
    border: 2px solid white;

    width: 30%;
    height: 10%;
    margin: 2% auto;
    padding: 2%;
    background: white;
`
const Img = styled.img`
    width: 100%;
    height: auto;
`

const Title = styled.h1`
    font-size: 4rem;
    padding: 0;
    margin: 0;
`

export { Card, Img, Title };