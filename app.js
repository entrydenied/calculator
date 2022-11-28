// Global Definitions
const container = document.querySelector('.container');
const allButtons = document.querySelectorAll('.button');
//const buttonClear = document.querySelector('.button-clear');
const calcDisplay = document.querySelector('.display')

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        calcDisplay.innerText = value
    })
})

// const value = e.target.dataset.value
// display.innerText = value


//buttonClear.addEventListener('click', () => {
    
//});

// Basic Calculator Functions
const add = function(a, b) {
	return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
	return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(a, b) {
    if (add) {
        return a + b
    } else if (subtract) {
        return a - b;
    } else if (multiply) {
        return a * b;
    } else {
        return a / b;
    }
}

/**
const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

 */


// Clear Button

