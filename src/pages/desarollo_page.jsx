// import "../assets/images/timage5.png";
import { Link } from "react-router-dom";
import dedicatedServerIMg from "../assets/images/Dedicated-Server-PNG-Photo 1.png";
import NavBar from "../componets/nav_bar";
import "../styles/desarollo_page.css";
import { useEffect, useState } from "react";
import config from "./config";
import axios from "axios";

const DesarolloPage = () => {
  return (
    <div className="desarollo_page">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>DESAROLLO</h1>
          <p>
            Somos experto en el desarrollo de aplicaciones para todos los
            dispositivos móviles
          </p>
          <Link target="_top" to="/solicitar">
            <button className="btn-1">Solicitar</button>
          </Link>
        </div>
      </div>

      <Desarollo />
    </div>
  );
};

const Desarollo = () => {
  const [developmentinfoData, setdevelopmentinfoData] = useState([]);

  useEffect(() => {
    axios
      .get(config.apiEndpoint + "/development-info/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setdevelopmentinfoData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
      });
  }, []);
  return (
    <div className="desarollo">
      <div className="desarollo_each_cont">
        {/* <div className="desarollo_each">
          <h1>Imagen de Marca</h1>
          <p>
            Implemente la imagen de su marca en una aplicación para su negocio.
          </p>
        </div>
        <div className="desarollo_each">
          <h1>Diseño Personalizable</h1>
          <p>
            Con su logo, perfiles de redes sociales, imágenes y esquema de
            colores. Donde su negocio se destaque.
          </p>
        </div>
        <div className="desarollo_each">
          <h1>Presencia en Internet</h1>
          <p>
            =Lleve su negocio a todas partes. El Internet le da potencial a
            cualquier negocio.
          </p>
        </div>
        <div className="desarollo_each">
          <h1>Aplicaciones Android - IOS</h1>
          <p>
            Los equipos móviles de sus clientes no son una limitante,
            desarrollamos 100% nativo
          </p>
        </div> */}

        {developmentinfoData.map((e) => (
          <div className="desarollo_each" key={e.id}>
            <h1>{e.title}</h1>
            <p>{e.info}</p>
          </div>
        ))}
      </div>

      <div className="desarollo_more">
        <div className="lft">
          <h1>Desarrollar, Actualizar y Publicar</h1>
          <p>
            Las aplicaciones son de uso intuitivo, de forma que cualquier
            persona no necesita aprender instrucciones para el uso correcto de
            ellas.
          </p>
          <ul>
            <li>100% Nativo.</li>
            <li>
              Trabaja en segundo plano mientras usted navega en su teléfono.
            </li>
            <li>Estará disponible en Play Store y/o App Store.</li>
          </ul>
        </div>
        <div className="rgt">
          <div className="image">
            <img src={dedicatedServerIMg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesarolloPage;
