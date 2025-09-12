// Exercício 14: Crie um objeto "conta" que represente uma conta bancária. Ele deve conter
// propriedades como "saldo" e "titular" e métodos para "depositar", "sacar" e "verSaldo".

const prompt = require('prompt-sync')();

let titular = prompt("Insira o nome do titular da conta: ");
let saldo = 0;
let conta = {
    titular: titular,
    saldo: saldo,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }  
    },
    verSaldo: function() {
        console.log(`O saldo atual é R$${this.saldo}.`);
    }
};
conta.depositar(100);
conta.sacar(30);
conta.verSaldo();
conta.sacar(80);
conta.verSaldo();
conta.depositar(50);
conta.verSaldo();
conta.sacar(150);
conta.depositar(200);
conta.verSaldo();
conta.sacar(50);
conta.verSaldo();
conta.sacar(200);
conta.verSaldo();
conta.depositar(100);
conta.verSaldo();
console.log("Titular da conta:", conta.titular);
console.log("Saldo inicial:", conta.saldo);