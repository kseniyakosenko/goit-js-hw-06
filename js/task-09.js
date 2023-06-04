function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const body = document.body;


const changeColor = () => {

  spanColorEl.textContent = body.style.backgroundColor = getRandomHexColor()

}
changeColorBtn.addEventListener('click', changeColor);

