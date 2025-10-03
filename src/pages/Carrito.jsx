import React from "react";
import style from './Carrito.module.css'
import ButtonLink from "../components/ButtonLink.jsx";
import CardCarrito from "../components/Card/CardCarrito.jsx";
import productos from '../../data/productos.json'

export default function Carrito() {
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
      <CardCarrito producto={productos[1]}></CardCarrito>
    </>
  );
}
