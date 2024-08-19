import NavBar from "../componets/nav_bar";
import "../styles/servidores_page.css";
import includedfeat1 from "../assets/images/included-feature-1 (1) 1.png";
import includedfeat2 from "../assets/images/included-feature-3.png";
import includedfeat3 from "../assets/images/included-feature-4.png";
import includedfeat4 from "../assets/images/included-feature-5.png";
import bestVpsImg from "../assets/images/Best-VPS-Hosting-Plans 1 (1).png";
import pngTree from "../assets/images/pngtree-technological-isometric-server-illustrated-on-background-png-image_3174520 1.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "./config";

const Servidores = () => {
  const [vpsOpen, setVpsOpen] = useState(true);

  const handleVpsOpen = () => {
    setVpsOpen((prev) => !prev);
  };
  return (
    <div className="servidores_page">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>Servidores</h1>
          <p>Servidores Privados Virtuales & Servidores Dedicados</p>
          <div className="btns">
            <button
              className={`${vpsOpen ? "full_gradient_btn" : "btn-1"}`}
              onClick={handleVpsOpen}
            >
              VPS
            </button>

            <button
              className={`${!vpsOpen ? "full_gradient_btn" : "btn-1"}`}
              onClick={handleVpsOpen}
            >
              Dedicados
            </button>
          </div>
        </div>
      </div>
      {vpsOpen && <ServidoresOp />}
      {!vpsOpen && <ServidoresOp_1 />}
    </div>
  );
};

const ServidoresOp = () => {
  // var current_server = 0;
  const [current_server, setcurrent_server] = useState(0);
  const [serversData, setserversData] = useState([]);
  const [isDoneLoadingserversData, setisDoneLoadingserversData] =
    useState(true);
  // const servers = [
  //   {
  //     name: "Basico",
  //     cpu: "1 Core",
  //     Bandwidth: "100 GB",
  //     BandwidthTwo: "100 GB",
  //     RAM: "1 GB",
  //     DiskSpace: "20 GB",
  //     IP: "1",
  //   },
  //   {
  //     name: "Freelancer",
  //     cpu: "2 Core",
  //     Bandwidth: "2 TB",
  //     BandwidthTwo: "100 GB",
  //     RAM: "2 GB",
  //     DiskSpace: "80 GB",
  //     IP: "0",
  //   },
  //   {
  //     name: "Ecommerce",
  //     cpu: "2 Core",
  //     Bandwidth: "2 GB",
  //     BandwidthTwo: "200 GB",
  //     RAM: "2 GB",
  //     DiskSpace: "100 GB SSD",
  //     IP: "1",
  //   },
  //   {
  //     name: "Agencia",
  //     cpu: "8 Core",
  //     Bandwidth: "12T TB",
  //     BandwidthTwo: "150 GB",
  //     RAM: "16 GB",
  //     DiskSpace: "2 GB SSD",
  //     IP: "1",
  //   },
  //   {
  //     name: "Basico",
  //     cpu: "1 Core",
  //     Bandwidth: "12 TB",
  //     BandwidthTwo: "150 GB",
  //     RAM: "8 GB",
  //     DiskSpace: "1TB SSD",
  //     IP: "5",
  //   },
  // ];

  useEffect(() => {
    axios
      .get(config.apiEndpoint + "/vps-info/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setserversData(response.data);
        console.log(response.data);
        setisDoneLoadingserversData(false);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        setisDoneLoadingserversData(false);
      });
  }, []);

  const handleChangeServer = (e) => {
    setcurrent_server(e);
  };

  return (
    <div className="servidores_op" id="servidores_op">
      <div className="changeBtns">
        {serversData.map((e, index) => (
          <div
            className={`changeBtn ${current_server === index ? "active" : ""}`}
            onClick={() => handleChangeServer(index)}
          >
            {e.name}
          </div>
        ))}
      </div>

      {!isDoneLoadingserversData && (
        <>
          <div className="specs_contain">
            <div className="specs">
              <div className="info">
                <p>CPU</p>
                <p>{serversData[current_server].cpu}</p>
              </div>
              <div className="info">
                <p>Bandwidth</p>
                <p>{serversData[current_server].bandwidth}</p>
              </div>
              <div className="info">
                <p>Bandwidth Two</p>
                <p>{serversData[current_server].bandwidth_two}</p>
              </div>
              <div className="info">
                <p>RAM</p>
                <p>{serversData[current_server].ram}</p>
              </div>
              <div className="info">
                <p>Disk Space</p>
                <p>{serversData[current_server].diskspace}</p>
              </div>
              <div className="info">
                <p>IP</p>
                <p>{serversData[current_server].ip}</p>
              </div>
              <Link target="_top" to="/solicitar">
                <button className="full_gradient_btn">Solicitar</button>
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="nuestros">
        <h2 className="sub_title">Nuestros</h2>
        <h1 className="title">BENEFICIOS</h1>
        <div className="nuestros_cont">
          <div className="nuetro">
            <div className="image">
              <img src={includedfeat1} alt="" />
            </div>
            <h1>Discos SSD</h1>
            <p>
              Todos nuestros servidores vienen con discos SSD. Esto proporciona
              suficiente potencia de procesamiento para cualquier tipo de
              proyecto en línea de mediana o gran escala.
            </p>
          </div>
          <div className="nuetro">
            <div className="image">
              <img src={includedfeat2} alt="" />
            </div>
            <h1>Acceso Root al Servidor</h1>
            <p>
              Obtén control total de tu VPS, tomando ventaja del acceso root.
              Personaliza tu hosting a tu gusto y lleva control de todos tus
              recursos en tiempo real.
            </p>
          </div>
          <div className="nuetro">
            <div className="image">
              <img src={includedfeat3} alt="" />
            </div>
            <h1>Red de 1000 Mb/s</h1>
            <p>
              Disfruta de un tiempo de carga increíblemente rápido para tu sitio
              web, y una garantía de tiempo de actividad del servidor del 99,9%.
              Tus visitantes disfrutarán de una experiencia de usuario fluida
              sin preocuparse por tiempos de inactividad inesperados.
            </p>
          </div>
          <div className="nuetro">
            <div className="image">
              <img src={includedfeat4} alt="" />
            </div>
            <h1>DiscCopias de Seguridad y Snapshots</h1>
            <p>
              No pierdas tu información! Tu sitio web se podrá restaurar en
              cuestión de minutos, gracias a las copias de seguridad automáticas
              y snapshots en vivo manuales incluidos en nuestros planes de VPS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServidoresOp_1 = () => {
  const [
    isDoneLoadingdedicatedserversData,
    setisDoneLoadingdedicatedserversData,
  ] = useState(true);
  const [dicatedserversData, setdicatedserversData] = useState([]);

  useEffect(() => {
    axios
      .get(config.apiEndpoint + "/dedicated-servers/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setdicatedserversData(response.data);
        console.log(response.data);
        setisDoneLoadingdedicatedserversData(false);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        setisDoneLoadingdedicatedserversData(false);
      });
  }, []);
  return (
    <div className="servidoresOp_1" id="servidoresOp_1">
      <h2 className="sub_title">Servicio al Cliente Experimentado</h2>
      <h1 className="title">
        NOS DESTACAMOS POR 
        <br />
        LA EXPERIENCIA
      </h1>
      <div className="servidoresOp_1_contain">
        <div className="servidoresOp_1_each">
          <div className="image">
            <img src={bestVpsImg} alt="" />
          </div>
          <h1>Servidores de última generación</h1>
          <p>
            Caja Negra presenta más de 1000 modelos de servidores a configurar
          </p>
        </div>
        <div className="servidoresOp_1_each">
          <div className="image">
            <img src={bestVpsImg} alt="" />
          </div>
          <h1>Servidores de última generación</h1>
          <p>
            Caja Negra presenta más de 1000 modelos de servidores a configurar
          </p>
        </div>
        <div className="servidoresOp_1_each">
          <div className="image">
            <img src={bestVpsImg} alt="" />
          </div>
          <h1>Servidores de última generación</h1>
          <p>
            Caja Negra presenta más de 1000 modelos de servidores a configurar
          </p>
        </div>
      </div>

      <div className="servidoresOp_1_contain1">
        {/* <div className="servidoresOp_1_each_1">
          <h1>PROCESADOR</h1>
          <h2>Dual Xeon 2603</h2>
          <ul>
            <li>Memoria 64GB</li>
            <li>Almacenamiento 120GB SSD</li>
            <li>Transferencia 1Gbps / ilimitado</li>
            <li>Entrega 12 horas</li>
          </ul>
          <h1>$ 370</h1>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn">Solicitar</button>
          </Link>
        </div> */}

        {dicatedserversData.map((e) => (
          <div className="servidoresOp_1_each_1">
            <h1>PROCESADOR</h1>
            <h2>{e.PROCESSORS}</h2>
            <ul>
              <li>Memoria {e.memoria}</li>
              <li>Almacenamiento {e.storage}</li>
              <li>Transferencia {e.transfer}</li>
              <li>Entrega {e.time}</li>
            </ul>
            <h1>$ 370</h1>
            <Link target="_top" to="/solicitar">
              <button className="full_gradient_btn">Solicitar</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="nuestros_cont">
        <div className="nuetro">
          <div className="image">
            <img src={pngTree} alt="" />
          </div>
          <h1>Servidores No Administrados</h1>
          <p>
            El control total sobre su servidor está completamente en sus manos.
          </p>
        </div>
        <div className="nuetro">
          <div className="image">
            <img src={includedfeat2} alt="" />
          </div>
          <h1>Hardware Más Reciente</h1>
          <p>
            Estamos constantemente actualizando nuestra tecnología para
            garantizar el mejor servicio.
          </p>
        </div>
        <div className="nuetro">
          <div className="image">
            <img src={includedfeat3} alt="" />
          </div>
          <h1>Privacidad</h1>
          <p>
            Todo el contenido administrado está totalmente protegido. Tu
            puntuación está segura con nosotros.
          </p>
        </div>
        <div className="nuetro">
          <div className="image">
            <img src={includedfeat4} alt="" />
          </div>
          <h1>Atención al Cliente</h1>
          <p>
            Nuestros servicios están totalmente respaldados por nuestro equipo.
            Los mejores servidores dedicados requieren el mejor mantenimiento.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Servidores;
