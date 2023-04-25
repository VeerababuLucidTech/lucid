import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TableOffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TCS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Table data here
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Example() {
  return (
    <div>
      {['end'].map((placement, idx) => (
        <TableOffCanvas key={idx} placement={placement} name={placement} />
      ))}
    </div>
  );
}

// render(<Example />);
export default Example;