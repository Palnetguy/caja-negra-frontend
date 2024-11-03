import Footer from "../componets/footer";
import NavBar from "../componets/nav_bar";
import "../styles/contactus_page.css";
import phoneImg from "../assets/images/ic_baseline-phone.png";
import emailImg from "../assets/images/mage_email-opened-fill.png";
import { useState } from "react";
     

const ContactUsPage = () => {
  return (
    <div className="contactus_page" >
      <div className="top" >
        <NavBar />
        <div className="info" >
          <h1>Contáctanos</h1>
          <p>
            estamos aquí para ayudarte a encontrar soluciones tecnológicas
            innovadoras y responder a tus preguntas. Ya sea que estés interesado
            en nuestros servicios, necesites soporte técnico o simplemente
            quieras saber más sobre nosotros, no dudes en ponerte en contacto.
          </p>
          <br />
          <p>
            También puedes llenar el formulario de contacto a continuación, y
            uno de nuestros representantes se pondrá en contacto contigo a la
            brevedad. ¡Estamos ansiosos por ayudarte a descubrir el futuro de la
            tecnología con Caja Negra!
          </p>
        </div>
      </div>
      <ContactUsPageOp />
    </div>
  );
};

const ContactUsPageOp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleGetName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
    // console.log(name);
  };
  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGetMessege = (e) => {
    setMessage(e.target.value);
  };

  const handlesendtoWp = (e) => {
    e.preventDefault();
    // Create the WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/0786307411?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setName("");
    setEmail("");
    setMessage("");
    // console.log(whatsappMessage);
  };
  return (
    <div className="contactus_pageop" >
      <div className="more_info" >
        <div className="info" >
          <div className="image" >
            <img src={phoneImg} alt="" />
          </div>
          <h1>Telefonos</h1>
          <p>849-354-9727</p>
          <p>000-000-0047</p>
        </div>
        <div className="info" >
          <div className="image" >
            <img src={emailImg} alt="" />
          </div>
          <h1>Correo Electrónico</h1>
          <p>cajanegrard@gmail.com</p>
          <p>ventas@cajanegra.com</p>
        </div>
      </div>
      <form className="contact_form" >
        <h2 className="sub_title" >¿Tienes Preguntas?</h2>
        <h1 className="title" >ENVIANOS UN MENSAJE</h1>
        <input
          name="name"
          type="text"
          placeholder="Nombre completo"
          required
          onChange={handleGetName}
          value={name}
        />
        <input
          name="email"
          type="text"
          placeholder="Correo electronico"
          required
          onChange={handleGetEmail}
          value={email}
        />
        <textarea
          name="message"
          id=""
          placeholder="Mensajes"
          required
          onChange={handleGetMessege}
          value={message}
        ></textarea>
        <button className="full_gradient_btn" onClick={handlesendtoWp} >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Footer from "../componets/footer";

// import NavBar from "../componets/nav_bar";
// import "../styles/contactus_page.css";
// import phoneImg from "../assets/images/ic_baseline-phone.png";
// import emailImg from "../assets/images/mage_email-opened-fill.png";
// import config from "./config"

// const ContactUsPage = () => {
//   return (
//     <div className="contactus_page">
//       <div className="top">
//         <NavBar />
//         <div className="info">
//           <h1>Contáctanos</h1>
//           <p>
//             Estamos aquí para ayudarte a encontrar soluciones tecnológicas
//             innovadoras y responder a tus preguntas...
//           </p>
//           <br />
//           <p>
//             También puedes llenar el formulario de contacto a continuación...
//           </p>
//         </div>
//       </div>
//       <ContactUsPageOp />
//       <Footer />
//     </div>
//   );
// };

// const ContactUsPageOp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [contactData, setContactData] = useState({ phones: [], emails: [] });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${config.apiEndpoint}/contact-info`, {
//         headers: {
//           Authorization: `API-Key ${config.apiKey}`
//         }
//       })
//       .then((response) => {
//         setContactData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching contact info:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleGetName = (e) => setName(e.target.value);
//   const handleGetEmail = (e) => setEmail(e.target.value);
//   const handleGetMessage = (e) => setMessage(e.target.value);

//   const handleSendToWp = (e) => {
//     e.preventDefault();
//     const whatsappMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;
//     const whatsappUrl = `https://wa.me/0786307411?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;
//     window.open(whatsappUrl, "_blank");
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="contactus_pageop">
//       <div className="more_info">
//         <div className="info">
//           <div className="image">
//             <img src={phoneImg} alt="Phone" />
//           </div>
//           <h1>Telefonos</h1>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             contactData.phones.map((phone, index) => <p key={index}>{phone}</p>)
//           )}
//         </div>
//         <div className="info">
//           <div className="image">
//             <img src={emailImg} alt="Email" />
//           </div>
//           <h1>Correo Electrónico</h1>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             contactData.emails.map((email, index) => <p key={index}>{email}</p>)
//           )}
//         </div>
//       </div>
//       <form className="contact_form" onSubmit={handleSendToWp}>
//         <h2 className="sub_title">¿Tienes Preguntas?</h2>
//         <h1 className="title">ENVIANOS UN MENSAJE</h1>
//         <input
//           name="name"
//           type="text"
//           placeholder="Nombre completo"
//           required
//           onChange={handleGetName}
//           value={name}
//         />
//         <input
//           name="email"
//           type="text"
//           placeholder="Correo electronico"
//           required
//           onChange={handleGetEmail}
//           value={email}
//         />
//         <textarea
//           name="message"
//           placeholder="Mensaje"
//           required
//           onChange={handleGetMessage}
//           value={message}
//         ></textarea>
//         <button className="full_gradient_btn" type="submit">
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUsPage;
