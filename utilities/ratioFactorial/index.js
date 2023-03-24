const factorialOfNumber = require("../factorial/index.js");

const ratioOfTwoNumbers = require("../ratio/index.js");

const num1 = 4;
const num2 = 8;
const num3 = 3;

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
