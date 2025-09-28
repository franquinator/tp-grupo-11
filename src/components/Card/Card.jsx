import "./Card.css"

export default function Card({icono,titulo,texto}) {
  return (
    <div className='Card'>
        <img src={icono}/>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}
