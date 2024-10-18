import NavBar from "../componets/nav_bar";
import timage from "../assets/images/timage4.png";
import "../styles/solicitar_page.css";
import CustomDropdown from "../componets/dropdown";
import useResponsive from "../utils/useResponsive";

const SolicitarPage = () => {
  const screenSize = useResponsive();
  return (
    <div className="solicitar_page " style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className="top" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <NavBar />
        <div className="info" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>SOLICITAR </h1>
          <p>
            En Caja Negra, nos enorgullece ofrecer soluciones personalizadas que
            se adaptan a las necesidades únicas de cada cliente. Si estás
            interesado en nuestros servicios o productos, te invitamos a
            completar el formulario de solicitud para obtener una propuesta
            detallada y personalizada.
          </p>
        </div>
      </div>
      <div className="more" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <QuieresSaber />
      </div>
    </div>
  );
};

const QuieresSaber = () => {
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  const screenSize = useResponsive();
  return (
    <div className="quieres_saber" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <h2 className="sub_title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Quieres saber </h2>
      <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Quieres saber </h1>
      <div className="quieres" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <div className="quiery"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }} >
          <h1>1.Completa el Formulario</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
        <div className="quiery"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }} >
          <h1>2.Revisión y Análisis</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
        <div className="quiery" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
          <h1>3.Propuesta Personalizada</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
      </div>

      <h1 className="title" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>SOLICITA TUS SERVICIOS</h1>
      <div className="form" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <input type="text" placeholder="Nombre completo" />
        <input type="text" placeholder="Correo electronico" />
        <input type="text" placeholder="Telefono" />
        <CustomDropdown
          options={[
            { value: "Hosting compartido", label: "Hosting compartido" },
            { value: "Dominio", label: "Dominio" },
            { value: "Datos", label: "Datos" },
            { value: "Desarollo", label: "Desarollo" },
            { value: "IT soporto", label: "IT soporto" },
            { value: "Vps", label: "Vps" },
            {
              value: "Administracion de servidores",
              label: "Administracion de servidores",
            },
            { value: "Servidores dedicados ", label: "Servidores dedicados " },
          ]}
          onSelect={handleSelect}
          placeholder="Tipo de servicio"
        />
        <textarea
          name=""
          id=""
          placeholder="Detalles/ Especificaciones"
        ></textarea>
        <button className="full_gradient_btn"  style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>Enviar</button>
      </div>
    </div>
  );
};

export default SolicitarPage;
