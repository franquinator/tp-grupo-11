import React from 'react';
import style from './CardCarrito.module.css';

export default function CardCarrito({ producto, onAumentar, onDisminuir, onEliminar }) {
  return (
    <div className={`card d-flex ${style.cardPrincipal}`}>
      <div className={`card-body d-flex align-items-center ${style.colorCard}`}>

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
            <button
              className={`btn btn-sm ${producto.cantidad === 1 ? "btn btn-outline-secondary disabled" : "btn-outline-secondary"}`}
              onClick={onDisminuir}
            >
              -
            </button>
            <span>{producto.cantidad}</span>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onAumentar}
            >
              +
            </button>
          </div>
        </div>

        {/* Precio y eliminar */}
        <div className={`text-end ${style.precioCardCarrito}`}>
          <button className="btn btn-sm text-danger" onClick={onEliminar}>
            <i className="bi bi-trash"></i>
          </button>
          <p>${producto.precio} c/u</p>
          <p><strong>${producto.precio * producto.cantidad}</strong></p>
        </div>
      </div>
    </div>
  );
}