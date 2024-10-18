import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import "../styles/nav_bar.css";
import { useState } from "react";
import useResponsive from "../utils/useResponsive";

const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);

  const handleChangeMobileNav = () => {
    setmobileNavOpen((prev) => !prev);
  };
  const screenSize = useResponsive();
  return (
    <div className="navContainer" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="nav_bar pc" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <Link to="/">
          <div className="logo" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={logo} alt="" srcset="" />
          </div>
        </Link>
        <div className="links" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <ul>
            <li>
              <Link target="_top" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link target="_top" to="/desarollo">
                Desarollo
              </Link>
            </li>
            <li>
              <Link target="_top" to="/dominos">
                Dominios
              </Link>
            </li>
            <li>
              <Link target="_top" to="/servers">
                Servidores
              </Link>
            </li>
            <li>
              <Link target="_top" to="/hosting">
                Hosting
              </Link>
            </li>
            <li>
              <Link target="_top" to="/about">
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <Link target="_top" to="/contact">
            <button>Contacto</button>
          </Link>
        </div>
      </div>
      <div className="nav_bar mobile" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="logo" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <div className="">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="hm" onClick={handleChangeMobileNav} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <img src={hmIm} alt="" />
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link target="_top" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link target="_top" to="/desarollo">
                  Desarollo
                </Link>
              </li>
              <li>
                <Link target="_top" to="/dominos">
                  Dominios
                </Link>
              </li>
              <li>
                <Link target="_top" to="/servers">
                  Servidores
                </Link>
              </li>
              <li>
                <Link target="_top" to="/hosting">
                  Hosting
                </Link>
              </li>
              <li>
                <Link target="_top" to="/about">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <Link target="_top" to="/contact" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <button>Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
