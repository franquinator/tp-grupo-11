import style from "./Card.module.css"

export default function Card({icono,titulo,texto}) {
  return (
    <div className={style.card}>
        <img src={icono}/>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}
