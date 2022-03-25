import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import styled from "styled-components";

//Pages
import PreviouslySold from "./pages/PreviouslySold";
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
      <BrowserRouter>
        <StyledApp className="App">
          <StyledNavbarWrapper>
            <Navbar />
          </StyledNavbarWrapper>
          <StyledContentWrapper>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Previously-Sold" element={<PreviouslySold />} />
              <Route path="/About-Us" element={<AboutUs />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/Contact-Us" element={<ContactUs />} />
            </Routes>
          </StyledContentWrapper>
        </StyledApp>
      </BrowserRouter>
  );
}

const StyledApp = styled.div``;

const StyledNavbarWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div``;
