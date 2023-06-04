
const inputElement = document.querySelector('#font-size-control');

const textElement = document.querySelector('#text');




inputElement.addEventListener('input', fontSizeAction);

function fontSizeAction(event) {
    textElement.style.fontSize = event.currentTarget.value + "px";
}

// const fontSizeAction = ({ currentTarget }) =>
//     (textElement.style.fontSize = `${currentTarget.value}px`);
