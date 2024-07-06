import { IconVaccine ,IconStethoscope ,IconFaceMask } from "@tabler/icons-react";

import Carousel from "../carrusel/Carousel";
import CarouselConten from "../carrusel/CarouselConten";
import Subtitulo from "../textos/Subtitulo";
import AnimateBox from "../animaciones/AnimateBox";

function Servicios() {
  const SlidesContent = [
    <CarouselConten
      key={1}
      titulo={"Veterinaria"}
      parrafo={"Ofrecemos atención médica integral para sus mascotas, incluyendo prevención, diagnóstico y tratamiento de enfermedades, asegurando su salud y bienestar. "}
      icon={<IconStethoscope  stroke={2} size={50} />}
    />,
    <CarouselConten
      key={2}
      titulo={"vacunas"}
      parrafo={"Proporcionamos programas de vacunación completos para proteger a sus mascotas contra enfermedades comunes y peligrosas, administrados por profesionales capacitados."}
      icon={<IconVaccine stroke={2} size={50} />}
    />,
    <CarouselConten
      key={3}
      titulo={"cirugias"}
      parrafo={"Realizamos cirugías de rutina y complejas, como esterilización, reparación de fracturas y extracción de tumores, utilizando técnicas avanzadas para una recuperación rápida."}
      icon={<IconFaceMask  stroke={2} size={50} />}
    />,
  ];

  return (
    <div className="section-servicios" id="servicios">
      <AnimateBox direction="zoom">
        <Subtitulo text1={"nuestros"} text2={"Servicios"} />{" "}
      </AnimateBox>
      <AnimateBox>
        <Carousel slides={SlidesContent} />
      </AnimateBox>
      
    </div>
  );
}

export default Servicios;
