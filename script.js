let previousNumber;
let previousOperator;
const operators = ["%", "−", "+", "×", "=", "÷"];

function renderScreen(input) {
  const inputType = typeof input;
  if (
    previousNumber &&
    (inputType === "number" || input === "0" || input === ".")
  ) {
    document.querySelector(".screen").value = previousNumber += `${input}`;
    return;
  } else if (inputType === "number" || input === "0") {
    previousNumber = input;
  } else if (input === "+") {
    previousOperator = input;
  }
  document.querySelector(".screen").value = input;
}

function getBtnValue(btn) {
  const text = btn.innerText;
  const number = +text;

  if (!number || number === 0) {
    const isOperator = operators.includes(text);
    if (isOperator) {
      previousOperator = text;
    } else if (text === "AC") {
      return "";
    }
    return text;
  }
  return number;
}

function doMath() {
  const input = getBtnValue();
  if (input === "+") {
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = getBtnValue(btn);
    renderScreen(value);
  });
});
