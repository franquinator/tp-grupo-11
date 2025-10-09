import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import useTema from "../tema.js"

function NavBar() {
  const [open, setOpen] = useState(false);
  const cerrarNav = () => setOpen(false);

  const { tema, btnTema } = useTema()

  return (
    <nav className={`${style.nav} fixed-top`}>
      <div className="divIzquierdo">
        <i
          className={`bi bi-cup-hot ${tema === "claro" ? "" : "text-light"}`}
          style={{ fontSize: "2rem", color: "black" }}
        />
        <span>Luna & Granos Café</span>
      </div>
      <button className={style.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`${style.menu} ${open ? style.active : ""} derecha`}>
        <li>
          <Link className={`btn ${tema === "claro" ? "" : "btn-dark"}`} to="/" onClick={cerrarNav}>Inicio</Link>
        </li>
        <li>
          <Link className={`btn ${tema === "claro" ? "" : "btn-dark"}`} to="/nosotros" onClick={cerrarNav}>Nosotros</Link>
        </li>
        <li>
          <Link className={`btn ${tema === "claro" ? "" : "btn-dark"}`} to="/carta" onClick={cerrarNav}>Carta</Link>
        </li>
        <li>
          <Link className={`btn ${tema === "claro" ? "" : "btn-dark"}`} to="/carrito" onClick={cerrarNav}>Carrito</Link>
        </li>
        <li>
          <Link className={`btn ${tema === "claro" ? "" : "btn-dark"}`} to="/contacto" onClick={cerrarNav}>Contacto</Link>
        </li>
        <li>
          <button className={`btn ${tema === "claro" ? "" : "btn-dark"}`} onClick={() => {btnTema();setTimeout(cerrarNav,400)}}>
            {tema === "claro" ? <i className="bi bi-moon-fill" /> : <i className="bi bi-sun" />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
