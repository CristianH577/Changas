import { useState, useContext } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import Account from "./components/account";
import Experience from "./components/experience/experience";
import Needed from "./components/needed";
import Personal from "./components/personal";
import Progress from "./components/progress";
// import axios from 'axios';
import { configContext } from "../../context/config_context";
import './signup.css'
import ModalError from "../../components/modal_error";

// import FakeEntry from "./components/fake_entry";

function Signup() {
  const config = useContext(configContext)
  const style = config.style.value

  /* VIEW */
  // eslint-disable-next-line
  const [modal, setModal] = useState([false])
  const [error, setError] = useState([false, ''])
  const [progress, setProgress] = useState(0)
  
  const [active, setActive] = useState('acc')
  const next = () => {
    switch (active) {
      case 'acc':
        setProgress(50)
        setActive('personal')
        break;
      case 'personal':
        setProgress(100)
        data.accType === 'work' && setActive('exp')
        data.accType === 'employ' && setActive('need')
        break;
    
      default:
        break;
    }
  }
  const prev = () => {
    switch (active) {
      case 'personal':
        setProgress(0)
        setActive('acc')
        break;
      case 'exp':
        setProgress(50)
        setActive('personal')
        break;
      case 'need':
        setProgress(50)
        setActive('personal')
      break;
    
      default:
        break;
    }
  }


  /* DATA */
  const [data, setData] = useState({
    accType: "",
    email: "",
    password: "",
    profileImg: "",

    cognomen: "",
    surname: "",
    department: "",
    ngb: "",
    prefix: "",
    phone: "",

    occs: "",
    jobsExamples: "",
    jobs: []
  })

  const updateData = (e) => {
    const addName = e.target.name
    var addValue = e.target.value

    switch (addName) {
      case "profileImg":
        addValue = e.target.files[0]
        break;

      case "jobsExamples":
        addValue = e.target.files
        break;

      case "department":
        data.ngb = ""
        break;

      default:
        break;
    }
    
    setData({ ...data, [addName]: addValue })
    console.log(data)
  }

  const [occs, setOccs] = useState([{
    id: "main", 
    occ: "", 
    exp: ""
  }])
  const [jobs, setJobs] = useState([
    {
      id: 'first',
      occ: "",
      category: 2,
      name: "",
      price: "",
      description: "", 
      imgs: []
    }
  ])
  const [validations, setValidations] = useState({
    form: false,
    email: null,
    passC: null
  })

  /* VALIDATIONS */
  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
// eslint-disable-next-line
    const form = e.currentTarget

    next()
    console.log(validations)
    // if (form.checkValidity() === false) {
    //   setValidations({
    //     ...validations,
    //     form: true
    //   })
    // }
    // else{
    //   setValidations({
    //     ...validations,
    //     form: false
    //   })
      
    //   if(active === 'acc'){  
    //     if(validations.email === false && validations.passC === false){
    //       next()
    //     }
    //   }modal
    //   else if(active === 'personal'){
    //     next()
    //   }
    //   else{
    //     if(formatData()){
    //       setModal([true])
    //       console.log(data)
    //       submitForm()
    //     }
    //     else{
    //       setError([false, 'No se pudo enviar la solicitud.'])
    //     }
    //   }
    // }
  }

  /* SEND */
// eslint-disable-next-line
  const formatData = () => {
    if(data.accType === 'work'){
      const newJobs = jobs.filter(job => job.category !== 2)
      data.jobs = newJobs

      data.occs = JSON.stringify(occs)

      return true
    }

    if(data.accType === 'employ'){
      const newJobs = jobs.filter(job => job.category === 2)
      data.jobs = newJobs

      data.jobsExamples = ""
      
      return true
    }

    return false
  }

// eslint-disable-next-line
  const submitForm = async() => {
    const formData = new FormData()

    Object.entries(data).forEach((item) => {
      var addName 
      var addValue
      
      switch (item[0]) {
        case 'jobsExamples':
          var files = item[1]
          for (let i = 0; i < files.length; i++) {
            addName = "jobsExamples_" + i
            addValue = files[i]
            formData.append(addName, addValue);
          }
          break;

        case 'jobs':
          addValue = JSON.stringify(item[1])
          formData.append(item[0], addValue)

          for (let i = 0; i < item[1].length; i++) {
            if(item[1][i].imgs !== []){

              var imgs = item[1][i].imgs
              for (let k = 0; k < imgs.length; k++) {
                addName = "jobs_" + i + "-" + k
                addValue = imgs[k]
                formData.append(addName, addValue);
              }

            }
          }
          break;

        // case 'email':
        //   addValue = item[1] + Math.floor(Math.random() * 100000000000)
        //   formData.append(item[0], addValue)
        //   break;
      
        default:
          formData.append(item[0], item[1])
          break;
      }
    })

    // await axios.post('http://localhost:50/ChangasAPI/signup/registerUser', formData)
    // .then(answer => {
    //   console.log(answer)
    //   if(answer.data === 'Usuario registrado') {
    //     window.location.replace('http://localhost:3000/login')
    //   }
    //   else{
    //     setError([true, 'No se pudo procesar la solicitud.'])
    //   }
    // })
    // .catch(error => console.log(error))
  }

  /* STYLE */
  const styleFieldset = 'mb-3 p-2 border border-4 rounded bg-gradient element ' + style[0] + ' '
  const styleLegend = 'py-1 px-2 text-center rounded bg-gradient element ' + style[0] + ' '

  return (
    <>
    <h1 className={"text-center mt-3"}>{config.text.signup.title}</h1>

    <Progress 
      progress={progress}
      style={style}
    />

    <Form noValidate validated={validations.form} onSubmit={handleSubmit} method="POST" className='mb-3 px-3 d-flex flex-column justify-content-between'>

      <article className=''>
        <Account 
          updateData={updateData}
          validations={validations}
          setValidations={setValidations}
          disabled={active !== 'acc'}
          class={styleFieldset + (active === 'acc' ? 'active' : 'inactive')}
          styleLegend={styleLegend}
        />

        <Personal 
          updateData={updateData}
          disabled={active !== 'personal'}
          class={styleFieldset + (active === 'personal' ? 'active' : 'inactive')}
          styleLegend={styleLegend}
        />

        <Experience 
          disabled={active !== 'exp'}
          class={styleFieldset + (active === 'exp' ? 'active' : 'inactive')}
          styleLegend={styleLegend}
          styleFieldset={styleFieldset}

          occs={occs}
          setOccs={setOccs}

          jobs={jobs}
          setJobs={setJobs}

          updateData={updateData}
        />
        
        <Needed 
          disabled={active !== 'need'}
          class={styleFieldset + (active === 'need' ? 'active' : 'inactive')}
          styleLegend={styleLegend}

          jobs={jobs}
          setJobs={setJobs}
        />
      </article>

      <article className="console d-flex justify-content-end">
        { active !== 'acc' &&
          <Button variant="secondary" type="button" className="m-1" onClick={prev}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </Button>
        }
        <Button variant="primary" type="submit" className={"m-1 btn-purple"}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            { (active === 'exp' || active === 'need') ? <RiMailSendLine /> : <AiOutlineArrowRight />
            }
          </IconContext.Provider>
        </Button>
      </article>

      {/* <FakeEntry /> */}
    </Form>

    <Modal show={modal[0]} animation={false} centered contentClassName='bg-transparent border-0'>
      <div className='center mb-5'>
        <Spinner animation="border" variant="info" />
      </div>
    </Modal>

    <ModalError
      style={style}
      show={error[0]} 
      msj={error[1]}
      onHide={() => setError([false, ''])}
    />
    </>
  );
}
  
export default Signup;