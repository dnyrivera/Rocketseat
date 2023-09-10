//function scope

let subject = "Create video";

//se passar o parametro ele considera o valor interno
//se não passar ele vai substituir o valor da variavel do let
function createThing() {
  subject = "study";
}
createThing();
console.log(subject);

//function hosting

//Nesse exemplo ocorre a elevação da função
sayMyName();
function sayMyName() {
  console.log("Donny");
}

//Nesse exemplo não ocorre
// sayMyName2();

//let sayMyName2 = function () {console.log("Donny")}
var sayMyName2 = function sayMyName2() {
  console.log("Donny");
};

//arrow functions
const sayMyNameArrow = (parameter) => {
  console.log("Donny Arrow " + parameter);
};
sayMyNameArrow("function test");

//calback function
function sayMyNameCallback(fnct) {
  console.log("antes da callback");
  fnct();
  console.log("depois da callback");
}
sayMyNameCallback(() => {
  console.log("estou em uma callback");
});

/* Function() Constructor
    - expressao new
    - criar novo objeto
    - this keyword
*/
function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " is walking";
  };
}
const donny = new Person("Donny");
const josany = new Person("Josany");
console.log(donny.walk());
console.log(josany.walk());
