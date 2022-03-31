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

const maxLength = 12;

const resultsViewport = document.querySelector('#results-viewport')
resultsViewport.textContent = '';

const feedViewport = document.querySelector('#feed-viewport')
feedViewport.textContent = '';

const one = document.querySelector('#one');

one.addEventListener('click', () => { 
    if(resultsViewport.textContent.length < maxLength) {
        if(resultsViewport.textContent === '0') {
            clearResults();
            resultsViewport.textContent = 1;
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
        } else {
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
        } else {
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
        } else {
            resultsViewport.textContent += 0;
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

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    clearViewports();
    expression = [];
});

addButton.addEventListener('click', () => {
    let displayText = parseInt(resultsViewport.textContent);
    feedViewport.textContent += `${displayText} + `;
    if(feedViewport.textContent !== ''){
        clearResults();
    }
});

equals.addEventListener('click', () => {
});

