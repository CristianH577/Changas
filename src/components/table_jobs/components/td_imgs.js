import { Form } from "react-bootstrap"
import { configContext } from '../../../context/config_context'
import { useContext } from "react"
import Slider from "../../slider"
// import text from './input_name_lang.json'

function TdImgs(props) {
    const config = useContext(configContext)
    const lang = config.lang.value

    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }

    return(
        props.active === false
        ?
        <Slider 
            directory = {props.directory}
            imgs={props.default} 
            width='300px' 
            maxWidth='1000px'
        />
        :
        'nada'
        // <Form.Control 
        //     aria-label=''
        //     name='cognomen' 
        //     placeholder=''
        //     defaultValue={props.default && props.default}
        //     required={props.required && true}
        //     onChange={handleOnChange}
        // ></Form.Control>
    )
}

export default TdImgs