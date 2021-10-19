const boxesContainer = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numberEl = document.querySelector('[type="number"]');
let boxMarkup = [];

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function newEl(el, boxDimension) {
  const box = document.createElement(el);
  box.classList.add('box');
  box.style.width = boxDimension + 'px';
  box.style.height = boxDimension + 'px';
  box.style.backgroundColor = getRandomHexColor();
  if (!box.style.backgroundColor) {
    box.style.border = '1px solid lightblue';
  }

  boxMarkup.push(box);
}

function createBoxes() {
  destroyBoxes();
  let boxDimension = 30;
  for (let i = 1; i <= numberEl.value; i += 1) {
    newEl('div', boxDimension);
    boxDimension += 10;
  }
  boxesContainer.append(...boxMarkup);
}

function destroyBoxes(fl = false) {
  boxMarkup = [];
  boxesContainer.innerHTML = '';
  !fl ? null : (numberEl.value = '');
}
