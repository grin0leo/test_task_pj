import './style.css'
import { setupFormHandler } from "./js/formHandler.js";







// TODO сделать валидацию номера, добавить номер введенный юзером в массив номеров в localStorage
// Номер отправлен, пользователь видит уведомление
// document.getElementById("promo-form").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const message = document.getElementById("promo-message");
//   message.hidden = false;
//   setTimeout(() => { message.hidden = true; }, 3000)
// });

// Валидация формы отправки номера + маска номера + succes/error message


document.addEventListener("DOMContentLoaded", function () {
  setupFormHandler();
});



// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
