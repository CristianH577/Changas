import { useState } from "react";
import { Form } from "react-bootstrap";
import listLocation from "../json/location.json";

function SelectLocation(props) {
  const [dpt, setDpt] = useState("")

  const optionsDpt = listLocation.map((item, idx) => 
    <option key={idx} value={item.department}>{item.department}</option>
  )

  const optionsNgb = listLocation.map((item) => 
    item.department === dpt && item.municipalities.map((ngb, idx) => 
      <option key={idx} value={ngb}>{ngb}</option>
    )
  )

  const handleOnChangeDpt = (e) => {
    setDpt(e.target.value)
    if(props.onChange) props.onChange(e)
    if(props.onChangeDpt) props.onChangeDpt(e)
  }
  const handleOnChangeNgb = (e) => {
    if(props.onChange) props.onChange(e)
    if(props.onChangeNgb) props.onChangeNgb(e)
  }

  return(
    <div className={props.className}>
      { props.label && <Form.Label>{props.label}</Form.Label> }
      <Form.Select 
        aria-label="Departamento" 
        name="department" 
        onChange={handleOnChangeDpt} 
        required={props.required ? true : false}
      >
        <option value="">Departamento</option>
        {optionsDpt}
      </Form.Select>
      <Form.Select 
        aria-label="Municipalidad" 
        name="ngb" 
        className="mt-1" 
        onChange={handleOnChangeNgb}
        required={props.required ? true : false}
      >
        <option value="">Municipalidad</option>
        {optionsNgb}
      </Form.Select>
    </div>
  );
}

export default SelectLocation;