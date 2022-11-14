import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Header.css";
import firebaceDb from "../firebase";
import Header from "./Header";

// view Activities
const Activities = () => {
  var [ProductObjects, setProductObjects] = useState({});

  useEffect(() => {
    firebaceDb.child("orders").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setProductObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          paddingBottom: "5vh",
          paddingTop: "10vh",
          paddingLeft: "20vh",
          paddingRight: "20vh",
          backgroundColor: "AEAEAE",
        }}
      >
        {/* retrieve orders made by site managers  */}
        <Table striped bordered hover style={{ borderColor: "#ed7829" }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Site Name</th>
              <th>Site Manager</th>
              <th>Site Contact</th>
              <th>Item Name</th>
              <th>Suplier Name</th>
              <th>Total Price</th>
              <th>Item Ordered</th>
              <th>Item Delivered</th>
              <th>Item Held</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {/* mapping order table components */}
            {Object.keys(ProductObjects).map((id) => {
              return (
                <tr key={id}>
                  <td> {ProductObjects[id].orderId} </td>
                  <td> {ProductObjects[id].date}</td>
                  <td> {ProductObjects[id].companyName}</td>
                  <td> {ProductObjects[id].username}</td>
                  <td> {ProductObjects[id].phone}</td>
                  <td> {ProductObjects[id].productname} </td>
                  <td> {ProductObjects[id].suppliername}</td>
                  <td> {ProductObjects[id].totalbill}</td>
                  <td> {ProductObjects[id].numberofunitorder}</td>
                  <td> {ProductObjects[id].numoforderdeliver}</td>
                  <td> {ProductObjects[id].numoforderretrive}</td>
                  <td> {ProductObjects[id].orderstatus}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Activities;
