// 1. BOTÃO VOLTAR AO TOPO
const backToTopButton = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. ANIMAÇÃO DE APARECER (INTERSECTION OBSERVER)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-on");
      } else {
        entry.target.classList.remove("show-on"); // Remove para animar de novo ao voltar
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".hidden-off").forEach((el) => observer.observe(el));

// 3. MENU HAMBÚRGUER E OVERLAY
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".menu-overlay");

// Função para abrir/fechar
const toggleMenu = () => {
  const isOpening = !navMenu.classList.contains("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = isOpening ? "hidden" : "initial";
};

// Função específica para FECHAR (limpa o blur na hora)
const closeMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "initial";
};

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Ao clicar em qualquer link do menu, ele fecha tudo IMEDIATAMENTE
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
