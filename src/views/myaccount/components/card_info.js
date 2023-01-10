import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Form, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { IconContext } from 'react-icons';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import InputEmail from '../../../components/form/input_email';
import InputName from '../../../components/form/input_name';
import SelectLocation from '../../../components/form/select_location';
import InputPhone from '../../../components/form/input_phone';
import './card_info.css'
import SelectOccupation from '../../../components/form/select_occupation';
import InputPassword from '../../../components/form/input_password';
import InputNewPassword from '../../../components/form/input_new_password';
import InputProfileImg from '../../../components/form/input_profile_img';

function CardInfo({data, style}) {
    const [info, setInfo] = useState({
        email: "",
        password: "",
        profileImg: "",
    
        cognomen: "",
        surname: "",
        department: "",
        ngb: "",
        prefix: "",
        phone: "",
    
        occs: "",
        jobsExamples: "",
        jobs: []
    })

    var occs = []
    var dis = {}

    useEffect(() => {
        setInfo(data)
    }, [data])

    /* OCCS */
    if(data.occs !== ""){
        occs = JSON.parse(data.occs)

        occs.forEach((element, i) => {
            dis[element.occ] = true
        })
    }

    /* CONSOLE */
    const [edit, setEdit] = useState(false)
    const [validation, setValidation] = useState(false)

    const handleEdit = () => {
        setEdit(true)
    }
    const handleDelete = () => {
    }
    const handleCancel = () => {
        setEdit(false)
        setValidation(false)
    }
    const handleSave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const form = e.currentTarget
        
        if (form.checkValidity() === false) {
            setValidation(true)
        }
        else{
            setValidation(false)
            console.log('enviando')
        }
    }

    /* STYLE */
    const styleLGI = 'bg-transparent text-' + style[2]

    return(
    <Form noValidate validated={validation} onSubmit={handleSave}>
        <Card className="card-info mb-3 p-1 bg-gradient bg-opacity-50 border border-5 w-100 w-md-auto" bg={'primary'}>
            <div className="row">
                <div className="col-12 col-md-4 mt-md-2">

                    <InputProfileImg 
                        label={false}
                        active={edit}
                        default={data.profile_img}
                    />

                </div>
                <Card.Body className='col-12 col-md-8 ps-md-0 py-md-0'>
                        <fieldset>
                            <ListGroup variant="flush">

                            <ListGroup.Item className={styleLGI}>
                                <InputName 
                                    default={[info.cognomen, info.surname]} 
                                    required
                                    active={edit}
                                    disabled={dis}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item className={styleLGI}>
                                <SelectLocation 
                                    default={[info.department, info.ngb]} 
                                    required
                                    active={edit}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item className={styleLGI}>
                                <InputEmail 
                                    default={info.email} 
                                    required
                                    active={edit}
                                />
                            </ListGroup.Item>

                            <ListGroup.Item className={styleLGI}>
                                <InputPhone 
                                    default={[info.prefix, info.phone]} 
                                    required
                                    active={edit}
                                />
                            </ListGroup.Item>

                            {occs !== [] &&
                            <ListGroup.Item className={styleLGI}>
                                {occs.map((item, i) => 
                                    <SelectOccupation
                                        key={i}
                                        default={item}
                                        label={i === 0}
                                        disabled={dis}
                                        required
                                        active={edit}
                                    />
                                )}
                            </ListGroup.Item>
                            }

                            {edit &&
                            <>
                            <ListGroup.Item className={styleLGI}>
                                <InputNewPassword />
                            </ListGroup.Item>

                            <ListGroup.Item className={styleLGI}>
                                <InputPassword 
                                    required
                                />
                            </ListGroup.Item>
                            </>
                            }

                            </ListGroup>
                        </fieldset>

                        <div className='my-2 d-flex justify-content-end'>
                            <ButtonGroup className={!edit ? 'd-flex' : 'd-none'}>
                                <Button variant='danger' className='bg-gradient' onClick={handleDelete}>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <FiTrash2 />
                                    </IconContext.Provider>
                                </Button>
                                <Button variant='primary' className='bg-gradient' onClick={handleEdit}>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <FiEdit />
                                    </IconContext.Provider>
                                </Button>
                            </ButtonGroup>

                            <ButtonGroup className={edit ? 'd-flex' : 'd-none'}>
                                <Button variant='success' type='submit' className='bg-gradient' >
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <FiSave />
                                    </IconContext.Provider>
                                </Button>
                                <Button variant='danger' className='bg-gradient' onClick={handleCancel}>
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <ImCancelCircle />
                                    </IconContext.Provider>
                                </Button>

                            </ButtonGroup>
                        </div>
                    
                </Card.Body>
            </div>
        </Card>
    </Form>
    );
}

export default CardInfo;