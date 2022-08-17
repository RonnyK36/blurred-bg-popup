const closeBtnEl = document.querySelector(".close-icon");
const joinBtnEl = document.querySelector('.btn');
const mainContainerEl = document.querySelector('.main-container');
const popupContainerEl = document.querySelector(".popup-container");

joinBtnEl.addEventListener('click', () => {
    mainContainerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeBtnEl.addEventListener("click", () => {
    mainContainerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});