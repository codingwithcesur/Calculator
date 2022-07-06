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
    if (value2 !== "") {
      value1 = operate(value1, value2);
      value2 = "";
      currentOperator = operator.classList[1];
    }
    value2 = value1;
    value1 = "";
    currentOperator = operator.classList[1];
    displayOperations.textContent += operator.textContent;
  });
});
equals.addEventListener("click", () => {
  operate(value1, value2);
});

function add(b, a) {
  return +(a + b);
}
function subtract(b, a) {
  return +(a - b);
}
function multiply(b, a) {
  return +(a * b);
}
function divide(b, a) {
  return +(a / b);
}
function operate(num1, num2) {
  if (currentOperator == "add") {
    return (displayOperations.textContent = add(+num1, +num2));
  } else if (currentOperator == "subtract") {
    return (displayOperations.textContent = subtract(+num1, +num2));
  } else if (currentOperator == "multiply") {
    return (displayOperations.textContent = multiply(+num1, +num2));
  } else if (currentOperator == "divide") {
    return (displayOperations.textContent = divide(+num1, +num2));
  }
}
