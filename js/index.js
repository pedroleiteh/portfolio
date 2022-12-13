const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activate")
  navMenu.classList.toggle("activate")
  console.log("ola");
})