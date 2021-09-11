const setColors = ['rgb(0, 0, 0)', 'rgb(35, 92, 68)', 'rgb(109, 41, 117)', 'rgb(117, 13, 16)'];

function createPaletteColors() {
  const paletteColor = document.querySelector('#color-palette');
  for (let index = 0; index < setColors.length; index += 1) {
    const createListColor = document.createElement('div');
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

const selectPalette = document.querySelectorAll('.color');
selectPalette[0].classList.add('selected');
for (let index = 0; index < selectPalette.length; index += 1) {
  selectPalette[index].addEventListener('click', (event) => {
    for (index = 0; index < selectPalette.length; index += 1) {
      selectPalette[index].classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

const selectPixels = document.querySelectorAll('.pixel');
for (let index = 0; index < selectPixels.length; index += 1) {
  selectPixels[index].addEventListener('click', () => {
    const pixelColor = document.querySelector('.selected').style.backgroundColor;
    selectPixels[index].style.backgroundColor = pixelColor;
  });
}

const selectButton = document.querySelector('#clear-board');
selectButton.addEventListener('click', () => {
  const colorSelect = document.querySelector('.selected').style.backgroundColor;
  for (let index = 0; index < selectPixels.length; index += 1) {
    if (selectPixels[index].style.backgroundColor === colorSelect) {
      selectPixels[index].style.backgroundColor = 'white';
    }
  }
});
