import style from "./CardComoLlegar.module.css";
import React from "react";

export default function CardComoLlegar({ icono, texto }) {
  return (
    <div className={style.cardComoLlegar}>
      <i className="bi bi-geo-alt-fill"/>
      <p>{texto}</p>
    </div>
  );
}
