// Declaração de constantes e variáveis Globais.
const pixelBoard = document.querySelector('#pixel-board');
const inputText = document.querySelector('#board-size');
const selectButtonClear = document.querySelector('#clear-board');
const selectButtonBoard = document.querySelector('#generate-board');
let lineColum = 0;

// Função para geração de cores aleatóias.
function createColorRgb() {
  const color1 = (Math.floor(Math.random() * (1, 255 + 1)));
  const color2 = (Math.floor(Math.random() * (1, 255 + 1)));
  const color3 = (Math.floor(Math.random() * (1, 255 + 1)));
  return `rgb(${color1}, ${color2}, ${color3})`;
}

// Cria a paleta de cores e preeche o backgroud com cada cor.
function createPaletteColors() {
  const paletteColor = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    let color = 0;
    if (index === 0) {
      color = 'rgb(0, 0, 0)';
    } else {
      color = createColorRgb();
    }
    const createListColor = document.createElement('div');
    createListColor.style.backgroundColor = color;
    createListColor.classList.add('color');
    paletteColor.appendChild(createListColor);
  }
}

// Função que cria linha do box usando uma lista.
function createColum(colum) {
  for (let index = 0; index < colum; index += 1) {
    const createColumBoard = document.createElement('li');
    createColumBoard.style.backgroundColor = 'white';
    createColumBoard.classList.add('pixel');
    pixelBoard.appendChild(createColumBoard);
  }
}

// Função que cria colunas do box usando listas.
function createLine(line) {
  for (let index = 0; index < line; index += 1) {
    const createLineBoard = document.createElement('ul');
    createLineBoard.classList.add('colum-pixel');
    pixelBoard.appendChild(createLineBoard);
    // Chama a função cria linha definindo o parametro de quantidade de linhas a serem criadas.
    createColum(line);
  }
}

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

selectButtonClear.addEventListener('click', () => {
  const selectPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectPixels.length; index += 1) {
    selectPixels[index].style.backgroundColor = 'white';
  }
});

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
  createLine(lineColum);
  paintPixel();
});

// Função Seleciona a cor na palheta para preencher os pixels.
// Usei a propriedade onload para carregar após a chamadas das funções principais.
window.onload = () => {
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
};

// Chama a função para criar a paleta de cores.
createPaletteColors();
// Chama a função para criar o box com valor inicial 5*5.
createLine(5);
// Função para pintas os pixels.
paintPixel();
