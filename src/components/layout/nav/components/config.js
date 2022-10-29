import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { IconContext } from "react-icons";
import { GrConfigure } from 'react-icons/gr';

function Config() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='border-0 bg-transparent position-absolute end-0 m-1'>
        <IconContext.Provider value={{ size: "1.5em" }}>
            <GrConfigure onClick={handleShow} />
        </IconContext.Provider>
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Configuraciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form.Select aria-label="Default select example" id="lenguage">
                <option>Lenguage</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="fontSize" className="mt-2">
                <option>Font Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Check 
                reverse
                type="switch"
                id="custom-switch"
                label="Modo Oscuro"
                className="mt-2"
            />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Config;