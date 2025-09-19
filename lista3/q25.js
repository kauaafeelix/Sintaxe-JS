// 25 - Crie uma função chamada "calculadora" que recebe uma string como parâmetro contendo uma
// expressão matemática (ex: "2+3*4") e retorna o resultado dessa expressão.

function calculadora(expressao) {
    try {
        const resultado = eval(expressao);
        return resultado;
    } catch (error) {
        return "Expressão inválida";
    }
}

console.log(calculadora("2+3*4"));