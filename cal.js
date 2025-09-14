let num1=null;
let num2=null;
let opt=null;
let currentValue ='';
let expression ='';

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Error"; // optional: prevent divide by 0
  return num1 / num2;   // fixed
}


function operate(num1,num2,opt){
    if(opt=== "+"){
        return add(num1,num2);
    }
    else if(opt==="-"){
        return subtract(num1,num2);
    }
    else if(opt==="*"){
        return multiply(num1,num2);
    }
    else if(opt==="/"){
        return divide(num1,num2);
    }
    else return "error";
}



const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

const buttons = document.querySelectorAll('.btn');
const display = document.querySelector(".display");



buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    if (btn.value >= "0" && btn.value <= "9") {
      currentValue += btn.value;
      expression += btn.value;

      expressionDisplay.textContent = expression;
      resultDisplay.textContent = currentValue;

    } else if (btn.value === "+" || btn.value === "-" || btn.value === "*" || btn.value === "/") {
      num1 = Number(currentValue);
      opt = btn.value;
      currentValue = '';
      expression += opt;

      expressionDisplay.textContent = expression;
      resultDisplay.textContent = opt;

    } else if (btn.value === "=") {
      num2 = Number(currentValue);
      let result = operate(num1, num2, opt);

      expressionDisplay.textContent = expression + "=";
      resultDisplay.textContent = result;

      // prepare for further chaining
      num1 = result;
      currentValue = '';
      opt = null;
      expression = String(result);

    } else if (btn.value === "AC") {
      num1 = null;
      num2 = null;
      opt = null;
      currentValue = '';
      expression = '';

      expressionDisplay.textContent = '';
      resultDisplay.textContent = '0';
    }

  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key; // the key pressed on keyboard

  // numbers
  if (key >= "0" && key <= "9") {
    currentValue += key;
    expression += key;
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = currentValue;
  }

  // operators
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    num1 = Number(currentValue);
    opt = key;
    currentValue = "";
    expression += opt;
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = opt;
  }

  // equals (= or Enter)
  else if (key === "=" || key === "Enter") {
    num2 = Number(currentValue);
    let result = operate(num1, num2, opt);
    expressionDisplay.textContent = expression + "=";
    resultDisplay.textContent = result;

    num1 = result;
    currentValue = "";
    opt = null;
    expression = String(result);
  }

  // clear (Escape or Delete)
  else if (key === "Escape" || key === "Delete") {
    num1 = null;
    num2 = null;
    opt = null;
    currentValue = "";
    expression = "";
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "0";
  }

  // decimal point
  else if (key === ".") {
    if (!currentValue.includes(".")) {
      currentValue += ".";
      expression += ".";
      resultDisplay.textContent = currentValue;
      expressionDisplay.textContent = expression;
    }
  }
});