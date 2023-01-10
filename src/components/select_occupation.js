import { Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import occsList from "../json/occsList.json";

function SelectOccupation(props) {

    /* OCCS */
    const optionsOcc = occsList.map((item) =>
        <option 
            key={item} 
            value={item} 
            disabled={props.disabled[item] && true}
        >
            {item}
        </option>
    )

    /* EXP */
    const valuesExp = ['-1', '+1', '+5', '+9']
    const optionsExp = valuesExp.map((item) =>
        <option key={item} value={item} >
            {item}
        </option>
    )

    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }
    const handleDelete = (e) => {
        if(props.delete) props.delete(e)
    }

    return(
        <InputGroup className="">
            <Form.Select 
                aria-label="Oficio" 
                name={props.name} 
                data-type="occ"
                required={props.required ? true : false}
                onChange={handleOnChange}
                defaultValue={props.occ}
            >
                <option value="">Oficio{props.required && "*" }</option>
                {optionsOcc}
            </Form.Select>

            <Form.Select 
                name="exp"
                data-type="exp"
                required={props.required ? true : false}
                onChange={handleOnChange} 
                defaultValue={props.exp}
            > 
                <option value="">Experiencia{props.required && "*" }</option>
                {optionsExp}
            </Form.Select>

            { props.id !== "main" && 
                <Button 
                    variant="danger" 
                    type="button" 
                    onClick={handleDelete}
                >-</Button>
            }
        </InputGroup>
    );
}

export default SelectOccupation;