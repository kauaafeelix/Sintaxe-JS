// 13 - Escreva uma função que informe o retorno de um investimento (montante) com base nos
// valores do capital inicial, tempo em meses e taxa de juros mensal.
// Use a fórmula: M = C * (1+i)t
// Onde:

// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.


function calcularMontante(capital, taxaJuros, tempoMeses) {
    let montante = capital * Math.pow((1 + taxaJuros / 100), tempoMeses);
    return montante.toFixed(2);
}

const capitalInicial = 1000;
const taxaDeJuros = 5;
const tempoDeInvestimento = 12;
const montanteFinal = calcularMontante(capitalInicial, taxaDeJuros, tempoDeInvestimento);
console.log("O montante final do investimento é: R$ " + montanteFinal);