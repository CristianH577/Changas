function Previews(props) {
    return(
      <div className="d-flex flex-wrap justify-content-center">
        {
          props.imgs.map((img, idx) =>
          <div key={idx} className="position-relative">
            <img src={props.directory ? props.directory+img : img} alt="" className="img-thumbnail m-2" style={{width: "150px", height: "150px"}} onClick={() => props.changeShowTo(img)} />
          </div>
          )
        }
      </div>
    );
}

export default Previews;