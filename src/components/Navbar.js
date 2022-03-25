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
          The White Water Potter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/Archive" as={NavLink}>
              Archive
            </Nav.Link>
            <Nav.Link to="/AboutUs" as={NavLink}>
              About Us
            </Nav.Link>
            <Nav.Link to="/ContactUs" as={NavLink}>
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