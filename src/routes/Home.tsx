import React from "react";
import styled from "styled-components";

const Container = styled.div`
     color: ${props => props.theme.accentColor};

`


export default function Home () {
    return (
       <Container>Home</Container>
    )
}


