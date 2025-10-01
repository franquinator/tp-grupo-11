import style from './CardProducto.module.css'

export default function CardProducto( { producto } ){
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text text-body-secondary">holaa{producto.descripcion}</p>
                <h5 className="card-title">${producto.precio}</h5>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-dark" type="button">+ Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}