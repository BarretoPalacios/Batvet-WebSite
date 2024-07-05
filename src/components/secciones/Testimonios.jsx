import React from "react";
import CardTestimonios from "../cards/CardTestimonios";
import AnimateBox from "../animaciones/AnimateBox";
import Subtitulo from "../textos/Subtitulo";

function Testimonios() {
  return (
    <div className="section-testimonios" id="testimonios">
      <AnimateBox direction="zoom">
        <Subtitulo text1={"Algunos"} text2={"Testimonios"} />
      </AnimateBox>
      <div className="section-testimonios-cards">
        <CardTestimonios
          img={
            "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          nombre={"ramita"}
          texto={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias qui placeat molestiae iure, numquam aut hic itaque"
          }
          puntaje={5}
        />

        <CardTestimonios
          img={
            "https://tvazteca.brightspotcdn.com/2a/32/1199875c4f87afc979322f4f412a/la-mirada-de-los-perritos-es-irresistible.jpg"
          }
          nombre={"chokc"}
          texto={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias qui placeat molestiae iure, numquam aut hic itaque"
          }
          puntaje={4}
        />

        <CardTestimonios
          img={
            "https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=sph"
          }
          nombre={"Laica"}
          texto={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias qui placeat molestiae iure, numquam aut hic itaque"
          }
          puntaje={4}
        />
      </div>
    </div>
  );
}

export default Testimonios;
