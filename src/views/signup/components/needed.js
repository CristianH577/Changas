import { useContext } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Job from "../../../components/job";
import { configContext } from "../../../context/config_context";

function Needed(props) {
  console.log(props.jobs)
  const config = useContext(configContext)

  const addJob= () => {
    const newJob = {
      id: uuidv4(),
      occ: "",
      category: 2,
      name: "",
      price: "",
      description: "", 
      imgs: []
    }
    const newJobs = [...props.jobs, newJob]
    props.setJobs(newJobs)
  }
  const deleteJob = (id) => {
    const newJobs = props.jobs.filter(job => job.id !== id)
    props.setJobs(newJobs)
  }
  const updateJob = (id, e) => {
    const name = e.target.dataset.type
    var value = e.target.value

    if(name === 'imgs'){
      value = e.target.files
    }

    props.jobs.forEach((job) => {
      if(job.id === id) {
        job[name] = value
      }
    })
  }

  return(
    <fieldset disabled={props.disabled} className={props.class}>
      <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>{config.text.signup.works}</legend>

      { props.jobs.filter(job => job.category === 2).map((job, idx) => 
          <Job 
          key={idx}
          id={job.id}
          data={job}
          occ={true}
          imgs={true}
          deleteJob={deleteJob}
          updateJob={updateJob}
        />
        )
      }

      { props.jobs.filter(job => job.category === 2).length < 5 && 
        <Button type="button" className="m-1 btn-purple" onClick={addJob}>
          +
        </Button>
      }
    </fieldset>
  );
}

export default Needed;