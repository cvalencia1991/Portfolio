const contactForm = document.querySelector('.contact-form');
const secondaryHeader = document.querySelector('.secondary-header');
document.getElementById('Deploy_menu').addEventListener('click', () => {
  const hambuermenu = document.getElementById('mobile-menu');
  hambuermenu.style.display = 'block';
});
function closemenu() {
  const hambuermenu = document.getElementById('mobile-menu');
  hambuermenu.style.display = 'none';
}
document.getElementById('close-btn').addEventListener('click', closemenu);
const elements = document.getElementsByClassName('line_border');
const elementsarr = Array.from(elements);
elementsarr.forEach((Element) => {
  Element.addEventListener('click', closemenu);
});
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
window.addEventListener('scroll', () => {
  if (isElementInViewport(contactForm)) {
    contactForm.classList.add('slide-in');
  }
  if (isElementInViewport(secondaryHeader)) {
    secondaryHeader.classList.add('slide-in');
  }
});
