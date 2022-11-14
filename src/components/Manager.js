import React, { useState } from "react";
import { Tab, Tabs, Button } from "react-bootstrap";
import "./Header.css";
import Header from "./Header";
import Projectmorders from "./Projectmorders";
import Activities from "./Activities";
const Accounting = () => {
  const [key, setKey] = useState("home");
  return (
    <div style={{ backgroundColor: "#AEAEAE", paddingBottom: "22vh" }}>
      <Header />
      <div
        style={{
          paddingLeft: "178vh",
          paddingBottom: "1vh",
          paddingTop: "1vh",
        }}
      >
        <a href="/pmanagement">
          <Button variant="outline-success">Profile</Button>
        </a>
      </div>
      <Tabs
        style={{ backgroundColor: "#AEAEAE" }}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title=" Requisition - Approve Orders">
          <Projectmorders />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Accounting;
