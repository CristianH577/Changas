import { Form, InputGroup } from "react-bootstrap"
import listLocation from "../../json/location.json"
import { configContext } from '../../context/config_context'
import { useState, useContext, useEffect } from "react"
import text from '../../lang/components/form.json'

function SelectLocation(props) {
  const config = useContext(configContext)
  const lang = config.lang.value

  const [dpt, setDpt] = useState('')

  useEffect(() => {
    if(props.default) {
      setDpt(props.default[0])
    }
  }, [props])

  /* ELEMENTS */
  const optionsDpt = listLocation.map((item, idx) => 
    <option key={idx} value={item.department} >
      {item.department}
    </option>
  )

  const optionsNgb = listLocation.map((item) => 
    item.department === dpt && item.municipalities.map((item, idx) => 
      <option key={idx} value={item}>
        {item}
      </option>
    )
  )

  /* FUNCTIONS */
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
    <Form.Group className={props.class}>

      <Form.Label className='d-flex'>
        {text[lang].label_location}: {props.active !== false && props.required && '*'}
          
        {props.active === false && props.default &&
        
          <div className='fw-normal ps-1'>
            {props.default[0] + ' - ' + props.default[1]}
          </div>

        }
      </Form.Label>

      {props.active !== false &&

        <InputGroup>
        
          <Form.Select 
            aria-label={text[lang].label_dpt} 
            name="department" 
            onChange={handleOnChangeDpt} 
            required={props.required && true}
            defaultValue={props.default && props.default[0]}
          >
            <option value="">{text[lang].label_dpt}</option>
            {optionsDpt}
          </Form.Select>

          <InputGroup.Text>-</InputGroup.Text>

          <Form.Select 
            aria-label={text[lang].label_ngb} 
            name="ngb" 
            onChange={handleOnChangeNgb}
            required={props.required && true}
            defaultValue={props.default && props.default[1]}
          >
            <option value="">{text[lang].label_ngb}</option>
            {optionsNgb}
          </Form.Select>

        </InputGroup>

      }

    </Form.Group>
  );
}

export default SelectLocation;