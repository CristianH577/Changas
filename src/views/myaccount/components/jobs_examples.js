import { Col, Row } from "react-bootstrap";

function JobsExamples({id, jobsExamples}) {
    const imgs = JSON.parse(jobsExamples)

    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/jobsExamples/' + id + "/"

    return(
        <Row className="mb-3">
            {imgs.map((img, idx) => 
                <Col sm={6} className="mb-1" key={idx} style={{maxWidth: '300px'}}>
                    <img src={direc + img} alt="" className="w-100" />
                </Col>
            )}
        </Row>
    );
}

export default JobsExamples;