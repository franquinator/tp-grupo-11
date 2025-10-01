import { Link } from "react-router-dom";
export default function ButtonLink({pagina,texto, className}) {
  return (
    <Link to={pagina} className={className}>
        {texto}
    </Link>
  )
}
