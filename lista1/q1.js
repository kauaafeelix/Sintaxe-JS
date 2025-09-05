// 1 - Verificar se um número é positivo, negativo ou zero.


const prompt = require('prompt-sync')();

const numero = prompt("Digite um número: ");

if (numero > 0){
    console.log(numero+ " é POSITIVO!");
}
else if(numero < 0){
    console.log(numero+ " é NEGATIVO!");
}
else{
    console.log(numero+ " é igual a 0");
}

