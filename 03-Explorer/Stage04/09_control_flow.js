// Control Flow (if / else)_________________________________________

let temperature = 35;
let highTemperature = temperature > 37.5;
let mediumTemperature = temperature >= 37 && temperature <= 37.5;

if (highTemperature) {
	console.log("Febre Alta");
} else if (mediumTemperature) {
	console.log("Febre Moderada");
} else {
	console.log("Saudável");
}

// Switch __________________________________________________________

let expression = "a";

switch (expression) {
	case "a":
		console.log("a");
		break; // stop the flow
	case "b":
		console.log("b");
		break;
	default:
		console.log("default");
		break;
}

// create a calculator
function calculator(number_one, operator, number_two) {
	let result;

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

console.log(`\nAddiction: ${calculator(13, "+", 07)}`);
console.log(`Subtraction: ${calculator(13, "-", 07)}`);
console.log(`Multiplication: ${calculator(13, "*", 07)}`);
console.log(`Division: ${calculator(13, "/", 07).toFixed(2)}`);

// Throw / Try / Catch __________________________________________________

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
	console.log("\nError:", e);
}

console.log("after error");
