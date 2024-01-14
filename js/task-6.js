function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input[type="number"]');
numberInput.value = 1;

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const boxesElem = document.querySelector('#boxes');

createBtn.addEventListener('click', onBtnCreate);

function onBtnCreate() {
  const currentValue = Number(numberInput.value);

  if (1 <= currentValue && 100 >= currentValue) {
    createBoxes(currentValue);
  }

  let box = [];

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      box.push(
        `<div style="width: ${30 + 10 * i}px; height: ${
          30 + 10 * i
        }px; background-color: ${getRandomHexColor()}"></div>`
      );
    }
    return box;
  }

  boxesElem.insertAdjacentHTML('beforeend', box.join(''));
}

function destroyBoxes() {}
