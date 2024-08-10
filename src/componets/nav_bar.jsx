import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import "../styles/nav_bar.css";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);

  const handleChangeMobileNav = () => {
    setmobileNavOpen((prev) => !prev);
  };

  return (
    <div className="navContainer">
      <div className="nav_bar pc">
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
          <Link to="/contact">
            <button>Contacto</button>
          </Link>
        </div>
      </div>
      <div className="nav_bar mobile">
        <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}>
          <div className="logo">
            <div className="">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="hm" onClick={handleChangeMobileNav}>
              <img src={hmIm} alt="" />
            </div>
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
            <Link to="/contact">
              <button>Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
