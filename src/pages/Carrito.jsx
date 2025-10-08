import React, { useState } from "react";
import style from './Carrito.module.css'
import ButtonLink from "../components/ButtonLink.jsx";
import CardCarrito from "../components/Card/CardCarrito.jsx";
import { obtenerCarrito, borrarCarrito, agregarAlCarrito, disminuirCantidad, borrarDelCarrito } from "/src/manejoDeCarrito.js";

export default function Carrito() {
  const [carrito, setCarrito] = useState(obtenerCarrito());
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const total = carrito.reduce((sum, prod) => sum + prod.precio * prod.cantidad, 0);

  const Aumentar = (producto) => {
    agregarAlCarrito(producto);
    setCarrito(obtenerCarrito());
  };

  const Disminuir = (producto) => {
    disminuirCantidad(producto);
    setCarrito(obtenerCarrito());
  };

  const Eliminar = (producto) => {
    borrarDelCarrito(producto);
    setCarrito(obtenerCarrito());
  };

  const Vaciar = () => {
    borrarCarrito();
    setCarrito([]);
  };

  const FinalizarCompra = () => {
    alert("compra realizada con exito")
    borrarCarrito();
    setCarrito([]);
    setCompraFinalizada(true);
  };

  if (compraFinalizada) {
    return (
      <div className="text-center mt-5">
        <h2>🎉 ¡Muchas gracias por tu compra!</h2>
        <p>Tu pedido está siendo procesado.</p>
        <ButtonLink pagina="/carta" texto="Seguir comprando" />
      </div>
    );
  }

  return (
    <div>
      {carrito.length === 0 ? (
        < div id="Carrito sin productos">
          <div className={`d-flex justify-content-center align-items-center ${style.divLogoCompra}`}>
            <i className={`bi bi-bag-plus ${style.logoCompra}`}></i>
          </div>
          <h2 className="text-center">Tu carrito está vacío</h2>
          <p className="text-center text-secondary">
            Parece que aún no has agregado ningún producto a tu carrito.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <ButtonLink pagina="/carta" texto="Ver Carta" />
          </div>
        </div>
      ) : (
        <div>
          {carrito.map((p) => (
            <CardCarrito
              key={p.id}
              producto={p}
              onAumentar={() => Aumentar(p)}
              onDisminuir={() => Disminuir(p)}
              onEliminar={() => Eliminar(p)}
            />
          ))}

          <div className="text-center mt-3">
            <h4>Total: ${total}</h4>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto mt-3">
            <button className={`btn btn-success`} onClick={FinalizarCompra}>
              Finalizar Compra
            </button>
            <button className={`btn btn-outline-danger ${style.btnVaciarCarrito}`} onClick={Vaciar}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )
      }
    </div >
  );
}