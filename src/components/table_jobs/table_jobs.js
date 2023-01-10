import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TdCategory from "./components/td_category";
import TdDescription from "./components/td_description";
import TdEdit from "./components/td_edit";
import TdImgs from "./components/td_imgs";
import TdTitle from "./components/td_title";
import TdPrice from "./components/td_price";
import { configContext } from '../../context/config_context'
import { useContext } from "react"
import text from '../../lang/components/table_jobs.json'

function TableJobs(props) {
    const config = useContext(configContext)
    const lang = config.lang.value
    
    const [jobs, setJobs] = useState([])
    const [edit, setEdit] = useState(null)
    // const direc = 'http://localhost:50/ChangasAPI/assets/imgs/jobs/' + props.idUser + "/"

    useEffect(() => {
        setJobs(props.jobsList)
    // eslint-disable-next-line
    }, [props.jobsList])

    var titles = []
    var td = []
    var colMD = []
    if(props.type === 'work'){
        titles = [
            text[lang].title_cat, 
            text[lang].title_title, 
            text[lang].title_price, 
            text[lang].title_desc, 
            ''
        ]
        td = ['category', 'title', 'price', 'desc', 'edit']
        colMD = [2,2,2,5,1]
        
    }
    else{
        titles = [
            text[lang].title_cat, 
            text[lang].title_price, 
            text[lang].title_desc, 
            '', 
            ''
    ]
        td = ['category', 'price', 'desc', 'imgs', 'edit']
        colMD = [2,2,4,3,1]
    }

    /* FUNCTIONS */
    const handleSaveJob = () => {

    }
    const handleDeleteJob = () => {
        
    }

    /* STYLE */
    const styleCol = 'text-center center px-1'

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
                            {
                                {
                                    'category': 
                                        <TdCategory 
                                            active={edit === i ? true : false}
                                            default={job.occ}
                                        />,
                                    'title': 
                                        <TdTitle
                                            active={edit === i ? true : false}
                                            default={job.name_job}
                                        />,
                                    'price': 
                                        <TdPrice
                                            active={edit === i ? true : false}
                                            default={job.price}
                                        />,
                                    'desc': 
                                        <TdDescription
                                            active={edit === i ? true : false}
                                            default={job.description_job}
                                        />,
                                    'imgs': 
                                        <TdImgs 
                                        />,
                                    'edit': 
                                        <TdEdit
                                            active={edit === i ? true : false}
                                            edit={() => setEdit(i)}
                                            cancel={() => setEdit(null)}
                                        />
                                }[td[k]]
                            }
                        </Col>
                    )}
                </Row>
            )}
        </div>
    );
}

export default TableJobs;