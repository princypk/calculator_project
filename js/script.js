function getValues() {
    return {
        num1: parseFloat(document.getElementById("num1").value),
        num2: parseFloat(document.getElementById("num2").value)
    };
}

function add() {
    let { num1, num2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
    let { num1, num2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
    let { num1, num2 } = getValues();
    document.getElementById("result").innerText = "Result: " + (num1 * num2);
}

function divide() {
    let { num1, num2 } = getValues();
    if (num2 === 0) {
        document.getElementById("result").innerText = "Error: Cannot divide by zero";
    } else {
        document.getElementById("result").innerText = "Result: " + (num1 / num2);
    }
}

// Square
function square() {
    let num = parseFloat(document.getElementById("singleNum").value);
    document.getElementById("result").innerText = "Result: " + (num * num);
}

// Cube
function cube() {
    let num = parseFloat(document.getElementById("singleNum").value);
    document.getElementById("result").innerText = "Result: " + (num * num * num);
}
