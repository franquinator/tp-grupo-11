import { useState, useEffect } from "react";

export default function useTema() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    const temaActual = localStorage.getItem("tema") || "claro";
    setTema(temaActual);
    document.documentElement.setAttribute("data-theme", temaActual)
  }, []); {/*Lista vacia para que se ejecute solo la primera vez*/}

  const btnTema = () => {
    const nuevoTema = tema === "claro" ? "oscuro" : "claro";
    setTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
    document.documentElement.setAttribute("data-theme", nuevoTema)
  };

  return { tema, btnTema };
}