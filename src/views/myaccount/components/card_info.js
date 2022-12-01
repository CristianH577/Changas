import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardInfo({data}) {
    /* OCCS */
    var occsList = ""
    if(data.occs !== ""){
        const occs = JSON.parse(data.occs)
    
        occsList = 
        <ListGroup.Item>
        Ocupacion/es: 
        <ListGroup>
            {occs.map((item, idx) => 
                <ListGroup.Item key={idx}>{item.occ + " (" + item.exp + " año/s)"}</ListGroup.Item>
            )}
        </ListGroup>
        </ListGroup.Item>
    }

    /* PROFILE IMG */
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/profile/'
    const defaultProfileImg = require(`../../../assets/imgs/profile.png`)

    var src
    data.profile_img !== ''
    ? src = direc + data.profile_img
    : src = defaultProfileImg

    return(
        <Card className="mb-3">
            <div className="d-lg-flex">
                <div className="d-flex align-items-center justify-content-center m-lg-1" style={{minWidth: "300px", maxWidth: "300px"}}>
                    <Card.Img src={src} className="" />
                </div>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Nombre: {data.cognomen} {data.surname}</ListGroup.Item>
                        <ListGroup.Item>Localidad: {data.ngb} - {data.department}</ListGroup.Item>
                        <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                        <ListGroup.Item>Telefono: {data.prefix} {data.phone}</ListGroup.Item>
                        {occsList}
                    </ListGroup>
                </Card.Body>
            </div>
        </Card>
    );
}

export default CardInfo;