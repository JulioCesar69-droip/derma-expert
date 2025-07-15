const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
let carrito = [];

// Crea y muestra una sección de productos por marca
function crearSeccion(titulo, productos) {
  const seccion = document.createElement("div");
  seccion.classList.add("categoria-productos");

  const encabezado = document.createElement("h2");
  encabezado.classList.add("categoria");
  encabezado.textContent = titulo;
  seccion.appendChild(encabezado);

  productos.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">S/ ${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito('${titulo}', ${index})">Agregar al carrito</button>
    `;

    seccion.appendChild(div);
  });

  contenedor.appendChild(seccion);
}

// Muestra productos de ambas marcas por separado
function mostrarProductos() {
  crearSeccion("Productos ISDIN", productosISDIN);
  crearSeccion("Productos BIODERMA", productosBIODERMA);
}

function agregarAlCarrito(marca, index) {
  const producto =
    marca === "Productos ISDIN" ? productosISDIN[index] : productosBIODERMA[index];
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Elimina 1 producto según el índice
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${producto.nombre} - S/ ${producto.precio.toFixed(2)}
      <button class="eliminar" onclick="eliminarDelCarrito(${i})">❌</button>
    `;
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  totalElemento.textContent = total.toFixed(2);
}

document.getElementById("finalizar").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const mensaje = carrito
    .map((p) => `${p.nombre} - S/ ${p.precio.toFixed(2)}`)
    .join("\n");

  const total = carrito.reduce((acc, p) => acc + p.precio, 0).toFixed(2);

  const textoWhatsApp = `Hola, deseo comprar los siguientes productos:\n\n${mensaje}\n\nTotal: S/ ${total}`;
  const url = `https://wa.me/51994824326?text=${encodeURIComponent(textoWhatsApp)}`;
  window.open(url, "_blank");
});

// Ejecutar al cargar
mostrarProductos();

