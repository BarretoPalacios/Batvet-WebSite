
function Cards({imagen , titulo}) {
  return (
    <div className='card-box'>
        <div className="card-img">
            <img src={imagen} alt={titulo} />
        </div>
        <div className="card-text">
            <h4>{titulo}</h4>
        </div>
    </div>
  )
}

export default Cards