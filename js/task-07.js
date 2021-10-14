const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onSliderInput);

function onSliderInput(event) {
  const sliderValue = event.currentTarget.value;
  textEl.style.fontSize = `${sliderValue}px`;
}
