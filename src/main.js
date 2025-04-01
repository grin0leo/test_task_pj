import './style.css'
import { setupFormHandler } from "./js/formHandler.js";
import { modalLogick } from './js/modalChangeLocation.js';




// Валидация формы отправки номера + маска номера + succes/error message


document.addEventListener("DOMContentLoaded", function () {
  setupFormHandler();
  modalLogick()
});



