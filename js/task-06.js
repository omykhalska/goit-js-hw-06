const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const symbolsLength = event.currentTarget.value.length;
  const validSymbolsLength = Number(event.currentTarget.dataset.length);

  if (symbolsLength === validSymbolsLength) {
    textInput.classList.add('valid');
    textInput.classList.contains('invalid') &&
      textInput.classList.remove('invalid');
  } else if (symbolsLength === 0) {
    textInput.classList.contains('valid') &&
      textInput.classList.remove('valid');
    textInput.classList.contains('invalid') &&
      textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.contains('valid') &&
      textInput.classList.remove('valid');
  }
}
