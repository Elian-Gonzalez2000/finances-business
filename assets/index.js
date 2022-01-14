import hamburguerMenu from "./js/hamburguer_menu.js";
import sliderResponsive from "./js/slider.js";
import intervalCount from "./js/interval_count.js";
import scroll_change_menu from "./js/scroll_change_menu.js";
import showTabs from "./js/show_tabs.js";
import preloader from "./js/preloader.js";
import contactFormValidation from "./js/contact_form_validation.js";
import owlCarrusel from "./js/owl-carrusel.js";

const d = document;

document.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".nav", ".menu-btn", ".nav ul li a");
  sliderResponsive();
  scroll_change_menu(".header", ".header ul li a");
  showTabs();
  contactFormValidation();
  owlCarrusel();
  intervalCount(".count-area", ".count-area [data-count-number]");
});

preloader();
