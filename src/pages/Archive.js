import React from "react";
import styled from "styled-components";



export default function Archive() {
return(
    <body className="landing">
        <br></br>

    <LandingCard>
    <LandingBody>
    <h1>
        An archive of past collections and sold pieces.
    </h1>

    </LandingBody>  
    </LandingCard>
    </body>
);
}

const LandingCard = styled.div`
width:80%;
text-align:center;
margin: 0 auto;
opacity: 85%;
background-color: black;
color: turquoise;
`
const LandingBody =  styled.div`
padding:30px 30px;
h1{
    padding: 10px 20px;
    margin: 0;
}
p{
    padding:20px;
    margin:0;
}

`