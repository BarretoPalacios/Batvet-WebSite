import React from 'react'

function Subtitulo({ text1, text2 }) {
  return (
    <h2 className='bangers-bolder bangers txt-subtitulo'>
        {text1} <b>{text2}</b>
    </h2>
  )
}

export default Subtitulo