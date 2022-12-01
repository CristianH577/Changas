import { Button } from "react-bootstrap";

function Previews(props) {
    return(
      <div className="d-flex flex-wrap">
        {
          props.imgs.map((img, idx) =>
          <div key={idx} className="position-relative">
            <img src={img} alt="" className="img-thumbnail m-2" style={{width: "150px", height: "150px"}} onClick={() => props.changeShowTo(img)} />
            {/* <Button variant="danger" type="button" className="position-absolute end-0 m-3" onClick={() => props.deleteImg(idx)}>
              -
            </Button> */}
          </div>
          )
        }
      </div>
    );
}

export default Previews;