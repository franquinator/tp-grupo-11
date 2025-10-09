import React, { use, useState } from "react";
import style from './Carrito.module.css'
import ButtonLink from "../components/ButtonLink.jsx";
import CardCarrito from "../components/Card/CardCarrito.jsx";
import { obtenerCarrito, borrarCarrito, agregarAlCarrito, disminuirCantidad, borrarDelCarrito } from "/src/manejoDeCarrito.js";
import { motion } from "framer-motion";

export default function Carrito() {
  //esto sirve para que evitar que suba arriba de todo cada que se usa un useState
  const [renderizo, setRenderizo] = useState(false);
  if(!renderizo){
    setRenderizo(true);
    window.scrollTo(0, 0);
  }

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
      <div className={`text-center mt-5 mb-3`}>
        <h2>🎉 ¡Muchas gracias por tu compra!</h2>
        <p>Tu pedido está siendo procesado.</p>
        <ButtonLink pagina="/carta" texto="Seguir comprando" />
      </div>
    );
  }

  return (
    <div className={`mb-3 `}>
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
      <>

        <div className={`d-flex  ${style.continuarComprando}`}>
          <div className={`d-flex flex-column ${style.divTuCarrito}`}>
            <h3>Tu Carrito</h3>
            <p>Elige nuestros mejores productos</p>
            <ButtonLink pagina="/carta" texto="Continuar Comprando" />
          </div>
        </div>
        
        <div className={`d-flex flex-wrap`}> 
          <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`p-2 flex-fill `}>

            {carrito.map((p) => (
              <CardCarrito
              key={p.id}
              producto={p}
              onAumentar={() => Aumentar(p)}
              onDisminuir={() => Disminuir(p)}
              onEliminar={() => Eliminar(p)}
              />
            ))}

            <div className="d-grid gap-2 col-6 mx-auto mt-3">
              <button className={`btn btn-outline-danger ${style.btnVaciarCarrito}`} onClick={Vaciar}>
                Vaciar Carrito
              </button>
            </div>

          </motion.div>

          <div className={`${style.cardPedido} p-4 flex-fill`}>
            <div className="text-center mt-3">
              <div className={`d-flex justify-content-start ${style.tituloResumen}`}>
                <p>Resumen del Pedido</p>
              </div>
              {carrito.map((p) => (
                <div className={`d-flex justify-content-between ${style.productosPedido}`} key={p.id}> 
                  <p>{p.nombre} x {p.cantidad}</p>
                  <p>${p.precio * p.cantidad}</p>
                </div>
              ))}
            </div>

            <div className={`${style.totalPedido}`}>
              <div className="d-flex justify-content-between">
                <p>Total:</p>
                <p>${total}</p>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-3">
                <button className={`btn btn-dark ${style.btnFinalizarCompra}`} onClick={FinalizarCompra}>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          
            
          
        </div>
      </>
        
      )
      }
    </div >
  );
}