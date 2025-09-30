import React from "react";
import "./Formulario.css";

export default function formulario() {
  return (
    <div className="form-card">
      <h2>Hacer una Reserva</h2>
      <form className="formulario">
        <div className="form-row">
          <div className="form-group">
            <label>Nombre completo *</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="tu@email.com" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Fecha de la reserva *</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Hora de la reserva *</label>
            <input type="time" required />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Mensaje / Comentarios *</label>
          <textarea
            placeholder="Cuéntanos sobre tu reserva: número de personas, ocasión especial, preferencias alimentarias, etc."
            required
          />
        </div>

        <button type="submit" className="btn-enviar">
          Enviar Reserva
        </button>

        <p className="nota">
          * Campos obligatorios. Te confirmaremos tu reserva por email o
          teléfono.
        </p>
      </form>
    </div>
  );
}
