const fontSizeControl = document.querySelector('#font-size-control');
const textControl = document.querySelector('#text');

fontSizeControl.value = 36;

textControl.style.fontSize = fontSizeControl.value + 'px';

const fontSizeControlEl = () => {     
    textControl.style.fontSize = fontSizeControl.value + 'px';
};

fontSizeControl.addEventListener('input', fontSizeControlEl);

