
const inputEl = document.querySelector('#validation-input');
console.log(inputEl)

inputEl.addEventListener('blur', blurColorOfBorder);

function blurColorOfBorder(event) {
    
const inputDataLength = Number(inputEl.dataset.length);
    const inputValueLength = Number(inputEl.value.trim().length);

    if (inputValueLength === inputDataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};



