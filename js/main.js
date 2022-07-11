// -----> select
const selectList = document.querySelector(".header-right__list");
const selectBtn = document.querySelector(".header-right__select-btn");

// -----> hamburger
const headerList = document.querySelector(".header__nav-list");
const headerBtnMenu = document.querySelector(".header__menu");

// -----> content-1
const btn1 = document.querySelector(".features__wrapper1-btn");
const text1 = document.querySelector(".features__wrapper1-text");

// -----> content-2
const btn2 = document.querySelector(".features__wrapper2-btn");
const text2 = document.querySelector(".features__wrapper2-text");

// -----> content-3
const btn3 = document.querySelector(".features__wrapper3-btn");
const text3 = document.querySelector(".features__wrapper3-text");

// -----> Select 

selectBtn.addEventListener("click", () => {
    
    selectBtn.classList.toggle("header-right__select-btn--active");

    if (!selectList.matches(".header-right__list-opened")){
        selectList.classList.add("header-right__list-opened");
    } else {
        selectList.classList.remove("header-right__list-opened");
    }
});

// -----> Hamburger

headerBtnMenu.addEventListener("click", () => {
    headerList.classList.toggle("header__nav-list--opened");
});

// -----> Contents

btn1.addEventListener("click", () => {
    text1.classList.toggle("features__wrapper1-text--opened");
    text1.style.transition = "all .3s ease-in-out";
    btn1.classList.toggle("features__wrapper1-btn--active");
});

btn2.addEventListener("click", () => {
    text2.classList.toggle("features__wrapper2-text--opened");
    text2.style.transition = "all .3s ease-in-out";
    btn2.classList.toggle("features__wrapper2-btn--active");
});

btn3.addEventListener("click", () => {
    text3.classList.toggle("features__wrapper3-text--opened");
    text3.style.transition = "all .3s ease-in-out";
    btn3.classList.toggle("features__wrapper3-btn--active");
});
