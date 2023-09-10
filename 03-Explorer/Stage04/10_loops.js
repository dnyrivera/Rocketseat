// Loops

// For
for (let index = 1; index <= 10; index++) {
	if (index == 5) {
		// break; - stop the loop
		continue; // jump the condition and return to loop
	}
	console.log("For: ", index);
}

// While
let i = 0;
while (i < 10) {
	console.log("While", i);
	i++;
}

// For...of
let name = "Donny";
let names = ["Josany", "Rafael", "Carla"];

for (let char of name) {
	console.log(char);
}

for (let elements of names) {
	console.log(elements);
}

// For...in
let person = {
	name: "John",
	age: 30,
	weight: 88.6,
};

for (const property in person) {
	console.log(property, person[property]);
	//console.log(person["name"])
	//console.log(person.age)
	//console.log(person[property]);
}
