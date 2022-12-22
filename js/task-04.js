const buttonDec=document.querySelector('button');
const buttonInc=document.querySelector('span+button');
const counter= document.querySelector('#value');

let counterValue = 0;

const buttonClickDec = () => {
    counterValue -=1;
    counter.innerHTML = counterValue;
};
buttonDec.addEventListener("click", buttonClickDec)

const buttonClickInc = () => {
    counterValue +=1;
    counter.innerHTML = counterValue;
};
buttonInc.addEventListener("click", buttonClickInc)