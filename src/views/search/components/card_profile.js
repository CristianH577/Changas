import Card from 'react-bootstrap/Card';

function CardProfile({data}) {
    const occs = JSON.parse(data.occs)

    const subOccs = occs.map((item, idx) => 
        idx === 0 
        ? null
        : <li key={idx}>{item[0] + "(" + item[1] + " año/s)"}</li>
    )

    return(
        <article style={{maxWidth: "300px"}}>
            <Card className="mb-3">
                <div className="d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center m-lg-1" style={{minWidth: "300px"}}>
                        <Card.Img src={require(`../../../assets/imgs/profile.png`)} className="" />
                    </div>
                    <Card.Body>
                        <Card.Title>{occs[0][0] + "(" + occs[0][1] + " año/s)"} - {data.surname + " " + data.cognomen}</Card.Title>
                        <ul>
                            {subOccs}
                            <li>Evaluacion</li>
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

export default CardProfile;