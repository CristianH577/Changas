import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { configContext } from "../../context/config_context";
import Footer from "./components/footer";
import Nav from "./components/nav/nav";

function Layout() {
  const config = useContext(configContext)
  const style = config.style.value

  return (
    <div 
      className={'d-flex flex-column ' + style[0]}
      style={{ minHeight: '100vh' }}
    >
      <Nav />

      <main 
        className={"center flex-column "} 
        style={{ overflow: '' }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
