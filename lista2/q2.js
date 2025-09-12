// Exercício 2: Crie uma função de expressão chamada subtrair que retorne a diferença entre
// dois números.

const prompt = require('prompt-sync')();
let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira mais um: "));

const subtrair = function(num1, num2) {
    return num1 - num2;
}
console.log(subtrair(num1, num2));