const startSize = 56;
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = startSize + 'px';
inputEl.setAttribute('value', startSize);

inputEl.addEventListener('input', onSliderInput);

function onSliderInput(event) {
  const sliderValue = event.currentTarget.value;
  textEl.style.fontSize = sliderValue + 'px';
  inputEl.removeAttribute('value');
}
