import NavBar from "../componets/nav_bar";
import "../styles/home_page.css";
import bgVideo from "../assets/images/gif-bg blue stars.gif";
import chooseUs1Img from "../assets/images/choose-us-1.png";
import chooseUs2Img from "../assets/images/choose-us-2.png";
import chooseUs3Img from "../assets/images/choose-us-3.png";
import wvffas from "../assets/images/Windows-VPS-For-FOCUS-Accounting-Software 1.png";
import fwvh from '../assets/images/Free-Windows-VPS-Hosting 1.png';

import service7Img from "../assets/images/service-7 (1).png";
import service8Img from "../assets/images/service-8 (1) (1).png";
import service9Img from "../assets/images/service-9 (1).png";
import service10Img from "../assets/images/service-10 (1).png";
import service11Img from "../assets/images/vigilancia-1-e1682337472905 (1).png";
import service12Img from "../assets/images/service-12 (1).png";
import pay_mth_im from "../assets/images/Group 36 (1).png";
import bestVPSiM from "../assets/images/Best-VPS-Hosting-Plans 1 (1).png";
import { useEffect, useState } from "react";
import CustomDropdown from "../componets/dropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "./config";
import { ServicesComponent } from "../componets/home_page/services";
import { VpsComponent } from "../componets/home_page/vps";
import { DedicaoComponent } from "../componets/home_page/dedicao";
import { ProfessionaleService } from "../componets/home_page/professionale_service";
import { RemarksContainer } from "../componets/home_page/remarks";
import { ListComponent } from "../componets/home_page/listComponent"; 

const HomePage = () => {
  const [isloading, setislaoding] = useState(true);

  const handleLoading = (value) => {
    setTimeout(() => {
      setislaoding(value);
    }, 2000);
  };
  return (
    <div className="home_page" >
      <div className="top" >
        <div className="bgVideo">
          <img src={bgVideo} alt="" srcset="" />
        </div>
        <NavBar />
        <Main />
      </div>
      <Services handleLoading={handleLoading} />
    </div>
  );
};

const Main = () => {
  return (
    <div className="main" >
      <h1>Bienvenido a Caja Negra
      La Tecnología Futura En El Ámbito Virtual.</h1>
      <p>
        Caja Virtual es un producto diseñado para quienes buscan flexibilidad y
        simplicidad, sin sacrificar la complejidad que su infraestructura pueda
        requerir.
      </p>
      <a href="#why_choose_us">
        <button className="btn-1">Explorar</button>
      </a>
    </div>
  );
};

const Services = ({ handleLoading }) => {
  // const [isloadingfully, setisloadingfully] = useState(true);
  const [isloadingwhychooseus, setisloadingwhychooseus] = useState(true);
  const [isloadingcomments, setisloadingcomments] = useState(true);
  const [isloadingoffer, setisloadingoffer] = useState(true);
  const [vpsOpen, setVpsOpen] = useState(true);

  useEffect(() => {
    if (!isloadingwhychooseus && !isloadingcomments && !isloadingcomments) {
      handleLoading(false);
    } else if (isloadingwhychooseus && isloadingcomments && isloadingcomments) {
      handleLoading(true);
    }
  }, [isloadingwhychooseus, isloadingcomments, isloadingoffer]);

  const handleOnClickOffers = () => {
    setVpsOpen((prev) => !prev);
  };

  // const handleSelect = (option) => {
  //   console.log("Selected option:", option);
  // };

  const [whyChooseUsdata, setwhyChooseUsData] = useState([]);
  const [offersData, setoffersData] = useState([]);
  const [servicesData, setservicesData] = useState([]);
  const [commetsData, setcommetsData] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setisloadingcomments(true);
    setisloadingwhychooseus(true);
    setisloadingoffer(true);
    // Define the API endpoint and the API key

    // Set up the Axios request
    axios
      .get(config.apiEndpoint + "/why-choose-us/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setwhyChooseUsData(response.data);
        setisloadingwhychooseus(false);
        console.log(response.data);
      })
      .catch((error) => {
        // setError(error.message);
        setisloadingwhychooseus(false);
        console.log(error.message);
      });

    // Set up the Axios request
    axios
      .get(config.apiEndpoint + "/offers/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setoffersData(response.data);
        setisloadingoffer(false);
        console.log(response.data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        setisloadingoffer(false);
      });

    axios
      .get(config.apiEndpoint + "/services/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setservicesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
      });

    axios
      .get(config.apiEndpoint + "/comments/", {
        headers: {
          Authorization: `API-Key ${config.apiKey}`, // or 'API-Key': apiKey, depending on API
          // Authorization: `Bearer ${apiKey}`, // or 'API-Key': apiKey, depending on API
        },
      })
      .then((response) => {
        setisloadingcomments(false);
        setcommetsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        setisloadingcomments(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

const services_data=[
  {
    id: 0,
    img: chooseUs1Img,
    heading: '99.9% Disponibilidad Garantizada',
    body: 'Nuestro equipo técnicos esta capacitados para solucionar cualquier incidente en el menor tiempo posible'
  },
  {
    id: 1,
    img: chooseUs2Img,
    heading: 'Protocolos de Seguridad Avanzados',
    body: 'Nuestro estándar de seguridad esta basado en protocolos (TLS, IPsec, VPN...) cumpliendo con normativas internaciones.'
  },
  {
    id: 2,
    img: chooseUs3Img,
    heading: 'Soporte Técnico Dedicado 24/7',
    body: 'Disponibilidad en cualquier horario para cumplir las exigencias de su empresa o negocio y brindar apoyo inmediato.'
  },
];

const vpsData=[
  {
    id: 0,
    h1: 'VPS Linux',
    h2: 'CPU 2 - RAM 8GB - SSD 200GB',
    bt: 'Solicitar'
  },
  {
    id: 1,
    h1: 'Basic VPS Linux',
    h2: 'CPU  - RAM 16GB - SSD 200GB',
    bt: 'Solicitar'
  },
  {
    id: 2,
    h1: 'VPS Remote Desktop',
    h2: 'CPU 2 - RAM 4GB - SSD 80GB',
    bt: 'Solicitar'
  }
]

const dedicaoData = [
  {
    id: 0,
    h1: 'Startup Dedicated Server',
    h2: `Están diseñados para alojar sitios web, de
    streaming o aplicaciones profesionales, de
    alta demanda.`,
    bt: 'Solicitar'
  },
  {
    id: 1,
    h1: 'Storage Dedicate Server SDS',
    h2: `CPU : AMD Ryzen 5 Pro 3600
    6c/12t - RAM : 32 GB - HDD : 4x
    6TB - Network : 2Gb/s`,
    bt: 'Solicitar'
  },
  {
    id: 2,
    h1: 'High Grade Dedicated Server HGDS-1',
    h2: `Dual Intel Xeon Gold 6226R -
    32c/64t - 2.9GHz/3.9GHz 2x SSD
    SATA 480GB 192GB DDR4 ECC 
    2933MHz 6× 3.84TB SSD NVMe
    Soft RAID 1Gbit/s unmetered and
    guaranteed`,
    bt: 'Solicitar'
  }
];
const profesionalesServiceData=[
  {
    id: 0,
    img: service7Img,
    h2: 'Backups',
    p: 'Mantenga sus datos asegurados, con nuestro servicio de copia de seguridad para su computadora o servidor hacia la nube.'
    },
  {
    id: 1,
    img: service8Img,
    h2: 'Reseller VPS',
    p: 'Brindamos las herramientas para que pueda rentar nuestros VPS a sus clientes y recibir comisiones por cada venta.'
  }, {
    id: 2,
    img: service9Img,
    h2: 'Storage High Grade',
    p: 'Ofrecemos almacenamiento de alta demanda y distribución via CDN. Logrando entregar sus datos con baja latencia.'
  }, {
    id: 3,
    img: service10Img,
    h2: 'Cloud Data Base',
    p: 'Conecte su infraestructura a una base de datos en la nube y logre tener una infraestructura hibrida.'
  }, {
    id: 4,
    img: service11Img,
    h2: 'Monitoring',
    p: 'Servicio de atención a incidentes, control de riesgo y ciberataques. Con un equipo de DevOps, SRE, Cybersecurity...'
  }, {
    id: 5,
    img: service12Img,
    h2: 'Premium Domain',
    p: 'Gestionamos y localizamos el dominio que necesita su negocio con su nombre preferido. Sabemos lo importante que es un nombre.'
  },
]

const remarksData = [
  {
    id: 0,
    pb: `"Trabajar con Caja Negra ha sido un cambio radical para nuestra
          empresa. Su experiencia en análisis de datos e integración nos
          permitió optimizar nuestras operaciones y obtener valiosos
          conocimientos que han impulsado nuestras decisiones estratégicas.
          La dedicación del equipo para entender nuestras necesidades y
          ofrecer soluciones personalizadas es incomparable."`,
    pf: 'Jane Smith, CEO de Tech Solutions Inc.'
  },
  {
    id: 1,
    pb: `"Caja Negra ha demonstrado ser un socio confiable y 
    visionario en nuestro viaje de transfomarción digital. 
    Su enfoque innovador para resolver problemas y su 
    compromiso con la excelencia la superado nuesteras
    expectativas. Estamos encantados con los resultados y
    esperamos una colaboratión a largo plazo."`,
    pf: 'Michael Brown, COO de NextGen Solutions'
  },
  {
    id: 2,
    pb: `El servio al cliente y el soporte de Caja Negra son
    exceptionales. Siempre  so receptivos y están listos
    para abordar cualqier problema o inquietud que
    tengamos. Su apoyo continuo ha sido invaluable para
    garantizar que nuestros sistemas funcionen sin
    problemas y de manera eficiente."`,
    pf: 'Emily Johnson, Directora de TI de Global Enterprises'
  },
  {
    id: 3,
    pb: `"Las soluciones innovadoras y el profundo
    conocimiento de la industria de Caja Negra los han
    distinguido de otras firmas technológicas con las que
    hemos trabajado. Su capacidad para ofrecer
    resultados de alta calidad a tiempo y dentro del
    presupuesto los ha convertido en nuestro socio
    technolóico preferido"`,
    pf: 'David Garcia, CIO de FutureTech Innovations'
  }
]

const listData=[
  {
    li:'Protección anti-DDoS',
    p: `Todos los servidores dedicados incluyen un sistema anti-DDoS con el fin de ofrecerle la máxima seguridad en sus infraestructuras.`
  },
  {
    li:'Rendimiento',
    p: `Con un servidor dedicado, tendrá asignada la totalidad de los recursos para así disfrutar del máximo rendimiento.`
  },
  {
    li:'Disponibilidad',
    p: `Despliegue sus servidores en menos de 60 minutos. Disfrute también de una red segura de alta resiliencia para garantizar la continuidad del servicio a sus clientes.`
  }
]
return (
    <div className="services" id="why_choose_us">
      <h2 className="sub_title">Servicios Garantizado</h2>
      <h1 className="title" >¿Por qué elegirnos?</h1>
      {/* Services */}
      <div className="services_container" >
        {services_data.map(item=>(
        <ServicesComponent key={item.id} image={item.img} heading={item.heading} paragraph={item.body} />
      ))}
        {whyChooseUsdata.map((e) => (
          <div className="service" key={Math.random()}>
            <div className="image">
              <div className="bgSpan"></div>
              <div className="img" >
                <img src={e.image} alt="" />
              </div>
            </div>
            <h2>{e.title}</h2>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
      <div className="oferta">
        <h2 className="sub_title">Servidores Oferta</h2>
        <h1 className="title" >Nuestras ofertas</h1>
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
            {vpsData.map(i =>(
              <VpsComponent key={i.id} heading1={i.h1} heading2={i.h2} buttonTitle={i.bt}/>
            ))}
            {/* <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <Link target="_top" to="/solicitar">
                  <button>Solicitar</button>
                </Link>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <Link target="_top" to="/solicitar">
                  <button>Solicitar</button>
                </Link>
              </div>
            </div>
            <div className="each_ofertas ">
              <div className="bgSpan"></div>
              <div className="info">
                <h1>VPS Linux</h1>
                <h2>CPU 2 - RAM 8GB - SSD 200GB</h2>
                <Link target="_top" to="/solicitar">
                  <button>Solicitar</button>
                </Link>
              </div>
            </div> */}

            {offersData
              .filter((e) => e.offer_type === "VPS")
              .map((e) => (
                <div className="each_ofertas " >
                  <div className="bgSpan"></div>
                  <div className="info" >
                    <h1>{e.title}</h1>
                    <h2>{e.info}</h2>
                    <Link target="_top" to="/solicitar">
                      <button>Solicitar</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
        {/* for dedicado */}
        {!vpsOpen && (
          <div className="ofertas_container ">
            {dedicaoData.map(i => (
              <DedicaoComponent key={i.id} heading1={i.h1} heading2={i.h2} buttonTitle={i.bt}/>
            ))}

            {/* <div className="each_ofertas ">
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
            </div> */}

            {offersData
              .filter((e) => e.offer_type === "Dedicated")
              .map((e) => (
                <div className="each_ofertas ">
                  <div className="bgSpan"></div>
                  <div className="info">
                    <h1>{e.title}</h1>
                    <h2>{e.info}</h2>
                    <Link target="_top" to="/solicitar">
                      <button>Solicitar</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="ver" >
        <p>Ver todo los servicios de datos que ofrecemos</p>
        <Link target="_top" to="data-services">
          <div className="btn_op">
            <div className="bgSpan"></div>
            <div className="word" >
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
      <h2 className="sub_title">Servicios Profesionales</h2>
      <h1 className="title" >Nuestros servicios</h1>
      <div className="services_container.bt">
        {profesionalesServiceData.map(i => (
          <ProfessionaleService img={i.img} h2={i.h2} p={i.p}/>
        ))}
        {/* <div className="service">
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
        </div> */}

        {servicesData.map((e) => (
          <div className="service" >
            <div className="image" >
              <div className="bgSpan" ></div>
              <div className="img" >
                <img src={e.image} alt="" />
              </div>
            </div>
            <h2>{e.title}</h2>
            <p>{e.info}</p>
          </div>
        ))}
      </div>
      <div className="word_btn" >
        <h1>
          ¿Estás interesado en datos y te gustaría conocer el tipo de servicio
          de datos que ofrecemos?"
        </h1>
        <Link target="_top" to="data-services">
          <button className="full_gradient_btn" >Ver Detalles</button>
        </Link>
      </div>
      <div className="garantee" >
        <h1>
          Nos comprometemos como una de las mejor solución de servicios web de
          latinoamerica
        </h1>

        <div className="contain_grns" >
          <div className="each_grns " >
            <div className="bgSpan" ></div>
            <div className="info" >
              <h1>30 Dias de Garantia</h1>
              <h2>
                Prueba nuestros servicios con toda tranquilidad, ya que cuentas
                con una garantía total.
              </h2>
              <button>Más</button>
            </div>
          </div>
          <div className="each_grns " >
            <div className="bgSpan" ></div>
            <div className="info" >
              <h1>Infraestructura anti-DDoS</h1>
              <h2>
                Nuestra infraestructura anti-DDoS combina una protección de red
                perimetral, desde el backbone hasta nuestros datacenters.
              </h2>
              <button>Más</button>
            </div>
          </div>
        </div>

        <h1 className="title" >Medios de pago</h1>
        <div className="pay_mth_img" >
          <img src={pay_mth_im} alt="" />
        </div>
      </div>
      <div className="vps" >
        <div className="lft" >
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
          <button className="full_gradient_btn" style={{
            width: 'auto',
          height: 'auto',
          fontFamily: 'Saira',
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '42px',
            textAlign: 'center',
            color:  'black'
          }}>Contratar</button>
        </div>

        <div className="rht" >
          <div className="service" >
            <div className="image" >
              <div className="bgSpan" ></div>
              <div className="img" >
                <img src={bestVPSiM} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vps sus" >
        <div className="lft" >
          <h1>
            Seleccione el servidor dedicado más adecuado para sus aplicaciones
          </h1>
          {/* <p>Nuestros VPS están especialmente diseñados para adaptarse a sus necesidades y crecer con su negocio.</p> */}
          <ul>
            {/* <li> Escalabilidad y personalización</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p> */}

            {/* <li> Ancho de banda ilimitado de hasta 2 Gb/s*</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p> */}
            {/* <li> Protección anti-DDoS incluida</li>
            <p>
              Todos los servidores dedicados incluyen un sistema anti-DDoS con
              el fin de ofrecerle la máxima seguridad en sus infraestructuras.
            </p> */}
            {listData.map(d=>(
              <ListComponent li={d.li} p={d.p}/>
            ))}
          </ul>
          <button className="full_gradient_btn" style={{width: 'auto',
          height: 'auto',
          fontFamily: 'Saira',
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '42px',
          textAlign: 'center',
          color: 'black'
          }}>Contratar</button>
        </div>

        <div className="rht" >
          <div className="service" >
            <div className="image" >
              <div className="bgSpan" ></div>
              <div className="img" >
                <img src={wvffas} alt="" />
              </div>
            </div>
          </div>
          <div className="service" >
            <div className="image" >
              <div className="bgSpan" ></div>
              <div className="img" >
                <img src={fwvh} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="remarks" >
        <h1>
          Más de 20,000 personas han utilizado nuestros cursos, herramientas y
          asesoramiento para ayudar a que sus negocios prosperen.
        </h1>
        <div className="remarks_container" >
          {remarksData.map(i=>(
            <RemarksContainer key={i.id} pBody={i.pb} pFooter={i.pf}/>
          ))}
          {/* <div className="remark">
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
          </div> */}

          {commetsData.map((e) => (
            <div className="remark" >
              <div className="bgSpan" ></div>
              <p>{e.info}</p>
              <p>
                {e.name}, {e.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
