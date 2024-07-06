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
          nombre={"Max"}
          texto={
            "¡Guau, guau! Me llamo Max. Me llevaron para mis vacunas y no sentí nada gracias a los amables doctores. ¡Gracias por cuidarme tan bien!"
          }
          puntaje={5}
        />

        <CardTestimonios
          img={
            "https://tvazteca.brightspotcdn.com/2a/32/1199875c4f87afc979322f4f412a/la-mirada-de-los-perritos-es-irresistible.jpg"
          }
          nombre={"Luna"}
          texto={
            "¡Hola, soy Luna! Tuve que someterme a una cirugía y los veterinarios me hicieron sentir segura. ¡Gracias por devolverme la salud!"
          }
          puntaje={4}
        />

        <CardTestimonios
          img={
            "https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=sph"
          }
          nombre={"Rocky"}
          texto={
            "¡Woof woof! Soy Rocky y me encanta venir a la veterinaria. Me trataron rápidamente y ahora puedo seguir explorando el parque. ¡Son los mejores!"
          }
          puntaje={5}
        />
      </div>
    </div>
  );
}

export default Testimonios;
