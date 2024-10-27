// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.svg";
// import v from "../assets/images/Vector.png"
// import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
// import "../styles/nav_bar.css";
// import { useState } from "react";

// const NavBar = () => {
//   const [mobileNavOpen, setmobileNavOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);



//   const handleChangeMobileNav = () => {
//     setmobileNavOpen((prev) => !prev);
//   };
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="navContainer">
//       <div className="nav_bar pc">
//         <Link to="/">
//           <div className="logo">
//             <img src={logo} alt="" srcset="" />
//           </div>
//         </Link>
//         <div style={{display:"flex",   justifyContent: "space-between"}}>
//         <div className="links">
//           <ul>
//             <li>
//               <Link target="_top" to="/">
//                 Inicio
//               </Link>
//             </li>
//             <div style={{ position: 'relative', display: 'inline-block' }}>
//             <button onClick={toggleDropdown} style={{ backgroundColor: '#3498db',
//             color: 'white',
//             padding: '8px 16px',
//             border: 'none',
//             cursor: 'pointer',
//             borderRadius: '5px',
//             background: 'transparent',
//             fontSize: '20px',
//             fontWeight:'600'
//             }}>
//               Servicios <span><img src={v} alt=""/></span>
//             </button>
//             {isOpen && (
//               <ul style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 listStyle: 'none',
//                 padding: '4px',
//                 borderRadius: '5px',
//                 zIndex: 1,
//                  background: 'transparent',
//               }}>
//                 <li style={{
//               padding: '4px 12px',
//               cursor: 'pointer',
//             }}>
//               <Link target="_top" to="/data-services" style={{ color: 'white', textDecoration: 'none' }}> 
//                 Servicios
//               </Link>
//             </li>
//             <li style={{
//               padding: '4px 12px',
//               cursor: 'pointer',
//             }}>
//               <Link target="_top" to="/desarollo" style={{ color: 'white', textDecoration: 'none' }}> 
//                 Desarollo
//               </Link>
//             </li>
//             <li style={{
//               padding: '4px 12px',
//               cursor: 'pointer',
//             }}>
//               <Link target="_top" to="/dominos" style={{ color: 'white', textDecoration: 'none' }}>
//                 Dominios
//               </Link>
//             </li>
//             <li style={{
//             padding: '4px 12px',
//             cursor: 'pointer',
//           }}>
//               <Link target="_top" to="/servers" style={{ color: 'white', textDecoration: 'none' }}>
//                 Servidores
//               </Link>
//             </li>
//             <li style={{
//                 padding: '4px 12px',
//                 cursor: 'pointer',
//               }}>
//               <Link target="_top" to="/hosting" style={{ color: 'white', textDecoration: 'none' }}>
//                 Hosting
//               </Link>
//             </li>
//             </ul>
//             )}
//             </div>
//             <li>
//               <Link target="_top" to="/about">
//                 Sobre nosotros
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="contact_btn">
//           <Link target="_top" to="/contact">
//             <button>Contacto</button>
//           </Link>
//         </div>
//         </div>
//       </div>
//       <div className="nav_bar mobile" >
//         <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}>
//           <div className="logo" >
//             <div className="">
//               <img src={logo} alt="" srcset="" />
//             </div>
//             <div className="hm" onClick={handleChangeMobileNav}>
//               <img src={hmIm} alt="" />
//             </div>
//           </div>
//           <div className="links">
//             <ul>
//               <li>
//                 <Link target="_top" to="/">
//                   Inicio
//                 </Link>
//               </li>
//               <li>
//                 <Link target="_top" to="/desarollo">
//                   Desarollo
//                 </Link>
//               </li>
//               <li>
//                 <Link target="_top" to="/dominos">
//                   Dominios
//                 </Link>
//               </li>
//               <li>
//                 <Link target="_top" to="/servers">
//                   Servidores
//                 </Link>
//               </li>
//               <li>
//                 <Link target="_top" to="/hosting">
//                   Hosting
//                 </Link>
//               </li>
//               <li>
//                 <Link target="_top" to="/about">
//                   Sobre nosotros
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="contact_btn" >
//             <Link target="_top" to="/contact">
//               <button>Contacto</button>
//             </Link>
//           </div>
//         </div>
//         <div className="nav_bar mobile">
//           <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}    >
//             <div className="logo"    >
//               <div className="">
//                 <img src={logo} alt="" srcset="" />
//               </div>
//               <div className="hm" onClick={handleChangeMobileNav}    >
//                 <img src={hmIm} alt="" />
//               </div>
//             </div>
//             <div className="links">
//               <ul>
//                 <li><Link target="_top" to="/">Inicio</Link></li>
//                 <li><Link target="_top" to="/desarollo">Desarollo</Link></li>
//                 <li><Link target="_top" to="/dominos">Dominios</Link></li>
//                 <li><Link target="_top" to="/servers">Servidores</Link></li>
//                 <li><Link target="_top" to="/hosting">
//                    Hosting
//                  </Link>
//                </li>
//                <li>
//                  <Link target="_top" to="/about">
//                    Sobre nosotros
//                  </Link>
//                </li>
//              </ul>
//            </div>
//            <div className="contact_btn"    >
//              <Link target="_top" to="/contact"    >
//                <button>Contacto</button>
//              </Link>
//            </div>
//          </div>
//        </div>
//        </div>
//      </div>
//    );
//  };

//  export default NavBar;
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import v from "../assets/images/Vector.png";
import hmIm from "../assets/images/hamburger-svgrepo-com.svg";
import "../styles/nav_bar.css";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navContainer">
      {/* Desktop Navbar */}
      <div className="nav_bar pc">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="links">
            <ul>
              <li>
                <Link target="_top" to="/">Inicio</Link>
              </li>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={toggleDropdown} style={{
                  background: 'transparent', fontSize: '20px', fontWeight: '600', border: 'none', cursor: 'pointer'
                }}>
                  Servicios <span><img src={v} alt="Dropdown arrow" /></span>
                </button>
                {isOpen && (
                  <ul style={{
                    position: 'absolute', top: '100%', left: 0, listStyle: 'none', padding: '4px', borderRadius: '5px', zIndex: 1, background: 'transparent',
                  }}>
                    <li style={{ padding: '4px 12px', cursor: 'pointer' }}>
                      <Link target="_top" to="/data-services" style={{ color: 'white', textDecoration: 'none' }}>Servicios</Link>
                    </li>
                    <li style={{ padding: '4px 12px', cursor: 'pointer' }}>
                      <Link target="_top" to="/desarollo" style={{ color: 'white', textDecoration: 'none' }}>Desarollo</Link>
                    </li>
                    <li style={{ padding: '4px 12px', cursor: 'pointer' }}>
                      <Link target="_top" to="/dominos" style={{ color: 'white', textDecoration: 'none' }}>Dominios</Link>
                    </li>
                    <li style={{ padding: '4px 12px', cursor: 'pointer' }}>
                      <Link target="_top" to="/servers" style={{ color: 'white', textDecoration: 'none' }}>Servidores</Link>
                    </li>
                    <li style={{ padding: '4px 12px', cursor: 'pointer' }}>
                      <Link target="_top" to="/hosting" style={{ color: 'white', textDecoration: 'none' }}>Hosting</Link>
                    </li>
                  </ul>
                )}
              </div>
              <li>
                <Link target="_top" to="/about">Sobre nosotros</Link>
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

      {/* Mobile Navbar */}
      <div className="nav_bar mobile">
        <div className={`nav_bar ${mobileNavOpen ? "" : "closed"}`}>
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div className="hm" onClick={handleChangeMobileNav}>
              <img src={hmIm} alt="Hamburger icon" />
            </div>
          </div>
          <div className="links">
            <ul>
              <li><Link target="_top" to="/">Inicio</Link></li>
              <li><Link target="_top" to="/desarollo">Desarollo</Link></li>
              <li><Link target="_top" to="/dominos">Dominios</Link></li>
              <li><Link target="_top" to="/servers">Servidores</Link></li>
              <li><Link target="_top" to="/hosting">Hosting</Link></li>
              <li><Link target="_top" to="/about">Sobre nosotros</Link></li>
            </ul>
          </div>
          <div className="contact_btn">
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
