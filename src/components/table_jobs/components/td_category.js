import { Form } from "react-bootstrap";
import categories from "../../../json/occsList.json";
import { useContext } from "react"
import { configContext } from '../../../context/config_context'
import text from '../../../lang/components/table_jobs.json'

function TdCategory(props) {
  const config = useContext(configContext)
  const lang = config.lang.value
  
  const optionsOcc = categories.map((item) =>
    <option 
      key={item} 
      value={item} 
      disabled={props.disabled && props.disabled[item] && true }
    >
      {item}
    </option>
  )

  const handleOnChange = (e) => {
    if(props.onChange) props.onChange(e)
  }

  return(
    props.active === false
    ?
    props.default
    :
    <Form.Select 
      aria-label={text[lang].label_cat}
      name='category' 
      required={props.required && true}
      onChange={handleOnChange}
      defaultValue={props.default}
    >
      <option value="">{text[lang].label_cat}{props.required && "*" }</option>
      {optionsOcc}
    </Form.Select>
  );
}

export default TdCategory;