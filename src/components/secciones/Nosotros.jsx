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
      question: "¿Con qué frecuencia debo llevar a mi mascota al veterinario?",
      answer: "Recomendamos llevar a su mascota para un chequeo general al menos una vez al año. Las mascotas mayores o aquellas con condiciones médicas pueden necesitar visitas más frecuentes.",
  },
  {
      question: "¿Qué vacunas necesita mi mascota y cuándo?",
      answer: "Las necesidades de vacunación varían según la especie y la edad de su mascota. Generalmente, los cachorros y gatitos requieren una serie de vacunas iniciales seguidas de refuerzos anuales. Consulte con nosotros para un plan de vacunación personalizado.",
  },
  {
      question: "¿Qué debo hacer si mi mascota tiene una emergencia?",
      answer: "En caso de emergencia, llámenos inmediatamente o visite nuestra clínica. Tenemos un equipo preparado para manejar situaciones de emergencia y brindar atención urgente.",
  },
  {
      question: "¿Ofrecen servicios de esterilización y castración?",
      answer: "Sí, ofrecemos servicios de esterilización y castración para perros y gatos. Estos procedimientos ayudan a prevenir problemas de salud y controlan la población de mascotas.",
  },
  {
      question: "¿Qué tipos de servicios quirúrgicos ofrecen?",
      answer: "Ofrecemos una amplia gama de servicios quirúrgicos, desde procedimientos de rutina como esterilización y castración hasta cirugías más complejas como la reparación de fracturas y la extracción de tumores.",
  },
  {
      question: "¿Cómo puedo prevenir parásitos en mi mascota?",
      answer: "Recomendamos el uso regular de productos antiparasitarios para prevenir pulgas, garrapatas y parásitos internos. Consulte con nosotros para elegir el producto adecuado para su mascota.",
  },
  {
      question: "¿Qué opciones de pago aceptan?",
      answer: "Aceptamos varias formas de pago, incluyendo efectivo, tarjetas de crédito y débito. También ofrecemos opciones de financiamiento para procedimientos más costosos.",
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
            Encuentra nuestra clínica veterinaria fácilmente. Estamos ubicados en [Dirección], listos para ofrecer el mejor cuidado a sus mascotas. ¡Visítanos hoy!
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
