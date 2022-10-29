import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer";
import Nav from "../components/layout/nav/nav";

function Layout() {
  return (
    <>
    <Nav />

    <main className="container mt-3">
        <Outlet />
    </main>

    <Footer />
    </>
  );
}

export default Layout;
