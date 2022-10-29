import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Job(props) {
    return(
        <div className="row mb-3">
          <FormGroup className="col-6">
            <Form.Control 
              aria-label="Default select example" 
              placeholder="Nombre"
              name={props.id + props.index + "-name"}
            />
          </FormGroup>

          <FormGroup className="col-6">
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Precio"
                name={props.id + props.index + "-price"}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup className="col-12 mt-1">
            <Form.Control 
              as="textarea"
              placeholder="Descripcion"
              rows="3"
              style={{resize: "none"}}
              name={props.id + props.index + "-desc"}
              />
          </FormGroup>
        </div>
    );
}

export default Job;