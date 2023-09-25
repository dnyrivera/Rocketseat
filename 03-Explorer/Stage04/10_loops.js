// Loops

// For
console.log("For Loop".toUpperCase());
for (let index = 1; index <= 10; index++) {
	if (index == 5) {
		// break; - stop the loop
		continue; // jump the condition and return to loop
	}
	console.log("For: ", index);
}
console.log("");

// While
console.log("While Loop".toUpperCase());
let i = 0;
while (i < 10) {
	console.log("While:", i);
	i++;
}
console.log("");

// For...of
console.log("For of <Arrays>".toUpperCase());
let full_name = "Donny";
let names = ["Josany", "Rafael", "Carla"];

for (let char of full_name) {
	console.log("Char:", char);
}

for (let elements of names) {
	console.log("Array:", elements);
}
console.log("");

// For...in
console.log("For in <Objects>".toUpperCase());
let person = {
	name: "John",
	age: 30,
	weight: 88.6,
};

for (const property in person) {
	console.log("Completo:", property, person[property]);
}
console.log("");

for (const property in person) {
	console.log("Somente Valores do Objeto:", person[property]);
}
console.log("");

for (const property in person) {
	console.log("Somente 1 Atributo:", person.age);
}
