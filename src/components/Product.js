import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Productform from "./Productform";
import firebaceDb from "../firebase";

const Product = () => {
  // Add and edit Products
  const addsOrEdits = (obj) => {
    firebaceDb.child("products").push(obj, (err) => {
      if (err) console.log(err);
    });
  };
  return (
    <div style={{ paddingTop: "5vh", backgroundColor: "AEAEAE" }}>
      <Container>
        <Row>
          <Col>
            <Productform addsOrEdits={addsOrEdits} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Product;
