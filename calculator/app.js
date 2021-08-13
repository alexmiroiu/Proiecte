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
        if (number === '.' && this.currentValue.includes('.')) {
            return;
        }
        if (this.currentValue.charAt(0) === '0') {
            this.currentValue = this.currentValue.replace('0', '');
        }
        this.currentValue += number;
    }

    show() {
        this.display.innerText = this.currentValue.toString();
        if (this.currentValue.length < 7) {
            this.display.style.fontSize = '9rem';
        }
        if (this.currentValue.length > 13) {
            this.display.style.fontSize = '2.7rem';
        }
        switch (this.currentValue.length) {
            case 7:
                this.display.style.fontSize = '8rem';
                break;
            case 8:
                this.display.style.fontSize = '7rem';
                break;
            case 9:
                this.display.style.fontSize = '6.5rem';
                break;
            case 10:
                this.display.style.fontSize = '6rem';
                break;
            case 11:
                this.display.style.fontSize = '5.5rem';
                break;
            case 12:
                this.display.style.fontSize = '4.5rem';
                break;
            case 13:
                this.display.style.fontSize = '3.5rem';
                break;

        }
    }

    store() {
        this.storedValue = this.currentValue;
        this.currentValue = '';
        this.targetButton = '';
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
        if (this.targetButton === target) {
            return;
        }
        this.targetButton = target;
    }

    setOperation(operation) {
        if (operation === '+') {
            this.currentOperation = 'addition';
        }
        if (operation === '-') {
            this.currentOperation = 'subtraction';
        }
        if (operation === 'x') {
            this.currentOperation = 'multiplication';
            console.log('changed to multiplication')
        }
        if (operation === '÷') {
            this.currentOperation = 'division';
            console.log('changed to division')
        }

    }

    percent() {
        this.currentValue = (Number(this.currentValue) / 100).toString();
    }

    negPos() {
        if (this.currentValue > 0) {
            this.currentValue = (0 - Number(this.currentValue)).toString();

        } else if (this.currentValue < 0) {
            this.currentValue = (Number(this.currentValue) * -1).toString();
        }
    }

    compute(target) {
        // console.log(this.targetButton);
        if (this.currentOperation === 'addition') {
            console.log('addition')
            if (this.targetButton === target) {
                this.currentValue = (Number(this.currentValue) + Number(this.repeatValue)).toString();
                return;
            }
            this.repeatValue = this.currentValue;
            this.currentValue = (Number(this.storedValue) + Number(this.currentValue)).toString();
        }
        if (this.currentOperation === 'subtraction') {
            if (this.targetButton === target) {
                console.log('bang')
                this.currentValue = (Number(this.currentValue) - Number(this.repeatValue)).toString();
                return;
            }
            this.repeatValue = this.currentValue;
            this.currentValue = (Number(this.storedValue) - Number(this.currentValue)).toString();
        }
        if (this.currentOperation === 'division') {
            console.log('division')
            if (this.targetButton === target) {
                this.currentValue = (Number(this.currentValue) / Number(this.repeatValue)).toString();
                return;
            }
            this.repeatValue = this.currentValue;
            this.currentValue = (Number(this.storedValue) / Number(this.currentValue)).toString();
        }
        if (this.currentOperation === 'multiplication') {
            console.log('multiplication')
            if (this.targetButton === target) {
                this.currentValue = (Number(this.currentValue) * Number(this.repeatValue)).toString();
                return;
            }
            this.repeatValue = this.currentValue;
            this.currentValue = (Number(this.storedValue) * Number(this.currentValue)).toString();
        }
    }
}


const calculator = new Calculator(displayArea);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.display.innerText = '';
        calculator.addNumber(button.innerText);
        calculator.show();
    })
});

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.show();
});

switchNegPosBtn.addEventListener('click', () => {
    calculator.negPos();
    calculator.show();
})

addBtn.addEventListener('click', () => {
    calculator.store();
    calculator.setOperation(addBtn.innerText);
    calculator.show();
})

subtractBtn.addEventListener('click', () => {
    calculator.store();
    calculator.setOperation(subtractBtn.innerText);
    calculator.show();
})

multiplyBtn.addEventListener('click', () => {
    calculator.store();
    calculator.setOperation(multiplyBtn.innerText);
    calculator.show();
})

divideBtn.addEventListener('click', () => {
    calculator.store();
    calculator.setOperation(divideBtn.innerText);
    console.log(divideBtn.innerText)
    calculator.show();

})

percentageBtn.addEventListener('click', () => {
    calculator.percent();
    calculator.show();
})

equalsBtn.addEventListener('click', (e) => {
    calculator.compute(e.target.innerText);
    calculator.getTarget(e.target.innerText);
    calculator.show();
})