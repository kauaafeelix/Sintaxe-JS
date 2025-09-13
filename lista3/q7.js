// 7 - Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor
// da compra for menor que R$20,00; caso contrário, o lucro será de 30%. Entrar com
// o valor do produto e imprimir o valor da venda.


const prompt = require('prompt-sync')();
let valorProduto = Number(prompt("Insira o valor do produto: R$"));
function valorVenda(valorProduto) {
    if (valorProduto < 20) {
        let valorComLucro = valorProduto + (valorProduto * 0.45);
        return "O valor de venda do produto é: R$" + valorComLucro;
    }
    else {
        let valorComLucro = valorProduto + (valorProduto * 0.30);
        return "O valor de venda do produto é: R$" + valorComLucro;
    }
}
console.log(valorVenda(valorProduto));