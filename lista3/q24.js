// 24 - Crie uma função chamada "gerarNumeroAleatorio" que recebe um número mínimo e um número
// máximo como parâmetros e retorna um número aleatório entre esses dois números.

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gerarNumeroAleatorio(1, 10));