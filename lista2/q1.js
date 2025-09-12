// Exercício 1: Crie uma função de declaração chamada adicionar que recebe dois números
// como parâmetros e retorna a soma deles.
const prompt = require('prompt-sync')();


let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira mais um: "));

function adicionar(num1, num2) {
    return num1 + num2;
}

console.log(adicionar(num1, num2));