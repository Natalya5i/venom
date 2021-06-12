const menuButton = document.querySelector(".menu-button");
const menuButton = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
 /*console.log("Вы кликнули на кнопку меню")*/
  menu.classlist.add("is-active");
})
menuCloseButton.addEventListener("click, () => {
  menu.classlist.remove("is-sctive");
  menu.CloseButton.classlist.remove("is-active");
})