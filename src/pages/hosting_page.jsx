import NavBar from "../componets/nav_bar";
import "../styles/hosting_page.css";
import cloudHost1 from "../assets/images/cloud-hosting-bg 1.png";
import cloudHost2 from "../assets/images/462-4625058_server-illustration-web-hosting-vector-hd-png-download.png";
import cloudHost3 from "../assets/images/30734110-removebg-preview.png";

const HostingPage = () => {
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
            <button className="full_gradient_btn">Compartido</button>
            <button className="btn-1">Revender</button>
          </div>
        </div>
      </div>
      <Hosting_Compartido />
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

export default HostingPage;
