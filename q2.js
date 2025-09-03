// 2 - Calcular a média de 3 notas e mostrar a situação do aluno (aprovado, reprovado ou em exame).

const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt ("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7){
    console.log("Média Final: "+media+" | Aprovado!");
}
else if(media >= 4){
    console.log("Média Final: "+media+" | Em exame!");
}
else if (media >= 0){
    console.log("Média Final: "+media+ " | Reprovado!");
}
else{
    console.log("Erro. Reinicie e Tente Novamente!")
}
