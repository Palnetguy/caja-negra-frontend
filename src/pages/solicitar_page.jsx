import React, { useState } from 'react';
import NavBar from "../componets/nav_bar";
import timage from "../assets/images/timage4.png";
import "../styles/solicitar_page.css";
import CustomDropdown from "../componets/dropdown";
     

const SolicitarPage = () => {
  return (
    <div className="solicitar_page " >
      <div className="top" >
        <NavBar />
        <div className="info" >
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
      <div className="more" >
        <QuieresSaber />
      </div>
    </div>
  );
};

const QuieresSaber = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');

  const handleSelect = (option) => {
    console.log("Selected option:", option);
    setService(option.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp();
    clearForm();
  };

  const sendToWhatsApp = () => {
    const whatsappMessage = `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nServicio: ${service}\nDetalles: ${details}`;
    const whatsappUrl = `https://wa.me/256783808236?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDetails('');
  };

  return (
    <div className="quieres_saber" >
      <h2 className="sub_title" >Quieres saber </h2>
      <h1 className="title" >Quieres saber </h1>
      <div className="quieres" >
        <div className="quiery" >
          <h1>1.Completa el Formulario</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
        <div className="quiery" >
          <h1>2.Revisión y Análisis</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
        <div className="quiery" >
          <h1>3.Propuesta Personalizada</h1>
          <p>
            Proporciona tus datos de contacto y una descripción detallada de tus
            necesidades o intereses.
          </p>
        </div>
      </div>

      <h1 className="title" style={{marginBottom: '1.2em'}}>SOLICITA TUS SERVICIOS</h1>
      <div className="form" >

        <input type="text" placeholder="Nombre completo" value={name}
          onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Correo electronico" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="text" placeholder="Telefono" value={phone}
          onChange={(e) => setPhone(e.target.value)} />

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
          value={service}
        />
        <textarea
          name=""
          id=""
          placeholder="Detalles/ Especificaciones"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <button className="full_gradient_btn" type="submit" onClick={handleSubmit} style={{color:'black'}}>Enviar</button>
      </div>
    </div>
  );
};

export default SolicitarPage;
