let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");
let num2 = parseFloat(prompt("Enter second number:"));
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    result = "Error: Division by zero!";
  } else {
    result = num1 / num2;
  }
} else if (operator === "%") {
  if (num2 === 0) {
    result = "Error: Division by zero!";
  } else {
    result = num1 % num2;
  }
} else {
  result = "Invalid operator!";
}

alert(`Result: ${result}`);
console.log(`Result: ${result}`);
