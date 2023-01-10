import { Form } from "react-bootstrap"
import { configContext } from '../../../context/config_context'
import { useContext } from "react"
import text from '../../../lang/components/table_jobs.json'

function TdTitle(props) {
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
            aria-label={text[lang].label_title}
            name='name_job' 
            placeholder={text[lang].label_title}
            defaultValue={props.default && props.default}
            required={props.required && true}
            onChange={handleOnChange}
        ></Form.Control>
    )
}

export default TdTitle