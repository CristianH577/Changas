import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Personal() {
    return (
      <div>
        <div className="mb-3 row">
          <Form.Label>Nombre</Form.Label>
          <Form.Group className="col-6" controlId="name">
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="col-6" controlId="surname">
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
        </div>

        <div className="mb-3">
          <Form.Label>Localidad</Form.Label>
          <Form.Group controlId="department">
            <Form.Select aria-label="Default select example">
                <option>Departamento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="ngb">
            <Form.Select aria-label="Default select example" className="mt-1">
                <option>Barrio</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="mb-3 row">
          <Form.Label>Telefono</Form.Label>
          <Form.Group className="col-4" controlId="prefix">
            <Form.Control type="number" placeholder="Prefijo(381)" />
          </Form.Group>
          <Form.Group className="col-8" controlId="number">
            <Form.Control type="number" placeholder="Numero(697 0498)" />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" type="button" className="me-2">
            Anterior
          </Button>
          <Button variant="primary" type="button">
            Siguiente
          </Button>
        </div>
      </div>
    );
  }
  
  export default Personal;
  