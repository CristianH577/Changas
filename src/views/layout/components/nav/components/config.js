import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { IconContext } from "react-icons";
import { GrConfigure } from 'react-icons/gr';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect } from 'react';

function Config({mode, setMode}) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    //checked ? setMode(["dark", "white"]) : setMode(["ligth", "black"])
  }, [])

  return (
    <>
      <button className='border-0 bg-transparent position-absolute end-0 m-1'>
        <IconContext.Provider value={{ size: "1.5em" }}>
            <GrConfigure onClick={() => setShow(true)} className={mode[0]} />
        </IconContext.Provider>
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
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

            <div className="mt-2 d-flex justify-content-end">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <BsSun className="m-1" />
              </IconContext.Provider>
              <Form.Check 
                reverse
                type="switch"
                className="my-1 d-flex justify-content-center"
                checked={checked}
                onChange={(e) => {
                  setChecked(!checked)
                  !checked ? setMode(["dark", "white"]) : setMode(["ligth", "black"])
                }}
              />
              <IconContext.Provider value={{ size: "1.4em" }}>
                <BsMoon className="m-1" />
              </IconContext.Provider>
            </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Config;