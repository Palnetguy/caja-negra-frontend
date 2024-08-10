import Footer from "../componets/footer";
import NavBar from "../componets/nav_bar";
import "../styles/contactus_page.css";
import phoneImg from "../assets/images/ic_baseline-phone.png";
import emailImg from "../assets/images/mage_email-opened-fill.png";

const ContactUsPage = () => {
  return (
    <div className="contactus_page">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>Contáctanos</h1>
          <p>
            estamos aquí para ayudarte a encontrar soluciones tecnológicas
            innovadoras y responder a tus preguntas. Ya sea que estés interesado
            en nuestros servicios, necesites soporte técnico o simplemente
            quieras saber más sobre nosotros, no dudes en ponerte en contacto.
          </p>
          <br />
          <p>
            También puedes llenar el formulario de contacto a continuación, y
            uno de nuestros representantes se pondrá en contacto contigo a la
            brevedad. ¡Estamos ansiosos por ayudarte a descubrir el futuro de la
            tecnología con Caja Negra!
          </p>
        </div>
      </div>
      <ContactUsPageOp />
    </div>
  );
};

const ContactUsPageOp = () => {
  return (
    <div className="contactus_pageop">
      <div className="more_info">
        <div className="info">
          <div className="image">
            <img src={phoneImg} alt="" />
          </div>
          <h1>Telefonos</h1>
          <p>849-354-9727</p>
          <p>000-000-0047</p>
        </div>
        <div className="info">
          <div className="image">
            <img src={emailImg} alt="" />
          </div>
          <h1>Correo Electrónico</h1>
          <p>cajanegrard@gmail.com</p>
          <p>ventas@cajanegra.com</p>
        </div>
      </div>
      <div className="contact_form">
        <h2 className="sub_title">¿Tienes Preguntas?</h2>
        <h1 className="title">ENVIANOS UN MENSAJE</h1>
        <input type="text" placeholder="Nombre completo" />
        <input type="text" placeholder="Correo electronico" />
        <textarea name="" id="" placeholder="Mensajes"></textarea>
        <button className="full_gradient_btn">Enviar</button>
      </div>
    </div>
  );
};

export default ContactUsPage;
