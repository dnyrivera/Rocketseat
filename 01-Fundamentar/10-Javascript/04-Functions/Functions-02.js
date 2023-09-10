//function expression / anonymous
let total = 0;
const sum = function (number1, number2) {
  //parameters
  let total = number1 + number2;
  return total;
};

let number1 = 34;
let number2 = 25;

//sum(number1, number2); //arguments

console.log(`O numero 1 é ${number1}`);
console.log(`O numero 2 é ${number1}`);
console.log(`A soma é ${sum(number1, number2)}`);
console.log(total);
