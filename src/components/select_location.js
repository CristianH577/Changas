import { Form, InputGroup } from "react-bootstrap";
import listLocation from "../json/location.json";
import { configContext } from '../context/config_context'
import { useState, useContext, useEffect } from "react";

function SelectLocation(props) {
  const config = useContext(configContext)
  const [dpt, setDpt] = useState('')
  const [ngb, setNgb] = useState('')

  useEffect(() => {
    if(props.selected) {
      setDpt(props.selected[0])
      setNgb(props.selected[1])
    }
  }, [props])

  const optionsDpt = listLocation.map((item, idx) => 
    <option key={idx} value={item.department} selected={item.department === dpt && true}>
      {item.department}
    </option>
  )

  const optionsNgb = listLocation.map((item) => 
    item.department === dpt && item.municipalities.map((item, idx) => 
      <option key={idx} value={item} selected={item === ngb && true}>
        {item}
      </option>
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
    <div className={props.class}>
      { props.label && <Form.Label>{props.label}{props.required && '*'}</Form.Label> }
      
      <InputGroup>
        <Form.Select 
          aria-label={config.text.signup.dpt} 
          name="department" 
          onChange={handleOnChangeDpt} 
          required={props.required ? true : false}
          className={props.classSelect}
        >
          <option value="">{config.text.signup.dpt}</option>
          {optionsDpt}
        </Form.Select>
        <InputGroup.Text className={props.classSelect}>-</InputGroup.Text>
        <Form.Select 
          aria-label={config.text.signup.ngb} 
          name="ngb" 
          onChange={handleOnChangeNgb}
          required={props.required ? true : false}
          className={props.classSelect}
        >
          <option value="">{config.text.signup.ngb}</option>
          {optionsNgb}
        </Form.Select>
      </InputGroup>
    </div>
  );
}

export default SelectLocation;