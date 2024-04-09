/*
console.log(typeof 5);
console.log(typeof 5.2);
console.log(typeof -5);
console.log(typeof 'hello world');
console.log(typeof [2, 3, 4]);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3);
console.log(4 % 2);

// OPERAÇÕES BÁSICAS COM STRINGS

// Concatenação
console.log('hello' + ' world' + ' satc');

// Interpolação
console.log(`A soma de 2 + 2 é igual a ${2 + 2}`);

// Comparações
console.log(2 == 2);
console.log(2 == '2');
console.log(2 === '2');
console.log(3 != 3);
console.log(3 != '3');
console.log(3 !== '3');
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);
console.log(3 > 2 && 2 > 1);
console.log(3 > 2 && 2 < 1);
console.log(3 > 2 || 2 < 1);
console.log(3 < 2 || 2 < 1);
console.log(!true);
console.log(!false);
*/

// DECLARAÇÕES DE VARIÁVEIS

//Declaração Simples
var a = 2;
let b = 3;
const c = 4;

if (true) {
  //console.log(a);
  //console.log(b);
  //console.log(c);

  var d = 5;
  let e = 6;
  const f = 7;
}
//console.log(d);

// Declaração Múltipla
const g = 1,
  h = 4,
  i = 7;
//console.log(g, h, i);

// LAÇOS DE CONDIÇÃO
// If e Else
const user = "João";
if (user === "João") {
  //console.log('Usuário Identificado');
} else {
  //console.log('Usuário Inexistente');
}

// Operador Ternário (Equivalente ao IF e ELSE)
//false ? console.log('Usuário Identificado') : console.log('Usuário Inexistente');

// Switch Case
const curso = "ECP";
switch (curso) {
  case "ECP":
    //console.log('Engenharia da Computação');
    break;

  case "ESW":
    //console.log('Engenharia de Software');
    break;

  case "EM":
    //console.log('Engenharia Mecânica');
    break;

  case "EE":
    //console.log('Engenharia Elétrica');
    break;

  default:
  //console.log('Curso Inexistente');
}

// LAÇOS DE REPETIÇÃO
let j = 0;
while (j < 10) {
  //console.log('Índice: ', j);
  j++;
}

let k = 0;
do {
  //console.log('Índice: ', k);
  k++;
} while (k < 10);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  //console.log('Índice: ', i);
}

// FUNÇÕES
function defineParOuImpar(numero) {
  if (numero % 2 === 0) {
    //console.log(`${numero} é par`);
  } else {
    //console.log(`${numero} é ímpar`);
  }
}
defineParOuImpar(8);

function defineParOuImpar2(numero) {
  //numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é ímpar`);
}
defineParOuImpar2(17);

const defineParOuImpar3 = (numero) => {
  //numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é ímpar`);
};
defineParOuImpar3(22);

// ARRAYS
const nomes = ["João", "Maria", "Tiziu"];
//console.log(nomes);
//console.log(nomes[0]);
//console.log(nomes.length);
//nomes[0] = 'Pedro';
//console.log(nomes);

// Métodos
nomes.push("Ana");
nomes.unshift("Tairine");
//nomes.pop();
//nomes.shift();
//console.log(nomes);

const filteredNames = nomes.filter((nome) => nome.length >= 5); // Retorna um array
//console.log(filteredNames);

const foundName = nomes.find((nome) => nome.length == 5); // Retorna o valor do primeiro que encontrar
//console.log(foundName);

const foundIndex = nomes.findIndex((nome) => nome.length == 5); // Retorna o índice do primeiro que encontrar
//console.log(foundIndex);

//const slicedNames = nomes.slice(2, 4);
const slicedNames = nomes.slice(2);
//console.log(slicedNames);

// Percorrendo um array
for (let i = 0; i < nomes.length; i++) {
  //console.log(nomes[i]);
}

for (let nome of nomes) {
  //console.log(nome);
}

//nomes.forEach((nome) => console.log(nome));
//nomes.map((nome) => console.log(nome));

let numeros = [1, 2, 3];
const mappedNumbers = numeros.map((numero) => numero * 2);
//console.log(mappedNumbers);

// OBJETOS
// Forma Literal
const aluno = {
  nome: "João Paulo Nunes Martins",
  matricula: 202211403,
  email: "joao.452113@alunosatc.edu.br",
  infos: function () {
    console.log(`Nome: ${this.nome}\nMatricula: ${this.matricula}`);
  },
};
//console.log(aluno.nome);

aluno.idade = "20";
console.log(aluno);
