const menuOpen = document.getElementById('menu_open');
const menuClose = document.getElementById('menu_close');
const menuMobil = document.getElementById('menu_mobile');

const nav = document.getElementById('nav');


let isMenuOpen = false;

function toogleMenu() {
  if (isMenuOpen) {
    menuOpen.classList.remove('hide');
    menuClose.classList.add('hide');
  }

  else {
    menuOpen.classList.add('hide');
    menuClose.classList.remove('hide');
  }

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    nav.style.display = 'block';
  }

  else {
    nav.style.display = 'none';
  }
}

menuMobil.addEventListener('click', toogleMenu);

