import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Occupation from "./components/occupation";
import occsList from "../../../../json/occsList.json";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Jobs from './components/jobs';
import FilesImg from '../../../../components/files_img';

function Experience({show, occs, setOccs, jobs, setJobs, updateData}) {

  /* */
  const addOcc = () => {
    const newOcc = {
      id: uuidv4(),
      occ: "",
      exp: ""
    }
    const newOccs = [...occs, newOcc]
    setOccs(newOccs)
    updateDisbled()
  }

  const deleteOcc = (id) => {
    const newOccs = occs.filter(occ => occ.id !== id)
    if(setOccs(newOccs)) updateDisbled()
  }

  const updateOcc = (id, e) => {
    const dataset = e.target.dataset
    const value = e.target.value

    occs.forEach((occ) => {
      if(occ.id === id) {
        occ[dataset.type] = value
      }
    })

    if(dataset.type === 'occ') updateDisbled()

    console.log(occs)
  }

  /* */
  const addJob = (occ, category) => {
    const newJob = {
      id: uuidv4(),
      occ: occ,
      category: category,
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
    const value = e.target.value

    jobs.forEach((job) => {
      if(job.id === id) {
        job[name] = value
      }
    })
  }

  /* */
  const [disabled, setDisabled] = useState({})
  const updateDisbled = () => {
    console.log("ejecuto updateDisbled")
    var newDisabled = {}
    occsList.forEach((occ) => 
      newDisabled[occ] = false
    )
    occs.forEach((occ) => 
      newDisabled[occ.occ] = true
    )
    setDisabled(newDisabled)
  }

  return (
    <fieldset disabled={!show} className={show ? null : 'd-none'}>
      <fieldset className="mb-3 p-2 border border-info rounded">
        <legend className="mx-3 px-1" style={{float: "unset", width: "unset"}}>Oficios</legend>
        
        <div className="mb-3">
          <Occupation 
            id="main"
            updateOcc={updateOcc}
            disabled={disabled}
          />
        </div>

        <div className="mb-3">
          <Form.Label>Suboficios</Form.Label>
          {
            occs.map((occ) =>
              occ.id !== "main" &&
              <Occupation
                key={occ.id}
                id={occ.id}
                deleteOcc={deleteOcc}
                updateOcc={updateOcc}
                disabled={disabled}
              />
            )
          }

          {
            occs.length < 4 &&
            <Button variant="info" type="button" className="m-1" onClick={addOcc}>
              +
            </Button>
          }
        </div>
      </fieldset>

      {
        occs.map((occ) =>
          occ.occ !== "" &&
          <Jobs 
            key={occ.id}
            jobs={jobs}
            occ={occ.occ}
            category={occ.id === "main" ? 0 : 1}

            addJob={addJob}
            deleteJob={deleteJob}
            updateJob={updateJob}
          />
        )
      }

      <FilesImg 
        name={'jobsExamples'}
        onChange={updateData}
        ariaLabel={"Imagenes de muestra"}
        max={10}
      />

    </fieldset>
  );
}
  
export default Experience;