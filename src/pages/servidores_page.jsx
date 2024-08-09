import NavBar from "../componets/nav_bar";
import "../styles/servidores_page.css";
import includedfeat1 from "../assets/images/included-feature-1 (1) 1.png";
import includedfeat2 from "../assets/images/included-feature-3.png";
import includedfeat3 from "../assets/images/included-feature-4.png";
import includedfeat4 from "../assets/images/included-feature-5.png";

const Servidores = () => {
  return (
    <div className="servidores_page">
      <div className="top">
        <NavBar />
        <div className="info">
          <h1>Servidores</h1>
          <p>Servidores Privados Virtuales & Servidores Dedicados</p>
          <div className="btns">
            <button className="full_gradient_btn">VPS</button>
            <button className="btn-1">Dedicados</button>
          </div>
        </div>
      </div>
      <ServidoresOp />
    </div>
  );
};

const ServidoresOp = () => {
  return (
    <div className="servidores_op">
      <div className="changeBtns">
        <div className="changeBtn active">Basico</div>
        <div className="changeBtn">Freelancer</div>
        <div className="changeBtn">Ecommerce</div>
        <div className="changeBtn">Agencia</div>
        <div className="changeBtn">Empresarial</div>
      </div>

      <div className="specs_contain">
        <div className="specs">
          <div className="info">
            <p>CPU</p>
            <p>1 Core</p>
          </div>
          <div className="info">
            <p>Bandwidth</p>
            <p>100 GB</p>
          </div>
          <div className="info">
            <p>Bandwidth Two</p>
            <p>100 GB</p>
          </div>
          <div className="info">
            <p>RAM</p>
            <p>1 GB</p>
          </div>
          <div className="info">
            <p>Disk Space</p>
            <p>20 GB</p>
          </div>
          <div className="info">
            <p>IP</p>
            <p>1</p>
          </div>
          <button className="full_gradient_btn">Solicitar</button>
        </div>
      </div>

      <div className="nuestros">
        <h2 className="sub_title">Nuestros</h2>
        <h1 className="title">BENEFICIOS</h1>
        <div className="nuestros_cont">
            <div className="nuetro">
                <div className="image">
                    <img src={includedfeat1} alt="" />    
                </div>
                <h1>Discos SSD</h1>
                <p>Todos nuestros servidores vienen con discos SSD. Esto proporciona suficiente potencia de procesamiento para cualquier tipo de proyecto en línea de mediana o gran escala.</p>
            </div>
            <div className="nuetro">
                <div className="image">
                    <img src={includedfeat2} alt="" />    
                </div>
                <h1>Acceso Root al Servidor</h1>
                <p>Obtén control total de tu VPS, tomando ventaja del acceso root. Personaliza tu hosting a tu gusto y lleva control de todos tus recursos en tiempo real.</p>
            </div>
            <div className="nuetro">
                <div className="image">
                    <img src={includedfeat3} alt="" />    
                </div>
                <h1>Red de 1000 Mb/s</h1>
                <p>Disfruta de un tiempo de carga increíblemente rápido para tu sitio web, y una garantía de tiempo de actividad del servidor del 99,9%. Tus visitantes disfrutarán de una experiencia de usuario fluida sin preocuparse por tiempos de inactividad inesperados.</p>
            </div>
            <div className="nuetro">
                <div className="image">
                    <img src={includedfeat4} alt="" />    
                </div>
                <h1>DiscCopias de Seguridad y Snapshots</h1>
                <p>No pierdas tu información! Tu sitio web se podrá restaurar en cuestión de minutos, gracias a las copias de seguridad automáticas y snapshots en vivo manuales incluidos en nuestros planes de VPS.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Servidores;
