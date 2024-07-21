// Animation for header background color change using GSAP
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = "#051129";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Animation for typed text using Typed.js
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Content Creator",
    "Python Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Disable right click menu in the webpage
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// Animation for header background color change using GSAP
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = "#051129";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Animation for typed text using Typed.js
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Content Creator",
    "Python Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.navbar');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }
});

