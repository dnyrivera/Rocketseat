/* Control Flow 
    if - else
    switch
    try / catch
*/

console.log("--------IF/ELSE---------");
let temperature = 37.7;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
  console.log("Febre Alta");
} else if (mediumTemperature) {
  console.log("Febre Moderada");
} else {
  console.log("Saudavel");
}

console.log("--------SWITCH---------");
function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      console.log("Esse operador não existe");
      break;
  }

  return result;
}
console.log(calculate(4, "%", 7));

console.log("--------THROW/TRY-CATCH---------");
function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatorio";
  }
  console.log("Seu nome é", name);
}

try {
  sayMyName("donny");
} catch (error) {
  console.log(error);
}
console.log("Após a funcao de erro");
