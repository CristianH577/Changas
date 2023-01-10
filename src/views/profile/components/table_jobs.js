import { useEffect, useState } from "react";
import Slider from "../../../components/slider";
import { Col, Row } from "react-bootstrap";

function TableJobs(props) {
    const [jobs, setJobs] = useState([])
    const direc = 'http://localhost:50/ChangasAPI/assets/imgs/jobs/' + props.idUser + "/"

    useEffect(() => {
        setJobs(props.jobsList)
    // eslint-disable-next-line
    }, [props.jobsList])

    var titles = []
    var td = []
    var colMD = []
    if(props.accType === 'work'){
        titles = ['Categoria', 'Nombre', 'Precio', 'Descripcion']
        td = ['occ', 'name_job', 'price', 'description_job']
        colMD = [2,2,2,6]
        
    } else{
        titles = ['Categoria', 'Precio', 'Descripcion', '']
        td = ['occ', 'price', 'description_job', 'imgs_job']
        colMD = [2,2,4,4]
    }


    const styleCol = 'text-center center'

    return(
        <div className={'mb-3 w-100 w-md-75'}>
            <Row className={'element p-1 mb-1 d-none d-md-flex bg-gradient border ' + props.style[0]}>
                {titles.map((title, t) =>
                    <Col key={t} className={styleCol} md={colMD[t]}>
                        <div className='fw-bold'>{title}{title === 'Precio' && '($)'}</div>
                    </Col>
                )}
            </Row>
            
            {jobs.map((job, i) =>
                <Row key={i} className={'mb-1 p-1 bg-gradient border border-' + props.style[2]} >
                    {titles.map((title,k) =>
                        <Col key={k} className={styleCol} xs='12' md={colMD[k]} >
                            {td[k] !== 'imgs_job' && 
                            <div className='px-2 d-md-none fw-bold'>{title}: </div>
                            }
                            
                            {td[k] !== 'imgs_job' 
                                ? job[td[k]] 
                                : Array.isArray(job.imgs_job) && 
                                    <Slider 
                                        directory = {direc + job.id_job + "/"}
                                        imgs={job.imgs_job} 
                                        width='300px' 
                                        maxWidth='1000px'
                                    />
                            }
                        </Col>
                    )}
                </Row>
            )}
        </div>
    );
}

export default TableJobs;