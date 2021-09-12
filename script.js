const setColors = ['rgb(0, 0, 0)', 'rgb(35, 92, 68)', 'rgb(109, 41, 117)', 'rgb(117, 13, 16)'];
const pixelBoard = document.querySelector('#pixel-board');

// Cria a paleta de cores e preeche o backgroud com cada cor.
function createPaletteColors() {
  const paletteColor = document.querySelector('#color-palette');
  for (let index = 0; index < setColors.length; index += 1) {
    const createListColor = document.createElement('div');
    createListColor.style.backgroundColor = setColors[index];
    createListColor.classList.add('color');
    paletteColor.appendChild(createListColor);
  }
  // Define a primeira paleta da cor Preta como Selecionada.
  const selectPalette = document.querySelectorAll('.color');
  selectPalette[0].classList.add('selected');
}

// Chama a função para criar a paleta de cores.
createPaletteColors();

// Função que cria linha do box usando uma lista.
function createLine(lineColum) {
  for (let index = 0; index < lineColum; index += 1) {
    const createLineBoard = document.createElement('li');
    createLineBoard.style.backgroundColor = 'white';
    createLineBoard.classList.add('pixel');
    pixelBoard.appendChild(createLineBoard);
  }
}

// Função que cria colunas do box usando listas.
function createColum(lineColum) {
  for (let index = 0; index < lineColum; index += 1) {
    const createColumBoard = document.createElement('ul');
    createColumBoard.classList.add('colum-pixel');
    pixelBoard.appendChild(createColumBoard);
    // Chama a função cria linha definindo o parametro de quantidade de linhas a serem criadas.
    createLine(lineColum);
  }
}

// Chama a função para criar o box com valor inicial 5*5.
createColum(5);

// Função para remover todas as linhas do box.
function removeLine() {
  const selectAllLine = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectAllLine.length; index += 1) {
    pixelBoard.removeChild(selectAllLine[index]);
  }
}

// Função para remover todas as colunas do box.
function removeColum() {
  const selectAllColum = document.querySelectorAll('.colum-pixel');
  for (let index = 0; index < selectAllColum.length; index += 1) {
    pixelBoard.removeChild(selectAllColum[index]);
  }
}

//  Função que ao clicar recebe a cor da palheta selecionada.
function paintPixel() {
  const selectPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectPixels.length; index += 1) {
    selectPixels[index].addEventListener('click', () => {
      const pixelColor = document.querySelector('.selected').style.backgroundColor;
      selectPixels[index].style.backgroundColor = pixelColor;
    });
  }
}

// Função Seleciona a cor na palheta para preencher os quadrados.
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

paintPixel();

const selectButtonClear = document.querySelector('#clear-board');
selectButtonClear.addEventListener('click', () => {
  const selectPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectPixels.length; index += 1) {
    selectPixels[index].style.backgroundColor = 'white';
  }
});

const inputText = document.querySelector('#board-size');
const selectButtonBoard = document.querySelector('#generate-board');
let lineColum = 0;
selectButtonBoard.addEventListener('click', () => {
  if (inputText.value === '') {
    return alert('Board inválido!');
  }
  if (inputText.value < 5) {
    lineColum = 5;
  } else if (inputText.value > 50) {
    lineColum = 50;
  } else {
    lineColum = inputText.value;
  }
  removeLine();
  removeColum();
  createColum(lineColum);
  paintPixel();
});
