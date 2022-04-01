const add = (x, y) => {
    return parseFloat(x) + parseFloat(y);
}

const subtract = (x, y) => {
    return parseFloat(x) - parseFloat(y);
}

const multiply = (x, y) => {
    return parseFloat(x) * parseFloat(y);
}

const divide = (x, y) => {
    if(parseFloat(y) === 0) {
        alert('Yeah, no.')
        return x;
    } else {
        return parseFloat(x) / parseFloat(y);
    }
}

const operate = (op, x, y) => {
    switch (op) {
        case '+':
            return add(x, y).toPrecision(3);
        case '-':
            return subtract(x, y).toPrecision(3);
        case 'x' || '*':
            return multiply(x, y).toPrecision(3);
        case '/':
            return divide(x, y).toPrecision(3);
    }
}

const maxLength = 12;
let resultsLock = false;

const resultsViewport = document.querySelector('#results-viewport')
resultsViewport.textContent = '0';

const feedViewport = document.querySelector('#feed-viewport')
feedViewport.textContent = '';

const one = document.querySelector('#one');

one.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 1;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 1;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 1;
        }
    }
});

const two = document.querySelector('#two');

two.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 2;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 2;
            resultsLock = false;
        }else {
            resultsViewport.textContent += 2;
        }
    }
});

const three = document.querySelector('#three');

three.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 3;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 3;
            resultsLock = false;
        }else {
            resultsViewport.textContent += 3;
        }
    }
});

const four = document.querySelector('#four');

four.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 4;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 4;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 4;
        }
    }
});

const five = document.querySelector('#five');

five.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 5;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 5;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 5;
        }
    }
});

const six = document.querySelector('#six');

six.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 6;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 6;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 6;
        }
    }
});

const seven = document.querySelector('#seven');

seven.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 7;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 7;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 7;
        }
    }
});

const eight = document.querySelector('#eight');

eight.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 8;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 8;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 8;
        }
    }
});

const nine = document.querySelector('#nine');

nine.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 9;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 9;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 9;
        }
    }
});

const zero = document.querySelector('#zero');

zero.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 0;
        } else if (resultsLock) {
            clearResults();
            resultsViewport.textContent = 0;
            resultsLock = false;
        } else {
            resultsViewport.textContent += 0;
        }
    }
});

const decimal = document.querySelector('#decimal');

decimal.addEventListener('click', () => { 
    if(!resultsViewport.textContent.includes('.')) {
        if (resultsLock) {
            clearResults();
            resultsLock = false;
        } else {
            resultsViewport.textContent += '.';
        }
    }
});

function clearViewports() {
    clearResults();
    clearFeed();
}

function clearResults() {
    resultsViewport.textContent = '0';
}

function clearFeed() {
    feedViewport.textContent = '';
}

let expression = [];
let operands = [];
let operator = '';

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

function resetExpression(){
    expression = [];
    operands = [];
    operator = '';
}

clear.addEventListener('click', () => {
    clearViewports();
    resetExpression();
});

addButton.addEventListener('click', () => {
    clearFeed();
    operands.push(parseFloat(resultsViewport.textContent));

    if (operator != '') {
        operands[0] = operate(operator, operands[0], operands[1]);
        operands.pop();
        expression.pop();
        clearFeed();
    }

    operator = '+';
    
    expression.push(operands[0]);
    expression.push(operator);

    feedViewport.textContent += `${operands[0]} + `;

    resultsLock = true;

    if (operands.length > 1) {
        operands.push(parseFloat(resultsViewport.textContent));
        let result = operate(operator, operands[0], parseFloat(resultsViewport.textContent));
        if(!resultsLock) {
            resultsLock = true;
        }
        resetExpression();
        operands.push(result);
        operator = '+';
        expression.push(operands[0]);
        expression.push(operator);
        clearFeed();
        feedViewport.textContent += `${operands[0]} + `;
    }
});

subtractButton.addEventListener('click', () => {
    operands.push(parseFloat(resultsViewport.textContent));

    if (operator != '') {
        operands[0] = operate(operator, operands[0], operands[1]);
        operands.pop();
        expression.pop();
        clearFeed();
    }

    operator = '-';
    
    expression.push(operands[0]);
    expression.push(operator);

    feedViewport.textContent += `${operands[0]} - `;

    resultsLock = true;

    if (operands.length > 1) {
        operands.push(parseFloat(resultsViewport.textContent));
        let result = operate(operator, operands[0], parseFloat(resultsViewport.textContent));
        if(!resultsLock) {
            resultsLock = true;
        }
        resetExpression();
        operands.push(result);
        operator = '-';
        expression.push(operands[0]);
        expression.push(operator);
        clearFeed();
        feedViewport.textContent += `${operands[0]} - `;
    }
});

multiplyButton.addEventListener('click', () => {
    operands.push(parseFloat(resultsViewport.textContent));

    if (operator != '') {
        operands[0] = operate(operator, operands[0], operands[1]);
        operands.pop();
        expression.pop();
        clearFeed();
    }

    operator = 'x';
    
    expression.push(operands[0]);
    expression.push(operator);

    feedViewport.textContent += `${operands[0]} x `;

    resultsLock = true;

    if (operands.length > 1) {
        operands.push(parseFloat(resultsViewport.textContent));
        let result = operate(operator, operands[0], parseFloat(resultsViewport.textContent));
        if(!resultsLock) {
            resultsLock = true;
        }
        resetExpression();
        operands.push(result);
        operator = 'x';
        expression.push(operands[0]);
        expression.push(operator);
        clearFeed();
        feedViewport.textContent += `${operands[0]} x `;
    }
});

divideButton.addEventListener('click', () => {
    operands.push(parseFloat(resultsViewport.textContent));

    if (operator != '') {
        operands[0] = operate(operator, operands[0], operands[1]);
        operands.pop();
        expression.pop();
        clearFeed();
    }

    operator = '/';
    
    expression.push(operands[0]);
    expression.push(operator);

    feedViewport.textContent += `${operands[0]} / `;

    resultsLock = true;

    if (operands.length > 1) {
        operands.push(parseFloat(resultsViewport.textContent));
        let result = operate(operator, operands[0], parseFloat(resultsViewport.textContent));
        if(!resultsLock) {
            resultsLock = true;
        }
        resetExpression();
        operands.push(result);
        operator = '/';
        expression.push(operands[0]);
        expression.push(operator);
        clearFeed();
        feedViewport.textContent += `${operands[0]} / `;
    }
});

equals.addEventListener('click', () => {
    operands.push(parseFloat(resultsViewport.textContent));
    if(feedViewport.textContent === '') {
        feedViewport.textContent = operands[0];
        resultsLock = true;
        resetExpression();
        clearFeed();
    } else if(!feedViewport.textContent.includes('=')){
        feedViewport.textContent += `${operands[1]} = `
        resultsViewport.textContent = operate(operator, operands[0], operands[1]);
        resultsLock = true;
        resetExpression();
        if(expression === []){
            clearFeed();
        }
    }   
});

del.addEventListener('click', () => {
    if(resultsViewport.textContent.length > 1) {
        resultsViewport.textContent = resultsViewport.textContent.slice(0, -1);
    } else if (resultsViewport.textContent.length === 1) {
        resultsViewport.textContent = 0;
    }
});
