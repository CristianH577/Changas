import { Link } from "react-router-dom";
import { useContext } from "react";
import { configContext } from '../../../context/config_context'

function Footer() {
  const config = useContext(configContext)
  const style = config.style.value

  const links = ['home', 'contact', 'legals', 'faqs', 'about']

  return (  
    <footer className={"py-3 mt-auto border-top element " + style[0]}>
      
      <ul className="nav justify-content-center mb-3">
        {links.map((link) => 
          <li key={link} className="nav-item hover-zoom">
            <Link to="/" className={"nav-link px-2 text-" + style[1]}>
              {config.text.footer[link]}
            </Link>
          </li>
        )}
      </ul>

      <div className="center">
        <p className={"text-center border-top pt-2 w-75 element " + style[0]}>© 2022 Kotar, Inc</p>
      </div>
      
    </footer>
  );
}

export default Footer;




