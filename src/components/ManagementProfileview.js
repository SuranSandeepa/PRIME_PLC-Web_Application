import React, { useState, useEffect } from "react";
import firebaceDb from "../firebase";
import { Card, Button } from "react-bootstrap";
import Header from "./Header";

const ManagementProfileview = () => {
  var [profilesObjects, setprofilesObjects] = useState({});
  //Get Profiles of management
  useEffect(() => {
    firebaceDb.child("profiles").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setprofilesObjects({
          ...snapshot.val(),
        });
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#AEAEAE", paddingLeft: "3vh" }}>
      <Header />
      <div style={{ paddingTop: "3vh" }}>
        <a href="/manageractivity">
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
        <h3>User Details</h3>
        {Object.keys(profilesObjects).map((id) => {
          return (
            <div key={id}>
              {profilesObjects[id].role == "Management" && (
                <div
                  style={{
                    paddingTop: "1vh",
                    paddingLeft: "3vh",
                    paddingRight: "50vh",
                  }}
                >
                  <Card className="cad">
                    <Card.Header> Management</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Firstname: {profilesObjects[id].firstname}
                      </Card.Title>

                      <Card.Title>
                        Lastname: {profilesObjects[id].lastname}
                      </Card.Title>
                      <Card.Text>Email : {profilesObjects[id].email}</Card.Text>
                      <Card.Text>Role : {profilesObjects[id].role}</Card.Text>
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
export default ManagementProfileview;
