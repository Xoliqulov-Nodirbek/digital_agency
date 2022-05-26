const selectList = document.querySelector(".header-right__list");
const selectBtn = document.querySelector(".header-right__select-btn");

const headerList = document.querySelector(".header__nav-list");
const headerBtnMenu = document.querySelector(".header__menu");

// -----> Select 

selectBtn.addEventListener("click", () => {
    
    selectBtn.classList.toggle("header-right__select-btn--active");

    if (!selectList.matches(".header-right__list-opened")){
        selectList.classList.add("header-right__list-opened");
    } else {
        selectList.classList.remove("header-right__list-opened");
    }
});

headerBtnMenu.addEventListener("click", () => {
    headerList.classList.toggle("header__nav-list--opened");
})