import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FiEdit, FiSave } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import Cookies from 'universal-cookie';
import FilesImg from '../../components/files_img';
import ModalError from '../../components/modal_error';
import Slider from '../../components/slider';
import TableJobs from '../../components/table_jobs/table_jobs';
import { configContext } from '../../context/config_context';
import CardInfo from './components/card_info';


function MyAccount() {
  const config = useContext(configContext)
  const style = config.style.value
  const cookies = new Cookies()
  const id = cookies.get("user")

  /* ERROR */
  const [error, setError] = useState([false, ''])
  /* */

  const [data, setData] = useState({
    user: {
      acc_type: "",
      cognomen: "",
      department: "",
      email: "",
      id_user: "",
      jobs_examples: "",
      ngb: "",
      occs: "",
      phone: "",
      prefix: "",
      profile_img: "",
      surname: "",
      time_stamp: ""
    },
    jobs: []
  })

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = async() => {
    const formData = new FormData()
    formData.append('id', id)

    await axios.post('http://localhost:50/ChangasAPI/search/getUser', formData)
    .then( answer => {
      // answer.data.user.occs = JSON.parse(answer.data.user.occs)
      answer.data.jobs.forEach((item) => {
        if(item.imgs_job !== ""){
          item.imgs_job = JSON.parse(item.imgs_job)
        }
      })
      setData(answer.data)
    })
    .catch( error => {
      setError([true, error.message])
      console.log(error)
    })
  }

  /* JOBS EXA */
  const [editJE, setEditJE] = useState(false)
  const handleEditJE = () => {
    setEditJE(true)
  }
  const handleSaveJE = () => {
  }
  const handleCancelJE = () => {
    setEditJE(false)
  }

  return (
    <>
    <h1 className='my-3'>Mi Cuenta</h1>

    <CardInfo
      data={data.user}
      style={style}
    />

    { data.user.jobs_examples !== "" &&
      <section className=' w-100 w-md-75 mb-3 center flex-column'>
        <Slider 
          directory = {'http://localhost:50/ChangasAPI/assets/imgs/jobsExamples/' + data.user.id_user + "/"}
          imgs={JSON.parse(data.user.jobs_examples)} 
          width='100%' 
          maxWidth='1000px'
          className='border border-4'
        />
        
        <div className='w-100 d-flex justify-content-end my-2'>
          {!editJE &&
            <Button variant='primary' className='bg-gradient' onClick={handleEditJE}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <FiEdit />
              </IconContext.Provider>
            </Button>
          }

          {editJE &&
            <ButtonGroup >
              <Button variant='success' className='bg-gradient' onClick={handleSaveJE}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FiSave />
                </IconContext.Provider>
              </Button>
              <Button variant='danger' className='bg-gradient' onClick={handleCancelJE}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <ImCancelCircle />
                </IconContext.Provider>
              </Button>
            </ButtonGroup>
          }
        </div>

        {editJE &&
          <FilesImg 
            directory = {'http://localhost:50/ChangasAPI/assets/imgs/jobsExamples/' + data.user.id_user + "/"}
            default={JSON.parse(data.user.jobs_examples)} 
            max={3}
          />
        }
      </section>
    }

    <TableJobs
      idUser={data.user.id_user}
      type={data.user.acc_type}
      jobsList={data.jobs}
      style={style}
      class='w-100 w-md-75'
    />

    <ModalError
      style={style}
      show={error[0]} 
      msj={error[1]}
      onHide={() => setError([false, ''])}
    />
    </>
  );
}

export default MyAccount;
