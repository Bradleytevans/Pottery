import React from "react";
import { Navbar, Container, Nav, Button, ToggleButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function Navibar() {

  return (
    <NavbarCon>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          White Water Pottery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/Previously-Sold" as={NavLink}>
              Previously Sold
            </Nav.Link>
            <Nav.Link to="/About-Us" as={NavLink}>
              About Us
            </Nav.Link>
            <Nav.Link to="/Contact-Us" as={NavLink}>
              Contact Us
            </Nav.Link>
            <Nav.Link to="/Store" as={NavLink}>
              Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </NavbarCon>
  );
}

const NavbarCon = styled.div`
width: 100%
color: turquoise;
`;