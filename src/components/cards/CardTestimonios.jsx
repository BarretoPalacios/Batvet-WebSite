import { useState } from "react";
import { IconStar } from "@tabler/icons-react";
import { IconStarFilled } from "@tabler/icons-react";
import AnimateBox from "../animaciones/AnimateBox";

function CardTestimonios({ img, nombre, texto, puntaje = 1 }) {
  const [score, setScore] = useState(puntaje);

  // Función para generar las estrellas
  const showStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= score) {
        stars.push(<IconStarFilled key={i} stroke={2} />);
      } else {
        stars.push(<IconStar key={i} stroke={2} />);
      }
    }
    return stars;
  };

  return (
    <AnimateBox direction="zoom">
        <div className="card-testimonio">
      <div className="card-testimonio-img">
        <img src={img} alt={nombre} />
        <h4>{nombre}</h4>
      </div>
      <div className="card-testimonio-info">
        <p className="card-testimonio-info-texto regular">{texto}</p>
        <div className="card-testimonio-info-stars">{showStars(score)}</div>
      </div>
    </div>
    </AnimateBox>
  );
}

export default CardTestimonios;
