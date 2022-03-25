import React from "react";
import styled from "styled-components";
import { Carousel, Card } from "react-bootstrap";
import One from "../images/36784.jpeg";
import Two from "../images/36786.jpeg";
import Three from "../images/36788.jpeg";
import Four from "../images/36790.jpeg";
import Five from "../images/36792.jpeg";
import Six from "../images/36795.jpeg";
import Seven from "../images/36798.jpeg";

export default function Landing() {
  return (
    <body>
      <LandingCard>
        <LandingBody>
          <h1>Welcome to The White Water Potter!</h1>
          <CarouselCard>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={One} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Two} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Three} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Four} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Five} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Six} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Seven} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </CarouselCard>
          <p>Handcrafted pieces made with love and care.</p>
        </LandingBody>
      </LandingCard>
    </body>
  );
}

const LandingCard = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  opacity: 85%;
  background-color: black;
  border-radius: 5px;
  color: turquoise;
`;
const LandingBody = styled.div`
  padding: 15px 15px;
  h1 {
    padding: 15px 20px;
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }
  p {
    padding: 20px;
    margin: 0;
  }
`;
const CarouselCard = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  opacity: 85%;
  background-color: black;
  border-radius: 5px;

  color: white;
`;
