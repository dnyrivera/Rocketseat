//VARIÁVEIS
// Palavras reservadas para vAriáveis = VAR / LET / CONST
//As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.
console.log(
	"Tipos de Variáveis ----------------------------------------------".toUpperCase()
);
var clima = "Quente";
clima = "Frio";
console.log("Variável VAR:", clima);

let clima2 = "Quente";
clima2 = "Frio";
console.log("Variável LET:", clima2);

//Conteúdo nao pode ser alterado
const clima3 = "Quente";
// clima3 = "Frio";
console.log("Variável CONST:", clima3);

console.log(
	"Tipagem de Variáveis -------------------------------------------".toUpperCase()
);
//Linguagem Fracamente Tipada
console.log("Checar o tipo de variável -> (typeof var)");
let test = 0;
console.log(typeof test);
test = "Donny";
console.log(typeof test);
test = true;
console.log(typeof test);

//SCOPE
//Determina a visibilidade das variáveis em Js
console.log("SCOPE ----------------------------------------------------------");
console.log(
	"var -> global / local  e poderá funcionar fora de um escopo de bloco"
);

console.log("VAR Scope:");
//hoisting -> jogar o valor da variável para um escopo superior
console.log("> existe x antes do bloco? ", x);
{
	var x = 0;
}
console.log("> existe x depois do bloco? ", x);

console.log("LET Scope:");
let y = 1;
{
	//let somente em escopo local, se tiver no escopo superior ele vai substituir o valor
	// const e let são locais e só funcionam no escopo onde foi criada
	y = 0;
	console.log("> existe y depois da declaração? ", y);
}
console.log("> Existe y depois do bloco? ", y);
