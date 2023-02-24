let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const shownCounterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', handleDecrementBtnClick);
incrementBtn.addEventListener('click', handleIncrementBtnClick);

function handleDecrementBtnClick(event) {
  shownCounterValue.textContent = --counterValue;
  console.log((counterValue));
};

function handleIncrementBtnClick(event) {
  shownCounterValue.textContent = ++counterValue;
  console.log((counterValue));
};



