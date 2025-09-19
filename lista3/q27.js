// 27 - Crie uma função chamada "criarMatriz" que recebe o número de linhas e o número de colunas
// como parâmetros e retorna uma matriz com essas dimensões preenchida com números aleatórios.


function criarMatriz(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 100));
        }
        matriz.push(linha);
    }
    return matriz;
}

const linhas = 3;
const colunas = 4;
const matrizAleatoria = criarMatriz(linhas, colunas);
console.log(matrizAleatoria);