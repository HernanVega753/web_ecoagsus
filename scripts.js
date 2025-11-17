// 🌅 Carrusel de portada
const hero = document.getElementById("hero");
const heroImages = [
  "img/portada1.avif",
  "img/portada0.avif",
  "img/portada2.avif",
  "img/portada3.avif",
  "img/portada4.avif",
  "img/portada1.avif",
  "img/portada0.avif",
  "img/portada2.avif",
  "img/portada3.avif",
  "img/portada4.avif",
];
let heroIndex = 0;
function changeBackground() {
  hero.style.opacity = 0; // Desvanecer antes de cambiar
  setTimeout(() => {
    hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    heroIndex = (heroIndex + 1) % heroImages.length;
    hero.style.opacity = 1; // Restaurar visibilidad
  }, 500); // Tiempo para el desvanecimiento
}
changeBackground();
setInterval(changeBackground, 4000);

const track = document.getElementById("carousel-track");

if (track) {
  const firstCard = track.firstElementChild.cloneNode(true);
  track.appendChild(firstCard); // Clonamos la primera tarjeta y la colocamos al final

  let scrollAmount = 0;
  const maxScroll = track.scrollWidth - track.clientWidth;

  function slideLoop() {
    scrollAmount += 1;
    track.scrollLeft = scrollAmount;

    // Cuando llegamos al final, saltamos a la primera tarjeta sin cortes visibles
    if (scrollAmount >= maxScroll) {
      scrollAmount = track.firstElementChild.offsetWidth;
      track.scrollLeft = scrollAmount;
    }
  }

  setInterval(slideLoop, 20);
}

// 🎯 Filtro de servicios
const botonesFiltro = document.querySelectorAll(".filtro-btn");
const tarjetas = document.querySelectorAll(".servicio-card");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    document.querySelector(".filtro-btn.activo")?.classList.remove("activo");
    boton.classList.add("activo");
    const filtro = boton.getAttribute("data-filtro");
    tarjetas.forEach((tarjeta) => {
      const categoria = tarjeta.getAttribute("data-categoria");
      tarjeta.style.display =
        filtro === "todos" || filtro === categoria ? "block" : "none";
    });
  });
});

// 📑 Tabs de servicios dinámicos
const tabs = document.querySelectorAll(".tab-btn");
const contenidos = document.querySelectorAll(".servicio-detalle");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab-btn.activo")?.classList.remove("activo");
    tab.classList.add("activo");
    const target = tab.getAttribute("data-target");
    contenidos.forEach((content) => {
      content.classList.remove("activo");
      if (content.id === target) {
        content.classList.add("activo");
      }
    });
  });
});

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
// === Scroll suave del menú ===
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// === Efecto 3D Parallax (muy liviano) ===
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 30}deg) rotateX(${y / -30}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
// === MENÚ HAMBURGUESA ===
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Cierra el menú al seleccionar una opción
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
// Carga inicial desde localStorage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

// Botón modo oscuro
const darkToggle = document.getElementById("darkModeToggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar preferencia
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
  });
}
