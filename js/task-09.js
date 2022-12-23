function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBody = document.querySelector('body');
const colorName = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

const colorBodyEl = () => {
  colorBody.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener('click', colorBodyEl)

