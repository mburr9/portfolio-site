const hamburger = document.getElementById('hamburger');
const hamburgerSymbol = hamburger.textContent;
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
  if (hamburger.textContent === hamburgerSymbol) {
    hamburger.textContent = 'x';
  } else {
    hamburger.textContent = hamburgerSymbol;
  }
  nav.classList.toggle('visible');
});

nav.addEventListener('click', function() {
  nav.classList.toggle('visible');
  hamburger.textContent = hamburgerSymbol;
});
