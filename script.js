const numbers = document.querySelectorAll(".number");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");
const allclear = document.querySelector(".allclear");
const deci = document.querySelector(".decimal");
const symbols = document.querySelectorAll(".symbols");
const operand = document.querySelector(".operand");

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

function operate(a, b, operand) {
    if (operand == '+') {
        return add(a, b);
    }
    else if (operand == '-') {
        return subtract(a, b);
    }
    else if (operand == '*') {
        return multiply(a, b);
    }
    else if (operand == '/') {
        return divide(a, b);
    }
    else {
        return "OOPS";
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