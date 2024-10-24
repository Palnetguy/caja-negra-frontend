import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
// import v from "/../assets/images/Vector.png"
import v from "../assets/images/Vector.png"
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import v from "../assets/images/Vector.png"
import "../styles/nav_bar.css";
import { useState } from "react";
<<<<<<< HEAD

const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


=======
// import {Dropdown} from "flowbite-react"



const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ desarollo: false, dominios: false, servers: false, hosting: false });
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54

  const handleChangeMobileNav = () => {
    setmobileNavOpen((prev) => !prev);
  };
<<<<<<< HEAD
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
=======
  const toggleDropdown = (item) => {
    setDropdownOpen((prev) => ({ ...prev, [item]: !prev[item] }));
  };

>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
  return (
    <div className="navContainer">
      <div className="nav_bar pc">
        <Link to="/">
<<<<<<< HEAD
          <div className="logo">
            <img src={logo} alt="" srcset="" />
          </div>
        </Link>
        <div style={{display:"flex",   justifyContent: "space-between"}}>
=======
          <div className="logo"    >
            <img src={logo} alt="" srcset="" />
          </div>
        </Link>
        <div style={{display: 'flex'}}>
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
        <div className="links">
          <ul>
            <li>
              <Link target="_top" to="/">
                Inicio
              </Link>
            </li>
<<<<<<< HEAD
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <button onClick={toggleDropdown} style={{ backgroundColor: '#3498db',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            background: 'transparent',
            fontSize: '20px',
            fontWeight:'600'
            }}>
              Servicios <span><img src={v} alt=""/></span>
            </button>
            {isOpen && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                listStyle: 'none',
                padding: '4px',
                borderRadius: '5px',
                zIndex: 1,
                 background: 'transparent',
              }}>
            <li style={{
              padding: '4px 12px',
              cursor: 'pointer',
            }}>
              <Link target="_top" to="/desarollo" style={{ color: 'white', textDecoration: 'none' }}> 
                Desarollo
              </Link>
            </li>
            <li style={{
              padding: '4px 12px',
              cursor: 'pointer',
            }}>
              <Link target="_top" to="/dominos" style={{ color: 'white', textDecoration: 'none' }}>
                Dominios
              </Link>
            </li>
            <li style={{
            padding: '4px 12px',
            cursor: 'pointer',
          }}>
              <Link target="_top" to="/servers" style={{ color: 'white', textDecoration: 'none' }}>
                Servidores
              </Link>
            </li>
            <li style={{
                padding: '4px 12px',
                cursor: 'pointer',
              }}>
              <Link target="_top" to="/hosting" style={{ color: 'white', textDecoration: 'none' }}>
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
=======
            <div className="dropdown" onMouseEnter={() => toggleDropdown('desarollo')} onMouseLeave={() => toggleDropdown('desarollo')}>
                <Link target="_top" to="#" style={{fontWeight: '600',
                fontSize: '20px',
                color: '#ffffff',
                textDecoration: 'none',
                transition: '0.5s ease-in-out'}}>Servicios <span><img src={v} alt=""/></span></Link>
                {dropdownOpen.desarollo && (
                  
                  <ul className="dropdown-menu">
                    <li><Link target="_top" to="/desarollo">Desarollo</Link></li>
                    <li><Link target="_top" to="/dominos">Dominios</Link></li>
                    <li><Link target="_top" to="/servers">Servidores</Link></li>
                    <li><Link target="_top" to="/hosting">Hosting</Link></li>
                  </ul>
                )}
              </div>
              <li><Link target="_top" to="/about">Sobre nosotros</Link></li>
            </ul>
          </div>
          <div className="contact_btn"    >
            <Link target="_top" to="/contact"><button>Contacto</button></Link>
>>>>>>> 207d112df583328855a77b51e4facfe749af5a54
          </div>
        </div>
        <div className="nav_bar mobile"    >
          <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}    >
            <div className="logo"    >
              <div className="">
                <img src={logo} alt="" srcset="" />
              </div>
              <div className="hm" onClick={handleChangeMobileNav}    >
                <img src={hmIm} alt="" />
              </div>
            </div>
            <div className="links">
              <ul>
                <li><Link target="_top" to="/">Inicio</Link></li>
                <li><Link target="_top" to="/desarollo">Desarollo</Link></li>
                <li><Link target="_top" to="/dominos">Dominios</Link></li>
                <li><Link target="_top" to="/servers">Servidores</Link></li>
                <li><Link target="_top" to="/hosting">
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
           <div className="contact_btn"    >
             <Link target="_top" to="/contact"    >
               <button>Contacto</button>
             </Link>
           </div>
         </div>
       </div>
       </div>
     </div>
   );
 };

 export default NavBar;