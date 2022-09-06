function deploymenu() {
  const hambuermenu = document.getElementById('mobile-menu');
  hambuermenu.style.display = 'block';
}
document.getElementById('Deploy_menu').addEventListener('click', deploymenu);

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
