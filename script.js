const setColors = ['#000000', '#235C44', '#6D2975', '#750D10'];

function createPaletteColors() {
  const paletteColor = document.querySelector('#color-palette');
  for (let index = 0; index < setColors.length; index += 1) {
    const createListColor = document.createElement('li');
    createListColor.style.backgroundColor = setColors[index];
    createListColor.classList.add('color');
    paletteColor.appendChild(createListColor);
  }
}

createPaletteColors();

function createLine() {
  const lineColum = 5;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < lineColum; index += 1) {
    const createLineBoard = document.createElement('li');
    createLineBoard.style.backgroundColor = 'white';
    createLineBoard.classList.add('pixel');
    pixelBoard.appendChild(createLineBoard);
  }
}

function createColum() {
  const lineColum = 5;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < lineColum; index += 1) {
    const createColumBoard = document.createElement('ul');
    createColumBoard.classList.add('colum-pixel');
    pixelBoard.appendChild(createColumBoard);
    createLine();
  }
}

createColum();
