import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={`${style.nav} fixed-top bg-light`}>
      <div className="divIzquierdo">
        <i
          className="bi bi-cup-hot" /* cuando pongamos modo oscuro se usa este: <i class="bi bi-cup-hot-fill"></i> */
          style={{ fontSize: "2rem", color: "black" }}
        ></i>

        <span>Luna & Granos Cafe</span>
      </div>
      <ul className="derecha">
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
