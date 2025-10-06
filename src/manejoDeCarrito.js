export function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const index = carrito.findIndex(item => item.id === producto.id);

  if (index >= 0) {
    carrito[index].cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  return carrito;
}

export function disminuirCantidad(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index < 0) return carrito;

  // 👇 solo disminuye si hay más de 1
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  return carrito;
}

export function borrarDelCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter(item => item.id !== producto.id);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  return carrito;
}

export function borrarCarrito() {
  localStorage.setItem("carrito", JSON.stringify([]));
  return [];
}

export function obtenerCarrito() {
  try {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  } catch (e) {
    console.error("Error al parsear el carrito:", e);
    return [];
  }
}