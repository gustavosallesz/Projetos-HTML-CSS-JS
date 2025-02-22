let displayValue = '';
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') return;
    if (currentOperation !== null) return;

    firstOperand = displayValue;
    currentOperation = operation;
    displayValue += ' ' + operation + ' ';
    updateDisplay();
}

function calculateResult() {
    if (displayValue === '' || currentOperation === null) return;

    let parts = displayValue.split(' ');
    if (parts.length < 3) return; 

    let firstNumber = parseFloat(parts[0]);
    let operator = parts[1];
    let secondNumber = parseFloat(parts[2]);

    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Erro';
            break;
        default:
            return;
    }

    displayValue = result.toString();
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
