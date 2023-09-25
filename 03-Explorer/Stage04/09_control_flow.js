// Control Flow (if / else)_________________________________________
console.log("IF / ELSE".toUpperCase());
let temperature = 38;
let highTemperature = temperature > 37.5;
let mediumTemperature = temperature >= 37 && temperature <= 37.5;

if (highTemperature) {
	console.log("Temp:", temperature, "Febre Alta");
} else if (mediumTemperature) {
	console.log("Temp:", temperature, "Febre Moderada");
} else {
	console.log("Temp:", temperature, "Saudável");
}
console.log("");

// Switch __________________________________________________________
console.log("Switch".toUpperCase());

let expression = "a";

switch (expression) {
	case "a":
		console.log("Value: a");
		break; // stop the flow
	case "b":
		console.log("Value: b");
		break;
	default:
		console.log("Value: default");
		break;
}
console.log("");

// create a calculator _________________________________________
console.log("Calculator Exercise".toUpperCase());

function calculator(number_one, operator, number_two) {
	let result = 0;

	switch (operator) {
		case "+":
			result = number_one + number_two;
			break;
		case "-":
			result = number_one - number_two;
			break;
		case "*":
			result = number_one * number_two;
			break;
		case "/":
			result = number_one / number_two;
			break;
		default:
			console.log("no function");
			break;
	}

	return result;
}
console.log(`Addiction: ${calculator(13, "+", 7)}`);
console.log(`Subtraction: ${calculator(13, "-", 7)}`);
console.log(`Multiplication: ${calculator(13, "*", 7)}`);
console.log(`Division: ${calculator(13, "/", 7).toFixed(2)}`);
console.log("");

// Throw / Try / Catch __________________________________________________
console.log("Throw / Try / Catch".toUpperCase());

function sayName(name = "") {
	if (name === "") {
		throw "Please, name is required !";
	} else {
		console.log("Sent Name:", name);
	}
}

try {
	sayName();
} catch (e) {
	console.log("Error:", e);
}
console.log("After Error Message");
