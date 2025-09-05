// 12 - Exiba no console a sequência de números de 1 a 5 em uma única linha no formato "1-2-3-4-5".

let resultado = "";

for(let i = 1; i<=5; i++){
    resultado += i;

    if(i < 5){
        resultado += "-";
    }
}
console.log (resultado);