import { Link } from "react-router-dom";
import NavBar from "../componets/nav_bar";
import "../styles/data_services_page.css";
import useResponsive from "../utils/useResponsive";

const DataServicesPage = () => {
  const screenSize = useResponsive();
  return (
    <div className="data_services" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="top" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <NavBar />
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>SERVICIO DE DATOS </h1>
          <p>
            En Caja Negra, comprendemos la importancia de los datos en el mundo
            digital actual. Ofrecemos soluciones avanzadas de análisis y gestión
            de datos para ayudarte a aprovechar al máximo la información
            disponible. Ya sea que busques optimizar tus operaciones, entender
            mejor a tus clientes o descubrir nuevas oportunidades de
            crecimiento, nuestros servicios de datos están diseñados para
            brindarte las herramientas y conocimientos necesarios.
          </p>
        </div>
      </div>
      <div className="more" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <DataServices />
      </div>
    </div>
  );
};

const DataServices = () => {
  const screenSize = useResponsive();
  return (
    <div className="data_services_op" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>SERVICIOS DE DATOS QUE OFRECEMOS</h1>
      <br />
      <div className="data_serv_container" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Análisis de Datos</h1>
          <p>
            Análisis descriptivo Análisis predictivo Análisis prescriptivo
            Análisis de datos en tiempo real
          </p>

          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Inteligencia de Negocios (BI)</h1>
          <p>
            Desarrollo de paneles de control Informes y reportes avanzados
            Visualización de datos Análisis de rendimiento
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Big Data</h1>
          <p>
            Almacenamiento y gestión de grandes volúmenes de datos Procesamiento
            de datos masivos Análisis de big data Implementación de soluciones
            de big data
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Integración de Datos</h1>
          <p>
            ntegración de datos de múltiples fuentes Migración de datos
            Transformación de datos (ETL) Calidad de datos y limpieza de datos
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Minería de Datos</h1>
          <p>
            Extracción de patrones y tendencias Análisis de texto y datos no
            estructurados Descubrimiento de conocimiento en bases de datos (KDD)
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Almacenamiento de Datos</h1>
          <p>
            Diseño y desarrollo de almacenes de datos Gestión de bases de datos
            Optimización de consultas y rendimiento de bases de datos
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Seguridad de Datos</h1>
          <p>
            Protección de datos y ciberseguridad Cumplimiento de normativas y
            regulaciones de datos Auditoría y monitoreo de seguridad de datos
            Gestión de accesos y autenticación
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Gobernanza de Datos</h1>
          <p>
            Políticas y procedimientos de datos Gestión de calidad de datos
            Modelos de datos y arquitectura de datos
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Machine Learning y IA</h1>
          <p>
            Desarrollo de modelos predictivos Implementación de algoritmos de
            aprendizaje automático Personalización basada en datos Procesamiento
            de lenguaje natural (NLP)
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Consultoría en Estrategia de Datos</h1>
          <p>
            Evaluación de estrategias de datos existentes Desarrollo de hojas de
            ruta de datos Optimización de procesos basados en datos
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Desarrollo de Aplicaciones de Datos</h1>
          <p>
            Análisis descriptivo Análisis predictivo Análisis prescriptivo
            Análisis de datos en tiempo real
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv">
          <h1>Visualización de Datos</h1>
          <p>
            Creación de informes visuales interactivos Diseño de visualizaciones
            atractivas y efectivas Presentación de datos complejos de manera
            accesible
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
        <div className="data_serv" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>Automatización de Procesos de Datos</h1>
          <p>
            Automatización de flujos de trabajo de datos Integración de sistemas
            y datos Automatización de análisis y reportes
          </p>
          <Link target="_top" to="/solicitar">
            <button className="full_gradient_btn" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Solicitar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataServicesPage;
