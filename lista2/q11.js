// Exercício 11: Crie um objeto chamado carro com propriedades: marca, modelo e ano.
// Acesse a propriedade marca do objeto carro.
// Altere a propriedade ano do objeto carro para 2025.
// Adicione um método ao objeto carro chamado getIdade que retorne quantos anos o carro
// tem (ano atual - ano do carro).
// Adicione um método ao objeto carro chamado getDescricao que retorne uma string
// contendo todas as informações do carro.

const prompt = require('prompt-sync')();

let marca = prompt("Insira a marca do carro: ");
let modelo = prompt("Insira o modelo do carro: ");
let ano = Number(prompt("Insira o ano do carro: "));
let anoAtual = new Date().getFullYear();

let carro = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    getIdade: function() {
        return anoAtual - this.ano;
    },
    getDescricao: function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
} 
console.log("Marca do carro:", carro.marca);
carro.ano = 2025;
console.log("Ano atualizado do carro:", carro.ano);
console.log("Idade do carro:", carro.getIdade(), "anos");
console.log("Descrição do carro:", carro.getDescricao());