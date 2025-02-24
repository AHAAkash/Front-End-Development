/*
Task Statement:- Create a Faulty Calculator using JavaScript
This Faulty Calculator does following:
1. It takes two numbers as input from the users
2. It performs wrong operations as follows:
  + to -
  * to +
  - to /
  / to ** (exponent)

3. It performs wrong operations 10% of the lines
*/
function faultyCalculator(num1, num2, operator) {
  const faultyChance = Math.random() < 0.1; // 10% chance to perform a wrong operation
  
  if (faultyChance) {
      switch (operator) {
          case '+':
              return num1 - num2;
          case '*':
              return num1 + num2;
          case '-':
              return num1 / num2;
          case '/':
              return num1 ** num2;
          default:
              return 'Invalid operator';
      }
  } else {
      switch (operator) {
          case '+':
              return num1 + num2;
          case '*':
              return num1 * num2;
          case '-':
              return num1 - num2;
          case '/':
              return num1 / num2;
          default:
              return 'Invalid operator';
      }
  }
}

// Taking input from the user
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /):");

// Displaying the result
alert(`Result: ${faultyCalculator(num1, num2, operator)}`);
