import style from "./CardProducto.module.css";
import {agregarAlCarrito} from "/src/manejoDeCarrito.js"
import useTema from "../../tema.js"
import { useState } from "react";

export default function CardProducto({ producto }) {
  const {tema, btnTema} = useTema()
  const [textoDeBoton, setTextoDeBoton] = useState("+ Agregar al Carrito");
  const [tipoDeBoton, setTipoDeBoton] = useState("btn-dark");
  const agregarProductoAlCarrito = () =>{
    agregarAlCarrito(producto);

    setTextoDeBoton("🛒 Agregado!");
    setTipoDeBoton("btn-success");
    
    setTimeout(() => {
      setTextoDeBoton("+ Agregar al Carrito");
      setTipoDeBoton("btn-dark");
    }, 500);
  }


  return (
    <div className={style.colorCard}>
    <div className={`card ${style.cardProd}`} style={{ width: "18rem" }}>
      <div className={`${style.divImgCard} ${style.colorCard}`}>
        <img
          src={producto.imagen}
          className={`card-img-top img-fluid float-end ${style.imgCard}`}
          alt={producto.nombre}
        />
      </div>
      <div className={`card-body ${style.colorCard}`}>
        <h5 className={`${style.textCard}`}>{producto.nombre}</h5>
        <p
          className={`${style.textCard}`}
        >
          {producto.descripcion}
        </p>
        <h5 className={`${style.textCard}`}>${producto.precio}</h5>
        <div className={`d-grid gap-2 col-6 mx-auto ${style.divBtn}`}>
          <button
            className={`btn ${tipoDeBoton} btn-sm ${style.btnCardCarrito}`}
            type="button"
            onClick={agregarProductoAlCarrito}
          >
            {textoDeBoton}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
