import React, { useState } from 'react'
import style from './CardCarrito.module.css'

export default function CardCarrito({ producto }) {
  const [cantidad, setCantidad] = useState(1);
  const esBotonActivado = () => {cantidad === 1 ? "true" : "false"}
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
            <button className={`btn btn-sm ${cantidad === 1 ? "btn-smbtn-outline-secondary" : "btn-outline-secondary"} `} onClick={() => setCantidad(cantidad - 1)}>-</button>
            <span>{cantidad}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setCantidad(cantidad +1)}>+</button>
          </div>
        </div>

        {/* Precio y eliminar */}
        <div className={`text-end ${style.precioCardCarrito}`}>
          <button className="btn btn-sm text-danger"><i className="bi bi-trash"></i></button>
          <p>${producto.precio} c/u</p>
          <p><strong>${producto.precio}</strong></p>
        </div>
      </div>
    </div>
    </>
  )
}
