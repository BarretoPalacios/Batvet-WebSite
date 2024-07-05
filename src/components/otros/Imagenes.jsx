import React from 'react'

function Imagenes({src,alt,width="100%"}) {
  return (
    <img src={src} alt={alt} style={{width:width}} />
  )
}

export default Imagenes