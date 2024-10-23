import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
// import v from "/../assets/images/Vector.png"
import v from "../assets/images/Vector.png"
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import "../styles/nav_bar.css";
import { useState } from "react";
// import {Dropdown} from "flowbite-react"



const NavBar = () => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ desarollo: false, dominios: false, servers: false, hosting: false });

  const handleChangeMobileNav = () => {
    setmobileNavOpen((prev) => !prev);
  };
  const toggleDropdown = (item) => {
    setDropdownOpen((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="navContainer">
      <div className="nav_bar pc">
        <Link to="/">
          <div className="logo"    >
            <img src={logo} alt="" srcset="" />
          </div>
        </Link>
        <div style={{display: 'flex'}}>
        <div className="links">
          <ul>
            <li>
              <Link target="_top" to="/">
                Inicio
              </Link>
            </li>
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