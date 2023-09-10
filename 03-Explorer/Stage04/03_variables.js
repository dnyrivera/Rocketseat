//VARIÁVEIS
//As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

var clima = "Quente";
clima = "Frio";
console.log(clima);

let clima2 = "Quente";
clima2 = "Frio";
console.log(clima2);

//Conteúdo nao pode ser alterado
// const clima3 = "Quente";
// clima3 = "Frio";
// console.log(clima3);

//Linguagem Fracamente Tipada
//Checar o tipo de variável -> (typeof var)
let test = 0;
console.log(typeof test);
test = "Donny";
console.log(typeof test);
test = true;
console.log(typeof test);

//SCOPE
//Determina a visibilidade das variáveis em Js

// var -> global / local  e poderá funcionar fora de um escopo de bloco
//hoisting -> jogar o valor da variável para um escopo superior
console.log("> existe x antes do bloco? ", x);
{
	var x = 0;
}
console.log("> existe x depois do bloco? ", x);

let y = 1;
{
	//let somente em escopo local, se tiver no escopo superior ele vai substituir o valor
	y = 0;
	console.log("> existe y depois da declaração? ", y);
}
console.log("> Existe y depois do bloco? ", y);
