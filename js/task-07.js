const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

//Не зв'язувала, а присвоїла властивість, якої в html за замовчуванням не було
//тому повзунок завжди значення мав з центру
//тепер від початку
fontSizeControl.value = 0;

fontSizeControl.addEventListener('input', changeFontSize)

function changeFontSize(event) {
  textEl.style.fontSize = event.target.value + 'px';
}


