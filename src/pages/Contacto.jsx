import React from "react";
import style from "./Contacto.module.css";
import Card from "../components/Card/Card";
import CardComoLlegar from "../components/Card/CardComoLlegar.jsx";
import "../components/Formulario/formulario";
import Formulario from "../components/Formulario/formulario.jsx"; /*Funciona formulario.jsx por más que el archivo este en mayuscula, si se pone en mayuscula tira error*/

export default function Contacto() {
  return (
    <section>
      <h1 className={style.titulo}>Contacto y Reservas</h1>
      <p className={style.texto}>
        ¿Tienes alguna pregunta o quieres hacer una reserva? No dudes en
        contactarnos. ¡Estaremos encantados de atenderte!
      </p>

      <div className={style.contenedorFormularios}>
        <div className={style.contenedorIzq}>
          <Card
            titulo={"Direccion"}
            icono={<i className="bi bi-geo-alt-fill"></i>}
            texto={"Av corrientes 1234"}
          />
          <Card
            titulo={"Telefono"}
            icono={<i className="bi bi-telephone"></i>}
            texto={"4489-0135"}
          />
          <Card
            titulo={"Email"}
            icono={<i className="bi bi-envelope"></i>}
            texto={"lunaygranos@gmail.com"}
          />
          <Card
            titulo={"Horarios"}
            icono={<i className="bi bi-clock"></i>}
            texto={"Lun - Sab: 7:00AM - 10:00PM"}
          />
        </div>
        <div className={style.contenedorDer}>
          <Formulario />
        </div>
      </div>
      <div className={style.contenedorComoLlegar}>
        <h2 className={style.subtituloComoLlegar}>¿Como llegar?</h2>
        <CardComoLlegar
          icono={"src/assets/geo.png"}
          texto={
            "Estamos ubicados en el corazon de Buenos Aires, cerca del obelisco y con facil acceso en auto"
          }
        />
      </div>
    </section>
  );
}
