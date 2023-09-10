/* Notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistemas de notas em caracteres tipo A,B ou C

* de 90 para cima - A
* entre 80-89 - B
* entre 70-79 - C
* entre 60-69 - D
* menor que 60 - F

*/
console.log("-------------NOTAS ESCOLARES-------------");
function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score >= 0 && score <= 59;
  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Score invalido, digite novamente";
  }
  return scoreFinal;
}

console.log(getScore(100));
console.log(getScore(82));
console.log(getScore(77));
console.log(getScore(61));
console.log(getScore(-1));
console.log(getScore(101));

console.log("-------------GASTO FAMILIARES-------------");

function sum(array) {
  let total = 0;

  for (const value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;
  const itsOK = total >= 0;
  let balanceText = "Negativo";

  if (itsOK) {
    balanceText = "Positivo";
  }

  console.log(`Seu saldo é ${balanceText} : $ ${total.toFixed(2)}`);
}

let family = {
  incomes: [2128.25, 1545.5],
  expenses: [2100, 147.48, 67.45, 139.35, 499.99],
};

calculateBalance();

console.log("-------------CELSIUS EM FAHRENHEIT-------------");
/* Crie uma funcão que receba uma string em celsius ou fahrenheit e faça a transformação de uma undade para outra 

 C = (F-32) * 5/9
 F = C * 9/5 + 32

*/

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  //Fluxo de ERRO
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Tipo de temperatura não encontrado");
  }

  //Fluxo ideal F->C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let signTemperature = "C";

  //Fluxo alternativo C->F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    signTemperature = "F";
  }

  return formula(updatedDegree).toFixed(1) + signTemperature;
}

try {
  console.log(transformDegree("90F"));
  console.log(transformDegree("40C"));
  console.log(transformDegree("30Z"));
} catch (error) {
  console.log(error.message);
}

console.log("-------------BIBLIOTECA-------------");
/* 
	Buscando e contando dados em Array

	Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

	- Contar o numero de categorias e o numero de livros em cada categoria
	- Contar o numero de autores
	- Mostrar livros do autor Augusto Cury 
	- Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros dess autor
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos de uma mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilonia",
        author: "George S. Clason",
      },
      {
        title: "Pai Rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligencia Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (const category of booksByCategory) {
  console.log("Total de livros da categoria: ", category.category);
  console.log("Total de livros da categoria: ", category.books.length);
}

function countAuthors() {
  let authors = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log("Total de autores: ", authors.length);
}

countAuthors();

function booksAugustoCury() {
  let books = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (book.author === "Augusto Cury") {
        books.push(book.title);
      }
    }
  }
  console.log("Livro de Augusto Cury: ", books);
}

booksAugustoCury();

function booksOfAuthor(author) {
  let books = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Livro do ${author}: ${books.join(", ")}`);
}
booksOfAuthor("Augusto Cury");
