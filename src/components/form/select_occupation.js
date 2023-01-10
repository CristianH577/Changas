import { Button, Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import occsList from "../../json/occsList.json"
import text from '../../lang/components/form.json'
import { configContext } from '../../context/config_context'
import { useContext } from 'react'

function SelectOccupation(props) {
    const config = useContext(configContext)
    const lang = config.lang.value

    /* OCCS */
    const optionsOcc = occsList.map((item) =>
        <option 
            key={item} 
            value={item} 
            disabled={props.disabled[item] && true}
        >
            {item}
        </option>
    )

    /* EXP */
    const valuesExp = ['-1', '+1', '+5', '+9']
    const optionsExp = valuesExp.map((item) =>
        <option key={item} value={item} >
            {item}
        </option>
    )

    /* FUNCTIONS */
    const handleOnChange = (e) => {
        if(props.onChange) props.onChange(e)
    }
    const handleDelete = (e) => {
        if(props.delete) props.delete(e)
    }

    return(
    <Form.Group className={props.class}>

        <Form.Label className=''>
        {props.label !== false && 
            text[lang].label_occ + ':' + ((props.active !== false && props.required) ? ' *' : '')
        }
        
            
        {props.active === false && props.default &&
        
        <div className='ms-3 fw-normal ps-1'>
            {props.default.occ + " (" + props.default.exp + " año/s)"}
        </div>

        }
        </Form.Label>

        {props.active !== false &&

            <InputGroup>

            <Form.Select 
                aria-label={text[lang].label_occ} 
                name='occ'
                required={props.required && true}
                onChange={handleOnChange}
                defaultValue={props.default && props.default.occ}
            >
                <option value="">{text[lang].label_occ}</option>
                {optionsOcc}
            </Form.Select>

            <Form.Select 
                aria-label={text[lang].label_exp} 
                name="exp"
                required={props.required && true}
                onChange={handleOnChange}
                defaultValue={props.default && props.default.exp}
            > 
                <option value="">{text[lang].label_exp}</option>
                {optionsExp}
            </Form.Select>

            { props.default.id !== "main" && 
                <Button 
                    variant="danger" 
                    type="button" 
                    onClick={handleDelete}
                >-</Button>
            }

            </InputGroup>

        }
    </Form.Group>
    );
}

export default SelectOccupation;