import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Suplierform from "./Suplierform";
import firebaceDb from "../firebase";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Supliers = () => {
  var [suplierObjects, setsuplierObjects] = useState({});
  var [currentId, setCurrentId] = useState("");

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaceDb.child("suppliers").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaceDb.child(`suppliers/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };
  useEffect(() => {
    firebaceDb.child("suppliers").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setsuplierObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  const onDelete = (key) => {
    if (window.confirm("Are You Shure To Delete this Supplier ? ")) {
      firebaceDb.child(`suppliers/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#AEAEAE",
          color: "black",
          paddingTop: "8vh",
          paddingBottom: "10vh",
          paddingLeft: "4vh",
        }}
      >
        <a href="/">
          <Button variant="outline-dark">Back</Button>
        </a>

        <Container>
          <Row>
            <Col>
              <Suplierform {...{ addOrEdit, currentId, suplierObjects }} />
            </Col>
            <Col>
              <div style={{ paddingLeft: "8vh" }}>
                <h3 data-testid="supheading">Suppliers:</h3>
              </div>
              <div style={{ paddingLeft: "7vh", paddingTop: "5vh" }}>
                {/* supplier details retrieve */}
                <Table striped bordered hover style={{ border: "black" }}>
                  <thead>
                    <tr>
                      <th>Supplier Name</th>
                      <th>Supplier Address</th>
                      <th>Contact Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* mapping data from supplier table */}
                    {Object.keys(suplierObjects).map((id) => {
                      return (
                        <tr key={id}>
                          <td>{suplierObjects[id].suppliername}</td>
                          <td>{suplierObjects[id].supplieraddress}</td>
                          <td>{suplierObjects[id].contactno}</td>
                          <td>
                            <a
                              className="btn text-primary"
                              onClick={() => {
                                setCurrentId(id);
                              }}
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a
                              className="btn text-danger"
                              onClick={() => {
                                onDelete(id);
                              }}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Supliers;
