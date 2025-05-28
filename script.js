document.addEventListener("DOMContentLoaded",
// Animación fade-in para imágenes y secciones
document.addEventListener("DOMContentLoaded", function() {
  // Animación para imágenes (aparecen suavemente)
  document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("load", function() {
      img.classList.add("loaded");
    });
    // Si ya está cargada (por caché), agrega la clase directamente
    if (img.complete) {
      img.classList.add("loaded");
    }
  });

  // Animación para secciones con la clase 'fade-in' al hacer scroll
  function revealOnScroll() {
    const fadeEls = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    fadeEls.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        el.classList.add('fade-in-visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Ejecuta al cargar la página
});

// (Opcional) Botón de volver arriba si lo tienes en tu HTML
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// (Opcional) Botón modo oscuro si lo tienes en tu HTML
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });
}