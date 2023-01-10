import { Card, Placeholder } from "react-bootstrap"

function CardSearchPlaceholder(props) {

    /* IMGS */
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/profile/'
    const defaultProfileImg = require(`../../../assets/imgs/profile.png`)
    /* */

    return(
        <Card className={"h-100 shadow"} bg={props.bg} border={props.border}>
            <div className="d-lg-flex h-100">
                <div className={"w-lg-50 p-1 border-bottom "}  >
                    <Card.Img src={defaultProfileImg} />
                </div>
                <Card.Body className=''>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </div>
            <Card.Footer className={'text-center bg-gradient'} >
                <Placeholder animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
            </Card.Footer>
        </Card>
    )
}

export default CardSearchPlaceholder