/* ========================================
   ESTADO GLOBAL DE LOS FILTROS
   ======================================== */

let filtros = { texto: "", categoria: "todas" };

/* ========================================
   APLICACIÓN DE LOS FILTROS
   ======================================== */

function aplicarFiltros() {
    // Obtenemos los elementos de la interfaz.
    const lista = document.getElementById("lista");
    const contador = document.getElementById("contador");

    // Filtramos las palabras por texto y categoría.
    const palabrasFiltradas = PALABRAS.filter(function (item) {
        const texto = filtros.texto.trim().toLowerCase();

        const coincideTexto =
            item.palabra.toLowerCase().includes(texto) ||
            item.descripcion.toLowerCase().includes(texto) ||
            item.categoria.toLowerCase().includes(texto);

        const coincideCategoria =
            filtros.categoria === "todas" ||
            item.categoria === filtros.categoria;

        return coincideTexto && coincideCategoria;
    });

    // Limpiamos los resultados anteriores.
    lista.replaceChildren();

    // Creamos una tarjeta por cada palabra encontrada.
    palabrasFiltradas.forEach(function (item, indice) {
        const tarjeta = document.createElement("li");
        tarjeta.className = "tarjeta-palabra";

        const titulo = document.createElement("h3");
        titulo.textContent = item.palabra;

        const categoria = document.createElement("span");
        categoria.className = "etiqueta-categoria";
        categoria.textContent = item.categoria;

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;

        // Añadimos un pequeño retraso a cada animación.
        tarjeta.style.animationDelay = `${Math.min(indice * 35, 350)}ms`;

        tarjeta.append(titulo, categoria, descripcion);
        lista.appendChild(tarjeta);
    });

    // Mostramos un mensaje si no hay coincidencias.
    if (palabrasFiltradas.length === 0) {
        const mensaje = document.createElement("li");
        mensaje.className = "tarjeta-palabra";
        mensaje.textContent = "No se han encontrado palabras.";
        lista.appendChild(mensaje);
    }

    // Actualizamos el número de resultados.
    contador.textContent =
        `Mostrando ${palabrasFiltradas.length} de ${PALABRAS.length} palabras`;
}

/* ========================================
   INICIALIZACIÓN DE LA APLICACIÓN
   ======================================== */

// Cargamos los textos definidos en config.js.
document.getElementById("titulo").textContent = APP_TITULO;
document.getElementById("subtitulo").textContent = APP_SUBTITULO;
document.getElementById("version").textContent = APP_VERSION;

// Mostramos el catálogo inicial.
aplicarFiltros();