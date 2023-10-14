const toggleBtn = document.querySelector(".toggle_button")
const toggleBtnIcon = document.querySelector(".toggle_button i")
const dropDownMenu = document.querySelector(".dropdown_menu")
const navbarHr = document.querySelector("#navbar-hr")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    navbarHr.style.display = isOpen ? "none" : "block";

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}