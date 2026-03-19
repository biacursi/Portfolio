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

// 4. SLIDER DE PROJETOS
function setupProjectSlider() {
  const sliderContainer = document.querySelector(
    "#secao-projetos .slider-container",
  );
  if (!sliderContainer) return;

  const track = sliderContainer.querySelector(".lista-projetos");
  const slides = Array.from(track.children);
  const nextButton = sliderContainer.querySelector(".next");
  const prevButton = sliderContainer.querySelector(".prev");
  const dotsNav = sliderContainer.querySelector(".slider-dots");

  let itemsPerScreen = 0;
  let pageCount = 0;
  let currentPage = 0;

  function initSlider() {
    itemsPerScreen = window.innerWidth > 768 ? 2 : 1;
    const totalItems = slides.length;

    if (totalItems <= itemsPerScreen) {
      if (nextButton) nextButton.style.display = "none";
      if (prevButton) prevButton.style.display = "none";
      if (dotsNav) dotsNav.style.display = "none";
      track.style.transform = "translateX(0px)";
      return;
    } else {
      if (dotsNav) dotsNav.style.display = "block";
    }

    pageCount = Math.ceil(totalItems / itemsPerScreen);
    currentPage = Math.min(currentPage, pageCount - 1);

    dotsNav.innerHTML = "";
    for (let i = 0; i < pageCount; i++) {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      dot.setAttribute("aria-label", `Ir para slide ${i + 1}`);
      dot.addEventListener("click", () => goToPage(i));
      dotsNav.appendChild(dot);
    }

    goToPage(currentPage);
  }

  function goToPage(pageIndex) {
    if (pageIndex < 0) pageIndex = pageCount - 1;
    if (pageIndex >= pageCount) pageIndex = 0;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseInt(window.getComputedStyle(track).gap) || 0;

    const itemsToMove = pageIndex * itemsPerScreen;
    const newTransform = itemsToMove * (slideWidth + gap);

    track.style.transform = `translateX(-${newTransform}px)`;
    currentPage = pageIndex;
    updateUI();
  }

  function updateUI() {
    const dots = Array.from(dotsNav.children);
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPage);
    });

    if (prevButton && nextButton) {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }

  nextButton.addEventListener("click", () => goToPage(currentPage + 1));
  prevButton.addEventListener("click", () => goToPage(currentPage - 1));

  window.addEventListener("resize", initSlider);

  initSlider();
}

document.addEventListener("DOMContentLoaded", setupProjectSlider);
