import { Button } from "react-bootstrap";

function Progress(props) {
    return(
      <div className="center">
        <div className="position-relative m-5" style={{width:"300px"}}>
          <div className="progress" style={{height: "1px"}}>
            <div className={"progress-bar w-" + props.progress} role="progressbar" aria-label="Progress" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100" />
          </div>

          <Button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem", height:"2rem"}}>
            1
          </Button>
          <Button type="button" className={"position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill btn-" + (props.progress >= 50 ? "primary" : "secondary")} style={{width: "2rem", height:"2rem"}}>
            2
          </Button>
          <Button type="button" className={"position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill btn-" + (props.progress === 100 ? "primary" : "secondary")} style={{width: "2rem", height:"2rem"}}>
            3
          </Button>
        </div>
      </div>
    );
}

export default Progress;