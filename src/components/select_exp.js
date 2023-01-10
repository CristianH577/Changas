import { Form } from "react-bootstrap";

function SelectExp(props) {

  const handleOnChange = (e) => {
    if(props.onChange) props.onChange(e)
  }

  return(
    <Form.Select 
      name="exp"
      data-type="exp"
      required={props.required ? true : false}
      onChange={handleOnChange} 
      className={props.className}
    > 
      <option value="">Experiencia{props.required && "*" }</option>
      <option value="-1">Menos de 1</option>
      <option value="+1">+1</option>
      <option value="+5">+5</option>
      <option value="+9">+9</option>
    </Form.Select>
  );
}

export default SelectExp;