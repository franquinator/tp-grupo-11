import productos from "../../data/productos.json";
import CardProducto from "../components/Card/CardProducto";
import Buscador from "../components/Buscador";
import { useState } from "react";

export default function Carta() {
  const [search, setSearch] = useState("");

  const productosFiltrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      p.tipo.toLowerCase().includes(search.toLowerCase())
  );

  /*Paso producto del array como parametro a cardProducto y arma la carta con los valores del objeto*/
  return (
    <>
      <h2 className="text-center x-auto p-3">Nuestra Carta</h2>

      <p className="text-center text-secondary">
        Descubre nuestra selección de cafés premium, tés aromáticos y deliciosos
        pasteles preparados con los mejores ingredientes.
      </p>

      <Buscador setSearch={setSearch} />

      <div className="container d-flex p-2 flex-wrap justify-content-evenly">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => (
            <CardProducto key={p.id} producto={p} />
          ))
        ) : (
          <p className="text-center text-muted mt-4">
            No se encontraron productos que coincidan con tu búsqueda.
          </p>
        )}
      </div>
    </>
  );
}
