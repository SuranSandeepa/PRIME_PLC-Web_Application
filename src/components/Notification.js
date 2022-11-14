import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Header.css";
import firebaceDb from "../firebase";
import { Card } from "react-bootstrap";

// notifications
const Activities = () => {
  var [Inquaries, setInquries] = useState({});

  useEffect(() => {
    firebaceDb.child("Inquiries").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setInquries({
          ...snapshot.val(),
        });
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f0c8" }}>
      <div
        style={{
          paddingBottom: "5vh",
          paddingTop: "4vh",
          paddingLeft: "20vh",
          paddingRight: "20vh",
        }}
      >
        <h3>Inquiry</h3>
        {Object.keys(Inquaries).map((id) => {
          return (
            <div key={id}>
              {Inquaries[id].inquiry !== "" && (
                <div
                  style={{
                    paddingTop: "1vh",
                    paddingLeft: "3vh",
                    paddingRight: "70vh",
                  }}
                >
                  <Card className="cad">
                    <Card.Header>
                      Order No : {Inquaries[id].purchaseNo}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Product Id : {Inquaries[id].productname}
                      </Card.Title>
                      <Card.Text>
                        Product Name : {Inquaries[id].suppliername}
                      </Card.Text>
                      <Card.Text>Inquiry : {Inquaries[id].inquiry}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
