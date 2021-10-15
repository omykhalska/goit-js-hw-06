const startSize = 56;
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = startSize + 'px';
inputEl.value = startSize;

inputEl.addEventListener('input', onSliderInput);

let sliderValue = 0;
function onSliderInput(event) {
  sliderValue = event.currentTarget.value;
  textEl.style.fontSize = sliderValue + 'px';
}
