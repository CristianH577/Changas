import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaHome } from 'react-icons/fa';
import { GrLogin, GrUserAdd, GrSearch, GrLogout, GrUser } from 'react-icons/gr';

import './nav.css';
import Config from "./components/config";

import Cookies from 'universal-cookie';

import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";

function Nav({user, setUser, search, setSearch}) {
  const cookies = new Cookies()
  const [searchText, setSearchText] = useState("")
  const [mode, setMode] = useState(["ligth", "black"])

  const logout = () => {
    setUser(false)
    cookies.remove('user', { path: '/' })
  }

  const handleSubmit = () => {
    //if(searchText === "") setSearch("") 
    //if(searchText !== "") setSearch("?search=" + searchText)
    setSearch(searchText)
  }

  const navUserOFF = 
  <>
    <Link to="/signup" className="m-1">
      <IconContext.Provider value={{ size: "1.5em" }} >
        <GrUserAdd className={mode[0]} />
      </IconContext.Provider>
    </Link>
    <Link to="/login" className="m-1">
      <IconContext.Provider value={{ size: "1.5em"}} >
        <GrLogin className={mode[0]} />
      </IconContext.Provider>
    </Link>
  </>
  const navUserON = 
  <>
    <Link to="/myaccount" className="m-1">
      <IconContext.Provider value={{ size: "1.5em" }}>
        <GrUser className={mode[0]} />
      </IconContext.Provider>
    </Link>
    <Link to="/login" className="m-1" onClick={() => logout()}>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <GrLogout className={mode[0]} />
      </IconContext.Provider>
    </Link>
  </>

  return (  
    <Navbar bg={mode[0]}>
      <div className="d-flex justify-content-center position-relative w-100">
        <div className="d-flex">
          <Link to="/" className="m-1">
            <IconContext.Provider value={{ size:"1.5em", color: mode[1] }}>
              <FaHome />
            </IconContext.Provider>
          </Link>
          <div className="form-control me-2 d-flex" >
            <input className="border-0 outline-0 d-flex w-100" type="search" name="search" placeholder="Buscar trabajo" aria-label="Search" onChange={(e) => setSearchText(e.target.value)} />
            <Link to={"/search" + (searchText === "" ? "" : ("?search=" + searchText))} className="d-flex align-items-center mx-1">
              <IconContext.Provider value={{ size: "1.2em" }}>
                <GrSearch onClick={handleSubmit} />
              </IconContext.Provider>
            </Link>
          </div>

          { user ? navUserON : navUserOFF }
        </div>
    
        <Config 
          mode={mode}
          setMode={setMode} 
        />
      </div>
    </Navbar>
  );
}

export default Nav;




