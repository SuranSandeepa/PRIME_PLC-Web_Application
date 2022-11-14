import React, { useState, useEffect } from "react";
import firebaceDb from "../firebase";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";

const Productview = () => {
  var [ProductObjects, setProductObjects] = useState({});
  // Get Products
  useEffect(() => {
    firebaceDb.child("products").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setProductObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "5vh", paddingLeft: "4vh" }}>
        <a href="/Accounting">
          <Button variant="outline-secondary">Back</Button>
        </a>{" "}
        <div
          style={{ paddingTop: "5vh", paddingLeft: "4vh", paddingRight: "5vh" }}
        >
          <h1 data-testid="heading">Added products:</h1>
          <div
            style={{
              paddingLeft: "10vh",
              paddingRight: "10vh",
              paddingTop: "5vh",
            }}
          >
            {/* view the added products */}
            <Table striped bordered hover style={{ borderColor: "black" }}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Supplier Name </th>
                  <th>Unit Price </th>
                </tr>
              </thead>
              <tbody>
                {/* mapping products from the table */}
                {Object.keys(ProductObjects).map((id) => {
                  return (
                    <tr>
                      <td>{ProductObjects[id].productid}</td>
                      <td>{ProductObjects[id].productname}</td>
                      <td>{ProductObjects[id].suppliername}</td>
                      <td>{ProductObjects[id].unitprice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productview;
