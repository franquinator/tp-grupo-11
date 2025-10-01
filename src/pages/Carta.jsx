import React from "react";
import productos from '../../data/productos.json'
import CardProducto from "../components/Card/CardProducto";


export default function Carta() {
  return (
    /*Paso producto del array como parametro a cardProducto y arma la carta con los valores del objeto*/
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <CardProducto producto={productos[0]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[1]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[2]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[3]} /> 
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <CardProducto producto={productos[4]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[5]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[6]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[7]} /> 
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CardProducto producto={productos[8]} /> 
          </div>
          <div className="col">
            <CardProducto producto={productos[9]} /> 
          </div>
        </div>
      </div>
    </>
);
}

