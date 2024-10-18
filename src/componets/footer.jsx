import "../styles/footer.css";
import watIco from "../assets/images/Group 48.png";
import useResponsive from "../utils/useResponsive";

const Footer = () => {
  const screenSize = useResponsive();
  return (
    <div className="footer" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <h1>Caja Negra</h1>
      <div className="links" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="lft" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <a href="">Inicio</a>
          <a href="">Desarollo</a>
          <a href="">Dominios</a>
          <a href="">Servidores</a>
        </div>
        <div className="rgt" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="wtpIm" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={watIco} alt="" />
          </div>
          <div>
            <a href="">Hosting</a>
            <a href="">Sobre nosotros</a>
          </div>
        </div>
      </div>
      <div className="cc" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
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
