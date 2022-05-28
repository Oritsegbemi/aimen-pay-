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
