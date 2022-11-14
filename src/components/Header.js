import React, { useState } from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import "./Header.css";

// Header 
const Header = () => {
  return (
    <div>
      <Navbar className="navi" expand="lg" style={{ paddingBottom: "2vh" }}>
        <Container>
          <img
            width="200px"
            src="  https://res.cloudinary.com/iplus/image/upload/v1665755330/SPM/111_nwzf59.png"
            alt="Second slide"
          />
          <Navbar.Brand style={{ paddingTop: "1vh" }}>
            <h3>
              <b>Prime PLC</b>
            </h3>
            <center>
              <h6 data-testid="head">Procument Management System</h6>
            </center>
          </Navbar.Brand>
          <a href="/">
            <Button variant="outline-light">LogOut</Button>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
