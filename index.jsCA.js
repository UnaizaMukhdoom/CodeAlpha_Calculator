
        let display = document.getElementById('display');
        let currentInput = '';
        let currentOperator = '';
        let firstOperand = null;

        function updateDisplay(value) {
            display.innerText = value;
        }

        function clearDisplay() {
            currentInput = '';
            currentOperator = '';
            firstOperand = null;
            updateDisplay('0');
        }

        function deleteDigit() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || '0');
        }

        function Digit(digit) {
            if (currentInput === '0' && digit === '0') return;
            currentInput += digit;
            updateDisplay(currentInput);
        }

        function Operator(operator) {
            if (currentInput === '' && operator !== '-') return;
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else if (currentOperator) {
                firstOperand = calculate(firstOperand, parseFloat(currentInput), currentOperator);
            }
            currentOperator = operator;
            currentInput = '';
            updateDisplay(firstOperand + ' ' + operator);
        }

        function calculateResult() {
            if (currentOperator && currentInput !== '') {
                let secondOperand = parseFloat(currentInput);
                let result = calculate(firstOperand, secondOperand, currentOperator);
                updateDisplay(result);
                currentInput = result.toString();
                currentOperator = '';
                firstOperand = null;
            }
        }

        function calculate(a, b, operator) {
            switch (operator) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    return a / b;
                case '%':
                    return a % b;
                default:
                    return 0;
            }
        }

        function PercentageOperator() {
            if (currentInput !== '') {
                let percentageValue = parseFloat(currentInput) / 100;
                currentInput = percentageValue.toString();
                updateDisplay(currentInput);
            }
        }

        function toggleSign() {
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) * -1).toString();
                updateDisplay(currentInput);
            }
        }
    