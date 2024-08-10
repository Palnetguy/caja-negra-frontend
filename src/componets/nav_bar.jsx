import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../styles/nav_bar.css";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/desarollo">Desarollo</Link>
          </li>
          <li>
            <Link to="/dominos">Dominios</Link>
          </li>
          <li>
            <Link to="/servers">Servidores</Link>
          </li>
          <li>
            <Link to="/hosting">Hosting</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </div>
      <div className="contact_btn">
        <Link to='/contact'>
          <button>Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
