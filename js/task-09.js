function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

buttonEl.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
