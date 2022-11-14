import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

//Add new supplier to the system
const Suplierform = (props) => {
  const initiatFieldvalues = {
    suppliername: "",
    supplieraddress: "",
    contactno: "",
  };
  var [values, setvalues] = useState(initiatFieldvalues);

  useEffect(() => {
    if (props.currentId == "")
      setvalues({
        ...initiatFieldvalues,
      });
    else
      setvalues({
        ...props.suplierObjects[props.currentId],
      });
  }, [props.currentId, props.suplierObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.alert("Supplier Added");
    props.addOrEdit(values);
  };
  return (
    <div style={{ backgroundColor: "#AEAEAE" }}>
      <h3>Add Supplier:</h3>
      <div style={{ paddingLeft: "8vh" }}></div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="suppliername">
          <Form.Label>Supplier Name : </Form.Label>
          <Form.Control
            type="text"
            style={{ borderColor: "#ed7829" }}
            placeholder="Supplier Name"
            name="suppliername"
            value={values.suppliername}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="supplieraddress">
          <Form.Label>Supplier Address : </Form.Label>
          <Form.Control
            type="text"
            style={{ borderColor: "#ed7829" }}
            placeholder="Supplier Address"
            name="supplieraddress"
            value={values.supplieraddress}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactno">
          <Form.Label>Supplier Contact Number : </Form.Label>
          <Form.Control
            type="text"
            style={{ borderColor: "#ed7829" }}
            placeholder="Supplier Contact Number"
            name="contactno"
            value={values.contactno}
            onChange={handleInputChange}
          />
        </Form.Group>

        <input
          className="btn btn-primary btn-block"
          style={{ backgroundColor: "#ed7829", borderColor: "black" }}
          type="submit"
          value={props.currentId == "" ? "Add Supplier" : " update"}
        />
      </Form>
    </div>
  );
};
export default Suplierform;
