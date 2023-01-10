import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Occupation from "./components/occupation";
import occsList from "../../../../json/occsList.json";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Jobs from './components/jobs';
import FilesImg from '../../../../components/files_img';
import { useContext } from 'react';
import { configContext } from '../../../../context/config_context';

function Experience(props) {
  const config = useContext(configContext)

  /* */
  const addOcc = () => {
    const newOcc = {
      id: uuidv4(),
      occ: "",
      exp: ""
    }
    const newOccs = [...props.occs, newOcc]
    props.setOccs(newOccs)
    updateDisbled()
  }

  const deleteOcc = (id) => {
    const newOccs = props.occs.filter(occ => occ.id !== id)
    if(props.setOccs(newOccs)) updateDisbled()
  }

  const updateOcc = (id, e) => {
    const dataset = e.target.dataset
    const value = e.target.value

    props.occs.forEach((occ) => {
      if(occ.id === id) {
        occ[dataset.type] = value
      }
    })

    if(dataset.type === 'occ') updateDisbled()

    console.log(props.occs)
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

    const newJobs = [...props.jobs, newJob]
    props.setJobs(newJobs)

    console.log(props.jobs)
  }
  const deleteJob = (id) => {
    const newJobs = props.jobs.filter(job => job.id !== id)
    props.setJobs(newJobs)
  }
  const updateJob = (id, e) => {
    const name = e.target.dataset.type
    const value = e.target.value

    props.jobs.forEach((job) => {
      if(job.id === id) {
        job[name] = value
      }
    })
  }

  /* */
  const [disabled, setDisabled] = useState({})
  const updateDisbled = () => {
    var newDisabled = {}
    occsList.forEach((occ) => 
      newDisabled[occ] = false
    )
    props.occs.forEach((occ) => 
      newDisabled[occ.occ] = true
    )
    setDisabled(newDisabled)
  }

  return (
    <fieldset disabled={props.disabled} className={props.class}>
      <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>Experiencia</legend>

      <fieldset className={props.styleFieldset}>
        <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>{config.text.signup.occs}</legend>
        
        <div className="mb-3">
          <Occupation 
            id="main"
            updateOcc={updateOcc}
            disabled={disabled}
          />
        </div>

        <div className="mb-3">
          <Form.Label>{config.text.signup.suboccs}</Form.Label>
          {
            props.occs.map((occ) =>
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
            props.occs.length < 4 &&
            <Button variant="success" type="button" className="m-1" onClick={addOcc}>
              +
            </Button>
          }
        </div>
      </fieldset>

      {
        props.occs.map((occ) =>
          occ.occ !== "" &&
          <Jobs 
            key={occ.id}
            jobs={props.jobs}
            occ={occ.occ}
            category={occ.id === "main" ? 0 : 1}
            styleLegend={props.styleLegend}
            styleFieldset={props.styleFieldset}

            addJob={addJob}
            deleteJob={deleteJob}
            updateJob={updateJob}
          />
        )
      }

      <FilesImg 
        name={'jobsExamples'}
        onChange={props.updateData}
        max={10}
      />

    </fieldset>
  );
}
  
export default Experience;