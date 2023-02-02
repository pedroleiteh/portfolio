const hamburgerButton = document.querySelector(".btn-mobile")
const navLinks = document.querySelectorAll("#nav-link")
const nav = document.querySelector('nav')

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  nav.classList.toggle('active')
  console.log("oi");
}

function hideMenu() {
  nav.classList.toggle('active')
}

navLinks.forEach(link => {
  link.addEventListener('click', hideMenu)
});

hamburgerButton.addEventListener('click', toggleMenu)
hamburgerButton.addEventListener('touchstart', toggleMenu)