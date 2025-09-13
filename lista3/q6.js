// 6 - Desenvolva um algoritmo que solicite salário e prestação. Se a prestação for
// maior que 20% do salário, imprimir: Empréstimo não pode ser concedido.
// Senão imprimir: Empréstimo pode ser concedido.

const prompt = require('prompt-sync')();
let salario = Number(prompt("Insira o valor do seu salário: R$"));
let prestacao = Number(prompt("Insira o valor da prestação: R$"));
function emprestimo(salario, prestacao) {
    if (prestacao > (salario * 0.2)) {
        return "Empréstimo não pode ser concedido.";
    }
    else {
        return "Empréstimo pode ser concedido.";
    }
}
console.log(emprestimo(salario, prestacao));
