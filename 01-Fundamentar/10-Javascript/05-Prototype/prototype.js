/* Prototype

    -prototype-based language
    -prototype chain 
    -__proto__
*/
// Chegar os atributos possiveis
"donny".__proto__;

// MANIPULANDO STRINGS_____________________________________________________
/* Type Conversion 

    - Typecasting vs Type Coersion
    - Alteração de um tipo de dado para outro tipo 
*/
console.log(Number("9") + 5);

//Convert numbers and strings
let string = "123";
console.log(Number(string));
let number01 = 123;
console.log(String(number01));

//Count numbers and strings
let word = "Paralelepipedo";
console.log(word.length);
let number02 = 1234234243234235623;
console.log(String(number02).length);

//Transform float numbers and change the point and coma
let number03 = 98798.973298749823;
console.log(number03.toFixed(2).replace(".", ","));

//Convert Uppercase to Lowercase
let words = "Programar é muito bacana!";
console.log(words.toUpperCase().toLowerCase());

//Split a text with spaces in a new array where each text is a new position in the array. Transform the array in text and replace the spaces for underline _

let phrase = "eu vou ser o melhor programador do canada";

// convert string to array splited the position with space
let myArray = phrase.split(" ");
console.log(myArray);

// convert array to string again using underline
let phraseWithUnderline = myArray.join("_");
console.log(phraseWithUnderline);

//check a specific word inside the text
let phrase02 =
  "eu vou ser o melhor programador do canada um dia ainda com isso vou deixar de ser um bosta e vou conseguir um emprego foda ganhando um bom dinheiro aqui igual esse monte de brasileiro que tem aqui";
console.log(phrase02.includes("canada"));

// MANIPULANDO ARRAYS_____________________________________________________

// Create array using constructor
//let myArray02 = ["a", "b", "c", "d", "e", "f"];
let myArray02 = new Array(1, 2, 3); // new Array(10) -> empty x 10
console.log(myArray02);

// Count array elements
console.log(
  [
    1,
    "teste",
    { type: "teste" },
    (teste = function () {
      return "function";
    }),
  ].length
);

// Transform caracteres in array elements
let word02 = "donny.rivera@gmail.com";
console.log(Array.from(word02));

// Add and remove itens from the Array
let techs = ["html", "css", "js"];

techs.push("nodejs"); //add new item on the final of the array
techs.unshift("sql"); //add new item on the begin of the array
techs.pop(); //remove the last item on the array
techs.shift(); //remove the first item on the array
console.log(techs.slice(1, techs.length)); //choose some itens on the array
techs.splice(1, 2); //remove one or more itens on the array

let index = techs.indexOf("html"); //search for a item inside the array
console.log(index);
techs.splice(index, 1); //remove just the item searched above

console.log(techs);
