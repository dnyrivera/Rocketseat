/*
    Prototype
    * prototype-based language
    * prototype chain
    * __proto__
*/
console.log("Prototype".toUpperCase());
let names = "Donny";
let number = 13.0;
let bool = true;
let array = [];

console.log(names.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(array.__proto__);
console.log("");

/*
    Type conversion (typecasting) vs Type Coercion
    * Alteração de um tipo de dado para outro tipo
*/
console.log("Type Conversion".toUpperCase());
console.log("String to Number Conversion:", Number("9") + 5);
console.log("Number to String Coercion:", "9" + 5);
console.log("");

/*
 * Transformar string em número e vice-versa
 */
console.log("Transform String to Number and Number to String".toUpperCase());
let string = "13071983";
let num = 13071983;

// console.log(Number(string)); // String to number
console.log("Number to String", String(num)); // Number to string
console.log("");

/*
    * Contar quantos caracteres tem uma palavra e quantos
    dígitos tem um número 
*/
console.log("Count caracteres on a String or Number".toUpperCase());
let word = "Donny Rivera Negrão";
let number_one = 1234;
console.log(word.length);
console.log(String(number_one).length); /* quantos dígitos tem um numero */
console.log("");

/*
 * Transformar um número quebrado com 2 casas decimais e trocar ponto pela vírgula
 */
console.log("Round Numbers and Replace Strings".toUpperCase());
let number_two = 29839472.972394;
console.log(`Decimal: ${number_two.toFixed(2).replace(".", ",")}`);
console.log("");

/*
     Transforma letras minúsculas em maiúsculas e vice-versa.
 */
console.log("Convert Strings to Upper and Lower Case".toUpperCase());
let word_two = "Programar é muito bacana!";
console.log(`LowerToUpper: ${word_two.toUpperCase()}`);
console.log(`UpperToLower: ${word_two.toUpperCase().toLowerCase()}`);
console.log("");

/*
    * Separe um texto que contem espaços em um novo array onde cada 
    texto é uma posição do array. Depois transforme o array em um texto
    onde eram espaços substitua por underscore _ 
*/
console.log("Split and Join Arrays Functions".toUpperCase());
let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log("Meu Array:", myArray);
let phraseWithUnderscore = myArray.join("_");
console.log("Underscore: ", phraseWithUnderscore);
console.log("");

/*
 * Verificar se o texto contém uma palavras especifica
 */
console.log("Find a word in a String".toUpperCase());
let phrase_two = "Eu quero viver o amor!";
console.log(phrase_two);
console.log("Search (amor): ", phrase_two.includes("amor"));
console.log("");

/*
 * Criar um array com construtor
 */
console.log("Create a Array using Constructors".toUpperCase());
let myArray2 = new Array("a", "b", "c");
console.log(myArray2);
console.log("");

/*
 * Contar os elementos de um array
 */
console.log("Count Array elements".toUpperCase());
let myArray3 = [
	"a",
	{ type: "array" },
	function () {
		return "function";
	},
];
console.log("Length:", myArray3.length);
console.log("");

/*
 * Transformar cadeia de caracteres em elementos de um array
 */
console.log("Split String in the Array".toUpperCase());
let word_three = "donny rivera";
console.log(Array.from(word_three));
console.log("");

/*
 *  Manipulando Arrays
 */
console.log("Manipulated Arrays (add, remove, etc.".toUpperCase());
let techs = ["html", "css", "js"];
console.log("Original", techs);
// add new item end
techs.push("nodejs");
console.log("Add Nodes: ", techs);
// add new item begin
techs.unshift("sql");
console.log("Add Sql: ", techs);
// remove item end
//techs.pop();
// remove item begin
//techs.shift();
// get some itens
console.log("Slice Array(2,3):", techs.slice(2, techs.length));
// remove 1 or more itens in any position
//console.log(techs.splice(1,2));
console.log("");

console.log("Find the element position in the array".toUpperCase());
let index = techs.indexOf("html");
console.log("Position HTML:", index);
// remove the found element
techs.splice(index, 1);
// print the new array
console.log(techs);
