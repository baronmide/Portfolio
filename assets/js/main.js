/* =============== MENU SHOW Y HIDDEN ============= */
const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*========= MENU SHOW ======*/
/* validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*====== MENU HIDDEN ======*/
/* validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============ REMOVE MENU MOBILE ============= */
const navlink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navlink.forEach((n) => n.addEventListener("click", linkAction));
