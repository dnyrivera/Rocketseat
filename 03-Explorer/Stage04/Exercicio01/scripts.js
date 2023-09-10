function evenOrOdd(number1, number2) {
	return (number1 + number2) % 2 == 0 ? true : false;
}

function equalNumbers(number1, number2) {
	return number1 == number2 ? true : false;
}

let number1 = Number(prompt("Insert the first number: "));
let number2 = Number(prompt("Insert the second number: "));

alert(`Addition: ${number1 + number2}`);
alert(`Subtraction: ${number1 - number2}`);
alert(`Multiplication: ${number1 * number2}`);
alert(`Division: ${(number1 / number2).toFixed(2)}`);
alert(`Remainder: ${number1 % number2}`);

let evenodd = evenOrOdd(number1, number2);
if (evenodd) {
	alert(
		`The addition about ${number1} + ${number2} is even: ${number1 + number2}`
	);
} else {
	alert(
		`The addition about ${number1} + ${number2} is odd: ${number1 + number2}`
	);
}

let equal = equalNumbers(number1, number2);
if (equal) {
	alert("The numbers are the same");
} else {
	alert("The numbers are different");
}
