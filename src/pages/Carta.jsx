import React from "react";
import productos from '../../data/productos.json'
import CardProducto from "../components/Card/CardProducto";


export default function Carta() {
  return (
    /*Paso producto del array como parametro a cardProducto y arma la carta con los valores del objeto*/
    <>
      <CardProducto producto={productos[0]} /> 
      <CardProducto producto={productos[1]} />
      <CardProducto producto={productos[2]} />
      <CardProducto producto={productos[3]} />
      <CardProducto producto={productos[4]} />
      <CardProducto producto={productos[5]} />
      <CardProducto producto={productos[6]} />
      <CardProducto producto={productos[7]} />
      <CardProducto producto={productos[8]} />
      <CardProducto producto={productos[9]} />
    </>
);
}
