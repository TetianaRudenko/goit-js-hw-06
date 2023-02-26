const changeColorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('span.color');

changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = document.body.style.backgroundColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
