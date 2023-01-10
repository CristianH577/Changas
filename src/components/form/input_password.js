import { Form } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/form.json'

function InputPassword(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        <Form.Group className={props.class}>

            <Form.Label className='d-flex'>
                {text[lang].label_pass}: {props.active !== false && props.required && '*'}
            </Form.Label>

            <Form.Control 
                aria-label={text[lang].label_pass}
                name='password'
                type='password'
                autoComplete="false"
                placeholder={text[lang].label_pass} 
                required={props.required && true}
                onChange={handleOnChange}
            ></Form.Control>

        </Form.Group>
    )
}

export default InputPassword