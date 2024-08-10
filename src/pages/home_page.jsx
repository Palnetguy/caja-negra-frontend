import NavBar from "../componets/nav_bar";
import "../styles/home_page.css";
import bgVideo from "../assets/images/gif-bg blue stars.gif";
import chooseUs1Img from "../assets/images/choose-us-1.png";
import chooseUs2Img from "../assets/images/choose-us-2.png";
import chooseUs3Img from "../assets/images/choose-us-3.png";

import service7Img from "../assets/images/service-7 (1).png";
import service8Img from "../assets/images/service-8 (1) (1).png";
import service9Img from "../assets/images/service-9 (1).png";
import service10Img from "../assets/images/service-10 (1).png";
import service11Img from "../assets/images/vigilancia-1-e1682337472905 (1).png";
import service12Img from "../assets/images/service-12 (1).png";
import pay_mth_im from "../assets/images/Group 36 (1).png";
import bestVPSiM from "../assets/images/Best-VPS-Hosting-Plans 1 (1).png";
import { useState } from "react";
import CustomDropdown from "../componets/dropdown";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="top">
        <div className="bgVideo">
          <img src={bgVideo} alt="" srcset="" />
        </div>
        <NavBar />
        <Main />
      </div>
      <Services />
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <h1>Bienvenido a Caja Negra</h1>
      <h1>La tecnología futura en el ámbito virtual.</h1>
      <p>
        Caja Virtual es un producto diseñado para quienes buscan flexibilidad y
        simplicidad, sin sacrificar la complejidad que su infraestructura pueda
        requerir.
      </p>
      <button className="btn-1">Explorar</button>
    </div>
  );
};

const Services = () => {
  const [vpsOpen, setVpsOpen] = useState(true);

  const handleOnClickOffers = () => {
    setVpsOpen((prev) => !prev);
  };

  // const handleSelect = (option) => {
  //   console.log("Selected option:", option);
  // };

  return (
    <div className="services">
      <h2 className="sub_title">Servicios Garantizado</h2>
      <h1 className="title">¿Por qué elegirnos?</h1>
      {/* Services */}
      <div className="services_container">
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={chooseUs1Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={chooseUs2Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={chooseUs3Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
      </div>
      <div className="oferta">
        <h2 className="sub_title">Servidores Oferta</h2>
        <h1 className="title">Nuestras ofertas</h1>

        <div className="btns">
          <div
            className={`btn_op ${vpsOpen ? "active" : ""}`}
            onClick={handleOnClickOffers}
          >
            <div className="bgSpan"></div>
            <div className="word">
              <p>VPS</p>
            </div>
          </div>
          <div
            className={`btn_op ${!vpsOpen ? "active" : ""}`}
            onClick={handleOnClickOffers}
          >
            <div className="bgSpan"></div>
            <div className="word">
              <p>Dedicado</p>
            </div>
          </div>
        </div>

        {/* for vps */}
        {vpsOpen && (
          <div className="ofertas_container">
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <button>Solicitar</button>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <button>Solicitar</button>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <button>Solicitar</button>
              </div>
            </div>
          </div>
        )}
        {/* for dedicado */}
        {!vpsOpen && (
          <div className="ofertas_container">
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>Startup Dedicated Server</h1>
                <h2>
                  Están diseñados para alojar sitios web, de streaming o
                  aplicaciones profesionales, de alta demanda.
                </h2>
                <button>Solicitar</button>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>Storage Dedicate Server SDS</h1>
                <h2>
                  CPU : AMD Ryzen 5 Pro 3600 6c/12t - RAM : 32 GB - HDD : 4x 6TB
                  - Network : 2Gb/s
                </h2>
                <button>Solicitar</button>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>High Grade Dedicated Server HGDS-1</h1>
                <h2>
                  Dual Intel Xeon Gold 6226R - 32c/64t - 2.9GHz/3.9GHz 2x SSD
                  SATA 480GB 192GB DDR4 ECC 2933MHz 6× 3.84TB SSD NVMe Soft RAID
                  1Gbit/s unmetered and guaranteed
                </h2>
                <button>Solicitar</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="ver">
        <p>Ver todo los servicios de datos que ofrecemos</p>
        <Link to="data-services">
          <div className="btn_op">
            <div className="bgSpan"></div>
            <div className="word">
              <p>Ver</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="th_words">
        <p>Backup Diarios</p>
        <p>Migración gratis</p>
        <p>Configuración</p>
      </div>
      <div className="services_container">
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service7Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service8Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service9Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service10Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service11Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
        <div className="service">
          <div className="image">
            <div className="bgSpan"></div>
            <div className="img">
              <img src={service12Img} alt="" />
            </div>
          </div>
          <h2>99.9% Disponibilidad Garantizada</h2>
          <p>
            Nuestro equipo técnicos esta capacitados para solucionar cualquier
            incidente en el menor tiempo posible
          </p>
        </div>
      </div>
      <div className="word_btn">
        <h1>
          ¿Estás interesado en datos y te gustaría conocer el tipo de servicio
          de datos que ofrecemos?"
        </h1>
        <Link to="data-services">
          <button className="full_gradient_btn">Ver Detalles</button>
        </Link>
      </div>
      <div className="garantee">
        <h1>
          Nos comprometemos como una de las mejor solución de servicios web de
          latinoamerica
        </h1>

        <div className="contain_grns">
          <div className="each_grns ">
            <div className="bgSpan"></div>
            <div className="info">
              <h1>30 Dias de Garantia</h1>
              <h2>
                Prueba nuestros servicios con toda tranquilidad, ya que cuentas
                con una garantía total.
              </h2>
              <button>Más</button>
            </div>
          </div>
          <div className="each_grns ">
            <div className="bgSpan"></div>
            <div className="info">
              <h1>Infraestructura anti-DDoS</h1>
              <h2>
                Nuestra infraestructura anti-DDoS combina una protección de red
                perimetral, desde el backbone hasta nuestros datacenters.
              </h2>
              <button>Más</button>
            </div>
          </div>
        </div>

        <h1 className="title">Medios de pago</h1>
        <div className="pay_mth_img">
          <img src={pay_mth_im} alt="" />
        </div>
      </div>
      <div className="vps">
        <div className="lft">
          <h1>Servidores privados virtuales (VPS)</h1>
          <p>
            Nuestros VPS están especialmente diseñados para adaptarse a sus
            necesidades y crecer con su negocio.
          </p>
          <ul>
            <li> Escalabilidad y personalización</li>
            <li> Ancho de banda ilimitado de hasta 2 Gb/s*</li>
            <li> Protección anti-DDoS incluida</li>
          </ul>
          <button className="full_gradient_btn">Contratar</button>
        </div>

        <div className="rht">
          <div className="service">
            <div className="image">
              <div className="bgSpan"></div>
              <div className="img">
                <img src={bestVPSiM} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vps sus">
        <div className="lft">
          <h1>
            Seleccione el servidor dedicado más adecuado para sus aplicaciones
          </h1>
          {/* <p>Nuestros VPS están especialmente diseñados para adaptarse a sus necesidades y crecer con su negocio.</p> */}
          <ul>
            <li> Escalabilidad y personalización</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p>
            <li> Ancho de banda ilimitado de hasta 2 Gb/s*</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p>
            <li> Protección anti-DDoS incluida</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p>
          </ul>
          <button className="full_gradient_btn">Contratar</button>
        </div>

        <div className="rht">
          <div className="service">
            <div className="image">
              <div className="bgSpan"></div>
              <div className="img">
                <img src={bestVPSiM} alt="" />
              </div>
            </div>
          </div>
          <div className="service">
            <div className="image">
              <div className="bgSpan"></div>
              <div className="img">
                <img src={bestVPSiM} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="remarks">
        <h1>
          Más de 20,000 personas han utilizado nuestros cursos, herramientas y
          asesoramiento para ayudar a que sus negocios prosperen.
        </h1>
        <div className="remarks_container">
          <div className="remark">
            <div className="bgSpan"></div>
            <p>
              "Trabajar con Caja Negra ha sido un cambio radical para nuestra
              empresa. Su experiencia en análisis de datos e integración nos
              permitió optimizar nuestras operaciones y obtener valiosos
              conocimientos que han impulsado nuestras decisiones estratégicas.
              La dedicación del equipo para entender nuestras necesidades y
              ofrecer soluciones personalizadas es incomparable."
            </p>
            <p> Jane Smith, CEO de Tech Solutions Inc.</p>
          </div>
          <div className="remark">
            <div className="bgSpan"></div>
            <p>
              "Trabajar con Caja Negra ha sido un cambio radical para nuestra
              empresa. Su experiencia en análisis de datos e integración nos
              permitió optimizar nuestras operaciones y obtener valiosos
              conocimientos que han impulsado nuestras decisiones estratégicas.
              La dedicación del equipo para entender nuestras necesidades y
              ofrecer soluciones personalizadas es incomparable."
            </p>
            <p> Jane Smith, CEO de Tech Solutions Inc.</p>
          </div>
          <div className="remark">
            <div className="bgSpan"></div>
            <p>
              "Trabajar con Caja Negra ha sido un cambio radical para nuestra
              empresa. Su experiencia en análisis de datos e integración nos
              permitió optimizar nuestras operaciones y obtener valiosos
              conocimientos que han impulsado nuestras decisiones estratégicas.
              La dedicación del equipo para entender nuestras necesidades y
              ofrecer soluciones personalizadas es incomparable."
            </p>
            <p> Jane Smith, CEO de Tech Solutions Inc.</p>
          </div>
          <div className="remark">
            <div className="bgSpan"></div>
            <p>
              "Trabajar con Caja Negra ha sido un cambio radical para nuestra
              empresa. Su experiencia en análisis de datos e integración nos
              permitió optimizar nuestras operaciones y obtener valiosos
              conocimientos que han impulsado nuestras decisiones estratégicas.
              La dedicación del equipo para entender nuestras necesidades y
              ofrecer soluciones personalizadas es incomparable."
            </p>
            <p> Jane Smith, CEO de Tech Solutions Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
