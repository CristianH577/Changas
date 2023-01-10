import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardInfo({data, style}) {

    /* ELEMENTS */
    const listItems = [
        'Nombre: ' + data.cognomen + ' ' + data.surname,
        'Localidad: ' + data.ngb + ' - ' + data.department,
        'Email: ' + data.email,
        'Telefono: ' + data.prefix + data.phone
    ]
    /* */

    /* OCCS */
    var occsList = ""
    if(data.occs !== ""){
        const occs = JSON.parse(data.occs)
    
        occsList = 
        <ListGroup.Item className={'bg-transparent text-' + style[2]}>
        Ocupacion/es: 
        <ListGroup variant="flush" className='ps-3'>
            {occs.map((item, i) => 
                <ListGroup.Item key={i} className={'bg-transparent text-' + style[2]}>
                    {item.occ + " (" + item.exp + " año/s)"}
                </ListGroup.Item>
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
        <Card className="mb-3 p-1 bg-gradient bg-opacity-50 border border-5 w-100 w-md-auto" bg={'primary'}>
            <div className="row">
                <div className="col-12 col-md-4 mt-md-2">
                    <Card.Img src={src} />
                </div>
                <Card.Body className='col-12 col-md-8 ps-md-0 py-md-0'>
                    <ListGroup variant="flush" className=''>
                            {listItems.map((item, idx) => 
                                <ListGroup.Item key={idx} className={'bg-transparent text-' + style[2]}>
                                    {item}
                                </ListGroup.Item>
                            )}
                            {occsList}
                    </ListGroup>
                </Card.Body>
            </div>
        </Card>
    );
}

export default CardInfo;