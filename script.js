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
    // Fase 5: también le avisa a Bootstrap para que sus componentes cambien de tema
    const temaBootstrap = oscuro ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", temaBootstrap);
    document.querySelector(".navbar").setAttribute("data-bs-theme", temaBootstrap);
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
    if (clics % 5 === 0) {
        mostrarAviso(`¡Gracias! Ya van ${clics} likes 💜`);
    }
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

// ==========================================================
// Fase 5: componentes de Bootstrap (Toast, Modal)
// ==========================================================

// Toast: aviso breve en la esquina inferior derecha
const toastAviso = document.getElementById("toast-aviso");
const toastMensaje = document.getElementById("toast-mensaje");

function mostrarAviso(mensaje) {
    toastMensaje.textContent = mensaje;
    bootstrap.Toast.getOrCreateInstance(toastAviso).show();
}

// Botón que copia el correo al portapapeles y avisa con un Toast
const btnCopiar = document.getElementById("btn-copiar");

btnCopiar.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText("lupnor5@gmail.com");
        mostrarAviso("Correo copiado al portapapeles ✅");
    } catch (e) {
        mostrarAviso("No se pudo copiar. Cópialo a mano: lupnor5@gmail.com");
    }
});

// Modal: llena el contenido con los data-* del botón que lo abrió
const modalProyecto = document.getElementById("modal-proyecto");

modalProyecto.addEventListener("show.bs.modal", function (evento) {
    const boton = evento.relatedTarget;
    document.getElementById("modal-titulo").textContent = boton.dataset.titulo;
    document.getElementById("modal-descripcion").textContent = boton.dataset.descripcion;

    // Las listas se vacían y se vuelven a construir en cada apertura
    const puntos = document.getElementById("modal-puntos");
    const tecnologias = document.getElementById("modal-tecnologias");
    puntos.replaceChildren();
    tecnologias.replaceChildren();

    boton.dataset.puntos.split("|").forEach(function (texto) {
        const li = document.createElement("li");
        li.textContent = texto;
        puntos.appendChild(li);
    });
    boton.dataset.tecnologias.split(",").forEach(function (texto) {
        const li = document.createElement("li");
        li.textContent = texto;
        tecnologias.appendChild(li);
    });
});
