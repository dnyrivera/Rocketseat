// 1. Declare uma variavel de nome weight
let weight

// 2. Que tipo de dado é a variavel acima ? 
console.log(typeof weight)

/* 3.Declare uma variavel e atribua valores para cada um dos dados:
    * name = String
    * age = Number (integer)
    * stars = Number (float)
    * isSubscribed = Boolean
*/  
let name = "Donny"
let age = 39
let stars = 4.5
let isSubscribed = true

/* 4. A variavel student abaixo é de que tipo de dados? 

   4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3
   4.2 Mostre no console a seguinte mensagem: 
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name>, <age> e <weight> pelos valores de cada
        propriedade do objeto
*/
let student = {
    name: "Donny", 
    age: 39,
    weight: 94.5,
    isSubscribed: true
};
// console.log(student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja somente um array vazio*/
let students = []
console.log(typeof students)

/* 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array */
students = [
    student
]
console.log(students)

/* 7. Coloque no console o valor da posicao 0 do array acima */
console.log(students[0])

/* 8. Crie um novo student e coloque na posição 1 do array students */
const Josany = {
    
    name: "Josany", 
    age: 38,
    weight: 64.5,
    isSubscribed: true
}
students[1] = Josany
console.log(students[1])

/* 9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Após a sua resposta rode o codigo e veja se vc accertou 
*/
console.log(a) //var é global , ele sabe que foi criado por isso undefined
var a = 1 
console.log(a) //depois de var receber o valor 1 ele será mostrado 