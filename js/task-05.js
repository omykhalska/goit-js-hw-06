const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const name = event.currentTarget.value;
  if (name !== '') {
    output.textContent = name;
  } else {
    output.textContent = 'Anonymous';
  }
});
