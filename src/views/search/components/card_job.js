import Card from 'react-bootstrap/Card';

function CardJob({data}) {
    return(
        <article style={{maxWidth: "300px"}}>
            <Card className="mb-3">
                <div className="d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center m-lg-1" style={{minWidth: "300px"}}>
                        <Card.Img src={require(`../../../assets/imgs/view.png`)} className="" />
                    </div>
                    <Card.Body>
                        <Card.Title>{data.occ}</Card.Title>
                        <ul>
                            <li>{data.name_job}</li>
                            <li>${data.price}</li>
                            <li>{data.description_job.substr(0, 100)}{data.description_job.length > 100 ? "..." : null}</li>
                        </ul>
                    </Card.Body>
                </div>
                <Card.Footer>
                    <small className="text-muted">Ultima actualizacion {data.time_stamp}</small>
                </Card.Footer>
            </Card>
        </article>
    );
}

export default CardJob;