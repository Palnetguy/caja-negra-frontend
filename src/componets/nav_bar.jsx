import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import v from "../assets/images/Vector.png"
import "../styles/nav_bar.css";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  const handleChangeMobileNav = () => {
    setmobileNavOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navContainer">
      <div className="nav_bar pc">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
        </Link>
        <div style={{display:"flex",   justifyContent: "space-between"}}>
        <div className="links">
          <ul>
            <li>
              <Link target="_top" to="/">
                Inicio
              </Link>
            </li>
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={toggleDropdown} style={{ backgroundColor: '#3498db',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            background: 'transparent',
            fontSize: '20px',
            }}>
              Servicios <span><img src={v} alt=""/></span>
            </button>
            {isOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                listStyle: 'none',
                padding: '10px',
                borderRadius: '5px',
                zIndex: 1,
                 background: 'transparent',
                 color: '#ffffff'

              }}>
            <li style={{
              padding: '8px 12px',
              cursor: 'pointer',
              color: '#ffffff'
            }}>
              <Link target="_top" to="/desarollo">
                Desarollo
              </Link>
            </li>
            <li style={{
              padding: '8px 12px',
              cursor: 'pointer',
              color: '#ffffff'
            }}>
              <Link target="_top" to="/dominos">
                Dominios
              </Link>
            </li>
            <li style={{
            padding: '8px 12px',
            cursor: 'pointer',
            color: '#ffffff'
          }}>
              <Link target="_top" to="/servers">
                Servidores
              </Link>
            </li>
            <li style={{
                padding: '8px 12px',
                cursor: 'pointer',
                color: '#ffffff'
              }}>
              <Link target="_top" to="/hosting">
                Hosting
              </Link>
            </li>
            </ul>
            )}
            </div>
            <li>
              <Link target="_top" to="/about">
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact_btn">
          <Link target="_top" to="/contact">
            <button>Contacto</button>
          </Link>
        </div>
        </div>
      </div>
      <div className="nav_bar mobile" >
        <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}>
          <div className="logo" >
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
          <div className="contact_btn" >
            <Link target="_top" to="/contact">
              <button>Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
