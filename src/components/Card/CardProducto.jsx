import style from "./CardProducto.module.css";
import {agregarAlCarrito} from "/src/manejoDeCarrito.js"

export default function CardProducto({ producto }) {
  return (
    <div className={`card ${style.cardProd}`} style={{ width: "18rem" }}>
      <div className={style.divImgCard}>
        <img
          src={producto.imagen}
          className={`card-img-top img-fluid float-end ${style.imgCard}`}
          alt={producto.nombre}
        />
      </div>
      <div className="card-body">
        <h5 className={`card-title ${style.textCard}`}>{producto.nombre}</h5>
        <p
          className={`card-text text-body-secondary ${style.textCard} ${style.text}`}
        >
          {producto.descripcion}
        </p>
        <h5 className={`card-title ${style.textCard}`}>${producto.precio}</h5>
        <div className={`d-grid gap-2 col-6 mx-auto ${style.divBtn}`}>
          <button
            className={`btn btn-dark btn-sm ${style.btnCardCarrito}`}
            type="button"
            onClick={() => agregarAlCarrito(producto)}
          >
            + Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
