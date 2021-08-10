const displayArea = document.querySelector('.display-area');
const allClearBtn = document.querySelector('.ac');
const switchNegPosBtn = document.querySelector('.plus-minus');
const percentageBtn = document.querySelector('.percent');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.minus');
const addBtn = document.querySelector('.plus');
const equalsBtn = document.querySelector('.equals');

const numberButtons = document.querySelectorAll('.number');

class Calculator {

    constructor(display) {
        this.display = display; 
    }

    addNumber(number) {
        this.currentNumber = number;
    }

    show() {
        this.display.innerText += this.currentNumber;
    }

    clear() {
        this.display.innerText = '';
        this.currentNumber = '0';

        // this.currentOperation = '';
    }
}


const calculator = new Calculator(displayArea);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);
        calculator.show();
        console.log(button.innerText)
    })
});

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.show();
});

