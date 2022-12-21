console.log(`Number of categories: ${document.querySelectorAll('li.item').length}`);
const messageEl = document.querySelectorAll('li.item');
messageEl.forEach((el) => {
console.log(`Category: ${el.querySelector('li.item h2').textContent}`);
const hh3 = el.querySelector('li>ul')
console.log(`Elements: ${hh3.querySelectorAll('li').length}`);
})