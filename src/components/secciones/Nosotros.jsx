import React from "react";
import AccordionItem from "../acordeon/Acordeon";
import CardContent from "../cards/CardContent";
import Iframe from "../otros/Iframe";
import Subtitulo from "../textos/Subtitulo";
import { IconPawFilled } from '@tabler/icons-react';
import AnimateBox from "../animaciones/AnimateBox";

function Nosotros() {
  const preguntas = [
    {
      question: "¿Cuál es la capital de Francia?",
      answer: "París",
    },
    {
      question: "¿Cuál es el elemento químico con el símbolo 'O'?",
      answer: "Oxígeno",
    },
    {
      question: "¿En qué año comenzó la Segunda Guerra Mundial?",
      answer: "1939",
    },
    {
      question: "¿Cuál es la capital de Francia?",
      answer: "París",
    },
    {
      question: "¿Cuál es el elemento químico con el símbolo 'O'?",
      answer: "Oxígeno",
    },
    {
      question: "¿En qué año comenzó la Segunda Guerra Mundial?",
      answer: "1939",
    },
  ];

  return (
    <div className="section-nosotros" id="nosotros">

        <AnimateBox >
        <IconPawFilled stroke={2}size={100} className="section-nosotros-img-absolute left"/>
        <IconPawFilled stroke={2}size={100} className="section-nosotros-img-absolute right"/>
        </AnimateBox>

       

      <AnimateBox >
        <h2 className="txt-titulo bangers">BAT VET</h2>
      </AnimateBox>
      
      <div className="nosotros-info">
        <div className="nosotros-info-left">
          <CardContent>
            {preguntas.map((element, index) => (
              <AccordionItem
                key={index}
                title={element.question}
                content={element.answer}
              />
            ))}
          </CardContent>
        </div>
        <div className="nosotros-info-right">
          <CardContent>
            <Subtitulo text2={"Ubicanos"} />
            <p className="txt-parrafo bangers-regular bangers txt-center">
              Bat Vet es una veterinaria dedicada a proporcionar cuidados
              integrales y de alta calidad para mascotas, garantizando su
              bienestar y salud en todas las etapas de su vida. Nuestro equipo
              de profesionales altamente capacitados y apasionados por los
              animales ofrece una amplia gama de servicios, que incluyen
              consultas médicas..
            </p>
          </CardContent>
          <CardContent>
            <Iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12049.201060537553!2d-77.16318340072303!3d-11.731893205668609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1720115159147!5m2!1ses-419!2spe"
              }
              width={"300px"}
              height={"200px"}
            />
          </CardContent>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
