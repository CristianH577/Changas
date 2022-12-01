import { Form } from "react-bootstrap";
import occsList from "../json/occsList.json";

function SelectOcc(props) {

  const optionsOcc = occsList.map((item) =>
    <option 
      key={item} 
      value={item} 
      disabled={props.disabled && props.disabled[item] ? true : false}
    >
      {item}
    </option>
  )

  const handleOnChange = (e) => {
    if(props.onChange) props.onChange(e)
  }

  return(
    <Form.Select 
      aria-label="Oficio" 
      name={props.name} 
      data-type="occ"
      required={props.required ? true : false}
      onChange={handleOnChange}
      className={props.className}
    >
      <option value="">Oficio{props.required && "*" }</option>
      {optionsOcc}
    </Form.Select>
  );
}

export default SelectOcc;