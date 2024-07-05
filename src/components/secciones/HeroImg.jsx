//---------------------
import imagen from "../../assets/imagenes/imagenPerroBatman.png";
import AnimateBox from "../animaciones/AnimateBox";
//---------------------
import Boton from "../botones/Boton";
import Parrafos from "../textos/Parrafos";
import Titulo from "../textos/Titulo";

function HeroImg() {
  return (
    <div className="section-img-hero">
      <div className="section-hero-info">
        <AnimateBox direction="zoom">
          <Titulo text1={"veterinaria"} text2={"Bat vet"} />
        </AnimateBox>
        <AnimateBox>
          <Parrafos
            text={
              "Bat vet es una veterinaria que ofrece cuidados integrales para mascotas, incluyendo consultas, cirugías y vacunaciones."
            }
          />
        </AnimateBox>
        <AnimateBox>
          <Boton link={"refs.com"} text={"escribenos"} />
        </AnimateBox>
      </div>
      <div className="section-hero-img">
        <AnimateBox direction="left">
<img src={imagen} alt="imagen de portada" />
        </AnimateBox> 
        
      </div>
    </div>
  );
}

export default HeroImg;
