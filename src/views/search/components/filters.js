import { Form } from "react-bootstrap";

function Filters() {
    return(
        <aside className="w-25 me-1">

            <Form.Select aria-label="Default select example" id="filter3" className="mb-2">
                <option>Ordenar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="filter" className="mb-2">
                <option>Oficio</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="filter2" className="mb-2">
                <option>Exp</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="filter3" className="mb-2">
                <option>Departamento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" id="filter3" className="mb-2">
                <option>Barrio</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </aside>
    );
}

export default Filters;