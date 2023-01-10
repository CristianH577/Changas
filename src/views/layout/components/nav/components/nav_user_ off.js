import { IconContext } from "react-icons";
import { GrLogin, GrUserAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

function NavUserOff({style}) {

  return (
    <>
    <Link to="/signup" className="m-1">
      <IconContext.Provider value={{ size: "1.7em", fill: 'var(--color-5)' }} >
        <GrUserAdd />
      </IconContext.Provider>
    </Link>

    <Link to="/login" className="m-1">
      <IconContext.Provider value={{ size: "1.7em"}} >
        <GrLogin />
      </IconContext.Provider>
    </Link>
    </>
  );
}

export default NavUserOff;