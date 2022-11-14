import React, { useState } from "react";
import { Tab, Tabs, Button } from "react-bootstrap";
import Header from "./Header";
import Supliers from "./Supliers";
import Product from "./Product";

const Accounting = () => {
  const [key, setKey] = useState("home");

  return (
    <div style={{ backgroundColor: "AEAEAE" }}>
      <Header />
      <div
        style={{
          paddingLeft: "178vh",
          paddingBottom: "1vh",
          paddingTop: "1vh",
        }}
      >
        <a href="/paccountinh">
          <Button variant="outline-success">Profile</Button>
        </a>
      </div>
      {/* Accountant page home tab implemenation */}
      <Tabs
        style={{ backgroundColor: "AEAEAE" }}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="profile" title="Add Products">
          <Product />
        </Tab>
        <Tab eventKey="home" title="Add Suppliers">
          <Supliers />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Accounting;
