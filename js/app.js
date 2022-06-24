"use-strict";

const links = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger__menu");
const close = document.querySelector(".bi-x-container");
// const links = list.getElementsByTagName("a");

hamburger.addEventListener("click", function () {
  links.style.display = "block";
});

close.addEventListener("click", function () {
  links.style.display = "none";
});

// function addActiveToLinks() {
//   links.forEach((element) => {
//     element.addEventListener("click", function (e) {
//       element.classList.remove("link-active");
//     });
//   });
// }
// addActiveToLinks();

// ********************* DARK THEME **************************
let body = document.querySelector("body");
const darkTheme = document.querySelector(".comp-img-light");
const lightTheme = document.querySelector(".comp-img-dark");
const changeLogo = document.querySelector("header");
var theme = "";

const changeTheme = function (theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    changeLogo.classList.add("display");
  } else {
    body.classList.remove("dark");
    changeLogo.classList.remove("display");
  }
};

darkTheme.addEventListener("click", function () {
  theme = "dark";
  changeTheme(theme);
  localStorage.setItem("class", theme);
});

lightTheme.addEventListener("click", function () {
  theme = "";
  changeTheme(theme);
  localStorage.setItem("class", "light");
});

theme = localStorage.getItem("class");
changeTheme(theme);
