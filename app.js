// Global Definitions
const container = document.querySelector('.container');
const allButtons = document.querySelector('.button');
const buttonClear = document.querySelector('.clear-button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e);
    })
})

buttonClear.addEventListener('click', () => {
    
});

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

