import { Card } from "react-bootstrap"
import { IconContext } from "react-icons"
import { ImProfile } from "react-icons/im"
import { Link } from "react-router-dom"

function CardSearchWork(props) {

    const occs = JSON.parse(props.data.occs)
    const occsList = occs.map((item, idx) => 
        <div key={idx}>{item.occ + " (" + item.exp + " año/s)"}</div>
    )

    /* IMGS */
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/profile/'
    const defaultProfileImg = require(`../../../assets/imgs/profile.png`)

    var src = ''
    if(props.data.profile_img !== ""){
        src = direc + props.data.profile_img
    }else{
        src = defaultProfileImg
    }
    /* */

    return(
        <Card className={"h-100 shadow"} bg={props.bg} border={props.border}>
        <div className="d-lg-flex h-100">
            <div className={"w-lg-50 center p-1 border-bottom"} style={{minHeight: '300px'}}>
                    <Card.Img src={src} />
                </div>
                <Card.Body>
                    <Card.Title>{props.data.surname + " " + props.data.cognomen}</Card.Title>
                    <Card.Text>
                        {occsList}
                        <div className='mt-2'>{props.data.ngb} - {props.data.department}</div>
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

export default CardSearchWork