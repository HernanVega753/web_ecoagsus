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
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
let index = 0;

function changeBackground() {
  const next = heroImages[index];

  if (bg1.style.opacity == "1") {
    bg2.style.backgroundImage = `url(${next})`;
    bg2.style.opacity = "1";
    bg1.style.opacity = "0";
  } else {
    bg1.style.backgroundImage = `url(${next})`;
    bg1.style.opacity = "1";
    bg2.style.opacity = "0";
  }

  index = (index + 1) % heroImages.length;
}
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
// === Textos rotativos del hero ===
const heroFrases = [
  "Evaluamos condiciones productivas, climáticas y ambientales",
  "Proponemos soluciones y medidas para hacer uso eficiente y sostenible de recursos",
  "Monitoreamos la eficiencia y sostenibilidad de las soluciones implementadas",
];

const heroTexto = document.getElementById("hero-text-h3");
let fraseIndex = 0;

// Mostrar frase inicial
heroTexto.textContent = heroFrases[0];

function cambiarFrase() {
  heroTexto.style.opacity = 0;

  setTimeout(() => {
    fraseIndex = (fraseIndex + 1) % heroFrases.length;
    heroTexto.textContent = heroFrases[fraseIndex];
    heroTexto.style.opacity = 1;
  }, 600);
}

// Cambiar cada 4 segundos (igual que las imágenes)
setInterval(cambiarFrase, 4000);

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
