import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import Page from "./views/page/page";
import Search from "./views/search/search";
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
import MyAccount from "./views/myaccount/myaccount";
import Profile from "./views/profile/profile";

import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

function App() {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState(false)
  const cookies = new Cookies()

  useEffect(() => {
    cookies.get('user') ? setUser(true) : setUser(false)
  // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout user={user} setUser={setUser} search={search} setSearch={setSearch} /> } >
          <Route index element={ <Home /> } />
          <Route path="/search" element={ <Search search={search} /> } />
          <Route path="/login" element={ !user ? <Login setUser={setUser} /> : <Navigate to='/myaccount'/> } />
          <Route path="/signup" element={ !user ? <Signup /> :  <Navigate to='/myaccount'/> } />
          <Route path="/myaccount" element={ user ? <MyAccount /> :  <Navigate to='/login'/> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/page" element={ <Page /> } />
          <Route path="*" element={ <h1>No page</h1> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
