const userInput = document.querySelector('#validation-input');

const userInputBlur = () => {    
    //console.log(userInput.value.length);
    if (Number(userInput.getAttribute('data-length')) === userInput.value.length) {
        //console.log('true'); 
        userInput.classList.add('valid');                   
    } else if (Number(userInput.getAttribute('data-length')) !== userInput.value.length) {
        //console.log('false');
        userInput.classList.add('invalid');   
    }
};

const userInputFocus = () => {
    userInput.classList.remove('valid');
    userInput.classList.remove('invalid');
}

userInput.addEventListener('blur', userInputBlur);
userInput.addEventListener('focus', userInputFocus);
