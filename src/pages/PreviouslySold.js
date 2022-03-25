import React from "react";
import styled from "styled-components";



export default function PreviouslySold() {
return(
    <body className="landing">
        <br></br>

    <LandingCard>
    <LandingBody>
    <h1>
        Previously sold
    </h1>

    </LandingBody>  
    </LandingCard>
    </body>
);
}

const LandingCard = styled.div`
width:70%;
text-align:center;
margin: 0 auto;
opacity: 85%;
background-color: black;
border-radius: 5px;
color: turquoise;
`
const LandingBody =  styled.div`
padding:30px 30px;
border-radius: 5px;
h1{
    padding: 10px 20px;
    border: solid turquoise 1px;
    border-radius: 5px;
margin: 0;
}
p{
    padding:20px;
    border: solid turquoise 1px;
    border-radius: 5px;
    margin:0;
}

`