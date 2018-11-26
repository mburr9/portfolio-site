const hamburger = document.getElementById('hamburger');
const hamburgerSymbol = hamburger.textContent;
let i = 0;
hamburger.addEventListener('click', function() {
  if (i%2 === 0) {
    hamburger.textContent = 'x';
  } else {
    hamburger.textContent = hamburgerSymbol;
  }
  i += 1;
  const nav = document.getElementById('nav');
  nav.classList.toggle('visible');
});
