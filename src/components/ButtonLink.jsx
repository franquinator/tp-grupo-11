import { Link } from "react-router-dom";
import style from "./ButtonLink.module.css";

export default function ButtonLink({pagina,texto, className}) {
  return (
    <Link to={pagina} className={style.botonInicio}>
        {texto}
    </Link>
  )
}
