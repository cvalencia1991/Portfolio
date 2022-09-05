/* eslint-disable no-use-before-define */
document.getElementById('Deploy_menu').addEventListener('click', deploying_menu);
// eslint-disable-next-line camelcase
function deploying_menu() {
  const hambuermenu = document.getElementById('mobile-menu');
  hambuermenu.style.display = 'block';
}
/* eslint-disable no-use-before-define */
document.getElementById('close-btn').addEventListener('click', closemenu);
// eslint-disable-next-line camelcase
function closemenu() {
  const hambuermenu = document.getElementById('mobile-menu');
  hambuermenu.style.display = 'none';
}

const elements = document.getElementsByClassName('line_border');
// eslint-disable-next-line camelcase
const elements_array = Array.from(elements);
elements_array.forEach((Element) => {
  Element.addEventListener('click', closemenu);
});
