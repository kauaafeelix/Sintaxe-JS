// 2 - Desenvolva um algoritmo que receba um valor qualquer e imprima esse valor com
// reajuste de 15%.

const prompt = require('prompt-sync')();
let valor = Number(prompt("Insira um valor: "));
function reajuste(valor) {
    let valorReajustado = valor + (valor * 0.15);
    return "O valor com reajuste de 15% é: R$" + valorReajustado;
}
console.log(reajuste(valor));