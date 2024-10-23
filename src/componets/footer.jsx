import "../styles/footer.css";
import watIco from "../assets/images/Group 48.png";
     

const Footer = () => {
      
  return (
    <div className="footer"    >
      <h1>Caja Negra</h1>
      <div className="links"    >
        <div className="lft"    >
          <a href="">Inicio</a>
          <a href="">Desarollo</a>
          <a href="">Dominios</a>
          <a href="">Servidores</a>
        </div>
        <div className="rgt"    >
          <div className="wtpIm"    >
            <img src={watIco} alt="" />
          </div>
          <div>
            <a href="">Hosting</a>
            <a href="">Sobre nosotros</a>
          </div>
        </div>
      </div>
      <div className="cc"    >
        <p>Copyright , all right reserved</p>
        <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
