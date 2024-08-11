import NavBar from "../componets/nav_bar";
import pagedomaion1 from "../assets/images/Landing Page_Domains_1200x800_APAC 1.png";
import pagedomaion2 from "../assets/images/pngtree-computer-information-file-privacy-protection-illustration-png-image_4267628 1.png";
import pagedomaion3 from "../assets/images/png-transparent-technical-support-business-customer-service-consultant-business-service-computer-people 2.png";
import "../styles/registra_dominio.css";
import { Link } from "react-router-dom";

const RegisterDominio = () => {
  return (
    <div className="register_domino">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>
            REGISTRAR <br /> DOMINIO
          </h1>
          <p>Asegura el nombre de dominio perfecto con nosotros</p>
          <Link target="_top" to="/solicitar">
            <button className="btn-1">Solicitar</button>
          </Link>
        </div>
      </div>
      <div className="more">
        {/* <DataServices /> */}
        <RegisterDominioOp />
        <Domains />
      </div>
    </div>
  );
};

const RegisterDominioOp = () => {
  return (
    <div className="register_domino_op">
      <h2 className="sub_title">Elige Caja Negra</h2>
      <h1 className="title">3 RAZONES PARA REGISTRARSE HOY</h1>
      <div className="register_domino_op_container">
        <div className="register_domin_each">
          <div className="image">
            <img src={pagedomaion1} alt="" />
          </div>
          <h1>Dominios a precios competitivos</h1>
          <p>
            Utilice nuestra herramienta de búsqueda de precios de dominios y
            ahorre dinero.
          </p>
        </div>
        <div className="register_domin_each">
          <div className="image">
            <img src={pagedomaion2} alt="" />
          </div>
          <h1>Soporte y orientación technico</h1>
          <p>Ayuda y asesoramiento de expertos, siempre que lo necesite.</p>
        </div>
        <div className="register_domin_each">
          <div className="image">
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
  return (
    <div className="domains">
      <h2 className="sub_title">Dominios</h2>
      <h1 className="title">Nombre</h1>
      <div className="domainsContainer">
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
        <button className="full_gradient_btn">Solicitar</button>
      </Link>
      <div className="more_domain">
        <h2 className="sub_title">
          Estamos aquí para apoyar su viaje en línea
        </h2>
        <h1 className="title">AYUDA EN CADA ETAPA</h1>
        <div className="more_domain_container">
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
        </div>
      </div>
    </div>
  );
};

export default RegisterDominio;
