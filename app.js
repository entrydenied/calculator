// Global Definitions
const clearButton = document.querySelector('.clear');


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

// Clear Button

clearButton.addEventListener('click', () => {
    
});