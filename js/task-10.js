function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionInput = document.querySelector('input');
const collectionBtnCreate = document.querySelector('button');
const collectionBtnDestroy = document.querySelector('button+button');
const collectionEl = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = collectionInput.valueAsNumber;
  for (let i = 1; i <= amount; i += 1){
    let itemEl = document.createElement('div');
    itemEl.classList.add('item');
    let widthEl = 20 + 10 * i;
    let heightEl = 20 + 10 * i;
    itemEl.style.width = ''+ widthEl+'px';
    itemEl.style.height = '' + heightEl + 'px';
    itemEl.style.backgroundColor = getRandomHexColor();
    collectionEl.prepend(itemEl);
  }   
} 

const destroyBoxes = () => {
  let delEl = document.querySelectorAll('.item');
  delEl.forEach((el) => {
    el.remove();
  })
}

collectionBtnCreate.addEventListener("click", createBoxes);
collectionBtnDestroy.addEventListener("click", destroyBoxes);