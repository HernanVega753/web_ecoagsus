// Carrusel de portada (hero)
const hero = document.getElementById("hero");
const heroImages = [
  "img/portada1.avif",
  "img/portada0.avif",
  "img/portada2.avif",
  "img/portada3.avif",
  "img/portada4.avif",
];
let heroIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}
changeBackground();
setInterval(changeBackground, 3000);

// Carrusel de servicios (solo si usás el carrusel horizontal con ID "carousel-track")
const track = document.getElementById("carousel-track");
if (track) {
  const cards = document.querySelectorAll(".servicio-card");
  let serviceIndex = 0;

  function slideServices() {
    serviceIndex = (serviceIndex + 1) % cards.length;
    track.style.transform = `translateX(-${serviceIndex * 100}%)`;
  }

  setInterval(slideServices, 4000);
}

// Filtro de servicios
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
// Tabs de servicios dinámicos
const tabs = document.querySelectorAll(".tab-btn");
const contenidos = document.querySelectorAll(".servicio-detalle");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Activar botón
    document.querySelector(".tab-btn.activo")?.classList.remove("activo");
    tab.classList.add("activo");

    // Mostrar contenido correspondiente
    const target = tab.getAttribute("data-target");
    contenidos.forEach((content) => {
      content.classList.remove("activo");
      if (content.id === target) {
        content.classList.add("activo");
      }
    });
  });
});
