// Tipo de Dados

// String utilizando aspas duplas e simples
console.log("Donny 'Rivera'");
console.log('Donny "Rivera"');

// utilizando crases para múltiplas linhas
// interpolação (template strings)
console.log(`Donny
Rivera 
Negrão ${1 + 1}`);

//Números
console.log(`Integer: ${33 + 12}`); //inteiros
console.log(`Float: ${12.5 / 4}`); //float
console.log(`Nan: ${33 / "asdf"}`); //NaN - Não pode dividir numero por string
console.log(`Infinity: ${12.5 === Infinity}`); //infinito - Compara com o infinito se é verdadeiro ou falso

//Boolean
//True or False
console.log("True: ", true);
console.log("False: ", false);

//Undefined and Null
//undefined = indefinido
//null =[ nulo, objeto não possui nada, diferente de indefinido]
console.log("Undefined: ", undefined);
console.log("Null: ", null);

//Objeto
/* O tipo de dado Object é estrutural, contendo : 
     atributos ou propriedades, 
     métodos, ou funcionalidades. 
     
     Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor. 
        Por exemplo { nome: "João", idade: 20 }. 
*/
console.log("Objetos:")
console.log({
	name: "Donny",
	idade: 39,
	andar: function () {
		console.log("andar");
	},
});

console.log("Array:")
//Array
/* O tipo de dados Array, ou vetor, também é estrutural : 
    consiste em uma lista de dados agrupados, 
    Array é denotado com os caracteres [ ] , 
        por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] . 
*/
console.log(["Donny", 39, "Leites", "Ovos", 13, "0"+7, 1983]);
