import React from "react";
import style from './Carrito.module.css'
import ButtonLink from "../components/ButtonLink.jsx";
import CardCarrito from "../components/Card/CardCarrito.jsx";
import {obtenerCarrito,borrarCarrito} from "/src/manejoDeCarrito.js"

export default function Carrito() {
  const carrito = obtenerCarrito();
  return (
    <>
      <div id="Carrito sin productos">
        <div className={`d-flex justify-content-center align-items-center ${style.divLogoCompra}`}>
          <i className={`bi bi-bag-plus ${style.logoCompra}`}></i>
        </div>
        <h2 className="text-center">Tu carrito está vacío</h2>
        <p className="text-center text-secondary">Parece que aún no has agregado ningún producto a tu carrito. ¡Explora nuestra deliciosa carta!</p>
        <p className="text-center text-secondary">¡Explora nuestra deliciosa carta!</p>
        <div className="d-flex justify-content-center align-items-center">
          <ButtonLink pagina={"/carta"} texto={"Ver Carta"}/>
        </div>
      </div>
      {/* <CardCarrito producto={carrito[0]}/>; */}
      {carrito.map((p) => (<CardCarrito key={p.id} producto={p}/>))}
      <button onClick={borrarCarrito}>borrar carrito</button>
      {/* <CardCarrito producto={carrito[1]}></CardCarrito> */}
    </>
  );
}
