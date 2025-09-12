// Exercício 3: Crie uma arrow function que retorna o produto de dois números.

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira mais um: "));

const produto = (num1, num2) => {
    return num1 * num2;
}
console.log(produto(num1, num2));
