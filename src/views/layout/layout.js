import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav/nav";

function Layout({user, setUser, search, setSearch}) {
  return (
    <>
    <Nav user={user} setUser={setUser} search={search} setSearch={setSearch} />

    <main className="container my-3 center flex-column">
        <Outlet />
    </main>

    <Footer />
    </>
  );
}

export default Layout;
