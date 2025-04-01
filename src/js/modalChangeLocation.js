
export function modalLogick() {
    const cities = [
        "Воронеж", "Москва", "Ростов-на-Дону", "Иркутск", "Н. Новгород",
        "Санкт-Петербург", "Кемерово", "Новосибирск", "Челябинск", "Красноярск", "Пермь"
    ];

    const overlayElement = document.getElementById("overlay");
    const locationContainer = document.querySelector(".header__location"); // куда вставляю модальное окно

    const selectedCity = document.getElementById("selected-city");

    const template = document.querySelector("template");



    let confirmModal = null;



    // подтягию с localstorage выбранный город 
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
        closeConfirmModal()
        selectedCity.textContent = savedCity;
    } else {
        // eсли города нет в localStorage, открываю окно через 2 секунды после захода на сайт
        setTimeout(() => {
            openConfirmModal();
        }, 2000);
    }


    // открытие подтверждающего модального окна
    function openConfirmModal() {
        if (!confirmModal) {
            const modalClone = template.content.cloneNode(true);
            locationContainer.appendChild(modalClone);
            confirmModal = document.getElementById("location-confirm-modal");

            const confirmButton = document.getElementById("confirm-location-button");

            confirmButton.addEventListener("click", closeConfirmModal);
            const modalChangeButton = document.getElementById("modal-change-location-button");

            confirmButton.addEventListener("click", () => {
                selectCity('Ростов-на-Дону', confirmModal);
                closeConfirmModal();
            });
            modalChangeButton.addEventListener("click", openCityModal);


        }

        confirmModal.showModal();
        overlayElement.style.display = "block";
    }
    function closeConfirmModal() {
        if (confirmModal) {
            confirmModal.close();
            confirmModal.remove();
            confirmModal = null;
            overlayElement.style.display = "none";
        }
    }




    // работает
    // открытие окна с выбором города 
    function openCityModal() {
        closeConfirmModal(); // закрываю окно подтверждения
        overlayElement.style.display = "none";


        const template = document.getElementById("city-modal-template");
        const cityModal = template.content.cloneNode(true);
        document.body.appendChild(cityModal);


        const cityList = document.getElementById("city-list");
        const modalElement = document.getElementById("change-location-modal");

        // отрисовываю кнопки 
        if (!cityList.hasChildNodes()) {
            cities.forEach(city => {
                const button = document.createElement("button");
                button.classList.add("change-location-modal__button");
                button.textContent = city;
                button.addEventListener("click", () => selectCity(city, modalElement));
                cityList.appendChild(button);
            });
        }

        // ФИКС ВЫСОТЫ ВСПЛЫВАЮЩЕГО ОКНА ОКНА 
        const header = document.querySelector("header");
        const headerHeight = header.getBoundingClientRect().height;

        modalElement.style.top = `${headerHeight}px`;
        modalElement.style.height = `calc(100vh - ${headerHeight}px)`;

        modalElement.showModal();
    }

    // выбор города и сохранение в localStorage
    function selectCity(city, modal) {
        selectedCity.textContent = city;
        localStorage.setItem("selectedCity", city);

        modal.close();
        modal.remove();
        overlayElement.style.display = "none";
    }


    const locationButton = document.getElementById("change-location-button");
    if (locationButton) {
        locationButton.addEventListener("click", openCityModal);
    }

}