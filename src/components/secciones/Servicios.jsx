import { IconVaccine } from "@tabler/icons-react";

import Carousel from "../carrusel/Carousel";
import CarouselConten from "../carrusel/CarouselConten";
import Subtitulo from "../textos/Subtitulo";
import AnimateBox from "../animaciones/AnimateBox";

function Servicios() {
  const SlidesContent = [
    <CarouselConten
      key={1}
      titulo={"Veterinaria"}
      parrafo={"lroem lkroe dfsdfsdfsdfdsf lorem rerere"}
      icon={<IconVaccine stroke={2} size={50} />}
    />,
    <CarouselConten
      key={2}
      titulo={"vacunas"}
      parrafo={"lroem lkroe dfsdfsdfsdfdsf lorem rerere"}
      icon={<IconVaccine stroke={2} size={50} />}
    />,
    <CarouselConten
      key={3}
      titulo={"cirugias"}
      parrafo={"lroem lkroe dfsdfsdfsdfdsf lorem rerere"}
      icon={<IconVaccine stroke={2} size={50} />}
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
