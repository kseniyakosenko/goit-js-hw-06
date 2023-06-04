
let counterValue = 0;

const decrBtnEl = document.querySelector('[data-action="decrement"]');
console.log(decrBtnEl);

const incrBtnEl = document.querySelector('[data-action="increment"]');
console.log(incrBtnEl);

const valueEl = document.querySelector('#value');
console.log(valueEl);

decrBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
});
incrBtnEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue
});

