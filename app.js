// Global Definitions
const container = document.querySelector('.container');
const allButtons = document.querySelectorAll('.button');
//const buttonClear = document.querySelector('.button-clear');
const calcDisplay = document.querySelector('.display');
const operators = ['/', '*', '-', '+'];


// (DONE) Center the calculator with css & make it not ugly 

// Have a limit for the amount of numbers that can be placed in the display
// Get rid of the equals sign after you calculate an equation
// Get rid of the trailing 0 at the start
// Add a backspace button so the user can undo the wrong number (Make it work)
// Add keyboard inputs


allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value

        if (value === '=') {
            if (calcDisplay.innerText.includes('/')) {
                const splitNum = calcDisplay.innerText.split('/')
                operate('/', splitNum[0], splitNum[1])
            }
         
        if (calcDisplay.innerText.includes('*')) {
                const splitNum = calcDisplay.innerText.split('*')
                operate('*', splitNum[0], splitNum[1])
            }
         
        if (calcDisplay.innerText.includes('-')) {
                const splitNum = calcDisplay.innerText.split('-')
                operate('-', splitNum[0], splitNum[1])
            }
         
        if (calcDisplay.innerText.includes('+')) {
                const splitNum = calcDisplay.innerText.split('+')
                operate('+', splitNum[0], splitNum[1])
            }
        }

        calcDisplay.innerText += value

        if (value === "clear") {
            calcDisplay.innerText = " "
        }

        // if (value.innerText == "delete") {
        //     calcDisplay.value = calcDisplay.innerText.substring(0, calcDisplay.innerText.length - 1);
        // }


    })
})

const operate = (operator, value1, value2) => {
    const num1 = Number(value1)
    const num2 = Number(value2)
    
    if (operator === '/') {
        calcDisplay.innerText = num1 / num2
    }
    if (operator === '*') {
        calcDisplay.innerText = num1 * num2
    }
    if (operator === '-') {
        calcDisplay.innerText = num1 - num2
    }
    if (operator === '+') {
        calcDisplay.innerText = num1 + num2
    }
}

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

calcDisplay.innerText = null

/**
const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

 */


// Clear Button

