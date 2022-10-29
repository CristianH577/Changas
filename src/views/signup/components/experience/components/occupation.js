import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Occupation(props) {
    return(
        <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example" name={props.id}>
                <option>Oficio</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" name={props.id + "-exp"}>
                    <option>Experiencia</option>
                    <option value="1">Menos de 1</option>
                    <option value="2">+1</option>
                    <option value="3">+5</option>
                    <option value="3">+10</option>
            </Form.Select>
        </InputGroup>
    );
}

export default Occupation;