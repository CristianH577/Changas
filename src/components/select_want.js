import { Form } from "react-bootstrap";

function SelectWant(props) {

  const handleOnChange = (e) => {
    if(props.onChange) props.onChange(e)
  }

  return(
    <Form.Select 
      name="want" 
      className={props.className} 
      onChange={handleOnChange}
      required={props.required ? true : false}
  >
      <option value="">Busco</option>
      <option value="work">Trabajar</option>
      <option value="employ">Emplear</option>
  </Form.Select>
  );
}

export default SelectWant;