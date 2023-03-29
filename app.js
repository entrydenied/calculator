const container = document.querySelector('.container');
const allButtons = document.querySelectorAll('.button');
const calcDisplay = document.querySelector('.display');
const operators = ['/', '*', '-', '+'];

function limitDisplay() {
  if (calcDisplay.innerText.length > 10) {
    calcDisplay.innerText = calcDisplay.innerText.substring(0, 10);
  }
}

// Keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;
  const button = Array.from(allButtons).find(
    (button) => button.dataset.value === key
  );
  if (button) button.click();
});

allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

    if (operators.includes(value) || /^\d*\.?\d{0,2}$/.test(value)) {
      if (calcDisplay.innerText === '0') {
        calcDisplay.innerText = value;
      } else {
        calcDisplay.innerText += value;
      }
      limitDisplay();
    } else if (value === '.') {
      if (!calcDisplay.innerText.includes('.')) {
        calcDisplay.innerText += '.';
      }
    } else if (value === '=') {
      calcDisplay.innerText = eval(calcDisplay.innerText).toString().substring(0, 10);
    } else if (value === 'clear') {
      calcDisplay.innerText = '0';
    } else if (value === 'delete') {
      const currentText = calcDisplay.innerText;
      calcDisplay.innerText =
        currentText.length > 1 ? currentText.slice(0, -1) : '0';
    }
  });
});

