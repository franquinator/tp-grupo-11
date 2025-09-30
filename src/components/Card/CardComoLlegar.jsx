import "./CardComoLlegar.css";
import React from "react";

export default function CardComoLlegar({ icono, texto }) {
  return (
    <div className="CardComoLlegar">
      <img src={icono} />
      <p>{texto}</p>
    </div>
  );
}
