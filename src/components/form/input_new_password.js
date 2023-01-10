import { Form } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/form.json'

function InputNewPassword(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        <Form.Group className={props.class}>

            <Form.Label className='d-flex'>
                {text[lang].label_new_pass}: {props.active !== false && props.required && '*'}
            </Form.Label>

            <Form.Control 
            aria-label={text[lang].label_new_pass}
            name='password_new'
            type='password'
            autoComplete="false"
            placeholder={text[lang].label_new_pass} 
            required={props.required && true}
            onChange={handleOnChange}
            className='mb-2'
            ></Form.Control>

            <Form.Control 
            aria-label={text[lang].pass_conf}
            name='password_conf'
            type='password'
            autoComplete="false"
            placeholder={text[lang].pass_conf} 
            required={props.required && true}
            onChange={handleOnChange}
            ></Form.Control>


        </Form.Group>
    )
}

export default InputNewPassword