import React from "react";
import style from "./Formulario.module.css";
import { useState, useEffect } from "react";


export default function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    fecha: "",
    hora: "",
    comentario: ""
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (error || enviado) {
      const timer = setTimeout(() => {
        setError("");
        setEnviado(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, enviado]);

  const manejarCambios = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, fecha, hora, comentario } = formulario;

    if (!nombre || !email || !fecha || !hora || !comentario) {
      setError("Por favor completá todos los campos obligatorios.");
      return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
      setError("El nombre solo puede contener letras y espacios.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Por favor ingresá un email válido (debe contener '@' y un dominio).");
      return;
    }

    if (comentario.trim().length < 10) {
      setError("El comentario debe tener al menos 10 caracteres.");
      return;
    }

    setError("");
    setEnviado(true);

    setFormulario({
      nombre: "",
      email: "",
      fecha: "",
      hora: "",
      comentario: ""
    });

    console.log("Datos enviados:", formulario);
  };

  return (
    <div className={style.formCard}>
      <h2>Hacer una Reserva</h2>
      <form className={style.formulario} onSubmit={manejarSubmit}>
        <div className={style.formRow}>
          <div className={style.formGroup}>
            <label>Nombre completo *</label>
            <input
              className={style.inputForm}
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambios}
              type="text"
              placeholder="Tu nombre"
            />
          </div>
          <div className={style.formGroup}>
            <label>Email *</label>
            <input
              className={style.inputForm}
              name="email"
              value={formulario.email}
              onChange={manejarCambios}
              type="email"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className={style.formRow}>
          <div className={style.formGroup}>
            <label>Fecha de la reserva *</label>
            <input
              className={style.inputForm}
              name="fecha"
              value={formulario.fecha}
              onChange={manejarCambios}
              type="date"
            />
          </div>
          <div className={style.formGroup}>
            <label>Hora de la reserva *</label>
            <input
              className={style.inputForm}
              name="hora"
              value={formulario.hora}
              onChange={manejarCambios}
              type="time"
            />
          </div>
        </div>

        <div className={`${style.formGroup} ${style.fullWidth}`}>
          <label>Mensaje / Comentarios *</label>
          <textarea
            className={style.textareaForm}
            name="comentario"
            value={formulario.comentario}
            onChange={manejarCambios}
            placeholder="Cuéntanos sobre tu reserva: número de personas, ocasión especial, preferencias alimentarias, etc."
          />
        </div>

        <button type="submit" className={style.btnEnviar}>
          Enviar Reserva
        </button>

        <p className={style.nota}>
          * Campos obligatorios. Te confirmaremos tu reserva por email o teléfono.
        </p>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {enviado && <p style={{ color: "green" }}>¡Reserva enviada correctamente!</p>}
      </form>
    </div>
  );
}