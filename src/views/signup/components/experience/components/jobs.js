import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Job from '../../../../../components/job';
import { configContext } from '../../../../../context/config_context';

function Jobs(props) {
  const config = useContext(configContext)

  const jobs = props.jobs.filter(job => job.occ === props.occ && job.category !== 2)

  return(
    <fieldset className={props.styleFieldset}>
      <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>{config.text.signup.worksOf}: {props.occ}</legend>
      {
        jobs.map((job, idx) => 
          <Job 
          key={idx}
          id={job.id}
          data={job}
          name={true}
          deleteJob={props.deleteJob}
          updateJob={props.updateJob}
        />
        )
      }
      {
        jobs.length < 10 &&
        <Button variant="success" type="button" className="m-1" onClick={() => props.addJob(props.occ, props.category)}>
          +
        </Button>
      }
    </fieldset>
  );
}

export default Jobs;