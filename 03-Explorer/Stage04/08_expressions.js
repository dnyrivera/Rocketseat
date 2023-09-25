/*
 * Expressions and operators
 * Operators
 * Binary
 * Unary
 * Ternary
 */

// New
console.log("New - Expression".toUpperCase());
let first_name = new String("Donny");
let years = new Number("13");

first_name.surname = "Rivera";
console.log(
	`Completed Name: I'm ${first_name} ${first_name.surname} and I'm ${years} years old`
);

let bod = new Date("1983-7-13");
console.log(
	`Date Property: Dia: ${bod.getDate()}, Month: ${
		bod.getMonth() + 1
	}, Year: ${bod.getFullYear()}`
);
console.log("");

// typeof and delete
console.log("Typeof / Delete - Expressions".toUpperCase());
const person = {
	name: "Donny",
	age: 39,
};
console.log(typeof person);
console.log(person);
console.log(typeof person.name);
console.log(person.name);
//Delete one property inside the object
delete person.age;
console.log(person);
console.log("");

/*
 * Compare Operators
 */
console.log("Comparison between data".toUpperCase());
let one = 1;
let two = 2;

console.log("Equality Values (==)".toUpperCase());
console.log("   two == 1:", two == 1);
console.log("   one == '1':", one == "1");
console.log("");

console.log("Distinct Values (!=)".toUpperCase());
console.log("   one != two:", one != two);
console.log("   one != 1:", one != 1);
console.log("   one != '1':", one != "1");
console.log("");

console.log("Strict Equality Type and Value (===)".toUpperCase());
console.log(one === "1");
console.log(one === 1);
console.log("");

console.log("Strict Inequality Type and Value (!==)".toUpperCase());
console.log(two !== "2");
console.log(two !== 2);
console.log("");

/*
 * Conditional Operator (Ternary)
   -> Depend of the conditional we'll receive different values
   -> Condition True, first value else second value
        condition ? value1 : value2 
 */
console.log("Conditional Operator (Ternary)".toUpperCase());
let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? "Café Top" : "Café Ruim";
console.log(niceBreakfast);

let age = 19;
const canDrive = age >= 18 ? "Can drive" : "Can't drive";
console.log(canDrive);
