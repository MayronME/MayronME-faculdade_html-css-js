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
document.write("O valor da variável teste é " + teste + "<hr>");
teste = 'joao';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global
nome = 'joao';
console.log(nome)

// Formas de declaração de variáveis
var   v1 = 5.25;
let   v2 = null; 
const v3 = 'teste'

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number

console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

body[0].appendChild(listaUl);

document.write("Lista não ordenada criada por JavaScript");

for(var  i=0;i<lista.length;i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}


