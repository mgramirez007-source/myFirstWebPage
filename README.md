# Perfil profesional — María Guadalupe Ramírez Cruz

Página web personal con el perfil profesional de **María Guadalupe Ramírez Cruz**, Senior Backend Developer.

## Contexto académico

Este proyecto es el trabajo con el que acredito la materia de **Diseño Web** de la **Licenciatura en Transformación Digital** de la **Escuela Bancaria y Comercial (EBC)**.

La página no se construyó de una sola vez: creció **por fases**, y cada fase agrega una capa nueva de lo que se vio en clase. El historial de commits de git documenta ese avance (un commit por fase).

## Evolución del proyecto por fases

| Fase | Tema | Qué se agregó |
|------|------|---------------|
| 1 | Estructura y estilos base | HTML semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`), lista de experiencia con `<time>`, metadatos SEO y estilos base con variables CSS. |
| 2 | Layout y responsive | Layout con **CSS Grid** (sidebar + contenido), tarjetas de proyectos con **Flexbox** y degradados, habilidades en un grid de cajas, imágenes SVG, `@media` queries y menú adaptable. |
| 3 | Modo claro / oscuro | **Toggle switch** hecho con CSS, cambio de tema con **JavaScript** (clase `oscuro` sobre las variables CSS), preferencia guardada en `localStorage` y respeto a `prefers-color-scheme`. |
| 4 | Interactividad | Saludo en consola según la hora, **contador de likes**, eventos del DOM (mostrar/ocultar y cambiar un mensaje) y animaciones al hacer scroll con **AOS**. |
| 5 | Bootstrap | Se integra **Bootstrap 5.3** y cuatro de sus componentes (ver abajo), conectados con el modo oscuro y con el diseño propio. |

### Fase 5 en detalle: componentes de Bootstrap

- **Navbar responsive** con botón de hamburguesa (`collapse`) que reemplaza al menú casero de la fase 2.
- **Scrollspy**: el enlace del menú se resalta según la sección que se está viendo.
- **Accordion** en la sección de Experiencia: un trabajo abierto a la vez, en lugar de una lista larga.
- **Modal** en Proyectos: el botón "Ver detalles" abre una ventana cuyo contenido se llena con JavaScript a partir de atributos `data-*`.
- **Toast**: aviso breve al copiar el correo desde la sección de Contacto y cada 5 likes del contador.
- El tema oscuro propio también se aplica a Bootstrap (`data-bs-theme`), y los componentes usan las mismas variables de color del proyecto.

## Tecnologías

- HTML5 semántico
- CSS3: variables, Grid, Flexbox, media queries, transiciones
- JavaScript (sin frameworks): DOM, eventos, `localStorage`
- [Bootstrap 5.3.3](https://getbootstrap.com/) (CDN)
- [AOS 2.3.4](https://michalsnik.github.io/aos/) (CDN)

## Estructura del proyecto

```
index.html     Contenido de la página
style.css      Estilos propios (cargados después de Bootstrap)
script.js      Tema, contador, eventos del DOM, modal y toast
img/           Avatar e ilustraciones SVG de los proyectos
```

## Cómo verla

No necesita instalación. Abre `index.html` en el navegador. Requiere internet porque Bootstrap y AOS se cargan desde un CDN.

## Créditos

- Avatar: [Notionists de DiceBear](https://www.dicebear.com/styles/notionists/) (CC0)
- Toggle switch: basado en un ejemplo de W3Schools

## Autora

María Guadalupe Ramírez Cruz — [lupnor5@gmail.com](mailto:lupnor5@gmail.com)
