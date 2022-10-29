import Card from 'react-bootstrap/Card';

function Cards(props) {
    return(
        <section className="w-75">
            <Card className="mb-3">
                <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center m-1">
                        <Card.Img src={require(`../../../assets/imgs/profile.png`)} className="" />
                    </div>
                    <Card.Body>
                        <Card.Title>Occupation(Exp) - Name</Card.Title>
                        <ul>
                            <li>SubOccupation(Exp)</li>
                            <li>Evaluacion</li>
                        </ul>
                    </Card.Body>
                </div>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            
            <Card className="mb-3">
                <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center m-1">
                        <Card.Img src={require(`../../../assets/imgs/profile.png`)} className="" />
                    </div>
                    <Card.Body>
                        <Card.Title>Occupation(Exp) - Name</Card.Title>
                        <ul>
                            <li>SubOccupation(Exp)</li>
                            <li>Evaluacion</li>
                        </ul>
                    </Card.Body>
                </div>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </section>
    );
}

export default Cards;