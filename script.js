const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayOperations = document.getElementById("display-operation");
const equals = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
let value1 = "";
let value2 = "";
let currentOperator = "";
let somethingWentWrong = "";

backspace.addEventListener("click", () => {
  if (displayOperations.textContent !== "Enter a number" && value1 !== "") {
    displayOperations.textContent = displayOperations.textContent.substring(
      0,
      displayOperations.textContent.length - 1
    );
    value1 = value1.substring(0, value1.length - 1);
    if (displayOperations.textContent === "") {
      displayOperations.textContent = "Enter a number";
    }
  }
});
clearBtn.addEventListener("click", clear);
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (somethingWentWrong === true) {
      clear();
      somethingWentWrong = false;
    }
    if (
      displayOperations.textContent === "Enter a number" ||
      displayOperations.textContent === "Stop trying to divide 0 by 0"
    ) {
      displayOperations.textContent = "";
    }

    displayOperations.textContent += number.textContent;
    value1 += number.textContent;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (
      displayOperations.textContent === "Enter a number" ||
      displayOperations.textContent === "Stop trying to divide 0 by 0"
    ) {
      displayOperations.textContent = "";
    }
    if (value2 !== "") {
      value1 = operate(value1, value2);
      value2 = "";
      currentOperator = operator.classList[1];
      somethingWentWrong = "";
    }
    value2 = value1;
    value1 = "";
    currentOperator = operator.classList[1];
    displayOperations.textContent += operator.textContent;
  });
});
equals.addEventListener("click", () => {
  operate(value1, value2);
  somethingWentWrong = true;
});

function clear() {
  value1 = "";
  value2 = "";
  displayOperations.textContent = "Enter a number";
  currentOperator = "";
}
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
  if (num1 === "0" && num2 === "0") {
    return (displayOperations.textContent = "Stop trying to divide 0 by 0");
  }
  if (currentOperator === "add") {
    return (displayOperations.textContent = add(+num1, +num2));
  } else if (currentOperator === "subtract") {
    return (displayOperations.textContent = subtract(+num1, +num2));
  } else if (currentOperator === "multiply") {
    return (displayOperations.textContent = multiply(+num1, +num2));
  } else if (currentOperator === "divide") {
    return (displayOperations.textContent = divide(+num1, +num2));
  }
}
