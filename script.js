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

// ==========================================================
// Fase 4: saludo, contador y eventos del DOM
// ==========================================================

// 1. Saludo en la consola según la hora del día
function saludar(nombre) {
    const hora = new Date().getHours();
    let saludo = "¡Buenas noches";
    if (hora < 12) {
        saludo = "¡Buenos días";
    } else if (hora < 19) {
        saludo = "¡Buenas tardes";
    }
    return `${saludo}, bienvenido al perfil de ${nombre}!`;
}
console.log(saludar("María Guadalupe Ramírez Cruz"));

// 3. Contador: cada clic en el botón suma 1 al <h2>
const btnContador = document.getElementById("btn-contador");
const contador = document.getElementById("contador");
let clics = 0;

btnContador.addEventListener("click", function () {
    clics++;
    contador.textContent = clics;
});

// Ejercicio 4 (DOM): mostrar/ocultar y cambiar mensaje del párrafo
const datoCurioso = document.getElementById("dato-curioso");
const btnMostrar = document.getElementById("btn-mostrar");
const btnMensaje = document.getElementById("btn-mensaje");
const mensajeOriginal = datoCurioso.textContent;
const mensajeAlterno = "Dato curioso: me encanta depurar condiciones de carrera en producción.";

btnMostrar.addEventListener("click", function () {
    datoCurioso.classList.toggle("oculto");
});

btnMensaje.addEventListener("click", function () {
    datoCurioso.textContent =
        datoCurioso.textContent === mensajeOriginal ? mensajeAlterno : mensajeOriginal;
});
