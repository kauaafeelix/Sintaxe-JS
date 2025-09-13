// 3 - Desenvolva um algoritmo que calcule a distância percorrida de um veículo
// conforme os dados informados: Tempo em horas e velocidade média.

const prompt = require('prompt-sync')();
let tempo = Number(prompt("Insira o tempo em horas: "));
let velocidade = Number(prompt("Insira a velocidade média em km/h: "));
function distancia(tempo, velocidade) {
    let distanciaPercorrida = tempo * velocidade;
    return "A distância percorrida é: " + distanciaPercorrida + " km.";
}
console.log(distancia(tempo, velocidade));