import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import Account from "./components/account";
import Experience from "./components/experience/experience";
import Needed from "./components/needed";
import Personal from "./components/personal";
import Progress from "./components/progress";
import axios from 'axios';
// import FakeEntry from "./components/fake_entry";

function Signup() {
  const [view, setView] = useState([true, false, false])
  const [progress, setProgress] = useState(0)

  const showAcc = () => {
    setProgress(0)
    setView([true, false, false, false])
  };
  const showPersonal = () => {
    setProgress(50)
    setView([false, true, false, false])
  };
  const showJob = () => {
    setProgress(100)
    setView([false, false, true])
  };
  const prev = () => {
    if(view[2]){
      showPersonal()
    }else if(view[1]){
      showAcc()
    }
  }

  /* */
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
  const [jobs, setJobs] = useState([])
  const [validation, setValidation] = useState(false)

  /* send */
  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const form = e.currentTarget

    if (form.checkValidity() === false) {
      setValidation(true)
    }
    else{
      setValidation(false)
      
      if(view[0] === true){
        if(validations.email === false) if(confirmPassword()) showPersonal()
      }
      else if(view[1] === true){
        showJob()
      }
      else{
        if(formatData()){
          console.log(data)
          console.log("enviar")
          submitForm()
        }
        else{
          console.log("Error: enviar")
        }
      }
    }
  }

  const [validations, setValidations] = useState({
    email: null,
    passC: null
  })

  const confirmPassword = () => {
    var bool = false
    if(data.password === data.passwordC){
      bool = true
    }

    setValidations({
      ...validations,
      passC: !bool
    })
    return bool
  }

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

        case 'email':
          addValue = item[1] + Math.floor(Math.random() * 100000000000)
          formData.append(item[0], addValue)
          break;
      
        default:
          formData.append(item[0], item[1])
          break;
      }
    })

    await axios.post('http://localhost:50/ChangasAPI/signup/registerUser', formData)
    .then(answer => {
      console.log(answer)
      })
    .catch(error => console.log(error))
  }


  return (
    <Form noValidate validated={validation} onSubmit={handleSubmit} method="POST">
      <h1 className="text-center">Signup</h1>

      <Progress 
        progress={progress}
      />

      <Account 
        show={view[0]}
        updateData={updateData}
        validations={validations}
        setValidations={setValidations}
      />

      <Personal 
        show={view[1]}
        updateData={updateData}
      />

      {
        data.accType === "work" && 
        <Experience 
          show={view[2]}

          occs={occs}
          setOccs={setOccs}

          jobs={jobs}
          setJobs={setJobs}

          updateData={updateData}
        />
      }

      {
        data.accType === "employ" && 
        <Needed 
          show={view[2]}

          jobs={jobs}
          setJobs={setJobs}
        />
      }

      <div className="d-flex justify-content-end">
        {
          !view[0] && 
          <Button variant="secondary" type="button" className="m-1" onClick={() => prev()}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </Button>
        }
        <Button variant="primary" type="submit" className="m-1">
          <IconContext.Provider value={{ size: "1.5em" }}>
            {
              (view[2]) ? <RiMailSendLine /> : <AiOutlineArrowRight />
            }
          </IconContext.Provider>
        </Button>
      </div>

      {/* <FakeEntry /> */}

    </Form>
  );
}
  
export default Signup;
  