import React, { useState, useEffect } from "react";
import { Form, Card } from "react-bootstrap";

const Orderform = (props) => {
  // Add and Edit  Order
  const initiatFieldvalues = {
    username: "",
    orderId: "",
    phone: "",
    date: "",
    companyName: "",
    orderstatus: "",
    suppliername: "",
    productid: "",
    productname: "",
    unitprice: "",
    purchaseNo: "",
    numberofunitorder: "",
    totalbill: "",
    deliverstatus: "",
    numoforderdeliver: "",
    numoforderretrive: "",
  };
  var [values, setvalues] = useState(initiatFieldvalues);

  useEffect(() => {
    if (props.currentIds == "")
      setvalues({
        ...initiatFieldvalues,
      });
    else
      setvalues({
        ...props.orderObjects[props.currentIds],
      });
  }, [props.currentIds, props.orderObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEditz(values);
  };
  return (
    <div style={{ paddingTop: "5vh" }}>
      <Card>
        <div
          style={{
            paddingBottom: "2vh",
            paddingTop: "2vh",
            paddingLeft: "1vh",
            paddingRight: "1vh",
          }}
        >
          {/* side view of the orders submitted for approval */}

          <h3>Site Name : {values.companyName} </h3>

          <h3>Product Name : {values.productname} </h3>

          <h3>Number of units of order : {values.numberofunitorder} </h3>

          <h3>Total Price: {values.totalbill}</h3>

          <h3>Order Status: {values.orderstatus}</h3>
          <br />
          <Form onSubmit={handleFormSubmit}>
            <Form.Control
              as="select"
              custom
              name="orderstatus"
              value={values.orderstatus}
              onChange={handleInputChange}
              data-testid="option"
            >
              <option>Approved</option>

              <option data-testid="o2">Paritially Approved</option>
              <option data-testid="o3">Rejected</option>
            </Form.Control>
            <br />
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value={props.currentId == "" ? "save" : " update"}
            />
          </Form>
        </div>
      </Card>
    </div>
  );
};
export default Orderform;
