import React from "react";
import productos from '../../data/productos.json'
import CardProducto from "../components/Card/CardProducto";

export default function Carta() {
  return (
    <>
      <CardProducto producto={productos[0]} />
    </>
);
}
