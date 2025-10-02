import productos from '../../data/productos.json'
import CardProducto from "../components/Card/CardProducto";
import Buscador from "../components/Buscador";


export default function Carta() {
  return (
    
    /*Paso producto del array como parametro a cardProducto y arma la carta con los valores del objeto*/
    <>
      <h2 className="text-center x-auto p-3">Nuestra Carta</h2>

      <p className="text-center text-secondary">Descubre nuestra selección de cafés premium, tés aromáticos y deliciosos pasteles preparados con los mejores ingredientes.</p>

      <Buscador/>

      <div className="container d-flex p-2 flex-wrap justify-content-evenly">
          {productos.map(p => <CardProducto producto={p}/>)}
      </div>
    </>
);
}

