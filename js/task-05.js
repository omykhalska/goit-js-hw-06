const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const name = event.currentTarget.value;
  const clearedName = name.trim();

  if (clearedName !== '') {
    output.textContent = clearedName;
  } else {
    output.textContent = 'Anonymous';
  }
});
