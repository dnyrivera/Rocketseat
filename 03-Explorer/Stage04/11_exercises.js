/*
  Exercício 01
  Pergunte o nome do usuário e escreva a mensagem: 
  "Olá, [nome do usuário"
*/
// let user_name = prompt("What's your name?");
// alert("Olá, " + user_name);

/*
  Exercício 02
  Solicite 2 números, faça a soma deles e apresente o resultado final
*/
// let numberOne = Number(prompt("First Number: "));
// let numberTwo = Number(prompt("Second Number: "));
// let result = numberOne + numberTwo;
// alert("Total: " + result);

/*
  Execício 03
  Solicite 2 números, faça as operações matemáticas
*/
// function calculator(numberOne, operator, numberTwo) {
// 	let result = 0;

// 	switch (operator) {
// 		case "+":
// 			result = numberOne + numberTwo;
// 			break;

// 		case "-":
// 			result = numberOne - numberTwo;
// 			break;

// 		case "*":
// 			result = numberOne * numberTwo;
// 			break;

// 		case "/":
// 			result = numberOne / numberTwo;
// 			break;

// 		case "%":
// 			result = numberOne % numberTwo;
// 			break;

// 		default:
// 			result = "Wrong operator, choose again! ";
// 	}

// 	return result;
// }

// let number1 = Number(prompt("First Number: "));
// let operator = prompt("Operator: ( + | - | * | / | % )");
// let number2 = Number(prompt("Second Number: "));
// let total = 0;

// total = calculator(number1, operator, number2);
// alert("Result: " + total);

/*
  Exercício 04
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
// function calculateAverage(array) {
// 	let average = 0;

// 	for (let element of array) {
// 		average += element;
// 	}
// 	average /= array.length;

// 	return average.toFixed(2);
// }

// let student_name = prompt("Student Name: ");
// let scores = [];
// let result = 0;

// for (let index = 0; index < 3; index++) {
// 	scores.push(Number(prompt("Score " + (index + 1) + ": ")));
// }

// result = calculateAverage(scores);
// if (result > 6) {
// 	alert(
// 		`Congratulations ${student_name}, you're approved with ${result} points.`
// 	);
// } else {
// 	alert(
// 		`Sorry ${student_name}, you aren't approved, you scores is just ${result} points.`
// 	);
// }

/*
  Exercício 05
  Capture 10 items para compor a lista de um supermercado.
  Após capturar os 10 items, imprima-os, separando por vírgula. 
 */
// let shop_cart = [];

// for (let index = 0; index < 10; index++) {
// 	shop_cart.push(prompt("Product " + (index + 1) + ": "));
// }

// alert(shop_cart);

/*
  ** Jogo da adivinhação **

  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/
// const random_number = () => {
// 	return Math.round(Math.random() * 10);
// };

// let system_number = random_number();
// let user_number = Number(prompt("Choose a number between 0 and 10: "));
// let attempts = 1;

// // console.log(random_number == user_number, random_number, user_number);
// while (user_number != system_number) {
// 	alert(
// 		"The number is wrong, try again (system: " +
// 			system_number +
// 			"| user: " +
// 			user_number +
// 			")"
// 	);
// 	system_number = random_number();
// 	user_number = Number(prompt("Choose again a number between 0 and 10: "));
// 	attempts++;
// }

// if (attempts == 1) {
// 	alert(
// 		`Congratulation the numbers matched!, you discover in ${attempts} attempt`
// 	);
// } else {
// 	alert(
// 		`Congratulation the numbers matched!, you discover in ${attempts} attempts`
// 	);
// }

/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
// let option;
// let items = [];

// while (option != 3) {
// 	option = Number(
// 		prompt(`
//   Hi user!
//   Choose your option:
//     1. Add new item
//     2. Show items
//     3. Exit Program
//   `)
// 	);

// 	if (option == 1) {
// 		items.push(prompt("Insert a New item on the list: "));
// 	} else if (option == 2) {
// 		if (items.length == 0) {
// 			alert("The shop cart is empty");
// 			break;
// 		} else {
// 			alert(items);
// 		}
// 	} else {
// 		alert("Good Bye");
// 		break;
// 	}
// }

/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

// let option;
// let items = [];

// while (option != 3) {
// 	option = Number(
// 		prompt(`
//   Hi user!
//   Choose your option:
//     1. Add new item
//     2. Show items
//     3. Exit Program
//   `)
// 	);
// 	switch (option) {
// 		case 1:
// 			items.push(prompt("Insert a New item on the list: "));
// 			break;
// 		case 2:
// 			if (items.length == 0) {
// 				alert("The shop cart is empty");
// 			} else {
// 				alert(items);
// 			}
// 			break;
// 		case 3:
// 			alert("Good bye!");
// 			break;
// 		default:
// 			alert("Invalid option, try again!");
// 	}
// }

/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos.
*/

// let patients = [
// 	{
// 		name: "Donny",
// 		age: 39,
// 		weight: 104,
// 		height: 175,
// 	},
// 	{
// 		name: "Josany",
// 		age: 38,
// 		weight: 60,
// 		height: 158,
// 	},
// 	{
// 		name: "Nina",
// 		age: 10,
// 		weight: 9,
// 		height: 12,
// 	},
// ];
// let patientsNames = [];

// for (const patient of patients) {
// 	patientsNames.push([
// 		patient.name,
// 		patient.age,
// 		patient.weight,
// 		patient.height,
// 	]);
// }

// console.log("Resultado ", patientsNames[0][0], patientsNames[0][1]);

// for (const patient of patients) {
//   console.log(`The patient ${patient.name} is ${patient.age} years old. Their weight is ${patient.weight} and their height is ${patient.height}.`);
// }

// for (let index = 0; index < patientsNames.length; index++) {
//   const patient = patientsNames[index];
//   alert(`The patient ${patient[0]} is ${patient[1]} years old. Their weight is ${patient[2]} and their height is ${patient[3]}.`);
// }

/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC peso / (altura * altura) 
*/

let patients = [
	{
		name: "Donny",
		age: 39,
		weight: 104,
		height: 175,
	},
	{
		name: "Josany",
		age: 38,
		weight: 60,
		height: 158,
	},
	{
		name: "Nina",
		age: 10,
		weight: 9,
		height: 12,
	},
];

function IMCcalculation(weight, height) {
	return (weight / (height / 100) ** 2).toFixed(2);
}

function printPatientIMC(patient) {
	return `
  Paciente ${patient.name} possui o IMC ${IMCcalculation(
		patient.weight,
		patient.height
	)}
  `;
}

for (const patient of patients) {
	let IMCmessage = printPatientIMC(patient);
	alert(IMCmessage);
}
