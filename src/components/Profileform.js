import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import firebaceDb from "../firebase";
import { Card } from "react-bootstrap";

const Profileform = (props) => {
  // new Profile input
  const initiatvalues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
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
    window.alert("Profile Created..");
    window.location.reload();
    props.addsOrEditprofile(values);
  };
  return (
    <div style={{ paddingTop: "1vh", paddingBottom: "5vh" }}>
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
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>first name : </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="firs tname"
                name="firstname"
                value={values.firstname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>last name: </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="last name"
                name="lastname"
                value={values.lastname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email : </Form.Label>
              <Form.Control
                type="text"
                style={{ borderColor: "#ed7829" }}
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>password : </Form.Label>
              <Form.Control
                type="password"
                style={{ borderColor: "#ed7829" }}
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Register As : </Form.Label>
              <Form.Control
                as="select"
                style={{ borderColor: "#ed7829" }}
                placeholder="role"
                name="role"
                value={values.role}
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option>Management</option>
                <option>Account Manager</option>
              </Form.Control>
            </Form.Group>

            <br />
            <Button
              variant="primary"
              type="submit"
              style={{ borderColor: "black", backgroundColor: "#3B3B3B" }}
            >
              Create Profile{" "}
            </Button>
            {"  "}
          </Form>
        </div>
      </Card>
    </div>
  );
};
export default Profileform;
