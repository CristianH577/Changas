import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Occupation from "./components/occupation";
import Job from "./components/job";

function Experience() {
    return (
      <div>

        <div className="mb-3">
          <Form.Label>Oficios</Form.Label>
          <Occupation id="occ" />
        </div>

        <div className="mb-3">
          <Form.Label>Suboficios</Form.Label>
          <Occupation id="subOcc-select" />
          <Button variant="info" type="button">
            +
          </Button>
        </div>

        <div className="mb-3">
          <Form.Label>Muestras</Form.Label>
          <Form.Control type="file" multiple />
        </div>

        <div className="mb-3">
          <Form.Label>Trabajos de oficio</Form.Label>
          <Job id="occ-job-" index="" />
          <Button variant="info" type="button">
            +
          </Button>
        </div>

        <div className="mb-3">
          <Form.Label>Trabajos de suboficio</Form.Label>
          <Job className="subjob" id="subOcc-job-" index="" />
          <Button variant="info" type="button">
            +
          </Button>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" type="button" className="me-2">
            Anterior
          </Button>
          <Button variant="primary" type="submit" className="me-2">
            Enviar
          </Button>
        </div>

      </div>
    );
  }
  
  export default Experience;
  