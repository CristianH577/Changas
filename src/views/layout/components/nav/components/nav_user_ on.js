import { IconContext } from "react-icons";
import { GrLogout, GrUser } from "react-icons/gr";
import { Link } from "react-router-dom";

function NavUserOn({style, logout}) {

  return (
    <>
      <Link to="/myaccount" className="m-1">
      <IconContext.Provider value={{ size: "1.7em", fill: 'var(--color-5)' }} >
          <GrUser />
        </IconContext.Provider>
      </Link>

      <Link to="/login" className="m-1" onClick={logout}>
      <IconContext.Provider value={{ size: "1.7em", fill: 'var(--color-5)' }} >
          <GrLogout />
        </IconContext.Provider>
      </Link>
    </>
  );
}

export default NavUserOn;