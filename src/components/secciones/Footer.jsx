import fondo_ciudad from "../../assets/imagenes/fondo_ciudad.png";
import logo from "../../assets/imagenes/logo.svg";
import AnimateBox from "../animaciones/AnimateBox";
import Item from "../nav/Item";
import Imagenes from "../otros/Imagenes";
import Parrafos from "../textos/Parrafos";
import Redes from "./Redes";

function Footer() {
  return (
    <div className="section-footer">
      <AnimateBox >
        <section className="imgs">
          <Imagenes src={logo} alt={"logo de la webb  "} width="50%" />
          <Imagenes src={fondo_ciudad} alt={"fondo de la ciudad de batman "} />
        </section>
      </AnimateBox>
      <footer className="footer">
        <section className="links">
          <Item text={"Servicios"} link={"#servicios"} />
          <Item text={"Productos"} link={"#productos"} />
          <Item text={"Testimonios"} link={"#testimonios"} />
          <Item text={"Nosotros"} link={"#nosotros"} />
        </section>
        <section className="more">
          <Parrafos text={"todos los derechos reservados @.com"}></Parrafos>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
