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
    display;
    currentOperation;
    currentValue = '0';
    storedValue;
    targetButton;
    repeatValue;


    constructor(display) {
        this.display = display; 
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')){
            return;
        }
        if(this.currentValue.charAt(0) === '0') {
        this.currentValue = this.currentValue.replace('0', '');
        }
        this.currentValue += number;
        console.log(this.currentValue.charAt(0));
    }

    show() {
        this.display.innerText = this.currentValue.toString();
    }

    store() {
        this.storedValue = this.currentValue;
        this.currentValue = '';
    }

    clear() {
        this.display.innerText = '';
        this.currentValue = '0';
        this.currentOperation = '';
        this.storedValue = '';
        this.targetButton = '';
        this.repeatValue = '';
    }
    getTarget(target) {
        if(this.targetButton === target) {
            return;
        }
        this.targetButton = target;
    }

    setOperation(operation) {
        if(operation === '+') {
        this.currentOperation = 'addition';
        }
    }

    compute(target) {
        console.log(this.targetButton);
        if(this.currentOperation === 'addition') {
            if(this.targetButton === target) {
                this.currentValue = Number(this.currentValue) + Number(this.repeatValue);
                return;
            }
            this.repeatValue = this.currentValue;
            this.currentValue = Number(this.storedValue) + Number(this.currentValue)
        }
    }
}


const calculator = new Calculator(displayArea);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.display.innerText = '';
        calculator.addNumber(button.innerText);
        calculator.show();
        console.log(button.innerText)
    })
});

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.show();
});

addBtn.addEventListener('click', () => {
    calculator.store();
    calculator.setOperation(addBtn.innerText);
    calculator.show();
})

equalsBtn.addEventListener('click', (e) => {
    calculator.compute(e.target.innerText);
    calculator.getTarget(e.target.innerText);
    calculator.show();
})