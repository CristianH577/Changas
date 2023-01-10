import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { IconContext } from "react-icons";
import { BsMoon, BsSun, BsGear } from 'react-icons/bs';

import { configContext } from '../../../../../context/config_context'
import Cookies from "universal-cookie";

function Config() {
  const config = useContext(configContext)
  const cookies = new Cookies()

  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  const dark = ['dark', 'white', 'light', 'black']
  const light = ['light', 'black', 'dark', 'white']

  const changeStyle = (bool) => {
    switch (bool) {
      case true:
        setChecked(true)
        config.style.set(dark)
        cookies.set('style', 'dark', { path: '/' })
        break;
      case false:
        setChecked(false)
        config.style.set(light)
        cookies.remove('style', { path: '/' })
        break;
      default:
        setChecked(!checked)
        if(checked){
          config.style.set(light)
          cookies.remove('style', { path: '/' })
        }else{
          config.style.set(dark) 
          cookies.set('style', 'dark', { path: '/' })
        }
        break;
    }
  }

  useEffect(() => {
    config.style.value[0] === 'dark' ? setChecked(true) : setChecked(false)

    cookies.get('style') === 'dark' ? setChecked(true) : setChecked(false)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <button className='border-0 bg-transparent position-absolute end-0 m-1' style={{height: '-webkit-fill-available'}}>
        <IconContext.Provider value={{ size: "1.6em" }} >
            <BsGear onClick={() => setShow(true)} />
        </IconContext.Provider>
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className={config.style.value[0]}>
        <Offcanvas.Header closeButton closeVariant={checked ? 'white' : null}>
          <Offcanvas.Title>{config.text.nav.configTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form.Select 
              value={config.lang.value} 
              onChange={(e) => config.lang.set(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
                <option value="es">Español</option>
                <option value="en">English</option>
            </Form.Select>

            <Form.Select
              className="mt-2"
              style={{ cursor: 'pointer' }}
              disabled
            >
                <option value="18">{config.text.nav.fs}</option>
                <option value="sm">Chica</option>
                <option value="md">Mediana</option>
                <option value="lg">Grande</option>
            </Form.Select>

            <div className="mt-2 d-flex justify-content-end">
              <IconContext.Provider value={{ size: "2.2em" }}>
                <BsSun 
                  className={"m-1"}
                  onClick={() => changeStyle(false) } 
                />
              </IconContext.Provider>
              <Form.Check 
                reverse
                type="switch"
                className="my-1 d-flex justify-content-center fs-5"
                checked={checked}
                onChange={changeStyle}
              />
              <IconContext.Provider value={{ size: "2em" }}>
                <BsMoon 
                  className={"m-1" }
                  onClick={() => changeStyle(true) }
                />
              </IconContext.Provider>
            </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Config;