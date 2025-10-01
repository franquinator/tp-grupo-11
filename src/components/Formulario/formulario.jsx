import React from "react";
import style from "./Formulario.module.css";

export default function Formulario() {
  return (
    <div className={style.formCard}>
      <h2>Hacer una Reserva</h2>
      <form className={style.formulario}>
        <div className={style.formRow}>
          <div className={style.formGroup}>
            <label>Nombre completo *</label>
            <input className={style.inputForm} type="text" placeholder="Tu nombre" required />
          </div>
          <div className={style.formGroup}>
            <label>Email *</label>
            <input className={style.inputForm} type="email" placeholder="tu@email.com" required />
          </div>
        </div>

        <div className={style.formRow}>
          <div className={style.formGroup}>
            <label>Fecha de la reserva *</label>
            <input className={style.inputForm} type="date" required />
          </div>
          <div className={style.formGroup}>
            <label>Hora de la reserva *</label>
            <input className={style.inputForm} type="time" required />
          </div>
        </div>

        <div className={`${style.formGroup} ${style.fullWidth}`}>
          <label>Mensaje / Comentarios *</label>
          <textarea className={style.textareaForm}
            placeholder="Cuéntanos sobre tu reserva: número de personas, ocasión especial, preferencias alimentarias, etc."
            required
          />
        </div>

        <button type="submit" className={style.btnEnviar}>
          Enviar Reserva
        </button>

        <p className={style.nota}>
          * Campos obligatorios. Te confirmaremos tu reserva por email o
          teléfono.
        </p>
      </form>
    </div>
  );
}
