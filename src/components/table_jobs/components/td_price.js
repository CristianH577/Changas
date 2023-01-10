import { Form } from "react-bootstrap"
import { configContext } from '../../../context/config_context'
import { useContext } from "react"
import text from '../../../lang/components/table_jobs.json'

function TdPrice(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        props.active === false
        ?
        props.default === 0 ? '-' : '$' + props.default
        :
        <Form.Control 
            aria-label={text[lang].label_price}
            name='price'
            type='number'
            placeholder={text[lang].label_price}
            defaultValue={props.default && props.default}
            required={props.required && true}
            onChange={handleOnChange}
        ></Form.Control>
    )
}

export default TdPrice