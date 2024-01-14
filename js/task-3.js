const inputElem = document.querySelector('#name-input');

inputElem.addEventListener('input', onInputChange);

function onInputChange() {
  const inputText = inputElem.value.trim();
  const titleName = document.querySelector('#name-output');

  titleName.textContent = inputText === '' ? 'Anonymous' : inputText;
}
