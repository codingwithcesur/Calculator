const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayOperations = document.getElementById("display-operation");
const equals = document.querySelector(".equal");
let value1 = "";
let value2 = "";
let currentOperator = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (displayOperations.textContent == "Enter a number") {
      displayOperations.textContent = "";
    }
    displayOperations.textContent += number.textContent;
    value1 += number.textContent;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    value2 = value1;
    value1 = "";
    currentOperator = operator.classList[1];
    displayOperations.textContent += operator.textContent;
  });
});
equals.addEventListener("click", () => {
  operate(value1, value2);
});

function add(a, b) {
  return +(a + b);
}
function subtract(a, b) {
  return +(a - b);
}
function multiply(a, b) {
  return +(a * b);
}
function divide(a, b) {
  return +(a / b);
}
function operate(num1, num2) {
  if (currentOperator == "add") {
    displayOperations.textContent = add(+num1, +num2);
  } else if (currentOperator == "subtract") {
    displayOperations.textContent = subtract(+num1, +num2);
  } else if (currentOperator == "multiply") {
    displayOperations.textContent = multiply(+num1, +num2);
  } else if (currentOperator == "divide") {
    displayOperations.textContent = divide(+num1, +num);
  }
}
