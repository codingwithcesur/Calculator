const buttons = document.querySelectorAll("button");
const displayOperations =
  document.getElementsByClassName("display-operation")[0];
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].textContent == "Clear") {
    buttons[i].addEventListener("click", () => {
      displayOperations.textContent = "";
    });
  } else if (buttons[i].textContent == "=") {
    buttons[i].addEventListener("click", () => {
      displayOperations.textContent = "";
    });
  } else {
    buttons[i].addEventListener("click", () => {
      if (displayOperations.textContent == "Enter a number") {
        displayOperations.textContent = "";
      }
      displayOperations.textContent += buttons[i].textContent;
    });
  }
}

// function display(a) {
//   const showText = a.textContent;
//   console.log(a);
//   displayOperations.textContent += showText;
// }

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
function operate(operator, num1, num2) {
  return operator(+num1, +num2);
}
