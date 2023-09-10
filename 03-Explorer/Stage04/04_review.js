// variáveis e tipos de dados____________________________________________________
var user_name; //declaration
user_name = "Donny"; //assignment
console.log(typeof user_name); //Check the type of the variable

// Aggregated Variables
let age, isHuman;

age = 18;
isHuman = true;

// Multiples arguments on the function
console.log(user_name, age, isHuman);

// String + variables
console.log("O " + user_name + " tem " + age + " anos.");

// Interpolating values
console.log(`O ${user_name} tem ${age} com interpolating values`);

// Object_______________________________________________________________________
const person = {
	name: "Donny",
	age: 39,
	weight: 103,
	isAdmin: true,
};

console.log(
	`${person.name} tem ${person.age} anos e pesa ${person.weight} kg.`
);

// Arrays ______________________________________________________________________
const animals = ["Lion", "Monkey", "Dog", { name: "Cat", age: 3 }];

// Get values inside the array
console.log(animals.length); // Size of array
console.log(animals[3]); // Get any position inside the array
console.log(animals[3].name); //Get the info inside the object
