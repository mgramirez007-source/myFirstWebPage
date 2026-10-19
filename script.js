// ==========================================================
// Perfil profesional — Fase 3: modo claro/oscuro con JavaScript
// Autora: María Guadalupe Ramírez Cruz
// ==========================================================

// Busca el Toggle Switch por su id y guarda una referencia al <body>
const btnTema = document.getElementById("btn-tema");
const body = document.body;

// Aplica el tema: agrega la clase "oscuro" al body si está activado, la quita si no
function aplicarTema(oscuro) {
    body.classList.toggle("oscuro", oscuro);
    btnTema.checked = oscuro;
}

// Al cargar: usa la preferencia guardada; si no hay, la del sistema operativo
let guardado = null;
try {
    guardado = localStorage.getItem("tema");
} catch (e) {
    // localStorage no disponible: se usa solo la preferencia del sistema
}
const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(guardado ? guardado === "oscuro" : prefiereOscuro);

// Escucha cuando se marca o desmarca el Toggle Switch
btnTema.addEventListener("change", function () {
    aplicarTema(btnTema.checked);
    try {
        localStorage.setItem("tema", btnTema.checked ? "oscuro" : "claro");
    } catch (e) {
        // sin localStorage el tema solo dura mientras la página está abierta
    }
});
