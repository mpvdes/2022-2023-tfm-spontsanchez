// DOM - Document Object Model (Modelo de Objetos del Documento)

// Selecciona el elemento "main" en el DOM
var main = d3.select("main");

// Selecciona el elemento con el ID "scrolly" dentro de "main"
var scrolly = main.select("#scrolly");

// Selecciona el elemento "figure" dentro de "scrolly"
var figure = scrolly.select("figure");

// Selecciona el elemento "article" dentro de "scrolly"
var article = scrolly.select("article");

// Selecciona todos los elementos con la clase "step" dentro de "article"
var step = article.selectAll(".step");

// Inicializa Scrollama
var scroller = scrollama();

// Función para controlar cambios en el tamaño de la ventana
function handleResize() {
    // 1. Actualiza la altura de los elementos "step"
    var stepH = Math.floor(window.innerHeight * 0.85);
    step.style("height", stepH + "px");

    // 2. Calcula la altura y el margen superior de "figure"
    var figureHeight = window.innerHeight / 0.5;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    // 3. Informa a Scrollama para que actualice las nuevas dimensiones de los elementos
    scroller.resize();
}

// Función para manejar la entrada a pasos (steps) en Scrollama
function handleStepEnter(response) {
    // response = { element, direction, index }

    // Agrega una clase "is-active" solo al paso actual
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });

    // Actualiza la imagen de fondo de "figure" basándose en el paso actual
    figure.style("background-image", "url(" + response.element.dataset.image + ")");
}

// Función de inicialización
function init() {
    // 1. Forzar un redimensionamiento al cargar para asegurar que las dimensiones son adecuadas
    handleResize();

    // 2. Configura Scrollama con opciones y observaciones de activación
    //    También inicializa las observaciones de activación
    // 3. Vincula los manejadores de eventos de Scrollama (esto se puede encadenar)
    scroller
        .setup({
            step: "#scrolly article .step", // Selector de los pasos
            offset: 0.33, // Desplazamiento de activación
            debug: false, // Modo de depuración desactivado
        })
        .onStepEnter(handleStepEnter);
}

// Inicia la aplicación llamando a la función de inicialización
init();

