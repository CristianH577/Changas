import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaHome, FaSearch } from 'react-icons/fa';
import { GrLogin, GrUserAdd } from 'react-icons/gr';

import './nav.css';
import Config from "./components/config";


function Nav() {
  return (  
    <nav className="navbar bg-light">
      <div className="d-flex justify-content-center position-relative w-100">
      
          <div className="d-flex">
            <Link to="/" className="m-1">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <FaHome />
              </IconContext.Provider>
            </Link>
            <form className="d-flex" role="search">
              <div className="form-control me-2 d-flex">
                <input className="border-0 outline-0 d-flex w-100" type="search" placeholder="Search" aria-label="Search" />
                <Link to="/search" className="mx-1">
                  <IconContext.Provider value={{ size: "1.2em" }}>
                    <FaSearch />
                  </IconContext.Provider>
                </Link>
                {/* <button className="btn" type="submit">
                  <IconContext.Provider value={{ size: "1.2em" }}>
                    <FaSearch />
                  </IconContext.Provider>
                </button> */}
              </div>
            </form>
            <Link to="/signup" className="m-1">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <GrUserAdd />
              </IconContext.Provider>
            </Link>
            <Link to="/login" className="m-1">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <GrLogin />
              </IconContext.Provider>
            </Link>
          </div>
      
          <Config />
      </div>
    </nav>
  );
}

export default Nav;




