import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Job from "../../../components/job";

function Needed({show, jobs, setJobs}) {

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
    const newJobs = [...jobs, newJob]
    setJobs(newJobs)

    console.log(jobs)
  }
  const deleteJob = (id) => {
    const newJobs = jobs.filter(job => job.id !== id)
    setJobs(newJobs)
  }
  const updateJob = (id, e) => {
    const name = e.target.dataset.type
    var value = e.target.value

    if(name === 'imgs'){
      value = e.target.files
    }

    jobs.forEach((job) => {
      if(job.id === id) {
        job[name] = value
      }
    })
  }

  return(
    <fieldset disabled={!show} className={show ? null : 'd-none'}>
      <fieldset className="mb-3 p-2 border border-info rounded">
        <legend className="mx-3 px-1" style={{float: "unset", width: "unset"}}>Trabajos</legend>
        {
          jobs.filter(job => job.category === 2).map((job, idx) => 
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

        {
          jobs.filter(job => job.category === 2).length < 5 && 
          <Button variant="info" type="button" className="m-1" onClick={addJob}>
            +
          </Button>
        }
      </fieldset>
    </fieldset>
  );
}

export default Needed;