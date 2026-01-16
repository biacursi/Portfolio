<div align="center">
  <img src="https://img.shields.io/badge/Portfólio-Pessoal-8A2BE2?style=for-the-badge" alt="Badge Portfólio" />
  <br />
  <br />

  # 🚀 Portfólio Pessoal | Bianca Cursi

  <p align="center">
    Uma experiência web estática, responsiva e acessível, desenhada para apresentar minha jornada em Front-End.
    <br />
    <a href="https://biacursi.github.io/Portfolio"><strong>🌐 Ver Projeto Online »</strong></a>
    <br />
    <br />
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-estrutura">Estrutura</a> •
    <a href="#-instalação">Como Rodar</a>
  </p>
</div>

---

## 🎨 Sobre o Projeto

Este repositório hospeda meu portfólio pessoal construído **do zero**. O objetivo principal não foi apenas mostrar meus projetos, mas demonstrar domínio nos fundamentos do desenvolvimento web moderno: **HTML Semântico**, **Arquitetura CSS** e **Design Responsivo**.

> **Nota de Design:** O layout foi pensado seguindo princípios de UI, com foco na legibilidade (tipografia Montserrat) e micro-interações sutis.

### ✨ Destaques de UI/UX

* 📱 **Totalmente Responsivo:** Layout fluido que se adapta de desktops wide a dispositivos móveis (Mobile First mindset).
* 🧱 **CSS Modular:** Adeus arquivos gigantes! O estilo foi componentizado (`header`, `main`, `footer`) para facilitar a escala.
* ♿ **Acessibilidade (a11y):** Uso rigoroso de tags semânticas (`<nav>`, `<main>`, `<footer>`, `<section>`) para melhor SEO e leitura por screen readers.
* ✨ **Micro-interações:** Efeitos de `hover` e transições suaves para uma navegação mais orgânica.

---

## 🛠 Tecnologias

<div align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Flexbox-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" />
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white" />
</div>

* **Tipografia:** [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts).
* **Ícones:** Font Awesome.
* **Metodologia:** BEM (Block Element Modifier) *[Opcional: adicione se você usou]* ou CSS Modular.

---

## 📂 Arquitetura de Pastas

A organização foi pensada para manter o código limpo e escalável:

```bash
portfolio-bianca/
│
├── 📄 index.html        # Markup semântico principal
├── 📄 reset.css         # Normalização entre navegadores
│
├── 📁 css/              # Estilização Modular
│   ├── 📄 header.css    # Navbar e Hero section
│   ├── 📄 main.css      # Conteúdo, grids e seções
│   ├── 📄 footer.css    # Rodapé e contatos
│   └── 📄 responsive.css # Media Queries centralizadas
│
└── 📁 img/              # Assets otimizados
    ├── 🖼️ bianca.jpeg
    ├── 🖼️ tech-icons/
    └── ...
