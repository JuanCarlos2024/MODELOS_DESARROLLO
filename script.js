// Función para mostrar el pop-up
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Función para cerrar el pop-up
function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirigirAsociacion() {
    const select = document.getElementById("asociaciones");
    const opcionSeleccionada = select.value;

    if (opcionSeleccionada === "santiago") {
        window.location.href = "detalle_asoc.html";
    } else if (opcionSeleccionada === "arica") {
        alert("Funcionalidad no implementada para Arica."); // Placeholder
    } else if (opcionSeleccionada === "atacama") {
        alert("Funcionalidad no implementada para Atacama."); // Placeholder
    }
}

// Función para mostrar el pop-up con información adicional
function mostrarPopup(event) {
    // Obtener la fila más cercana al clic
    const fila = event.target.closest("tr");

    // Extraer datos de la fila
    const club = fila.querySelector("td:nth-child(2)").textContent;
    const asociacion = fila.querySelector("td:nth-child(3)").textContent;
    const tipoRodeo = fila.querySelector("td:nth-child(4)").textContent;

    // Actualizar el contenido dinámico del pop-up
    document.getElementById("popup-club").textContent = club;
    document.getElementById("popup-asociacion").textContent = asociacion;
    document.getElementById("popup-tipo").textContent = tipoRodeo;

    // Mostrar el pop-up
    document.getElementById("popup").style.display = "block";
}

// Función para cerrar el pop-up
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

// Asignar el evento de clic a cada celda con clase "puntaje"
document.querySelectorAll(".puntaje").forEach((celda) => {
    celda.addEventListener("click", mostrarPopup);
});


// Función para mostrar el video
function mostrarVideo(videoUrl) {
    const videoContainer = document.getElementById("video-container");
    const videoIframe = document.getElementById("video-iframe");

    // Cargar el video en el iframe
    videoIframe.src = videoUrl;

    // Mostrar el contenedor del video
    videoContainer.style.display = "block";
}

// Función para cerrar el pop-up y detener el video
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";

    // Detener el video al cerrar el pop-up
    const videoIframe = document.getElementById("video-iframe");
    videoIframe.src = "";
}

    // Función para redirigir según la fecha seleccionada
    function redirigirFecha() {
        const fechaSeleccionada = document.getElementById("fechas-rodeos").value;
        
        if (fechaSeleccionada === "fecha_1") {
            window.location.href = "prog_2.html";  // Redirige a prog_resultado.html para Fecha_1
        } else if (fechaSeleccionada === "fecha_2") {
            window.location.href = "prog_2.html";  // Redirige a prog_resultado.html para Fecha_2
        } else if (fechaSeleccionada === "fecha_3") {
            window.location.href = "prog_2.html";  // Redirige a prog_resultado.html para Fecha_3
        }
    }