import NavBar from "../componets/nav_bar";
import timage from "../assets/images/timage4.png"
import '../styles/solicitar_page.css'

const SolicitarPage = () => {
    return ( 
        <div className="solicitar_page">
            <div className="top">
                <NavBar />
                <div className="info">
                    <h1>SOLICITAR </h1>
                    <p>En Caja Negra, nos enorgullece ofrecer soluciones personalizadas que se adaptan a las necesidades únicas de cada cliente. Si estás interesado en nuestros servicios o productos, te invitamos a completar el formulario de solicitud para obtener una propuesta detallada y personalizada.</p>
                </div>
            </div>
            <div className="more">
                <QuieresSaber />
            </div>
        </div>  
     );
}

const QuieresSaber  = () => {
    return ( 
        <div className="quieres_saber">
            <h2 className="sub_title">Quieres saber </h2>
            <h1 className="title">Quieres saber </h1>
            <div className="quieres">
                <div className="quiery">
                    <h1>1.Completa el Formulario</h1>
                    <p>Proporciona tus datos de contacto y una descripción detallada de tus necesidades o intereses.</p>
                </div>
                <div className="quiery">
                    <h1>2.Revisión y Análisis</h1>
                    <p>Proporciona tus datos de contacto y una descripción detallada de tus necesidades o intereses.</p>
                </div>
                <div className="quiery">
                    <h1>3.Propuesta Personalizada</h1>
                    <p>Proporciona tus datos de contacto y una descripción detallada de tus necesidades o intereses.</p>
                </div>
            </div>

            <h1 className="title">SOLICITA TUS SERVICIOS</h1>
            <div className="form">
                <input type="text" placeholder="Nombre completo"/>
                <input type="text" placeholder="Correo electronico"/>
                <input type="text" placeholder="Telefono"/>
                <input type="text" placeholder="Tipo de servicio"/>
                <textarea name="" id="" placeholder="Detalles/ Especificaciones" ></textarea>
                <button className="full_gradient_btn">Enviar</button>
            </div>
        </div>
     );
}
 
export default SolicitarPage;