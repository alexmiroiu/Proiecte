const displayArea = document.querySelector('.display-area');
const switchNegPosbtn = document.querySelector('.plus-minus');
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

    show(text) {
        this.display = this.display + text;
    }
}


const calculator = new Calculator(displayArea.innerText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.show(button.innerText);
    })
})


