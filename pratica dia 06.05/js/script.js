// adiciona novos abjetos no html
document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");
//debug para javascript
console.log("Esse script está no cabeçalho do HTML");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca
var teste = 1;
//adicionando hr no corpo do aula js com tste da variavel "teste"
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
teste = 'Mayron';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração
nome = 'Mayron';
//imprimindo variavel "nome" no debug
console.log(nome)

// Formas de declaração de variáveis
var v1 = 5.25;
let v2 = null;
const v3 = 'teste'
//verifica o typo das variaveis
console.log(typeof (v1)); //float
console.log(typeof (v2)); //Null
console.log(typeof (v3)); //str
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number
const number = "1";
// Operadores de comparação
console.log(number == 1); //comparação simples
// true
console.log(number === 1); // comparação de tipos
// false

console.log('ele disse "olha o cuzcuz"');

// adicionar uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne', 'macarrão']; //lista
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

//alert("Vamos criar uma lista aqui!");

body[0].appendChild(listaUl);

for (var i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

var obj = {
    nome: "Mayron",
    sobrenome: "Entreportes",
    profissao: "Gamer",
    salario: 1.99,
    pessoaJuridica: false
};

console.log(obj);
console.log("Salario: R$" + obj.salario);

var arr = [5, "JP", true, { teste1: 1, teste2: 2 }, false];
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);

if (arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario < '100000') {
    console.log("Pedinte");
}