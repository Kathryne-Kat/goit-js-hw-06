const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const createListEl = (arr) =>
  arr.map((el) => {
    let itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = el;
    return itemEl;  
  });

const showListEl = (arr) => listEl.prepend(...createListEl(arr));
showListEl(ingredients);