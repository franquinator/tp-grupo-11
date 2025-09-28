import { Link } from "react-router-dom";
export default function ButtonLink({pagina,texto}) {
  return (
    <Link to={pagina}>
        <button>{texto}</button>
    </Link>
  )
}
