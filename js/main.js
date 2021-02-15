let navIcon = document.getElementById("navOpen");
let navClose = document.getElementById("navClose");
let navMenu = document.getElementById("navMenu");
let menuLinks = document.getElementById("navLinks");
let hero = document.getElementById("hero");

navIcon.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  navLinks.classList.remove("hidden");
  hero.classList.remove("hero");
  hero.classList.add("hidden");
  navIcon.classList.add("hidden");
  navIcon.classList.remove("nav__icon");
  navClose.classList.remove("hidden");
  navClose.classList.add("nav__icon");
});

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  hero.classList.remove("hidden");
  hero.classList.add("hero");
  navClose.classList.add("hidden");
  navClose.classList.remove("nav__icon");
  navIcon.classList.remove("hidden");
  navIcon.classList.add("nav__icon");
});
