import React, { useState } from 'react'
import style from './CardCarrito.module.css'
import {agregarAlCarrito,borrarDelCarrito, disminuirCantidad} from "/src/manejoDeCarrito.js"

export default function CardCarrito({ producto }) {
  const [cantidad, setCantidad] = useState(producto.cantidad);
  const esBotonActivado = () => {cantidad === 1 ? "true" : "false"}
  const disminuirCantidadProducto = () =>{
    if(cantidad > 1){
      setCantidad(cantidad - 1);
      disminuirCantidad(producto);
    }
  }
  const borrarElemento = () =>{
    borrarDelCarrito(producto);
  }
  //const cantidad = producto.cantidad;
  return (
    <>
    <div className={`card d-flex ${style.cardPrincipal}`}>
      <div className="card-body d-flex align-items-center">

        {/* Imagen */}
        <div className={style.divImgCardCarrito}>
          <img
            src={producto.imagen}
            className={`img-fluid ${style.imgCardCarrito}`}
            alt={producto.nombre}
          />
        </div>

        {/* Texto y contador */}
        <div className={`flex-grow-1 ps-3 ${style.textCardCarrito}`}>
          <h5>{producto.nombre}</h5>
          <p>{producto.descripcion}</p>

          <div className={style.contadorCarrito}>
            <button  className={`btn btn-sm ${cantidad === 1 ? "btn btn-outline-secondary disabled" : "btn-outline-secondary"} `} onClick={disminuirCantidadProducto}>-</button>
            <span>{cantidad}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => {setCantidad(cantidad + 1);agregarAlCarrito(producto)}}>+</button>
          </div>
        </div>

        {/* Precio y eliminar */}
        <div className={`text-end ${style.precioCardCarrito}`}>
          <button className="btn btn-sm text-danger" onClick={borrarElemento}><i className="bi bi-trash"></i></button>
          <p>${producto.precio} c/u</p>
          <p><strong>${producto.precio * cantidad}</strong></p>
        </div>
      </div>
    </div>
    </>
  )
}
