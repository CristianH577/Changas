import { Button, ButtonGroup, Form, Modal } from "react-bootstrap"
import { configContext } from '../../context/config_context'
import { useContext, useState, useEffect, useRef } from "react"
import text from '../../lang/components/form.json'
import { IconContext } from "react-icons"
import { ImCancelCircle } from 'react-icons/im';
import { GrPowerReset } from 'react-icons/gr';
import { MdOutlineChangeCircle } from 'react-icons/md';

function InputProfileImg(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const defaultProfileImg = require(`../../assets/imgs/profile.png`)
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/profile/'

    const [profileImg, setProfileImg] = useState(defaultProfileImg)
    const [zoom, setZoom] = useState(false)
    

    // eslint-disable-next-line
    useEffect(() => {
        props.default && setProfileImg(direc + props.default)
    }, [props.default])

    const preview = (e) => {
        const reader = new FileReader()

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])

            reader.onload = () =>{
                if(reader.readyState === 2) setProfileImg(reader.result)
            }
        }
        else{
            setProfileImg(defaultProfileImg)
        }

        // props.updateData(e)
    }

    const handleOnChange = (e) => {
        preview(e)
        if(props.onChange) props.onChange(e)
    }

    const inputFile = useRef(null)
    const handleChangeImg = () => {
        inputFile.current.click()
    }
    const handleResetImg = () => {
        setProfileImg(props.default)
    }
    const handleDeleteImg = () => {
        setProfileImg(defaultProfileImg)
    }

    return(
        <Form.Group className={props.class}>

            {props.label !== false &&

                <Form.Label className='d-flex'>
                    {text[lang].label_pi}:
                </Form.Label>

            }

            <Form.Control ref={inputFile} type="file" accept="image/*" name="profileImg" onChange={handleOnChange} className='d-none' />

            <div className="center">
                <img src={profileImg} alt={text[lang].alt_pi} className="img-thumbnail mt-2" style={{width: "200px", cursor: 'pointer'}} onClick={() => setZoom(!zoom)} />

                <Modal centered show={zoom} onHide={() => setZoom(!zoom)}>
                    <img src={profileImg} alt={text[lang].alt_pi} />
                </Modal>
            </div>
                
            {props.active &&
                <ButtonGroup className='center mt-2'>
                    <Button variant='warning' className='bg-gradient' onClick={handleChangeImg}>
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <MdOutlineChangeCircle />
                        </IconContext.Provider>
                    </Button>
                    <Button variant='info' className='bg-gradient' onClick={handleResetImg} >
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <GrPowerReset />
                        </IconContext.Provider>
                    </Button>
                    <Button variant='secondary' className='bg-gradient' onClick={handleDeleteImg}>
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <ImCancelCircle />
                        </IconContext.Provider>
                    </Button>
                </ButtonGroup>
            }

        </Form.Group>
    )
}

export default InputProfileImg