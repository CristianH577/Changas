import { Form, InputGroup } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/form.json'

function InputName(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        <Form.Group className={props.class}>

            <Form.Label className='d-flex'>
                {text[lang].label_cognonem}: {props.active !== false && props.required && '*'}
                
                {props.active === false && props.default &&
                
                    <div className='fw-normal ps-1'>
                        {props.default[0] + ' ' + props.default[1]}
                    </div>

                }
            </Form.Label>

            {props.active !== false &&

                <InputGroup>
                    <Form.Control 
                    aria-label={text[lang].label_cognonem}
                    name='cognomen' 
                    placeholder={text[lang].label_cognonem} 
                    defaultValue={props.default && props.default[0]}
                    required={props.required && true}
                    onChange={handleOnChange}
                    ></Form.Control>

                    <Form.Control 
                    aria-label={text[lang].label_surname} 
                    name='surname' 
                    placeholder={text[lang].label_surname} 
                    defaultValue={props.default && props.default[1]}
                    required={props.required && true}
                    onChange={handleOnChange}
                    ></Form.Control>
                </InputGroup>

            }

        </Form.Group>
    )
}

export default InputName