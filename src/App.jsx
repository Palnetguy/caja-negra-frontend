import HomePage from "./pages/home_page";
import "./index.css";
import SolicitarPage from "./pages/solicitar_page";
import DataServicesPage from "./pages/data_services_page";
import RegisterDominio from "./pages/registra_dominio";
import DesarolloPage from "./pages/desarollo_page";
import Servidores from "./pages/servidores_page";
import HostingPage from "./pages/hosting_page";
import AboutUsPage from "./pages/aboutus_page";
import ContactUsPage from "./pages/contactus_page";
import Footer from "./componets/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <SolicitarPage /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/dominos" element={<RegisterDominio />} />
          <Route path="/desarollo" element={<DesarolloPage />} />
          <Route path="/servers" element={<Servidores />} />
          <Route path="/solicitar" element={<SolicitarPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
