import { phoneMask } from "./maskNumber.js";
import { isValidPhoneNumber } from "./validationNumber.js";


//TODO добавить ошибку валидации 
export function setupFormHandler() {
    const phoneInput = document.getElementById("phone");
    const phoneNumber = phoneInput.value;
    const form = document.getElementById("promo-form");
    const message = document.getElementById("promo-success-message");
    const errorMessage = document.getElementById("promo-error-message");

    phoneMask(phoneInput);


    //при нажатии кнопки отправить 
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // проверка на валидацию 
        if (!isValidPhoneNumber(phoneInput.value)) {
            phoneInput.classList.add("error");
            // errorMessage.hidden = false;
            return;
        }

        phoneInput.classList.remove("error");
        phoneInput.classList.add("success");

        // проверяю, есть ли этот номер в localStorage
        const usedPhoneNumbers = JSON.parse(localStorage.getItem("usedPhoneNumbers")) || [];

        if (usedPhoneNumbers.includes(phoneNumber)) {
            phoneInput.classList.add("error");
            errorMessage.hidden = false;
            return;
        }

        // добавляю номер в localStorage
        usedPhoneNumbers.push(phoneNumber);
        localStorage.setItem("usedPhoneNumbers", JSON.stringify(usedPhoneNumbers));


        errorMessage.hidden = true;
        message.hidden = false;

        // setTimeout(() => {
        //     message.hidden = true;
        // }, 3000);
    });
}
