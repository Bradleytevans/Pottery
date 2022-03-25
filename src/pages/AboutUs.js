import React from "react";
import styled from "styled-components";



export default function Landing() {
return(
    <body className="landing">
        <br></br>

    <LandingCard>
    <LandingBody>
    <h1>
        Pottery
    </h1>
    <p>
        Handcrafted pieces made with love and care. 
    </p>
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
box-shadow: 0px 0px 1px 1px;
color: turquoise;
`
const LandingBody =  styled.div`
padding: 15px 15px;
border-radius: 5px;

h1 {
  padding: 15px 20px;
  border: solid turquoise 1px;
  border-radius: 5px;
}
p {
  padding: 20px;
  border: solid turquoise 1px;
  border-radius: 5px;
  margin: 0;
}

`