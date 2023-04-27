import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import TenantsTable from "../pages/TenantsTable";

function TableOffCanvas({ name, ...props }) {
  const title = {
    name: "Title Comes Here",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={{ width: "70% !important" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body><TenantsTable/></Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Example() {
  return (
    <div>
      {["end"].map((placement, idx) => (
        <TableOffCanvas key={idx} placement={placement} name="Details" />
      ))}
    </div>
  );
}
export default Example;
