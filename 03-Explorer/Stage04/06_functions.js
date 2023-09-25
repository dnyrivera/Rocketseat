console.log("Functions Class ------------------".toUpperCase());

// Function statement
function createPhrases() {
	console.log("Estudar é muito bom");
	console.log("Paciência e Persistência");
	console.log("Revisão é a mãe do aprendizado");
}

// execute, run, call, invoke function
createPhrases();
console.log("");

console.log(
	"Function in Variables (Function expression / anonymous) ------------------".toUpperCase()
);

//parameters
const sum = function (number1, number2) {
	let total = number1 + number2;
	return total;
};

let number1 = 34;
let number2 = 25;

sum(number1, number2); //arguments

console.log(`O numero 1 é ${number1}`);
console.log(`O numero 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);
// console.log(`Total: ${total}`) // sem palavra chave na função o valor é enviado para toda a aplicação
console.log("");

console.log(
	"Other Way to Explaining Functions ------------------".toUpperCase()
);
// Function is a blender
function makeJuice(fruit_one, fruit_two) {
	let juice = fruit_one + " and " + fruit_two;
	return juice;
}
const cup = makeJuice("raspberry", "lime");
console.log(`The juice is ${cup}`);
console.log("");

console.log("Function Scope ------------------".toUpperCase());
let subject = "create video";

function createThink(subject) {
	let new_subject = "study";
	return new_subject;
}

console.log(subject);
console.log(createThink(subject));
console.log("");

console.log("Function Hoisting ------------------".toUpperCase());
sayMyName();

function sayMyName() {
	console.log("Function Hoisting: Donny");
}
console.log("");
//Function expression doesn't work the hoisting
// const sayMyName = function sayMyName() {
// 	console.log("Rivera");
// };

console.log("Arrow Function ------------------".toUpperCase());

const myName = () => {
	console.log("Arrow Function (no argument): Donny");
};

const myName2 = (name) => {
	console.log(`Arrow Function (argument): ${name}`);
};
myName();
myName2("Rivera");
console.log("");

console.log("Callback Function ------------------".toUpperCase());
function fullName(name) {
	console.log("before the function callback");
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
console.log("");

console.log("Constructors Function ------------------".toUpperCase());
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
console.log(donny);
console.log(donny.walk());
console.log(josany);
console.log(josany.walk());
