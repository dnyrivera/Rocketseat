/* LOOPS 
    for 
    while
    for of 
    for in  
*/

console.log("--------FOR LOOP---------");
console.log("Incremental");
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; //pula a execução do momento
  }
  console.log(i);
}
console.log("Decremental");
for (let j = 20; j > 0; j--) {
  if (j === 13) {
    break; // para o loop e finaliza
  }
  console.log(j);
}

console.log("--------WHILE LOOP---------");
let ind = 0;
while (ind < 10) {
  console.log(ind);
  ind++;
}

console.log("--------FOR OF LOOP---------");
let name = "Donny";
let names = ["rivera", "josany", "nina", "rafael", "carla", "donny"];

for (let char of name) {
  console.log(char);
}

for (let name of names) {
  console.log("Meus amigos são: ", name);
}

console.log("--------FOR IN LOOP---------");
let person = {
  name: "donny",
  age: 39,
  weight: 88.6,
};

for (const property in person) {
  console.log(property);
  console.log(person[property]);
}
