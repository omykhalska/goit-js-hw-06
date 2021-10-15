const boxesContainer = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numberEl = document.querySelector('[type="number"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = numberEl.value;
  let counter = 30;
  let boxMarkup = [];
  for (let i = 1; i <= amount; i += 1) {
    if (i !== 1) {
      counter += 10;
    }
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = counter + 'px';
    box.style.height = counter + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxMarkup.push(box);
  }
  boxesContainer.append(...boxMarkup);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  numberEl.value = '';
}
