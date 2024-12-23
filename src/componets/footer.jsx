import "../styles/footer.css";
import "../styles/aboutus_page.css";
import watIco from "../assets/images/Group 48.png";
     

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  const sendToWhatsApp = () => {
    const whatsappMessage = `Hello Caja Negra.\n I need assistance with your services.`;
    const whatsappUrl = `https://wa.me/256783808236?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="footer" >
      <h1>Caja Negra</h1>
      <div className="links" >
        <div className="lft" >
          <a href="/data-services">Servicios</a>
          <a href="/category">Categorias</a>
          <a href="/dominos">Dominios</a>
          <a href="/data-services">Servidores</a>
          <a href="/hosting">Hosting</a>
          <a href="/desarollo">Desarollo</a>
        </div>
        <div className="rgt" >
          <div className="wtpIm" onClick={handleSubmit}>
            {/* <button>
              <img src={watIco} alt="" />
            </button> */}
              <img src={watIco} alt="" />
          </div>
          <div className="rlnk">
            {/* <a href="">Hosting</a> */}
            <a href="/about">Sobre nosotros</a>
          </div>
        </div>
      </div>
      <div className="cc" >
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
