import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import firebaceDb from "../firebase";
import { Card } from "react-bootstrap";

const Productform = (props) => {
  var [suplierObjects, setsuplierObjects] = useState({});
  // get Suppliers
  useEffect(() => {
    firebaceDb.child("suppliers").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setsuplierObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  // Add new Products to firebase
  const initiatvalues = {
    productid: "",
    productname: "",
    suppliername: "",
    unitprice: "",
    numberofunitorder: "",
    numoforderdeliver: "",
    numoforderretrive: "",
    orderstatus: "",
    deliverstatus: "",
    totalprice: "",
    purchaseNo: "",
    inquiry: "",
  };
  var [values, setvalues] = useState(initiatvalues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.alert("Product added..");
    window.location.reload();
    props.addsOrEdits(values);
  };
  return (
    <div
      style={{
        paddingTop: "1vh",
        paddingBottom: "5vh",
        backgroundColor: "#AEAEAE",
      }}
    >
      <Card>
        <div
          style={{
            paddingBottom: "5vh",
            paddingTop: "5vh",
            paddingLeft: "5vh",
            paddingRight: "5vh",
            backgroundColor: "white",
          }}
        >
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="productid">
              <Form.Label>Product ID : </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="Product ID"
                name="productid"
                value={values.productid}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productname">
              <Form.Label>Product Name : </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="Product name"
                name="productname"
                value={values.productname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="suppliername">
              <Form.Label>Supplier Name : </Form.Label>
              <Form.Control
                as="select"
                custom
                style={{ borderColor: "#ed7829" }}
              >
                {Object.keys(suplierObjects).map((id) => {
                  return (
                    <option style={{ borderColor: "#ed7829" }} key={id}>
                      {suplierObjects[id].suppliername}
                    </option>
                  );
                })}
              </Form.Control>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="Supplier Name"
                name="suppliername"
                value={values.suppliername}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="unitprice">
              <Form.Label>Unit Price : </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="Unit Price"
                name="unitprice"
                value={values.unitprice}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ borderColor: "black", backgroundColor: "#ed7829" }}
            >
              Add Product
            </Button>
            {"  "}
            <a href="/addedproduct">
              <Button variant="warning">View Added Product</Button>
            </a>
          </Form>
        </div>
      </Card>
    </div>
  );
};
export default Productform;
