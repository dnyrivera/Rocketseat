// Function statement
function createPhrases() {
	console.log("Estudar é muito bom");
	console.log("Paciência e Persistência");
	console.log("Revisão é a mãe do aprendizado");
}

// execute, run, call, invoke function
createPhrases();

console.log("Game over!");

// Function in Variables (Function expression / anonymous)________

//parameters
const sum = function (number1, number2) {
	let total = number1 + number2;
	return total;
};

let number1 = 34;
let number2 = 25;

sum(number1, number2); //arguments

console.log(`\nO numero 1 é ${number1}`);
console.log(`O numero 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);
// console.log(`Total: ${total}`)

// Function is a blender
function makeJuice(fruit_one, fruit_two) {
	let juice = fruit_one + " and " + fruit_two;
	return juice;
}

const cup = makeJuice("raspberry", "lime");
console.log(`\nThe juice is ${cup}`);

//Function Scope___________________________________________________
let subject = "create video";

function createThink(subject) {
	let new_subject = "study";
	return new_subject;
}

console.log("\n" + subject);
console.log(createThink(subject));

// Function Hoisting_______________________________________________
sayMyName();

//Function expression doesn't work the hoisting
// const sayMyName = function sayMyName() {
// 	console.log("Rivera");
// };

function sayMyName() {
	console.log("\nFunction Hoisting: Donny");
}

// Arrow Function ________________________________________________
// No arguments
const myName = () => {
	console.log("\nArrow Function (no argument): Donny");
};

const myName2 = (name) => {
	console.log(`Arrow Function (argument): ${name}`);
};

myName();
myName2("Rivera");

// Callback Function _____________________________________________
function fullName(name) {
	console.log("\nbefore the function callback");
	// like this :
	// function name() {
	//     console.log("iniciando uma function callback")
	// }
	name();
	console.log("after the function callback");
}

// fullName()
fullName(() => {
	console.log("iniciando uma function callback");
});

//Function Constructor __________________________________________
/*
 * new expression
 * Use to create a new object
 * this keyword to attributes
 */

function Person(name) {
	this.name = name;
	this.walk = function () {
		return this.name + " está andando";
	};
}

const donny = new Person("Donny");
const josany = new Person("Josany");
console.log("\n", donny);
console.log(donny.walk());
console.log(josany);
console.log(josany.walk());
