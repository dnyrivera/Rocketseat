// variáveis e tipos de dados____________________________________________________
var user_name; //declaration
user_name = "Donny"; //assignment
console.log("Valor Variável:", user_name);
console.log("Tipo Variável:", typeof user_name); //Check the type of the variable

// Aggregated Variables _________________________________________________________
let age, isHuman;
age = 18;
isHuman = true;

// Multiples arguments on the function
console.log("Multi Arguments:", user_name, age, isHuman);

// String + variables
console.log(
	"Concatenation Arguments : " + "O " + user_name + " tem " + age + " anos."
);

// Interpolating values
console.log("Template Literals: " + `O ${user_name} tem ${age} anos`);

// Object_______________________________________________________________________
const person = {
	name: "Donny",
	age: 39,
	weight: 103,
	isAdmin: true,
};

console.log(
	"Object Attributes: " +
		`${person.name} tem ${person.age} anos e pesa ${person.weight} kg.`
);

// Arrays ______________________________________________________________________
const animals = ["Lion", "Monkey", "Dog", { name: "Cat", age: 3 }];

// Get values inside the array
console.log("Array Size: ", animals.length); // Size of array
console.log("Printing Array Position: ", animals[3]); // Get any position inside the array
console.log("Priting Array Attribute: ", animals[3].name); //Get the info inside the object
