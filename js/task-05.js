const userInput = document.querySelector('#name-input');
const userOutput = document.querySelector('#name-output');


const userInputEl = () => {
    //const value = userInput.value;
    
    if (userInput.value.length === 0) {
        userOutput.textContent = 'Anonymous'
    } else {
        userOutput.textContent = userInput.value;
    }
};
userInput.addEventListener('input', userInputEl)