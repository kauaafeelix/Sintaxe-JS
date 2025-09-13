// 8 - Desenvolva um algoritmo que leia a idade de uma pessoa e informe a sua classe eleitoral.

const prompt = require('prompt-sync')();
let idade = Number(prompt("Insira sua idade: "));
function classeEleitoral(idade) {
    if (idade < 16) {
        return "Não eleitor";
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        return "Eleitor facultativo";
    } else {
        return "Eleitor obrigatório";
    }   
}
console.log(classeEleitoral(idade));