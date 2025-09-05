//5 - Verificar se um ano é bissexto.

let ano = parseInt(prompt("Digite um ano: "));

let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

if (bissexto) {
    console.log( ano+"é um ano bissexto!");
} else {
    console.log(ano+ "não é um ano bissexto!");
}
