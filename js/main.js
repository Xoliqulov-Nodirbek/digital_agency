const selectList = document.querySelector(".header-right__list");
const selectBtn = document.querySelector(".header-right__select-btn");

// -----> Select 

selectBtn.addEventListener("click", () => {
    
    if (!selectBtn.matches("header-right__select-btn--active")){
        selectBtn.classList.add("header-right__select-btn--active");
    } else {
        selectBtn.classList.remove("header-right__select-btn--active");
    }

    if (!selectList.matches(".header-right__list-opened")){
        selectList.classList.add("header-right__list-opened");
    } else {
        selectList.classList.remove("header-right__list-opened");
    }
});