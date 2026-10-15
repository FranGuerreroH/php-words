/*
 * Contrato:
 * - Cargar este archivo después de app.js.
 * - Deben existir #controles, filtros.texto y aplicarFiltros().
 * - Cada cambio en el campo actualiza filtros.texto y aplica los filtros.
 * - El placeholder y los estilos quedan a cargo de la integración.
 */

const controlesBuscador = document.getElementById("controles");

if (!controlesBuscador) {
    throw new Error('No se encontró el contenedor "#controles".');
}

const etiquetaBuscador = document.createElement("label");
etiquetaBuscador.htmlFor = "buscador-texto";
etiquetaBuscador.textContent = "Buscar";

const campoBuscador = document.createElement("input");
campoBuscador.id = "buscador-texto";
campoBuscador.type = "text";

campoBuscador.addEventListener("input", function () {
    filtros.texto = campoBuscador.value;
    aplicarFiltros();
});

controlesBuscador.append(etiquetaBuscador, campoBuscador);
