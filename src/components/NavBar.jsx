import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const cerrarNav = () => setOpen(false);
  return (
    <nav className={`${style.nav} fixed-top bg-light`}>
      <div className="divIzquierdo">
        <i
          className="bi bi-cup-hot" 
          style={{ fontSize: "2rem", color: "black" }}
        ></i>
        <span>Luna & Granos Café</span>
      </div>
      <button className={style.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`${style.menu} ${open ? style.active : ""} derecha`}>
        <li>
          <Link className="btn" to="/" onClick={cerrarNav}>Inicio</Link>
        </li>
        <li>
          <Link className="btn" to="/nosotros" onClick={cerrarNav}>Nosotros</Link>
        </li>
        <li>
          <Link className="btn" to="/carta" onClick={cerrarNav}>Carta</Link>
        </li>
        <li>
          <Link className="btn" to="/carrito" onClick={cerrarNav}>Carrito</Link>
        </li>
        <li>
          <Link className="btn" to="/contacto" onClick={cerrarNav}>Contacto</Link>
        </li>
        <li>
          <button className="btn">
            <i className="bi bi-moon-fill"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
