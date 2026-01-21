const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (
    navMobile.classList.contains('active') &&
    !navMobile.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMobile.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    hamburger.classList.remove('open');
  });
});
