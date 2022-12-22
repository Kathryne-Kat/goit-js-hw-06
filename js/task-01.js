console.log(`Number of categories: ${document.querySelectorAll('li.item').length}`);
const messageEl = document.querySelectorAll('li.item');
messageEl.forEach((el) => {
console.log(`Category: ${el.querySelector('li.item h2').textContent}`);
console.log(`Elements: ${el.querySelector('li>ul').querySelectorAll('li').length}`);
})