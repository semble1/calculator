const numbers = document.querySelectorAll(".number");
const current = document.querySelector(".current");
const allclear = document.querySelector(".allclear");

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
}

allclear.onclick = function() {allClear()};