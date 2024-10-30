import NavBar from "../componets/nav_bar";
import pagedomaion1 from "../assets/images/Landing Page_Domains_1200x800_APAC 1.png";
import pagedomaion2 from "../assets/images/pngtree-computer-information-file-privacy-protection-illustration-png-image_4267628 1.png";
import pagedomaion3 from "../assets/images/png-transparent-technical-support-business-customer-service-consultant-business-service-computer-people 2.png";
import im1 from "../assets/images/dominio.png";
import im2 from "../assets/images/configuracion.png";
import im3 from "../assets/images/apoyo-tecnico.png";
import im4 from "../assets/images/privacy-policy.png";
import "../styles/registra_dominio.css";
import { Link } from "react-router-dom";
import { DomionBotomomponent } from "../componets/registra_dominio/domionBotom";
     

const RegisterDominio = () => {
  return (
    <div className="register_domino" >
      <div className="top" >
        <NavBar />
        <div className="info" >
          <h1>
            REGISTRAR <br /> DOMINIO
          </h1>
          <p>Asegura el nombre de dominio perfecto con nosotros</p>
          <Link target="_top" to="/solicitar">
            <button className="btn-1" >Solicitar</button>
          </Link>
        </div>
      </div>
      <div className="more" >
        {/* <DataServices /> */}
        <RegisterDominioOp />
        <Domains />
      </div>
    </div>
  );
};

const RegisterDominioOp = () => {
  return (
    <div className="register_domino_op" >
      <h2 className="sub_title" >Elige Caja Negra</h2>
      <h1 className="title" >3 RAZONES PARA REGISTRARSE HOY</h1>
      <div className="register_domino_op_container" >
        <div className="register_domin_each" >
          <div className="image" >
            <img src={pagedomaion1} alt="" />
          </div>
          <h1>Dominios a precios competitivos</h1>
          <p>
            Utilice nuestra herramienta de búsqueda de precios de dominios y
            ahorre dinero.
          </p>
        </div>
        <div className="register_domin_each" >
          <div className="image" >
            <img src={pagedomaion2} alt="" />
          </div>
          <h1>Servicios gratis al registrarse</h1>
          <p>Protección de privacidad gratuita de por vida y mucho más.</p>
        </div>
        <div className="register_domin_each" >
          <div className="image" >
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
      img: im1,
      h1: 'Fácil Gestión e Dominions',
      p: `Despuès de la compra, puede dirigirse directamente
      al panel de su cuenta de Bluerey Group y comezar a
      usar su dominio. El panel del la cuenta está ordenado
      y es fácil de usar, por lo que puede concentrarse
      rápidamente en las cosas que importan.`
    },
    {
      id: 1,
      img: im2,
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
      img: im3,
      h1: 'Estamos Par Ayudarte',
      p:`Su dominio Ileva su marca. Imagen pública y
      reputacion profesional. Además de atención al
      cliente las 24 horas del dia, los 7 dias de la semana,
      le brindamos todo lo que necesita para dessarollar
      su sitio personal o commercial.`
    },
    {
      id: 3,
      img: im4,
      h1: 'Privacidad y seguridad',
      p: `La seguridad y la privacidad de su sitio web son lo
      primero en Bluerey Group, y siempre apoyaremos los
      derechos de las personans y los dos consumidores en
      linea. Nuestra misión es mantener Internet abierta,
      gratuita y segura para todos`
    }
  ]
  return (
    <div className="domains" >
      <h2 className="sub_title" >Dominios</h2>
      <h1 className="title" >Nombre</h1>
      <div className="domainsContainer" >
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
        <button className="full_gradient_btn" >Solicitar</button>
      </Link>
      <div className="more_domain" >
        <h2 className="sub_title" >
          Estamos aquí para apoyar su viaje en línea
        </h2>
        <h1 className="title" style={{marginBottom: '2.5em'}}>AYUDA EN CADA ETAPA</h1>
        <div className="more_domain_container" >
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