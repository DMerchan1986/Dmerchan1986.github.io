document.addEventListener("DOMContentLoaded", function() {
  // Fade in para imágenes
  document.querySelectorAll("img").forEach(function(img) {
    function showImg() { img.classList.add("loaded"); }
    img.addEventListener("load", showImg);
    if (img.complete) showImg();
  });

  // Fade in para secciones y otros elementos
  function revealOnScroll() {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('fade-in-visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Menú responsive
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  if(menuToggle && navUl) {
    menuToggle.addEventListener('click', function() {
      navUl.classList.toggle('slide');
    });
  }
});