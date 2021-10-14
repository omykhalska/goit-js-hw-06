const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let symbolsLength = event.currentTarget.value.length;
  const validSymbolsLength = event.currentTarget.dataset.length;

  if (symbolsLength != validSymbolsLength) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  } else {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  }
}
