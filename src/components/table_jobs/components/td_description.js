import { Form } from "react-bootstrap"
import { configContext } from '../../../context/config_context'
import { useContext } from "react"
import text from '../../../lang/components/table_jobs.json'

function TdDescription(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        props.active === false
        ?
        props.default
        :
        <Form.Control 
            aria-label={text[lang].label_desc}
            placeholder={text[lang].label_desc}
            name='desc_job'
            as='textarea'
            rows='3'
            resize='false'
            defaultValue={props.default && props.default}
            required={props.required && true}
            onChange={handleOnChange}
            style={{ resize: 'none'}}
        ></Form.Control>
    )
}

export default TdDescription