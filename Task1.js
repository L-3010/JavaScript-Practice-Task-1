const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];
let isFinishedCalculation = false; 


function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);

    if (display.value === "Error" || display.value === "Cannot divide by zero") {
        display.value = "";
    }


    if (isFinishedCalculation && !operators.includes(input)) {
        display.value = input;
        isFinishedCalculation = false;
        return;
    }

    if (isFinishedCalculation && operators.includes(input)) {
        isFinishedCalculation = false;
    }


    if (operators.includes(input) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        if (display.value === "" && operators.includes(input) && input !== '-') return;
   
        display.value += input;
    }
}


function clearDisplay() {
    display.value = "";
    isFinishedCalculation = false;
}


function calculate() {
  if (display.value === "") return;
    if (/\/0(?!\.)/.test(display.value)) {
        display.value = "Cannot divide by zero";
        console.error("Logic Error: Division by zero is not allowed.");
        isFinishedCalculation = true;
        return;
    }

    try {
        let result = eval(display.value);        
        if (!isFinite(result)) {
            display.value = "Cannot divide by zero";
        } else {
            console.log("Calculation Result:", result);
            display.value = result;
        }
        isFinishedCalculation = true; 
    } catch (error) {
        display.value = "Error";
        console.error("Invalid Expression:", error);
        isFinishedCalculation = true;
    }
}