import React, { useState, useEffect } from "react";
import firebaceDb from "../firebase";
import { Card, Button } from "react-bootstrap";
import Header from "./Header";

const AccountingProfileview = () => {
  var [profilesObjects, setprofilesObjects] = useState({});
  // Get profiles
  useEffect(() => {
    firebaceDb.child("profiles").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setprofilesObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#AEAEAE" }}>
      <Header />
      <div style={{ paddingTop: "3vh" }}>
        <a href="/Accounting">
          {" "}
          <Button variant="outline-light">Back </Button>
        </a>
      </div>
      <div
        style={{
          paddingBottom: "5vh",
          paddingTop: "4vh",
          paddingLeft: "20vh",
          paddingRight: "20vh",
        }}
      >
        {Object.keys(profilesObjects).map((id) => {
          return (
            <div key={id}>
              {profilesObjects[id].role == "Account Manager" && (
                <div
                  style={{
                    paddingTop: "1vh",
                    paddingLeft: "3vh",
                    paddingRight: "50vh",
                  }}
                >
                  <h3 data-testid="accountingrole">
                    {profilesObjects[id].role} Profile{" "}
                  </h3>
                  <Card className="cad">
                    <Card.Header> Account Manager</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        firstname : {profilesObjects[id].firstname}
                      </Card.Title>

                      <Card.Title>
                        lastname: {profilesObjects[id].lastname}
                      </Card.Title>
                      <Card.Text>email : {profilesObjects[id].email}</Card.Text>
                      <Card.Text>
                        <h6 data-testid="role">
                          role:{profilesObjects[id].role}{" "}
                        </h6>
                      </Card.Text>
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
export default AccountingProfileview;
