import Button from 'react-bootstrap/Button';
import Job from '../../../../../components/job';

function Jobs(props) {
  const jobs = props.jobs.filter(job => job.occ === props.occ && job.category !== 2)

  return(
  <div className="mb-3">
    <fieldset className="p-2 border rounded border-info">
    <legend className="mx-3 px-1" style={{float: "unset", width: "unset"}}>Trabajos de: {props.occ}</legend>
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
        <Button variant="info" type="button" className="m-1" onClick={() => props.addJob(props.occ, props.category)}>
          +
        </Button>
      }
    </fieldset>
  </div>
  );
}

export default Jobs;