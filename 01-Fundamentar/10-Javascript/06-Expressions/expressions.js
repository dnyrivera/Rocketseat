let number = 1;

(function () {
  console.log("alo");
})();

//decrement , increment
console.log(--number, ++number);
//ternary
console.log(true ? "true" : "false");

/* new 
    - left-hand-side expression
    - create a new object
*/
console.log("--------new ---------");
let name = new String("Donny");
name.lastName = "Rivera";
let age = new Number(39);
console.log(name, name.lastName, age);
let date = new Date("2020-12-01");
console.log(date);

/* Unary Operators
    -typeof
    -delete
*/
console.log("--------Unary Operators---------");
const person = {
  name: "Donny",
  age: 39,
};
console.log(typeof "donny");
console.log(person);

//search for the property and delete
delete person.age;
console.log(person);

console.log("--------Arithimetic Operators---------");
console.log("times: ", 3.2 * 3.2);
console.log("division: ", 21 / 3);
console.log("sum: ", 21 + 23);
console.log("minus: ", 21 - 3);
console.log("exponencial: ", 3 ** 3);

let remainder = 11 % 3;
console.log("division remainder: ", remainder);

console.log("--------Increment/Decrement Operators---------");
//increment
let incrementBefore = 0;
let incrementAfter = 0;
console.log("Increment Before: ", ++incrementBefore);
console.log("Increment After: ", incrementAfter++);

//decrement
let decrementBefore = 0;
let decrementAfter = 0;
console.log("Decrement Before: ", --decrementBefore);
console.log("Decrement After: ", decrementAfter--);

console.log("--------Equality Operators---------");
let one = 1;
let two = 2;

// == igual a (conteudo)
console.log(two == 1);
console.log(one == "1");

// === estritamente igual (tipo)
console.log('one === "1"', one === "1");
console.log('one === 1', one === 1);

// != diferente de
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

//estritamente diferente de
console.log(two !== "2");
console.log(two !== 2);

console.log("--------String Operators---------");
console