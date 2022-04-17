const numbers = document.querySelectorAll(".number");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");
const allclear = document.querySelector(".allclear");
const deci = document.querySelector(".decimal");
const symbols = document.querySelectorAll(".symbols");
const operand = document.querySelector(".operand");
const equal = document.querySelector(".equal");
const deletion = document.querySelector(".delete");

function add(a, b) {
    num = a + b;
    return num;
}

function subtract(a, b) {
    num = a - b;
    return num;
}

function multiply(a, b) {
    num = a * b;
    return num;
}

function divide(a, b) {
    num = a / b;
    return num;
}

function operate(a, b, operator) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
    else {
        return;
    }
}

numbers.forEach((numb) => {
    numb.addEventListener("click", displayCurrent);
});

function displayCurrent(e) {
    current.innerHTML += e.target.innerHTML;
}

function allClear() {
    current.innerHTML = "";
    previous.innerHTML = "";
    operand.innerHTML = "";
}

allclear.onclick = function() {allClear()};

function decimal() {
    arr = current.innerHTML.split("");
    if (arr.includes(".") === true) {
        return;
    }
    else {
        current.innerHTML += ".";
    }
}

deci.onclick = function() {decimal()};

symbols.forEach((symb) => {
    symb.addEventListener("click", displayPrevious);   
});

function displayPrevious(f) {
    previous.innerHTML = current.innerHTML;
    operand.innerHTML += f.target.innerHTML;
    current.innerHTML = "";
}

equal.addEventListener("click", operation);

function operation() {
    let a = parseFloat(previous.innerHTML);
    let b = parseFloat(current.innerHTML);
    let operator = operand.innerHTML;
    if (operand.innerHTML === '÷') {
        operator = '/';
    }
    let result = operate(a, b, operator);
    allClear();
    current.innerHTML += result;
}

deletion.onclick = function() {deleteCurr()};

function deleteCurr() {
    current.innerHTML = current.innerHTML.slice(0,-1);
}