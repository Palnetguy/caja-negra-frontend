import NavBar from "../componets/nav_bar";
import pagedomaion1 from "../assets/images/Landing Page_Domains_1200x800_APAC 1.png";
import pagedomaion2 from "../assets/images/pngtree-computer-information-file-privacy-protection-illustration-png-image_4267628 1.png";
import pagedomaion3 from "../assets/images/png-transparent-technical-support-business-customer-service-consultant-business-service-computer-people 2.png";
import "../styles/registra_dominio.css";
import { Link } from "react-router-dom";
import { DomionBotomomponent } from "../componets/registra_dominio/domionBotom";
import useResponsive from "../utils/useResponsive";

const RegisterDominio = () => {
  const screenSize = useResponsive();
  return (
    <div className="register_domino" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="top" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <NavBar />
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>
            REGISTRAR <br /> DOMINIO
          </h1>
          <p>Asegura el nombre de dominio perfecto con nosotros</p>
          <Link target="_top" to="/solicitar">
            <button className="btn-1" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
      </div>
      <div className="more" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        {/* <DataServices /> */}
        <RegisterDominioOp />
        <Domains />
      </div>
    </div>
  );
};

const RegisterDominioOp = () => {
  const screenSize = useResponsive();
  return (
    <div className="register_domino_op" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <h2 className="sub_title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Elige Caja Negra</h2>
      <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>3 RAZONES PARA REGISTRARSE HOY</h1>
      <div className="register_domino_op_container" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="register_domin_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={pagedomaion1} alt="" />
          </div>
          <h1>Dominios a precios competitivos</h1>
          <p>
            Utilice nuestra herramienta de búsqueda de precios de dominios y
            ahorre dinero.
          </p>
        </div>
        <div className="register_domin_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={pagedomaion2} alt="" />
          </div>
          <h1>Soporte y orientación technico</h1>
          <p>Ayuda y asesoramiento de expertos, siempre que lo necesite.</p>
        </div>
        <div className="register_domin_each" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={pagedomaion3} alt="" />
          </div>
          <h1>Soporte y orientación technico</h1>
          <p>Ayuda y asesoramiento de expertos, siempre que lo necesite.</p>
        </div>
      </div>
    </div>
  );
};

const Domains = () => {
  const dData =[
    {
      id: 0,
      img: pagedomaion1,
      h1: 'Fácil Gestión e Dominions',
      p: `Despuès de la compra, puede dirigirse directamente
      al panel de su cuenta de Bluerey Group y comezar a
      usar su dominio. El panel del la cuenta está ordenado
      y es fácil de usar, por lo que puede concentrarse
      rápidamente en las cosas que importan.`
    },
    {
      id: 1,
      img: pagedomaion1,
      h1: 'Configuracio Fácil',
      p: `Tu dirección de correo elctrónico gratuita está lista y
      esperádote. ¿Ya tienes configurada una própera
      página de comercio electrónico o redes sociales? Utilice
      el reenvio de URL para dirigir a sus visitantes a su
      página de Instagram. Weebly o Shopify de su elección`
    }
    ,
    {
      id: 2,
      img: pagedomaion1,
      h1: 'Estamos Par Ayudarte',
      p:`Su dominio Ileva su marca. Imagen pública y
      reputacion profesional. Además de atención al
      cliente las 24 horas del dia, los 7 dias de la semana,
      le brindamos todo lo que necesita para dessarollar
      su sitio personal o commercial.`
    },
    {
      id: 3,
      img: pagedomaion1,
      h1: 'Privacidad y seguridad',
      p: `La seguridad y la privacidad de su sitio web son lo
      primero en Bluerey Group, y siempre apoyaremos los
      derechos de las personans y los dos consumidores en
      linea. Nuestra misión es mantener Internet abierta,
      gratuita y segura para todos`
    }
  ]
  const screenSize = useResponsive();
  return (
    <div className="domains" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <h2 className="sub_title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Dominios</h2>
      <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Nombre</h1>
      <div className="domainsContainer" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <p>.com</p>
        <p>.biz</p>
        <p>.net</p>
        <p>.store</p>
        <p>.me</p>
        <p>.co</p>
        <p>.info</p>
        <p>.mobi</p>
      </div>
      <Link target="_top" to="/solicitar">
        <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
      </Link>
      <div className="more_domain" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <h2 className="sub_title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          Estamos aquí para apoyar su viaje en línea
        </h2>
        <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>AYUDA EN CADA ETAPA</h1>
        <div className="more_domain_container" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          {dData.map(d=>(
            <DomionBotomomponent key={d.id} img={d.img} h1={d.h1} p={d.p}/>
          ))}
          {/* <div className="more_domain_each">
            <div className="image">
              <img src={pagedomaion1} alt="" />
            </div>
            <h1>Dominios a precios competitivos</h1>
            <p>
              Utilice nuestra herramienta de búsqueda de precios de dominios y
              ahorre dinero.
            </p>
          </div>
          <div className="more_domain_each">
            <div className="image">
              <img src={pagedomaion1} alt="" />
            </div>
            <h1>Dominios a precios competitivos</h1>
            <p>
              Utilice nuestra herramienta de búsqueda de precios de dominios y
              ahorre dinero.
            </p>
          </div>
          <div className="more_domain_each">
            <div className="image">
              <img src={pagedomaion1} alt="" />
            </div>
            <h1>Dominios a precios competitivos</h1>
            <p>
              Utilice nuestra herramienta de búsqueda de precios de dominios y
              ahorre dinero.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterDominio;