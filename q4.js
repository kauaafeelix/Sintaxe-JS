//4 - Calcular o fatorial de um número.

const prompt = require('prompt-sync')();

const numero = Number (prompt("Digite um número: "));

if (numero > 0) {
    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    console.log("O fatorial de "+numero+ " é: "+resultado);
} else {
    console.log("Digite um número maior que 0.");
}