/*console.log(typeof 5)
console.log(typeof "hello world")
console.log(5 + 5)
console.log(5 - 5)
console.log(5 * 5)
console.log(5 / 5)
console.log(4 % 2)
console.log('hello' + ' world' + ' na' + ' SATC')
console.log(`A soma de 2 + 2 = ${2 + 2}`)
console.log(5 > 2)
console.log(5 < 2)
console.log(2 == '2')
console.log(2 === '2') //estritamente igual
console.log(3 != 3)
console.log(3 !== '3') //estritamente diferente
console.log(3 > 2 && 2 > 1)
console.log(3 > 2 || 2 < 1)
console.log(!true)
console.log(!false)*/

//Declarações de variáveis
/*var nome = "João Paulo"
console.log(nome);*/

/*if (true) {
    var a = 2
    let b = 3 //Não pode ser acessada fora desse bloco
    const c = 5 //Não pode ser acessada fora desse bloco
}
console.log(a)

//Declaração múltipla
const g = 1, h = 4, i = 7
console.log(g, h, i)*/

/*//IF Else
const user = 'João Paulo'
if (user === 'João Paulo') {
    console.log('Usuário autenticado!')
} else {
    console.log('Usuário não autenticado!')
}

//Operador ternário
user === "João Paulo" ? console.log('Usuário autenticado!') : console.log('Usuário inexistente!');

const curso = 'ENC'
switch(curso){
    case 'ENC':
        console.log('Engenharia da Computação')
        break;
    case 'ESW':
        console.log('Engenharia de Software')
        break;
    case 'EMC':
        console.log('Engenharia Mecatrônica')
        break;
}

let j = 0
while(j <= 10){
    console.log('indice: ', j)
    j++
}

let k = 0
do {
    console.log('indice: ', k)
} while (k < 10)

for (let i = 0; i < 10; i++) {
    console.log('indice: ', i)
}

for (let i = 0; i < 10; i++) {
   if (i === 5) {
    break;
   } 
   console.log('indice: ', i)
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
     continue;
    } 
    console.log('indice: ', i)
 }

 //Funções

 //metodo 1 (método que dá pra melhorar com ternário)
 function defineParOuImpar(numero){
    if (numero % 2 == 0) {
        console.log(`${numero} é par!`);
    } else {
        console.log(`${numero} é impar!`);
    }
 }

function defineParOuImpar2(numero) {
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é impar!`)
 }
defineParOuImpar2(7);

const defineParOuImpar3 = (numero) => {
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é impar!`)
 }
defineParOuImpar3(9);*/

/*//Array
const nomes = ['João', 'Paulo', 'Martins']
console.log(nomes)
console.log(length.nomes)
console.log(typeof nomes)
console.log(nomes[0])
nomes[0] = 'Pedro'
console.log(nomes[0])

//Métodos
nomes.push('Ana') //insere no final
nomes.unshift('Tairine') //Insere no início
nomes.pop() //Remove no final
nomes.shift() //Remove do início
console.log(nomes)

const filteredNames = nomes.filter((nome) => nome.length >= 5) //retorna um array
console.log(filteredNames)

const foundNames = nomes.find((nome) => nome.length >= 5) //retorna o primeiro que encontrar
console.log(foundNames)

const foundItens = nomes.foundItens((nome) => nome.length == 5) //Retorna o indice do primeiro que encontrar
console.log(foundItens)

const sliceNames = nomes.slice(2, 4)
console.log(sliceNames)

//Percorrendo um Array
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

for(nome of nomes) {
    console.log(nome)
}

nomes.forEach((nome) => console.log(nome))
nomes.map((nome) => console.log(nome))

let numeros = [1, 2, 3]
const mappedNumbers = numeros.map((numero) => numero * 2)
console.log(mappedNumbers)*/

//Objetos
//Forma literal
const aluno = {
    nome: 'João Paulo',
    matricula: '123456',
    email: 'joao@email.com',
    infos: function(){ //Função anônima
        console.log(`Nome: ${this.nome}\nMatricula: ${this.matricula}\nEmail: ${this.email}`)
    }
}

console.log(aluno)
console.log(aluno.nome)