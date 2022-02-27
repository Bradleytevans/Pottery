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
width:70vh;
text-align:center;
margin: 0 auto;
opacity: 85%;
background-color: black;
border-radius: 5px;

color: white;
`
const LandingBody =  styled.div`
padding:30px 30px;
box-shadow: 5px 5px grey;
border-radius: 5px;

h1{
    padding: 20px 30px;
    border: solid white 1px;
    border-radius: 5px;

}
p{
    padding:20px;
    border: solid white 1px;
    border-radius: 5px;
    margin:0;
}

`