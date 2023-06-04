
const InputEl = document.querySelector('#name-input');
console.log(InputEl);


const userNameOutputEl = document.querySelector('#name-output');
console.log(userNameOutputEl);

InputEl.addEventListener('input', (e) => { userNameOutputEl.textContent = e.currentTarget.value.trim() === "" ? "Anonymus" : e.currentTarget.value.trim() });