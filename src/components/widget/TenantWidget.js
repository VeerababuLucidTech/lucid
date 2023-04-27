import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TenantWidget() {
  return (
    <div className="d-flex mb-3 ">
      <div className="p-2 flex-fill">
        <h6>Total Accounts</h6>
        <h4>2000</h4>
      </div>
      <div className="p-2 flex-fill">
        <h6>Active Accounts</h6>
        <h4>1341</h4>
        <h4></h4>
      </div>
      <div className="p-2 flex-fill">
        <h6>Inactive Accounts</h6>
        <h4>1234</h4>
        <h4></h4>
      </div>
      <div className="p-2 flex-fill">
        <h6>Paid</h6>
        <h4>1234</h4>
        <h4></h4>
      </div>
      <div className="p-2 flex-fill">
        <h6>Free</h6>
        <h4>1234</h4>
        <h4></h4>
      </div>
    </div>
  );
}

export default TenantWidget;
