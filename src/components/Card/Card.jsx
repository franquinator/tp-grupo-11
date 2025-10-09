import style from "./Card.module.css"

export default function Card({icono,titulo,texto}) {
  return (
    <div className={style.card}>
        <p style={{fontSize:"25px"}}>{icono}</p>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}
