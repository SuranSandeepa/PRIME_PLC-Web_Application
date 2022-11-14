import React, { useState } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Header.css";
import { Card, Button } from "react-bootstrap";
import Header from "./Header";

// Home view
const Main = () => {
  return (
    <div style={{ backgroundColor: "#AEAEAE" }}>
      <Header />
      <div
        style={{ paddingBottom: "5vh", paddingTop: "5vh", paddingLeft: "3vh" }}
      >
        <a href="/Profile">
          <Button variant="outline-light">Register</Button>
        </a>

        <Container>
          <Row>
            <Col style={{ paddingLeft: "5vh", paddingTop: "15vh" }}>
              <Card
                style={{ width: "35rem", height: "21rem", borderRadius: "5vh" }}
              >
                <div style={{ paddingLeft: "10vh" }}>
                  <Card.Body>
                    <br />
                    <Card.Title>
                      <h2>Login To The System</h2>
                    </Card.Title>
                    <br />
                    <Card.Subtitle className="mb-2 text-muted">
                      <h5>Continue As :</h5>
                    </Card.Subtitle>
                    <br />

                    <center>
                      <a href="/manageractivity">
                        <Button variant="outline-dark">Manager</Button>
                      </a>
                      {"   "}
                      <a href="/Accounting">
                        <Button variant="outline-dark">Accountant</Button>
                      </a>
                      <br />
                      <br />
                      <a href="/activities">
                        {" "}
                        <Button variant="outline-dark">
                          Site Manager Orders
                        </Button>
                      </a>
                      {"   "}
                      <a href="/supplier">
                        <Button variant="outline-dark">Supplier</Button>
                      </a>
                    </center>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col>
              <div style={{ paddingBottom: "5vh", paddingTop: "5vh" }}>
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.dribbble.com/users/527451/screenshots/3115734/safetynow_frame1-drib.gif"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
