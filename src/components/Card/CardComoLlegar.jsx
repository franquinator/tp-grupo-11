import style from "./CardComoLlegar.module.css";
import React from "react";

export default function CardComoLlegar({ icono, texto }) {
  return (
    <div className={style.cardComoLlegar}>
      <img src={icono} />
      <p>{texto}</p>
    </div>
  );
}
