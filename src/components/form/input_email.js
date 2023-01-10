import { Form } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/form.json'

function InputEmail(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        <Form.Group className={props.class}>

            <Form.Label className='d-flex'>
                {text[lang].label_email}: {props.active !== false && props.required && '*'}
                
                {props.active === false && props.default &&
                
                    <div className='fw-normal ps-1'>
                        {props.default}
                    </div>

                }
            </Form.Label>

            {props.active !== false &&

                <Form.Control 
                aria-label={text[lang].label_email}
                name='email'
                type='email'
                placeholder={text[lang].label_email} 
                defaultValue={props.default && props.default}
                required={props.required && true}
                onChange={handleOnChange}
                />
                
            }

        </Form.Group>
    )
}

export default InputEmail