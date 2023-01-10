import { Form, InputGroup } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/form.json'

function InputPhone(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        <Form.Group className={props.class}>

            <Form.Label className='d-flex'>
                {text[lang].label_phone}: {props.active !== false && props.required && '*'}
                
                {props.active === false && props.default &&
                
                    <div className='fw-normal ps-1'>
                        {props.default[0] + ' - ' + props.default[1]}
                    </div>

                }
            </Form.Label>

            {props.active !== false &&

                <InputGroup>
                    <Form.Control 
                    aria-label={text[lang].prefix}
                    name='prefix' 
                    type='number'
                    placeholder={text[lang].prefix} 
                    defaultValue={props.default && props.default[0]}
                    required={props.required && true}
                    onChange={handleOnChange}
                    />

                    <InputGroup.Text className={props.classSelect}>-</InputGroup.Text>

                    <Form.Control 
                    aria-label={text[lang].number}
                    name='number'
                    type='number'
                    placeholder={text[lang].number} 
                    defaultValue={props.default && props.default[1]}
                    required={props.required && true}
                    onChange={handleOnChange}
                    ></Form.Control>
                </InputGroup>

            }

        </Form.Group>
    )
}

export default InputPhone