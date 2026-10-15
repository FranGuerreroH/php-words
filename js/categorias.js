const selectorCategoria = document.createElement("select");
selectorCategoria.setAttribute("aria-label", "Filtrar por categoría");

const opcionTodas = document.createElement("option");
opcionTodas.value = "todas";
opcionTodas.textContent = "todas";
selectorCategoria.appendChild(opcionTodas);

const categorias = [...new Set(PALABRAS.map(function (item) {
    return item.categoria;
}))].sort(function (a, b) {
    return a.localeCompare(b, "es");
});

categorias.forEach(function (categoria) {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    selectorCategoria.appendChild(opcion);
});

selectorCategoria.value = filtros.categoria;
selectorCategoria.addEventListener("change", function () {
    filtros.categoria = selectorCategoria.value;
    aplicarFiltros();
});

document.getElementById("controles").appendChild(selectorCategoria);
