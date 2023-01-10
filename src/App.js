import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import Search from "./views/search/search";
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
import MyAccount from "./views/myaccount/myaccount";
import Profile from "./views/profile/profile";

import { useEffect } from "react";
import Cookies from "universal-cookie";

import { useContext } from "react";
import { configContext } from './context/config_context'

function App() {
  const config = useContext(configContext)
  const cookies = new Cookies()

  useEffect(() => {
    cookies.get('user') ? config.user.set(true) : config.user.set(false)
    cookies.get('style') && config.style.set(['dark', 'white', 'light', 'black'])
  // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="/search" element={ <Search /> } />
          <Route path="/login" element={ !config.user.value ? <Login /> : <Navigate to='/myaccount'/> } />
          <Route path="/signup" element={ !config.user.value ? <Signup /> : <Navigate to='/myaccount'/> } />
          <Route path="/myaccount" element={ config.user.value ? <MyAccount /> : <Navigate to='/login'/> } />
          <Route path="/profile/:id" element={ <Profile /> } />
          <Route path="*" element={ <h1>{config.text.nopage.title}</h1> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
