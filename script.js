const setColors = ['#D16630', '#235C44', '#6D2975', '#750D10'];

function createPaletteColors() {
  const paletteColor = document.querySelector('.palettes');
  for (let index = 0; index < setColors.length; index += 1) {
    const createListColor = document.createElement('li');
    createListColor.style.backgroundColor = setColors[index];
    createListColor.classList.add('color');
    paletteColor.appendChild(createListColor);
  }
}

createPaletteColors();
