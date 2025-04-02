import './style.css'
import { setupFormHandler } from "./js/formHandler.js";
import { modalLogick } from './js/modalChangeLocation.js';
import { scrollToTop } from './js/backToTop.js';


// прокрутка к началу страницы
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', scrollToTop);

// Валидация формы отправки номера + маска номера + succes/error message
document.addEventListener("DOMContentLoaded", function () {
  setupFormHandler();
  modalLogick()
});



