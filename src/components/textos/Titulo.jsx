import React from "react";

function Titulo({ text1, text2 }) {
  return (
    <h1 className="bangers-bolder bangers txt-titulo">
      {text1} <br /> <b>{text2}</b>
    </h1>
  );
}

export default Titulo;
