import logo from '../assets/images/logo.svg';
import '../styles/nav_bar.css'

const NavBar = () => {
    return ( 
        <div className="nav_bar">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Desarollo</a></li>
                    <li><a href="">Dominios</a></li>
                    <li><a href="">Servidores</a></li>
                    <li><a href="">Hosting</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                </ul>
            </div>
            <div className="contact_btn">
                <button>Contacto</button>
            </div>
        </div>
     );
}
 
export default NavBar;