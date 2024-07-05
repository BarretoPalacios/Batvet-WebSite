import React from 'react'
import AnimateBox from '../animaciones/AnimateBox'

function CardContent({
    children
}) {
  return (
    <AnimateBox direction='zoom'>
      <div className='content-card'>
        {children}
    </div>
    </AnimateBox>
  )
}

export default CardContent