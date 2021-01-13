let is_visible_popup = true;
let popup = document.querySelector(".popup");

let contacts_button = document.querySelector(".contacts");
let cross_popup_button = document.querySelector(".popup .cross");

function changePopupVisibility() {
    popup.style.visibility = is_visible_popup ? "visible" : "hidden";
    is_visible_popup ^= true;
}

contacts_button.addEventListener("click", function (event) {
    event.stopPropagation();
    changePopupVisibility();
});

cross_popup_button.addEventListener("click", function (event) {
    event.stopPropagation();
    changePopupVisibility();
});

popup.addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("click", function () {
    is_visible_popup = false;
    changePopupVisibility();
});