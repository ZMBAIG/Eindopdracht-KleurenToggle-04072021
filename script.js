//declaration variables
const background = document.querySelector(".body-background");
const dropDownDiv = document.querySelector(".hamburger_dropdown");
const dropDownMenu = document.querySelector(".hamburger_menu");
const hamburger = document.querySelector(".hamburger_image");

//variables for background colors
const homeBackground = document.querySelector(".submenu_home");
const redBackground = document.querySelector(".submenu_red");
const orangeBackground = document.querySelector(".submenu_orange");
const purpleBackground = document.querySelector(".submenu_purple");
const greenBackground = document.querySelector(".submenu_green");

hamburger.addEventListener("mouseover", () => {
  dropDownMenu.classList.toggle("visible");
});

// changing background colors

homeBackground.addEventListener("click", () => {
  background.className = "submenu_home-background";
  dropDownMenu.classList.remove("visible");
});

redBackground.addEventListener("click", () => {
  background.className = "submenu_red-background";
  dropDownMenu.classList.remove("visible");
});

orangeBackground.addEventListener("click", () => {
  background.className = "submenu_orange-background";
  dropDownMenu.classList.remove("visible");
});

purpleBackground.addEventListener("click", () => {
  background.className = "submenu_purple-background";
  dropDownMenu.classList.remove("visible");
});

greenBackground.addEventListener("click", () => {
  background.className = "submenu_green-background";
  dropDownMenu.classList.remove("visible");
});
