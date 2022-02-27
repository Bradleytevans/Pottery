import React from "react";
import styled from "styled-components";
import { Carousel, Card } from "react-bootstrap";
import One from "../images/1.jpg";
import Two from "../images/2.jpg";
import Three from "../images/3.jpg";
export default function Landing() {
  return (
    <body>
      <br></br>

      <LandingCard>
        <LandingBody>
          <h1>Welcome to Pottery!</h1>
        </LandingBody>
      </LandingCard>
      <br></br>
      <CarouselCard>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={One} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Two} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Three} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselCard>
      <br></br>
    </body>
  );
}

const LandingCard = styled.div`
  width: 70vh;
  text-align: center;
  margin: 0 auto;
  opacity: 85%;
  background-color: black;
  border-radius: 5px;

  color: white;
`;
const LandingBody = styled.div`
  padding: 30px 30px;
  box-shadow: 5px 5px grey;
  border-radius: 5px;

  h1 {
    padding: 20px 30px;
    border: solid white 1px;
    border-radius: 5px;
  }
  p {
    padding: 20px;
    border: solid white 1px;
    border-radius: 5px;
    margin: 0;
  }
`;
const CarouselCard = styled.div`
  width: 100vh;
  text-align: center;
  margin: 0 auto;
  opacity: 85%;
  background-color: black;
  border-radius: 5px;

  color: white;
`;