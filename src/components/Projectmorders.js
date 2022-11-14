import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Orderform from "./Orderform";
import firebaceDb from "../firebase";
import { Table } from "react-bootstrap";
import Header from "./Header";

const Projectmorders = () => {
  var [orderObjects, setorderObjects] = useState({});
  var [currentIds, setCurrentIds] = useState("");

  const addOrEditz = (obj) => {
    if (currentIds == "")
      firebaceDb.child("orders").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentIds("");
      });
    else
      firebaceDb.child(`orders/${currentIds}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentIds("");
      });
  };
  useEffect(() => {
    firebaceDb.child("orders").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setorderObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  const onDelete = (key) => {
    if (window.confirm("Are You Shure To Delete this Order ? ")) {
      firebaceDb.child(`orders/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentIds("");
      });
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Orderform {...{ addOrEditz, currentIds, orderObjects }} />
          </Col>
          <Col style={{ paddingTop: "15vh" }}>
            {/* requisition order view for the manager for edit or delete */}
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Site Name </th>
                  <th>Supplier Name</th>
                  <th>Product Name</th>
                  <th>Number of units of the order </th>
                  <th>Total Price </th>
                  <th>Order Status </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* mapping requisition orders from table */}
                {Object.keys(orderObjects).map((id) => {
                  return (
                    <tr>
                      <td>{orderObjects[id].companyName}</td>
                      <td>{orderObjects[id].suppliername}</td>
                      <td>{orderObjects[id].productname}</td>
                      <td>{orderObjects[id].numberofunitorder}</td>
                      <td>{orderObjects[id].totalbill}</td>
                      <td>{orderObjects[id].orderstatus}</td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentIds(id);
                        }}
                      >
                        <i className="fas fa-pen-alt"></i>
                      </a>

                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Projectmorders;
