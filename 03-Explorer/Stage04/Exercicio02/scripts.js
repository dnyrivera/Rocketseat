function addNewStudent(student) {
	students.push(student);
}

function calculateScores(students) {
	for (const student of students) {
		let average = (student.firstTest + student.secondTest) / 2;
		if (average >= 7) {
			alert(`
            Congratulations ${student.name}!.
            You are approved in the test.
            Your score is ${average}`);
		} else {
			alert(`
            Sorry ${student.name}!.
            You aren't approved in the test.
            Your score is ${average}`);
		}
	}
}

let option;
let students = [];

while (option != 3) {
	option = Number(
		prompt(`
        Hi ! 
        Choose your option below: 
        1. Add new Student
        2. Calculate Scores
        3. Exit Program
        `)
	);

	if (option == 1) {
		let name = prompt("Student Name: ");
		let firstTest = Number(prompt("Score First Test: "));
		let secondTest = Number(prompt("Score Second Test: "));

		let student = {
			name: name,
			firstTest: firstTest,
			secondTest: secondTest,
		};
		addNewStudent(student);
	} else if (option == 2) {
		calculateScores(students);
	} else {
		alert("Good Bye");
		console.log(students);
		break;
	}
}
