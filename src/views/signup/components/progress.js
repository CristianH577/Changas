import { ProgressBar } from "react-bootstrap";

function Progress(props) {
    return(
      <div className={"center " + props.style[0]}>
        <div className="position-relative m-5" style={{width:"300px"}}>
          <ProgressBar now={props.progress} style={{height: "2px"}} />

          <div className={"position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill btn-purple"} style={{width: "2rem", height:"2rem"}}>
            1
          </div>
          <div className={"position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill btn-" + (props.progress >= 50 ? "purple" : "secondary")} style={{width: "2rem", height:"2rem"}}>
            2
          </div>
          <div className={"position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill btn-" + (props.progress === 100 ? "purple" : "secondary")} style={{width: "2rem", height:"2rem"}}>
            3
          </div>
        </div>
      </div>
    );
}

export default Progress;