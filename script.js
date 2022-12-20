const hamBurger = document.querySelector('.mobile-nav');
const cellphoneNav = document.querySelector('.cellphone-nav');
const iconHamburger = document.querySelector('.mobile-nav-icon');
const hamburgerNavLinks = document.querySelectorAll('.nav-link');
function displayNav() {
  cellphoneNav.classList.toggle('active');
  hamBurger.classList.toggle('HamBurger-hide');
}
function removeNav() {
  cellphoneNav.classList.remove('active');
  hamBurger.classList.remove('HamBurger-hide');
}

hamBurger.addEventListener('click', displayNav);
iconHamburger.addEventListener('click', removeNav);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < hamburgerNavLinks.length; i++) {
  hamburgerNavLinks[i].addEventListener('click', removeNav);
}
