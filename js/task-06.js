const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let symbolsLength = event.currentTarget.value.length;
  const validSymbolsLength = Number(event.currentTarget.dataset.length);

  if (symbolsLength === validSymbolsLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else if (symbolsLength === 0) {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}
