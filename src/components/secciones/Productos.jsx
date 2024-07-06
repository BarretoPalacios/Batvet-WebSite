import React from "react";
import Subtitulo from "../textos/Subtitulo";
import Cards from "../cards/Cards";
import AnimateBox from "../animaciones/AnimateBox";

function Productos() {
  return (
    <div className="section-productos" id="productos">
         <AnimateBox direction="zoom">
            <Subtitulo text1={"nuestros"} text2={"Productos"} />
         </AnimateBox>
      

      <div className="seccion-cards">
        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://oechsle.vteximg.com.br/arquivos/ids/1210949-1000-1000/image-b67367a7621b407ba24dc4d9c2c2c6d1.jpg?v=637494289530370000"
            }
            titulo={"Comidas"}
          />
        </AnimateBox>

        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://oechsle.vteximg.com.br/arquivos/ids/2691257-1000-1000/image-38cc9106d89a44e7b4341a76e74b36be.jpg?v=637494740156970000"
            }
            titulo={"correas"}
          />
        </AnimateBox>

        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CQZatRwMFY82zSHHDKyW0Ay20K81cA81kA&s"
            }
            titulo={"camas"}
          />
        </AnimateBox>

        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQrQ1AC9Q-YD64bcgDTKy64QKcM_RU0LH2A&s"
            }
            titulo={"juguetes"}
          />
        </AnimateBox>

        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://morangesalonstore.com.pe/wp-content/uploads/2023/06/Morange-Cepillo-Peluqueria-mango-de-madera-desenredante.jpg"
            }
            titulo={"peines"}
          />
        </AnimateBox>
        <AnimateBox direction="zoom">
          <Cards
            imagen={
              "https://www.superpet.pe/on/demandware.static/-/Sites-SuperPet-master-catalog/default/dw24ba323b/images/transportador-de-viaje-para-mascota-l-80.jpg"
            }
            titulo={"transportadoras"}
          />
        </AnimateBox>
      </div>
    </div>
  );
}

export default Productos;
