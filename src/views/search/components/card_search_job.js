import { Card } from "react-bootstrap"
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import Slider from "../../../components/slider"
import { ImProfile } from "react-icons/im";

function CardSearchJob(props) {

    /* IMGS */
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/jobs/' + props.data.id_user + "/" + props.data.id_job + "/"
    const defaultJobImg = require(`../../../assets/imgs/view.png`)

    var imgs = <Card.Img src={defaultJobImg} />
    if(props.data.imgs_job !== ""){
        imgs = <Slider 
            directory = {direc}
            imgs={JSON.parse(props.data.imgs_job)} 
            width='300px' 
            bg='transparent'
        />
    }
    /* */

    return(
        <Card className={"h-100 shadow "} bg={props.bg} border={props.border} >
            <div className="d-lg-flex h-100">
                <div className={"w-lg-50 center p-1 border-bottom"} style={{minHeight: '300px'}}>
                    {imgs}
                </div>
                <Card.Body className='w-lg-50'>
                    <Card.Title>{props.data.occ}</Card.Title>
                    <Card.Text>
                        <div>{props.data.price === 0 ? 'A convenir' : ('$' + props.data.price)}</div>
                        <div>{props.data.description_job.substr(0, 100)}{props.data.description_job.length > 100 ? "..." : null}</div>
                    </Card.Text>
                </Card.Body>
            </div>
            <Card.Footer className={'d-flex justify-content-around align-items-center bg-gradient'} >
                <small className='center flex-column '> 
                    <div>Ultima actualizacion:</div>
                    <div>{props.data.time_stamp.substr(0, 10)}</div>
                </small>
                <Link to={"/profile/" + props.data.id_user} className={"text-decoration-none"}>
                    <IconContext.Provider value={{ size: "2em", color: props.style[1] }}>
                        <ImProfile />
                    </IconContext.Provider>
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default CardSearchJob