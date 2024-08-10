import NavBar from "../componets/nav_bar";
import "../styles/hosting_page.css";
import cloudHost1 from "../assets/images/cloud-hosting-bg 1.png";
import cloudHost2 from "../assets/images/462-4625058_server-illustration-web-hosting-vector-hd-png-download.png";
import cloudHost3 from "../assets/images/30734110-removebg-preview.png";
import revenderImg1 from "../assets/images/7331836 1.png";
import revenderImg2 from "../assets/images/png-transparent-businessperson-consultant-organization-company-market-company-text-people 1.png";
import revenderImg3 from "../assets/images/gratis-png-grafico-de-barras-3d-en-colores-surtidos-grafico-de-finanzas-dibujo-de-trabajo 1.png";
import { useState } from "react";

const HostingPage = () => {
  const [Compartido, setCompartido] = useState(true);

  const handleCompartido = () => {
    setCompartido((prev) => !prev);
  };
  return (
    <div className="hosting_page">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>HOSTING</h1>
          <p>
            Hosting Compartido & Revendedores de nuestro servicios Bajo de tu
            propia marca{" "}
          </p>
          <div className="btns">
            <button
              className={`${Compartido ? "full_gradient_btn" : "btn-1"}`}
              onClick={handleCompartido}
            >
              Compartido
            </button>
            <button
              className={`${!Compartido ? "full_gradient_btn" : "btn-1"}`}
              onClick={handleCompartido}
            >
              Revender
            </button>
          </div>
        </div>
      </div>

      {Compartido && <Hosting_Compartido />}
      {!Compartido && <Revender />}
      {/* <Revender />
      <Hosting_Compartido /> */}
    </div>
  );
};

const Hosting_Compartido = () => {
  return (
    <div className="hosting_compartido">
      <h2 className="sub_title">Hosting Compartido</h2>
      <h1 className="title">HOSTING NÚMERO TOP 10</h1>
      <div className="hosting_compartido_cont">
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={cloudHost1} alt="" />
          </div>
          <h1>Seguridad de hosting.</h1>
          <p>
            Nuestra seguridad de hosting trabaja 24/7 para monitorear las
            actividades sospechosas y ayudar a desviar los ataques DDoS
          </p>
        </div>
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={cloudHost2} alt="" />
          </div>
          <h1>Seguridad de hosting.</h1>
          <p>
            Nuestra seguridad de hosting trabaja 24/7 para monitorear las
            actividades sospechosas y ayudar a desviar los ataques DDoS
          </p>
        </div>
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={cloudHost3} alt="" />
          </div>
          <h1>Seguridad de hosting.</h1>
          <p>
            Nuestra seguridad de hosting trabaja 24/7 para monitorear las
            actividades sospechosas y ayudar a desviar los ataques DDoS
          </p>
        </div>
      </div>
      <div className="select_plan">
        <h2 className="sub_title">Especificaciones Técnicas</h2>
        <h1 className="title">HOSTING NÚMERO TOP 10</h1>
        <div className="select_plan_cont">
          <div className="selct_plan_each">
            <h1>REGULAR</h1>
            <p>
              Un plan economico de 25 GB con dominio , correo electronico
              coincidentes gratis y 1 ssl gratis
            </p>
            <button className="full_gradient_btn">Solicitar</button>
          </div>
          <div className="selct_plan_each">
            <h1>STANDARD</h1>
            <p>
              Mayor capacidad de procesamiento mutiples sitios, correo
              electronico coincidentes gratis y 1 ssl gratis
            </p>
            <button className="full_gradient_btn">Solicitar</button>
          </div>
          <div className="selct_plan_each">
            <h1>Premium +</h1>
            <p>
              Capacidad Y Velocidad de procesamiento maximizadas, correo
              electronico coincidentes gratis y 1 ssl gratis
            </p>
            <button className="full_gradient_btn">Solicitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Revender = () => {
  return (
    <div className="revender">
      <h2 className="sub_title">Tu Negocio, Nuestros Productos.</h2>
      <h1 className="title">REVENDE NUESTROS PRODUCTOS </h1>
      <h1 className="title">CON TU MARCA.</h1>
      <div className="hosting_compartido_cont">
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={revenderImg1} alt="" />
          </div>
          <h1>Construye tu tienda en línea.</h1>
          <p>
            La tienda debería reflejar tu estilo. Crea un escaparate que se
            parezca a tu negocio.
          </p>
        </div>
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={revenderImg2} alt="" />
          </div>
          <h1>Se reciben todo tipo de negocios.</h1>
          <p>
            Sabes cómo funciona tu área y cómo quieren hacer negocios tus
            clientes. Te ayudamos a que unas las dos partes.
          </p>
        </div>
        <div className="hosting_compartido_each">
          <div className="image">
            <img src={revenderImg3} alt="" />
          </div>
          <h1>Determina tus propios precios.</h1>
          <p>
            No obtengas simplemente una comisión, también determina tus propios
            márgenes y precios de productos a tu manera.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HostingPage;
