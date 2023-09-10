/*
    Prototype
    * prototype-based language
    * prototype chain
    * __proto__
*/

let name = "Donny";
let number = 13.0;
let bool = true;
let array = [];

console.log(name.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(array.__proto__);

/*
    Type conversion (typecasting) vs Type Coercion
    * Alteração de um tipo de dado para outro tipo
*/
console.log("\n9" + 5);
console.log(Number("9") + 5);

/*
 * Transformar string em número e vice-versa
 */

let string = "13071983";
let num = 13071983;

console.log(Number(string)); // String to number
console.log(String(num)); // Number to string

/*
    * Contar quantos caracteres tem uma palavra e quantos
    dígitos tem um número 
*/
let word = "Donny Rivera Negrão";
let number_one = 1234;
console.log(word.length);
console.log(String(number_one).length);

/*
 * Transformar um número quebrado com 2 casas decimais e trocar ponto pela vírgula
 */

let number_two = 29839472.972394;
console.log(`Decimal: ${number_two.toFixed(2).replace(".", ",")}`);

/*
     Transforma letras minúsculas em maiúsculas e vice-versa.
 */

let word_two = "Programar é muito bacana!";
console.log(`LowerToUpper: ${word_two.toUpperCase()}`);
console.log(`UpperToLower: ${word_two.toUpperCase().toLowerCase()}`);

/*
    * Separe um texto que contem espaços em um novo array onde cada 
    texto é uma posição do array. Depois transforme o array em um texto
    onde eram espaços substitua por underscore _ 
*/

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log("Meu Array:", myArray);
let phraseWithUnderscore = myArray.join("_");
console.log("Underscore: ", phraseWithUnderscore);

/*
 * Verificar se o texto contém uma palavras especifica
 */
let phrase_two = "Eu quero viver o amor!";
console.log("Found: ", phrase_two.includes("amor"));

/*
 * Criar um array com construtor
 */
let myArray2 = new Array("a", "b", "c");
console.log(myArray2);

/*
 * Contar os elementos de um array
 */
let myArray3 = [
	"a",
	{ type: "array" },
	function () {
		return "function";
	},
];
console.log("Length:", myArray3.length);

/*
 * Transformar cadeia de caracteres em elementos de um array
 */

let word_three = "donny rivera";
console.log(Array.from(word_three));

/*
 *  Manipulando Arrays
 */

let techs = ["html", "css", "js"];
console.log("Original", techs)
// add new item end
techs.push("nodejs");
console.log("Add Nodes: ",techs)
// add new item begin
techs.unshift("sql");
console.log("Add Sql: ",techs)
// remove item end
//techs.pop();

// remove item begin
//techs.shift();

// get some itens
console.log("Slice Array(2,3):", techs.slice(2,techs.length));

// remove 1 or more itens in any position
//console.log(techs.splice(1,2));

// find the element position in the array
let index = techs.indexOf("html");
console.log("Position HTML:",index)
// remove the found element 
techs.splice(index,1)
// print the new array 
console.log(techs)


console.log(Number("10") + 5 )