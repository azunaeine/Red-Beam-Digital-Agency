document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu-container");
  const btnClose = document.querySelector(".btn-close");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("menu-hidden");
    btnClose.classList.toggle("hidden");
  });
});
