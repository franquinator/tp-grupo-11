export function agregarAlCarrito(producto) {
    //agrega un elemento al carrito, pero si ya esta le suma 1 a su cantidad;
    const storage = localStorage.getItem("carrito");
    let carrito = [];
    if(storage != ''){
        carrito = JSON.parse(storage)
    }

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index >= 0) {
        carrito[index].cantidad ++;
    }
    else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
export function disminuirCantidad(producto) {
    //borra un elemento del carrito, pero si su cantidad es mas de uno solo baja la cantidad
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index < 0) return;

    carrito[index].cantidad --;

    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
export function borrarDelCarrito(producto) {
    //borra un elemento del carrito, pero si su cantidad es mas de uno solo baja la cantidad
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index < 0) return;

    carrito.splice(index,1);

    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
export function borrarCarrito(){
    //vacia completamente el carrito
    localStorage.setItem("carrito", []);
}
export function obtenerCarrito() {
    // Obtiene el array de elementos en el carrito
    const storage = localStorage.getItem("carrito");
    if (!storage) {
        return [];
    }
    try {
        return JSON.parse(storage);
    } catch (e) {
        console.error("Error al parsear el carrito:", e);
        return [];
    }
}
