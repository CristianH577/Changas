import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { GrSearch } from 'react-icons/gr';
import { AiOutlineHome } from "react-icons/ai";

import Config from "./components/config";

import Cookies from 'universal-cookie';

import Navbar from 'react-bootstrap/Navbar';
import { useState, useContext } from "react";
import { configContext } from '../../../../context/config_context'
import NavUserOn from "./components/nav_user_ on";
import NavUserOff from "./components/nav_user_ off";

function Nav() {
  const config = useContext(configContext)
  const style = config.style.value

  const cookies = new Cookies()
  const [searchText, setSearchText] = useState("")

  const logout = () => {
    config.user.set(false)
    cookies.remove('user', { path: '/' })
  }

  return (  
    <Navbar className={"bg-gradient border-bottom element " + style[0]}>
      <div className="d-flex justify-content-center position-relative w-100">
        <div className="center">
          <Link to="/" className="m-1">
            <IconContext.Provider value={{ size:"1.8em", color:'var()--color-3' }}>
              <AiOutlineHome />
            </IconContext.Provider>
          </Link>
          <div className="form-control me-2 d-flex" >
            <input 
              className="border-0 d-flex w-100"
              style={{ outline: 'none' }}
              type="search" 
              name="search" 
              placeholder={config.text.nav.searchPh} 
              onChange={(e) => setSearchText(e.target.value)} 
            />

            <Link to={"/search" + (searchText === "" ? "" : ("?search=" + searchText))} className="d-flex align-items-center mx-1 light bg-transparent">
              <IconContext.Provider value={{ size: "1.2em" }} className='' >
                <GrSearch style={{}} />
              </IconContext.Provider>
            </Link>
          </div>

          { config.user.value 
            ? <NavUserOn style={style} logout={logout} /> 
            : <NavUserOff style={style} />
          }
        </div>
    
        <Config />
      </div>
    </Navbar>
  );
}

export default Nav;




