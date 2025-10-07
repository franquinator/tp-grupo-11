import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);
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
          <Link className="btn" to="/">Inicio</Link>
        </li>
        <li>
          <Link className="btn" to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link className="btn" to="/carta">Carta</Link>
        </li>
        <li>
          <Link className="btn" to="/carrito">Carrito</Link>
        </li>
        <li>
          <Link className="btn" to="/contacto">Contacto</Link>
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
