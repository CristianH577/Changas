import { 
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate
} from "react-router-dom";
import Layout from "./views/layout";
import Home from "./views/home/home";
import Page from "./views/page/page";
import Search from "./views/search/search";
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
import Profile from "./views/profile/profile";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Home /> } />
            <Route path="/search" element={ <Search /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/page" element={ <Page /> } />
            <Route path="*" element={ <h1>No page</h1> } />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
