// import "../assets/images/timage5.png";
import { Link } from "react-router-dom";
import dedicatedServerIMg from "../assets/images/Dedicated-Server-PNG-Photo 1.png";
import NavBar from "../componets/nav_bar";
import "../styles/desarollo_page.css";
import { useEffect, useState } from "react";
import config from "./config";
import axios from "axios";
import { DesarolloComponent } from "../componets/desarollo_page/desarollo";
import { DesarolloBotomComponent } from "../componets/desarollo_page/desarolloBotom";
import useResponsive from "../utils/useResponsive";

const DesarolloPage = () => {
  const screenSize = useResponsive();
  return (
    <div className="desarollo_page" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="top" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <NavBar />
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>DESAROLLO</h1>
          <p>
            Somos experto en el desarrollo de aplicaciones para todos los
            dispositivos móviles
          </p>
          <Link target="_top" to="/solicitar">
            <button className="btn-1" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
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

  const developmentInfoData=[
    {
      id: 0,
      title: 'Imagen de Marca',
      info: 'Implemente la imagen de su marca en una aplicación para su negocio.',
    },
    {
      id: 1,
      title: 'Diseño Personalizable',
      info: 'Con su logo, perfiles de redes sociales, imágenes y esquema de colores. Donde su negocio se destaque.',
    },
    {
      id: 2,
      title: 'Presencia en Internet',
      info: 'Lleve su negocio a todas partes. El Internet le da potencial a cualquier negocio.',
    },
    {
      id: 3,
      title: 'Aplicaciones Android - IOS',
      info: 'Los equipos móviles de sus clientes no son una limitante, desarrollamos 100% nativo',
    }
  ]
  const extraData =[
    {
      id: 0,
      title:'IOS  Mobile',
      p: 'Applicatión básicas para negotios',
      info: ['publicada en playstore', 'iconos de Redes sociales', 'Chat Whatsapp', 'Sitio Web', 'Notificationes Generales'],
      bt: 'Solicitar'
    },
    {
      id: 1,
      title:'Android Mobile',
      p: 'Applicatión básicas para negotios',
      info: ['publicada en playstore', 'iconos de Redes sociales', 'Chat Whatsapp', 'Sitio Web', 'Notificationes Generales'],
      bt: 'Solicitar'
    }
  ]
  const screenSize = useResponsive();
  return (
    <div className="desarollo" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="desarollo_each_cont" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
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

        {developmentInfoData.map((e) => (
          <DesarolloComponent className="desarollo_each" key={e.id} title={e.title} info={e.info}/>
        ))}
      </div>

      <div className="desarollo_more" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="lft" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
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
        <div className="rgt" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <div className="image" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <img src={dedicatedServerIMg} alt="" />
          </div>
        </div>
      </div>
      <div className="desarollo_each_cont" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        {extraData.map(d=>(
          <DesarolloBotomComponent key={d.id} des={d.p} title={d.title} info={d.info} buttonTitle={d.bt}/>
        ))}
      </div>
    </div>
  );
};

export default DesarolloPage;
