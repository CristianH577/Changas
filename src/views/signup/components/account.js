import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Account() {
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Label>Contraseña</Form.Label>
        <Form.Group className="mb-1" controlId="password">
          <Form.Control type="password" placeholder="Contraseña" autoComplete="off" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordConf">
          <Form.Control type="password" placeholder="Confirmar contraseña" autoComplete="off" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imgProfile">
          <Form.Label>Imagen de perfil</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="primary" type="button">
            Siguiente
          </Button>
        </div>
      </div>
    );
  }
  
  export default Account;
  