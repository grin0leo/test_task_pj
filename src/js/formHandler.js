import { phoneMask } from "./maskNumber.js";
import { isValidPhoneNumber } from "./validationNumber.js";


export function setupFormHandler() {
    const phoneInput = document.getElementById("phone");
    const form = document.getElementById("promo-form");
    const message = document.getElementById("promo-success-message");
    const errorMessage = document.getElementById("promo-error-message");
    const errorMessageValid = document.getElementById("promo-error-message-valid");


    message.style.display = "none";
    errorMessage.style.display = "none";
    errorMessageValid.style.display = "none";

    phoneMask(phoneInput);

    // таймеры
    let messageTimer, errorTimer;


    //при нажатии кнопки отправить 
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        clearTimeout(messageTimer);
        clearTimeout(errorTimer);

        const phoneNumber = phoneInput.value;

        // проверка на валидацию 
        if (!isValidPhoneNumber(phoneInput.value)) {
            errorMessage.style.display = "none";
            errorMessageValid.style.display = "flex";
            message.style.display = "none";

            validationTimer = setTimeout(() => {
                errorMessageValid.style.display = "none";
            }, 3000);

            return;
        }


        // проверяю, есть ли этот номер в localStorage
        const usedPhoneNumbers = JSON.parse(localStorage.getItem("usedPhoneNumbers")) || [];

        if (usedPhoneNumbers.includes(phoneNumber)) {
            errorMessage.style.display = "flex";
            message.style.display = "none";

            phoneInput.value = "";
            errorTimer = setTimeout(() => {
                errorMessage.style.display = "none";
            }, 3000);

            return;
        }

        // добавляю номер в localStorage
        usedPhoneNumbers.push(phoneNumber);
        localStorage.setItem("usedPhoneNumbers", JSON.stringify(usedPhoneNumbers));


        errorMessage.style.display = "none";
        message.style.display = "flex";

        messageTimer = setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    });
}