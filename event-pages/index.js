const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-links");

menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("menu-open");

  e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
  }
});
