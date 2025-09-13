// 5 - Desenvolva um algoritmo que leia 2 números inteiros e some. Se a soma for
// maior que 10, mostre o resultado da soma.

const prompt = require('prompt-sync')();
let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira mais um: "));
function soma(num1, num2) {
    let resultado = num1 + num2;
    if (resultado > 10) {
        return "A soma dos números é: " + resultado;
    } else {
        return "A soma dos números não é maior que 10.";
    }  
}
console.log(soma(num1, num2));