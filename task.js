var num1 = parseFloat(prompt("Enter the first number"));
var operation = prompt("Enter the Operation");
var num2 = parseFloat(prompt("Enter the second number"));
var result;

switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "infinity";
      break;
    default:
      result = "This operation is not permitted (wrong)";
  }
console.log("The result : " + result);
