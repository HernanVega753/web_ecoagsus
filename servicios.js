/* === MODO OSCURO UNIFICADO (Desktop + Mobile) === */

// Capturamos ambos botones de modo oscuro
const btnDarkDesktop = document.getElementById("modo-toggle");
const btnDarkMobile = document.getElementById("modo-toggle-mobile");

// Función que activa/desactiva modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Guardar preferencia en localStorage
  const activo = document.body.classList.contains("dark-mode");
  localStorage.setItem("modo-oscuro", activo ? "1" : "0");
}

// Asignar eventos si existen los botones
if (btnDarkDesktop) btnDarkDesktop.addEventListener("click", toggleDarkMode);
if (btnDarkMobile) btnDarkMobile.addEventListener("click", toggleDarkMode);

// Cargar preferencia al entrar
if (localStorage.getItem("modo-oscuro") === "1") {
  document.body.classList.add("dark-mode");
}

/* === SCROLL SUAVE DEL MENÚ === */
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* === MENÚ HAMBURGUESA === */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en sección
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}
