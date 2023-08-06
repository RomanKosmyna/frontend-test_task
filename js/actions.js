/* Choose a present in second section */
const choosePresent = (index) => {
    const chosenPresentElement = document.querySelectorAll(".chosen_present_section");
    const choosePresentBtn = document.querySelectorAll(".choose_present_btn");

    for (let i = 0; i < chosenPresentElement.length; i++) {
        chosenPresentElement[i].style.display = i === index ? "flex" : "none";
        choosePresentBtn[i].style.border = i === index ? "5px solid #FFFFFF" : "transparent";
        choosePresentBtn[i].style.background = i === index ? "transparent" : "#FFFFFF";
        choosePresentBtn[i].classList.toggle("exclude_hover", i !== index);
    }
};
/* Toggle burger menu */
const toggleBurgerMenu = () => {
    const burgerMenuElement = document.querySelector("#burger_menu");
    const burgerMenuBarElement = document.querySelectorAll(".burger_menu_bar");
    const isBurgerMenuActive = burgerMenuElement.classList.contains("is-open");
    const desktopNavElement = document.querySelector(".desktop_navigation_list");
    const logoElement = document.querySelector("#logo");

    burgerMenuElement.classList.toggle("is-open");

    burgerMenuBarElement.forEach((bar, index) => {
        if (index === 1) {
            bar.style.opacity = isBurgerMenuActive ? "1" : "0";
        } else {
            bar.classList.toggle("active", !isBurgerMenuActive);
        }
    });

    desktopNavElement.classList.toggle("is-open");

    if (window.innerWidth < 1000) {
        logoElement.classList.toggle("is-open");
    } else {
        logoElement.classList.remove("is-open");
    }
};
/* Close a burger menu after link is clicked */
const handleBurgerMenuAfterLink = () => {
    const desktopNavElement = document.querySelector(".desktop_navigation_list");
    const burgerMenuBarElement = document.querySelectorAll(".burger_menu_bar");
    const burgerMenuElement = document.querySelector("#burger_menu");
    const logoElement = document.querySelector("#logo");

    desktopNavElement.classList.toggle("is-open");
    burgerMenuElement.classList.remove("is-open");

    if (window.innerWidth <= 1000) {
        logoElement.classList.remove("is-open");
    }

    burgerMenuBarElement.forEach((bar, index) => {
        if (index === 1) {
            bar.style.opacity = "1";
        } else {
            bar.classList.remove("active");
        }
    });
};
/* Toggles options in custom select */
const toggleOptions = () => {
    const selectList = document.getElementById('selectList');
    selectList.classList.toggle('hidden');
}
/* Selects an option in custom select */
const selectOption = (option) => {
    const selectedValue = document.getElementById('selectedValue');
    selectedValue.textContent = option;
    toggleOptions();
}
/* Checks for input value in third section's form */
const checkInputValue = (id) => {
    const inputElement = document.getElementById(id);
    const labelElement = document.querySelector(`label[for="${inputElement.id}"]`);

    if (inputElement.value.length !== 0) {
        labelElement.classList.add("active_input");
    } else {
        labelElement.classList.remove("active_input");
    }
};