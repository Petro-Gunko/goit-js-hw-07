function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const initialSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${initialSize + i * 10}px`;
    div.style.height = `${initialSize + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(div);
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};


createBtnRef.addEventListener('click', () => {
  const amount = Number(inputRef.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputRef.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyBtnRef.addEventListener('click', destroyBoxes);