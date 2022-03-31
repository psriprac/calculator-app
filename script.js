const add = (x, y) => {
    return parseInt(x) + parseInt(y);
}

const subtract = (x, y) => {
    return parseInt(x) - parseInt(y);
}

const multiply = (x, y) => {
    return parseInt(x) * parseInt(y);
}

const divide = (x, y) => {
    if(parseInt(y) === 0) {
        return 'No can do partner';
    } else {
        return parseInt(x) / parseInt(y);
    }
}

const operate = (op, x, y) => {
    switch (op) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case 'x' || '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

const maxLength = 18;

const resultsViewport = document.querySelector('#results-viewport')
resultsViewport.textContent = '';

const feedViewport = document.querySelector('#feed-viewport')
feedViewport.textContent = '';

const one = document.querySelector('#one');

one.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 1;
        //feedViewport.textContent += 1;
    }
});

const two = document.querySelector('#two');

two.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength){
        resultsViewport.textContent += 2;
        //feedViewport.textContent += 2;
    }
});

const three = document.querySelector('#three');

three.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 3;
        //feedViewport.textContent += 3;
    }

});

const four = document.querySelector('#four');

four.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 4;
        //feedViewport.textContent += 4;
    }

});

const five = document.querySelector('#five');

five.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 5;
        //feedViewport.textContent += 5;
    }

});

const six = document.querySelector('#six');

six.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 6;
        //feedViewport.textContent += 6;
    } 

});

const seven = document.querySelector('#seven');

seven.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 7;
        //feedViewport.textContent += 7;
    }

});

const eight = document.querySelector('#eight');

eight.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 8;
        //feedViewport.textContent += 8;
    } 

});

const nine = document.querySelector('#nine');

nine.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 9;
        //feedViewport.textContent += 9;
    } 

});

const zero = document.querySelector('#zero');

zero.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        resultsViewport.textContent += 0;
        //feedViewport.textContent += 0;
    } 

});

function clearViewports() {
    clearResults();
    clearFeed();
}

function clearResults() {
    resultsViewport.textContent = '';
}

function clearFeed() {
    feedViewport.textContent = '';
}

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    clearViewports();
});

let tempOperand = 0;

addButton.addEventListener('click', () => {
    if (feedViewport.textContent.includes('=')) {}
    if (resultsViewport.textContent != '') {
        tempOperand = parseInt(resultsViewport.textContent);
    }
    feedViewport.textContent += ` ${tempOperand} + `;
    clearResults();
});

equals.addEventListener('click', () => {
    if (feedViewport.textContent === '') {

    } else if (!feedViewport.textContent.endsWith('. ')) {
        let secondOperand = 0;
        if (resultsViewport.textContent != '') {
            secondOperand = parseInt(resultsViewport.textContent);
        }
        let solution = operate('+', secondOperand, tempOperand);
        feedViewport.textContent += `${secondOperand} = ${solution}. `;
        resultsViewport.textContent = `${solution}`;
    }
});

