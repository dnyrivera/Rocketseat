// 1. Declare uma variável de nome weight
let weight;
// 2. Que tipo de dado é a variável acima ?
console.log(typeof weight);
/*
   3. Declare uma variável e atribua valores para cada 
   um dos dados: 
    * name: String
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: Boolean
*/
let name = "Donny";
let age = 39;
let stars = 4.7;
let isSubscribed = true;

// 4. A variável student abaixo é de que tipo de dados ?
let student = {};
console.log(typeof student);

// 4.1 Atribua a ela as mesmas propriedades e valores anterior

student = {
	name: "Donny",
	age: 39,
	weight: 103.7,
	isSubscribed: true,
};
console.log(student);
/* 
   4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg. 

    Atenção, substitua <name> , <age> e <weight> pelos valores
    de cada propriedade do objeto
 */
console.log(
	`${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor

let classroom = [];

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4 
    (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

classroom = [student];
//classroom.push(student);

//  7. Coloque no console o valor da posição zero do array acima
console.log("Classroom : ", classroom);

//  8. Crie um novo student e coloque na posição 1 do array classroom
const josany = {
	name: "Josany",
	age: 38,
	weight: 64,
	isSubscribed: true,
};

classroom = [student, josany]; //Add um novo estudante
// classroom[1] = josany  recebe direto na posição 1
console.log("New Classroom: ", classroom);

/*
    9. Responda qual o resultado abaixo e por que ? Após a resposta rode o código e veja se acertou
*/

//undefined because the hosting
// var a ;
console.log("Valor de a :", a);
var a = 1;

//reference error
//b does't exists
console.log(b);
let b = 1;
