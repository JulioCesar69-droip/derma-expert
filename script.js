const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const cantidadCarrito = document.getElementById("cantidad-carrito");
const panelCarrito = document.getElementById("panel-carrito");
const btnCarrito = document.getElementById("btn-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
actualizarCarrito(); // Mostrar carrito al cargar

// Crear sección de productos
function crearSeccion(titulo, productos) {
  const seccion = document.createElement("div");
  seccion.classList.add("categoria-productos");

  const encabezado = document.createElement("h2");
  encabezado.classList.add("categoria");
  encabezado.textContent = titulo;
  seccion.appendChild(encabezado);

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">S/ ${producto.precio.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    `;

    const botonAgregar = div.querySelector("button");
    botonAgregar.addEventListener("click", () => {
      const index = carrito.findIndex(p => p.nombre === producto.nombre);
      if (index !== -1) {
        carrito[index].cantidad += 1;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }
      actualizarCarrito();
      mostrarNotificacion();
    });

    seccion.appendChild(div);
  });

  contenedor.appendChild(seccion);
}

// Mostrar productos al cargar
function mostrarProductos() {
  crearSeccion("Productos ISDIN", productosISDIN);
  crearSeccion("Productos BIODERMA", productosBIODERMA);
}

// Actualizar carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="miniatura-carrito">
      <div class="info-carrito">
        <span class="nombre-producto">${producto.nombre}</span><br>
        <span class="precio-producto">S/ ${(producto.precio * producto.cantidad).toFixed(2)}</span>
        <div class="cantidad-controles">
          <button class="menos" data-index="${i}">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button class="mas" data-index="${i}">+</button>
        </div>
      </div>
      <button class="eliminar" data-index="${i}">❌</button>
    `;
    listaCarrito.appendChild(li);
    total += producto.precio * producto.cantidad;
  });

  // Eventos eliminar
  document.querySelectorAll(".eliminar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      eliminarDelCarrito(i);
    });
  });

  // Eventos + y -
  document.querySelectorAll(".mas").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      carrito[i].cantidad += 1;
      actualizarCarrito();
    });
  });

  document.querySelectorAll(".menos").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      if (carrito[i].cantidad > 1) {
        carrito[i].cantidad -= 1;
      } else {
        carrito.splice(i, 1);
      }
      actualizarCarrito();
    });
  });

  totalElemento.textContent = total.toFixed(2);
  cantidadCarrito.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Finalizar compra (WhatsApp)
document.getElementById("finalizar").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const mensaje = carrito
    .map((p) => `${p.nombre} (x${p.cantidad}) - S/ ${(p.precio * p.cantidad).toFixed(2)}`)
    .join("\n");

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toFixed(2);
  const textoWhatsApp = `Hola, deseo comprar los siguientes productos:\n\n${mensaje}\n\nTotal: S/ ${total}`;
  const url = `https://wa.me/51989348081?text=${encodeURIComponent(textoWhatsApp)}`;

  // ✅ Guardar pedido en historial (localStorage)
  const pedidosAnteriores = JSON.parse(localStorage.getItem("pedidos")) || [];

  pedidosAnteriores.push({
    fecha: new Date().toISOString(),
    items: carrito.map(p => ({
      nombre: p.nombre,
      cantidad: p.cantidad,
      precio: (p.precio * p.cantidad).toFixed(2)
    })),
    total: total
  });

  localStorage.setItem("pedidos", JSON.stringify(pedidosAnteriores));

  // 🧹 Vaciar carrito (si quieres que se borre después de finalizar)
  carrito = [];
  actualizarCarrito();

  // 📲 Abrir WhatsApp
  window.open(url, "_blank");
});


// Mostrar u ocultar carrito
btnCarrito.addEventListener("click", () => {
  panelCarrito.classList.toggle("show");
});

// Comentarios con localStorage
const formComentario = document.getElementById("form-comentario");
const listaComentarios = document.getElementById("lista-comentarios");

if (formComentario && listaComentarios) {
  let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

  function renderizarComentarios() {
    listaComentarios.innerHTML = "";
    comentariosGuardados.forEach((comentario, index) => {
      const div = document.createElement("div");
      div.classList.add("comentario");
      div.innerHTML = `
        <p>${comentario.mensaje}</p>
        <small>${comentario.correo}</small>
        <button class="eliminar-comentario" data-index="${index}">❌</button>
      `;
      listaComentarios.appendChild(div);
    });

    document.querySelectorAll(".eliminar-comentario").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.dataset.index;
        comentariosGuardados.splice(i, 1);
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
        renderizarComentarios();
      });
    });
  }

  renderizarComentarios();

  formComentario.addEventListener("submit", function (e) {
    e.preventDefault();

    const mensaje = document.getElementById("mensaje").value.trim();
    if (mensaje === "") {
      alert("El comentario no puede estar vacío.");
      return;
    }

    const correo = prompt("Ingresa tu correo de Gmail:");
    if (!correo || !correo.endsWith("@gmail.com")) {
      alert("Por favor, ingresa un correo de Gmail válido.");
      return;
    }

    const nuevoComentario = { correo, mensaje };
    comentariosGuardados.push(nuevoComentario);
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    formComentario.reset();
    renderizarComentarios();
  });
}

// Notificación de agregado al carrito
function mostrarNotificacion() {
  const noti = document.getElementById("notificacion-carrito");
  noti.classList.add("mostrar");
  setTimeout(() => {
    noti.classList.remove("mostrar");
  }, 2000);
}

// Mostrar productos
mostrarProductos();
document.getElementById("btn-buscar").addEventListener("click", () => {
  const termino = document.getElementById("busqueda").value.trim().toLowerCase();
  if (!termino) return;

  contenedor.innerHTML = ""; // Limpiar productos

  const filtradosISDIN = productosISDIN.filter(p =>
    p.nombre.toLowerCase().includes(termino)
  );
  const filtradosBIODERMA = productosBIODERMA.filter(p =>
    p.nombre.toLowerCase().includes(termino)
  );

  if (filtradosISDIN.length > 0) crearSeccion("Resultados ISDIN", filtradosISDIN);
  if (filtradosBIODERMA.length > 0) crearSeccion("Resultados BIODERMA", filtradosBIODERMA);

  if (filtradosISDIN.length === 0 && filtradosBIODERMA.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center;">No se encontraron productos con ese nombre.</p>`;
  }
});
// ✅ Paso 1: Restaurar productos si el campo de búsqueda queda vacío
document.getElementById("busqueda").addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    contenedor.innerHTML = "";
    mostrarProductos(); // Vuelve a mostrar todos los productos
  }
});
// Paso 2: Filtrar productos al hacer clic en el botón de búsqueda
document.getElementById("btn-buscar").addEventListener("click", () => {
  const termino = document.getElementById("busqueda").value.trim().toLowerCase();
  if (termino === "") return;

  const productosFiltrados = [...productosISDIN, ...productosBIODERMA].filter(p =>
    p.nombre.toLowerCase().includes(termino)
  );

  contenedor.innerHTML = "";

  if (productosFiltrados.length > 0) {
    crearSeccion("Resultados de búsqueda", productosFiltrados);
  } else {
    contenedor.innerHTML = "<p>No se encontraron productos con ese nombre.</p>";
  }
});
// Resaltar la opción activa del menú según la página
const enlacesMenu = document.querySelectorAll('.menu-opciones a');
const paginaActual = location.pathname.split("/").pop();

enlacesMenu.forEach(enlace => {
  if (enlace.getAttribute("href") === paginaActual) {
    enlace.classList.add("activa");
  }
});
