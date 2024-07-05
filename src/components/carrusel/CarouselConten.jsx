function CarouselConten({titulo,parrafo,icon}) {
  return (
    <div className='carousel-conten'>
        <h3 className='carousel-conten-titulo'>{titulo}</h3>
        <p className='carousel-conten-text'>{parrafo}</p>
        {icon}
    </div>
  )
}

export default CarouselConten