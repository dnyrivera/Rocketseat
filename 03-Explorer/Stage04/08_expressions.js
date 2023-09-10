/*
 * Expressions and operators
 */

// typeof and delete
const person = {
	name: "Donny",
	age: 39,
};
console.log(person);
console.log(typeof person.name);

//Delete one property inside the object
delete person.age;
console.log(person);

/*
 * Compare Operators
 */

let one = 1;
let two = 2;

// == equality
console.log(two == 1);
console.log(one == "1");

// != distinct
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// === strict equality
console.log(one === "1");
console.log(one === 1);

// !== strick inequality
console.log(two !== "2");
console.log(two !== 2);

/*
 * Conditional Operator (Ternary)
   -> Depend of the conditional we'll receive different values
   -> Condition True, first value else second value
        condition ? value1 : value2 
 */
let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? "Café Top" : "Café Ruim";
console.log(niceBreakfast);

let age = 19;
const canDrive = age >= 18 ? "Can drive" : "Can't drive";
console.log(canDrive);
