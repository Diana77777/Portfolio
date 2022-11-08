const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu");
close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const subtitles = document.querySelectorAll(".scroll__subtitle"),
  dividers = document.querySelectorAll(".scroll__divider span");

subtitles.forEach((item) => {});
