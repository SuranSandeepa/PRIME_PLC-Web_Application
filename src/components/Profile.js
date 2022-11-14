import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Profileform from "./Profileform";
import Profileview from "./ManagementProfileview";
import firebaceDb from "../firebase";

const Product = () => {
  // Add Profiles to the system
  const addsOrEditprofile = (obj) => {
    firebaceDb.child("profiles").push(obj, (err) => {
      if (err) console.log(err);
    });
  };
  return (
    <div
      style={{
        paddingTop: "5vh",
        paddingLeft: "3vh",
        paddingBottom: "17vh",
        backgroundColor: "#AEAEAE",
      }}
    >
      <a href="/">
        <Button variant="outline-dark">Back</Button>
      </a>
      <Container>
        <Row>
          <Col>
            <Profileform addsOrEditprofile={addsOrEditprofile} />
          </Col>
          <Col>
            <div style={{ paddingBottom: "5vh", paddingTop: "5vh" }}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/iplus/image/upload/v1633330618/CSSE/7VVJ_xumgap.gif"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Product;
