import Card from 'react-bootstrap/Card';
import './card_search.css';

function CardSearch({data, className}) {
    var img = ""
    var cardBody = <></>
    if(data.id_job){
        img = "view.png"

        cardBody = <>
            <Card.Title>{data.occ}</Card.Title>
            <ul>
                <li>{data.name_job}</li>
                <li>${data.price}</li>
                <li>{data.description_job.substr(0, 100)}{data.description_job.length > 100 ? "..." : null}</li>
            </ul>
        </>
    }
    else{
        img = "profile.png"

        const occs = JSON.parse(data.occs)
    
        const subOccs = occs.map((item, idx) => 
            idx === 0 
            ? null
            : <li key={idx}>{item[0] + "(" + item[1] + " año/s)"}</li>
        )

        cardBody = <>
            <Card.Title>{occs[0][0] + "(" + occs[0][1] + " año/s)"} - {data.surname + " " + data.cognomen}</Card.Title>
            <ul>
                {subOccs}
                <li>Evaluacion</li>
            </ul>
        </>
    }

    return(
        <article className={className}>
            <Card className="mb-3">
                <div className="d-lg-flex">
                    <div className="d-flex align-items-center justify-content-center m-lg-1 card-img-container">
                        <Card.Img src={require(`../../../assets/imgs/${img}`)} className="" />
                    </div>
                    <Card.Body>
                        {cardBody}
                    </Card.Body>
                </div>
                <Card.Footer>
                    <small className="text-muted">Ultima actualizacion {data.time_stamp}</small>
                </Card.Footer>
            </Card>
        </article>
    );
}

export default CardSearch;