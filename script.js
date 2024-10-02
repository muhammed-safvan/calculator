let previousNumber;
let previousOperator;
let currentNumber;
const operators = ["%", "−", "+", "×", "÷"];

function renderScreen(userInput) {
    let input=userInput;
  const inputType = typeof input;
  if (
    currentNumber &&
    (inputType === "number" || input === "0" || input === ".")
  ) {
    document.querySelector(".screen").value = currentNumber +=`${input}`;
    return;
  } else if (inputType === "number" || input === "0") {
    currentNumber = +input;
  } else if (input === "=") {
    document.querySelector(".screen").value = doMath(input);
    return;
  }
  
  document.querySelector(".screen").value = input;
}

function getBtnValue(btn) {
  const btnValue = btn.innerText;
  const number = +btnValue;

  if (!number || number === 0) {
    const isOperator = operators.includes(btnValue);
    if (isOperator) {
      previousOperator = btnValue;
      if(!previousNumber){
        previousNumber = currentNumber;
        currentNumber = "";
      }
      console.log(previousNumber);
    } else if (btnValue === "AC") {
        previousNumber="";
        currentNumber = "";
      return "";
    }
    return btnValue;
  }
  return number;
}

function doMath(input) {
    let calculated;
  if (previousOperator) {
    const numPrevious = Number(previousNumber);
    const numCurrent = Number(currentNumber);
    switch(previousOperator) {
        case '+' : calculated = numPrevious + numCurrent
        break;
        case "−" : calculated =  numPrevious - numCurrent
        break;
        case '%' : calculated = numPrevious % numCurrent
        break;
        case '×' : calculated = numPrevious * numCurrent
        break;
        case '÷' : calculated = numPrevious / numCurrent
        break;
    }
  }
  previousNumber = calculated;
  currentNumber = "";
  return calculated;
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = getBtnValue(btn);
    renderScreen(value);
  });
});
