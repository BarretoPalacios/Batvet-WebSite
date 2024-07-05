import "./App.css";

import HeroImg from "./components/secciones/HeroImg";
import Redes from "./components/secciones/Redes";
import Servicios from "./components/secciones/Servicios";
import Productos from "./components/secciones/Productos";
import Testimonios from "./components/secciones/Testimonios";
import HamburgerMenu from "./components/nav/NavHamburger";
import Nosotros from "./components/secciones/Nosotros";
import Footer from "./components/secciones/Footer";

function App() {
  return (
    <>
      <HamburgerMenu />

      <HeroImg />

      <Redes />

      <Servicios />

      <Productos />

      <Testimonios/>

      <Nosotros />

      <Footer/>
    </>
  );
}


export default App;
