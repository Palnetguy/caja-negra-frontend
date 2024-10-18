import NavBar from "../componets/nav_bar";
import "../styles/aboutus_page.css";
import useResponsive from "../utils/useResponsive";

const AboutUsPage = () => {
  const screenSize = useResponsive();
  return (
    <div className="aboutus_page" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="top" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <NavBar />
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>SOBRE nOSOTROS</h1>
          <p>
            Caja Negra se fundó con una única visión: revolucionar el panorama
            tecnológico con soluciones innovadoras que impulsen el progreso y
            mejoren la vida cotidiana. Reconociendo el rápido ritmo del avance
            tecnológico y su profundo impacto tanto en empresas como en
            individuos, nos propusimos crear una empresa que no solo se
            mantuviera al día con estos cambios, sino que liderara el camino.
            Nuestra pasión por la tecnología y nuestro compromiso con la
            excelencia nos impulsan a desafiar continuamente los límites de lo
            que es posible.
          </p>
          <br />
          <p>
            Caja Negra comenzó como un pequeño equipo de entusiastas de la
            tecnología y visionarios que creían en el poder de la tecnología
            para transformar vidas. Con una sólida base en desarrollo de
            software, inteligencia artificial y análisis de datos, emprendimos
            un viaje para ofrecer soluciones de alta calidad, fiables e
            innovadoras a nuestros clientes. A lo largo de los años, nos hemos
            convertido en una empresa líder en tecnología, ampliando nuestros
            servicios y experiencia para satisfacer las necesidades cambiantes
            de nuestra diversa clientela. Nuestro éxito se basa en un historial
            sólido de entrega de resultados excepcionales y en la construcción
            de asociaciones a largo plazo.
          </p>
        </div>
      </div>
      <AboutUsPageOp />
    </div>
  );
};

const AboutUsPageOp = () => {
  const screenSize = useResponsive();
  return (
    <div className="aboutusop" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <p>
          Nuestra misión en Caja Negra es empoderar a empresas e individuos con
          soluciones tecnológicas de vanguardia que impulsen la eficiencia, la
          innovación y el crecimiento. Nos dedicamos a comprender los desafíos
          únicos de nuestros clientes y a proporcionar soluciones personalizadas
          que satisfagan sus necesidades específicas. Aprovechando nuestra
          experiencia y manteniéndonos a la vanguardia de las tendencias de la
          industria, nuestro objetivo es ayudar a nuestros clientes a alcanzar
          sus metas y prosperar en un entorno competitivo.
        </p>
        <br />
        <p>
          Nuestra visión es ser un líder global en innovación tecnológica,
          reconocido por nuestra capacidad para ofrecer soluciones
          transformadoras que tengan un impacto significativo. Aspiramos a crear
          un mundo más inteligente y conectado donde la tecnología mejore la
          calidad de vida de todos. En Caja Negra, estamos comprometidos con
          impulsar el progreso y moldear el futuro a través de una innovación
          constante y un enfoque centrado en el cliente
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
