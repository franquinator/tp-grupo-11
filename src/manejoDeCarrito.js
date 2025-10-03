export function agregarAlCarrito(producto) {
    //agrega un elemento al carrito, pero si ya esta le suma 1 a su cantidad;
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index >= 0) {
        carrito[index].cantidad += producto.cantidad;
    }
    else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
export function borrarDelCarrito(producto) {
    //borra un elemento del carrito, pero si su cantidad es mas de uno solo baja la cantidad
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index < 0) return;

    if(carrito[index].cantidad > 1){
        carrito[index].cantidad --;
    }
    else{
        carrito.splice(index,1);
    }

    console.log(carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
export function borrarCarrito(){
    //vacia completamente el carrito
    localStorage.setItem("carrito", []);
    console.log(carrito);
}
export function obtenerCarrito(){
    //obtiene el array de elementos en el carrito
    return JSON.parse(localStorage.getItem("carrito"));
}
